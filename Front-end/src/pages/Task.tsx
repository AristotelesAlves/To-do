import { PushPin, ArrowLeft } from "@phosphor-icons/react";
import { Body } from "../components/Body";
import { CaretDown, CheckSquare, Square } from "@phosphor-icons/react/dist/ssr";
import { InstanceService } from "../service/TaskSrvice";
import { useState } from 'react';

export function Task(id: number) {
  const { listTasks, setListTasks } = InstanceService;
  const tarefa = listTasks.find((tarefa, index) => index === id);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  


    return (
        <Body>
            <div className="flex justify-between items-center py-2">
                <ArrowLeft size={35}/>
                <h1 className="flex text-lg items-center gap-1 bg-black px-3 py-1 rounded-lg text-white">
                        <PushPin size={18}/>
                        Fixar 
                </h1>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold">
                    
                </h2>
                <div className="mt-2 flex flex-col gap-1">
                    {tarefa?.tarefa.filter((tarefa) => tarefa.status === false).map(tarefa => {
                        return(
                            <div>
                                <div className="flex items-center gap-1">
                                    <button>
                                        <Square size={25}/>
                                    </button>
                                    {tarefa.description}
                                </div>
                            </div>
                        )
                    })}
                    <div className="flex items-center gap-1">
                        <Square size={25} className="text-zinc-500"/>
                        <input
                            type="text"
                            placeholder="To-Do"
                            value={newTaskDescription}
                            onChange={(e) => setNewTaskDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleAddTask();
                              }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <h3 className="flex items-center gap-1">
                    <CaretDown size={25}/>
                    Conclúidos
                </h3>
                <div className="mt-2 flex flex-col gap-1">
                    <div className="flex items-center text-zinc-600">
                        <button>
                            <CheckSquare size={25}/>
                        </button>
                        Formatar computador de happy
                    </div>
                </div>
            </div>
        </Body>
    )
}
