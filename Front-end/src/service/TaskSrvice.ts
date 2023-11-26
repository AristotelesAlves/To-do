import { useState } from "react";

  interface IlistTask {
    category: string;
    date: string;
    title: string;
    fixed: boolean;
    tarefa: {
      description: string;
      status: boolean
    }[];
  }[]

const TaskService = () => {
  const [listTasks, setListTasks] = useState<IlistTask[]>([]);

  const addTask = (newTask: IlistTask) => {
    setListTasks([...listTasks, newTask]);
  };

  return {
    listTasks,
    setListTasks,
    addTask,
  };
};
export const InstanceService = TaskService()
export default TaskService;

