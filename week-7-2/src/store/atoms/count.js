import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    // by definition its dereived so we have
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(countAtom);
        return (count % 2) == 0;
    }
});
export const evenSelector2 = selector({
    // by definition its dereived so we have
    key: "evenSelector",
    get: (props) => {
        const count = props.get(countAtom);
        return (count % 2) == 0;
    }
});

// Todo creation application with filtering logic
// todos, filter