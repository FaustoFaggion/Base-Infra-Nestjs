import Link from 'next/link';

export default function Signup() {
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
                            // value={email}
                            // onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="form-control"
                            // value={password} 
                            // onChange={handlePasswordChange}    
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" type="button" /*onClick={handleSignup}*/>Sign Up</button>
                    </div>
                    <p className="text-end mt-2">
                        Already Registered? <Link href='/signin' className="ms-3">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}