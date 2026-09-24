import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.Context";
import Button from "../Components/Button";



function Header(){

    const {user,setUser}=useContext(AuthContext);

    function logout(){
        console.log("successfully Logout")
        setUser(null);
    }
    
    return(
        <div className="px-5 py-3  flex items-center justify-between">
            
             <h1 className="text-black font-semibold">TASK MANAGER</h1>
             {
                user &&(
                    <nav className="flex gap-4 items-center">
                    <Link to="/" >Home</Link>
                    <Link to="/all-task">AllTask</Link>
                    <Link to="/add-task">AddTask</Link>
                    <Button type="button" text="Logout" onClick={logout} />
                    </nav>
                )
             }

            { !user &&(<Link to="/login" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold   ">Login</Link>)

            }
            
             

        </div>
       
    )
}
export default Header;