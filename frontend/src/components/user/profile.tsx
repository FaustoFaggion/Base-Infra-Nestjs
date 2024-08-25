import { useContext } from "react";
import { UseAppContext } from "../../context/hook";

const Profile = () => {

    const {state} = UseAppContext();

    return (
        <h1>Hello {state.userInfo.email}</h1>
    )
    
}

export default Profile;