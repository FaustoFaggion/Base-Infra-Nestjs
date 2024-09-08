import { useContext } from "react"
import { AppContext } from "."

export const UseAppContext = () => {

    const context = useContext(AppContext);

    if (context === undefined) {
         new Error("UseAppContext must be used with a AppContext")
    }

    return context;
}