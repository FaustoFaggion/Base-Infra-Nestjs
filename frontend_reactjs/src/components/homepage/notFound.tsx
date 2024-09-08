import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="col-5 gap-2"> 
            <p>404 Not Found Customized</p>
            <Link to="/">Home</Link>
        </div>
        
    )
}

export default NotFound;