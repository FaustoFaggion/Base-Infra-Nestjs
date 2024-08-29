import { useContext } from "react";
import { UseAppContext } from "../../../context/hook";
import './profile.css'

const Profile = () => {

    const {userContext} = UseAppContext();

    return (
        
        <div className="row g-0 align-items-center justify-content-center vh-100">
            <div className="col-10 row g0 border rounded-3">
                <div className="col-6">
                    <div className="text- mb2">
                        <img src="" alt="profile for user" className="profile-image mb-1" />
                        <h6>{userContext.email}</h6>
                    </div>
                    <div className="row g-0 justify-content-center my-4 px-3">
                        <input type="file"  className="d-none" id="file-input" onChange={(e)=>{console.log(e)}} />
                        <label htmlFor="file-input" className="profile-img-action-btn col-4 p-1 text-center"> Update </label>
                        <button className="profile-img-action-btn col-4 offset-1 p-1 text-center">Delete</button>
                    </div>
                    <div className="border-top p-3">
                        <h5 className="mb-2">Accounting Setting</h5>
                        <div className="mt-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Profile;