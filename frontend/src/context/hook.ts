import { useContext } from "react"
import { AppContext } from "."

export const UseAppContext = () => {

    const context = useContext(AppContext);

    return context;
}