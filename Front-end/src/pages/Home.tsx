import iconTodotask from "../assets/iconTodotask.png"
import { PushPin } from "@phosphor-icons/react/dist/ssr";
import { Body } from "../components/Body";
import TaskService from "../service/TaskSrvice";

export function Home(){
    
    const {listTasks, addTask} = TaskService()

    return (
        <Body>
            <h1 className="text-3xl py-2 font-bold flex items-center">
                <img src={iconTodotask} width={60} alt="" />
                Daily Tasks
            </h1>
            <div className="flex flex-col gap-2 h-full w-full overflow-y-scroll">
                {listTasks.map((task, index) => {
                    return(
                        <div key={index.toString()} className="bg-fuchsia-300 p-4 rounded-2xl w-full flex flex-col gap-1 border-black hover:border hover:inner-shadow-xl hover: shadow-lg">
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold text-2xl">
                                    {task.title}
                                </h2>
                                <p className={`px-2 ${task.fixed ? "" : "hidden"}`}>
                                    <PushPin size={20} weight="bold" />
                                </p>
                            </div>
                            <div className="flex gap-4 items-center text-sm">
                                <p className="text-white bg-zinc-800 py-1 px-2 rounded-md">
                                    {task.category}
                                </p>
                                <p className="text-zinc-600">
                                    • {task.date}
                                </p>
                            </div>
                        </div> 
                    )
                })}
            </div>
            <div className="flex w-full justify-center pt-2">
                <div className="w-full py-2 bg-black text-white flex items-center justify-center rounded-md">
                    <button onClick={() => addTask}>
                        Adicionar Tarefa
                    </button>
                </div>
            </div>
        </Body>
    )
}