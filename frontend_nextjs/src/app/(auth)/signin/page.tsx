"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
    
    const router = useRouter();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignin = async () => {
        const data = {
            "email": email,
            "password": password,
        };

        try {
           router.push('../users/profile')
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
                        Forgot Password? <Link href='/signup' className="ms-3">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )

}