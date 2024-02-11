// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;
    console.log(req.userId)

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);
    console.log("here233")

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    console.log("here2")
    const toAccount = await Account.findOne({ userId: to }).session(session);
    console.log("here3")
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer


    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
    console.log("here4")
    // Commit the transaction
    await session.commitTransaction();
    console.log("here45")
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;