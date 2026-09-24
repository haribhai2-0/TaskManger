function Button({type,text="Login",onClick}){
    return (
        <button 
        type={type} 
         onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded">
           
        {text}</button>
    )
}

export default Button;