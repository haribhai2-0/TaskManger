import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button.jsx";
import Header from "../Components/Header.jsx";

import Input from "../Components/ui/input.jsx"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/auth.Context.jsx";
function Login(){

    const {register,handleSubmit}=useForm()
    const {user,setUser}=useContext(AuthContext)
     const tonavigate = useNavigate();
    function handleData(data){
        console.log(data);
          setUser(data);
          tonavigate("/");
    }
    return (
        <div className="max-w-lg mx-auto  h-screen  flex flex-col 
        justify-center  ">
        <h1 className="font-bold text-xl ">Login to your account </h1>
        <form onSubmit={handleSubmit(handleData)}>
           
            <Input register={register}  label={"email"} type="email" placeholder="Enter your Email" />
            <Input register={register} label={"password"} type="Password" placeholder="Enter your Password" />
            <Button  type="Submit" />
                
        </form>
         <Link to="/" className="text-sm text-blue-400">GO to Home</Link>
         
       
        </div>
    )
}


export default Login;