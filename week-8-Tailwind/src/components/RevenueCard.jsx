
export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className='bg-grey rounded shadow-md p-4'>
        <div className="text-blue-700">
            {title ?
                <div>
                    {title}
                </div>
                : <div> No title was sent</div>}
        </div>

        <div className='flex justify-between'>
            <div>
                rupees {amount}
            </div>
            {orderCount ?
                <div className='flex'>
                    <div className='text-blue-400'>
                        {orderCount}order(s)
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div> : null}
        </div>
    </div>
}