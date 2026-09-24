import { useContext } from "react";
import Header from "../Components/Header";
import { TaskContext } from "../context/TaskContext";
import Card from "../Components/Card";

function AllTask(){

           const {tasks}=useContext(TaskContext)
           console.log(tasks);

         

      return(
        <div>
            <Header/>
            <h1 className="p-4 font-bold text-xl">AllTask</h1>
            <section className="grid grid-cols-3 gap-4 pd-4">
              {
                tasks.map(function(val,idx,arr){
                  return  <Card  key={idx} data={val}  />
                  
                })
              }
             
            </section>
        </div>
      )
}

export default AllTask;