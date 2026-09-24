import { useContext } from "react";
import Button from "./Button";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

  function Card({data}){

      const navigate = useNavigate()

        const {deleteTask} = useContext(TaskContext);

            function handleDelete(){
              deleteTask(data.id);
           }
           

    return(
         <article className="bg-zinc-400 pd-4 rounded-md flex flex-col gap-1 items-center " >
                <h1 className="text-sm text-red-400">{data.priority}</h1>
                 <p className="font-semibold text-xl">{data.title}</p>
                 <p className=" text-sm font-bold">{data.description}</p>
                 <p className=" text-xs bg-green-300 w-fit font-semibold px-4 py-2 rounded-4xl">{data.status}</p>
                 <div className="grid grid-cols-2 gap-3 mt-4 " >
                   <Button    type="button" text="Delete" onClick={handleDelete} />
                   <Button type="button" text="Edit" onClick={()=>navigate("/edit-task", {state:data})} />
                 </div>
                
                 

              </article>
    )
  }

  export default Card;