import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({ get }) => {
      await new Promise(r => setTimeout(r, 5000));
      if (id === 0) {
        throw new Error("Backend request was stopped Id is 0")
        //return Error
      } else {
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
      }
    },
  })
});