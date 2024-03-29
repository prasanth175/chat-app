import React from "react";
import { createContext, useContextSelector } from "use-context-selector";



const CurrentRoomContext = createContext();

function CurrentRoomProvider({ children, data }) {
    return (
        <CurrentRoomContext.Provider value={data}>
            {children}
        </CurrentRoomContext.Provider>
    )
}

export default CurrentRoomProvider;

export const useCurrentRoom = (selector) => useContextSelector(CurrentRoomContext, selector);
