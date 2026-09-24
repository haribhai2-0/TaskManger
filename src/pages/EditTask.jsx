import { useForm } from "react-hook-form";
import Header from "../Components/Header";
import Input from "../Components/ui/input";
import Button from "../Components/Button";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useLocation, useNavigate } from "react-router-dom";

function EditTask(){

      const {state} = useLocation();
    const {register,handleSubmit}=useForm(
        {
            defaultValues:state
        }
    );

    const {updateTask} = useContext(TaskContext);
           const navigate=useNavigate();
          
           
    
   function handleData(data){
    
    console.log(data);
     updateTask(state.id,data);
   navigate("/all-task");
         
   }

    return(
        <div >
              <Header/> 
            <form  onSubmit={handleSubmit(handleData)}
            className="max-w-lg mx-auto  h-screen    flex flex-col "
            >
                <Input 
                 label={"title"}
                 type="text"
                 placeholder="Enter Your Title"
                 register={register}
                 
                />

                 <Input 
                 label={"description"}
                 type="text"
                 placeholder="Enter Your Task  Description"
                 register={register}
                 
                />
                <label htmlFor="" className="font-semibold  capitalize ">Task Status</label>
                <select  {...register("status")} className="px-3 py-2 border border-gray-300 rounded my-1">
                    <option >Task Status</option>
                    <option value="todo">TO Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                     <label htmlFor="" className="font-semibold  capitalize ">Task Priority</label>
                 <select {...register("priority")} className="px-3 py-2 border border-gray-300 rounded my-1">
                    <option >Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="heigh">Heigh</option>
                </select>
                 <Button text="Add Task" type="submit"  />
                

                

            </form>
        </div>
    )
}
export default EditTask;