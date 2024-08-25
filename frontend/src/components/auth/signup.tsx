import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../services/api";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        const data = {
            "email": email,
            "password": password,
        };

        try {
            const response = await API.post('/auth/signup', data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("response: ", response);          
            navigate('/signin');
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Something went wrong signing up");
        }
    }

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // if (mutation.type === 'childList') {
                    // Handle changes in the DOM if needed
                    console.log('DOM changed:', mutation);
                // }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="form-control"
                            value={password} 
                            onChange={handlePasswordChange}    
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" type="button" onClick={handleSignup}>Sign Up</button>
                    </div>
                    <p className="text-end mt-2">
                        Already Registered? <Link to='/signin' className="ms-3">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
