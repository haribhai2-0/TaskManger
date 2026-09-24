import { createContext,useState } from "react"

            export const TaskContext = createContext()


function TaskStore({children}){

              const [tasks,setTasks] = useState([])

                function addTask(task){
                    let newTask={
                        id:Math.floor(Math.random()*1000),
                        ...task
                    }
                     

                     setTasks([...tasks ,newTask]);
            
                     
            
        };

         function deleteTask(id){
                        let  newTasks = tasks.filter(function(val){
                        return val.id!=id;
                       })
                     
                     setTasks(newTasks);
                    };
        function updateTask(id,update){
            let UpdateTasks = tasks.map(function(val){
                if(val.id==id){
                   return {
                      ...val,
                       title:update.title,
                    description:update.description,
                    priority:update.priority,
                    status:update.status
                   }
                }
                return val;
            })
            setTasks(UpdateTasks);

        }


    return(

      
        <TaskContext.Provider value={{tasks,addTask,deleteTask,updateTask}} >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskStore;