function Input({label,type,placeholder,register}){
    return(
        <div  className="flex flex-col gap-1 my-2     ">
             
             <label className="font-semibold capitalize  " htmlFor="">{label}</label>
             <input 
             className=" px-3 py-2 border   border-gray-300 rounded" 
             type={type} 
             placeholder={placeholder} 
             {...register(label)}
             
               />

        </div>
    )
}

export default Input;