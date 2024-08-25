import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../services/api";
import Cookies from "universal-cookie";
import { UseAppContext } from "../../context/hook";

const cookies = new Cookies();

const Signin = () => {

    const {state} = UseAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        const data = {
            "email": email,
            "password": password,
        };

        try {
            const response = await API.post('/auth/signin', data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            await handleCookiesAndContext(response);
            navigate('/profile');
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Something went wrong signing up");
        }
    }

    const handleCookiesAndContext = async (response: any) => {
        
        cookies.set('tkn', response.data.access_token, {sameSite: 'strict', expires: new Date(new Date().getTime() + 10000)});
        cookies.set('user_email', response.data.email, {sameSite: 'strict'});
        state.userInfo.id = response.data.id
        state.userInfo.email = response.data.email;
        state.userInfo.first_name = response.data.first_name;
        state.userInfo.last_name = response.data.last_name;
        console.log("user: ", state.userInfo);          
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
        <div className="signin template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign In</h3>
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
                        <button className="btn btn-primary" type="button" onClick={handleSignin}>Sign In</button>
                    </div>
                    <p className="text-end mt-2">
                        Forgot Password? <Link to='/signup' className="ms-3">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signin;
