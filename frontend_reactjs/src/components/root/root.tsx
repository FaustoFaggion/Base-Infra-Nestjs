import React from "react";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../../context/provider";

const Root = () => {

    return (
        <div>
            <AppContextProvider>
                <Outlet />
            </AppContextProvider>
        </div>
    )

}

export default Root;