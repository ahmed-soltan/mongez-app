import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";

export type Task = {
  title: string;
  completed: boolean;
};
export const TaskAtom = atom<Task[]>({
  key: "task",
  default: cache.get("todo", []),
  beforeUpdate(tasks) {
    cache.set("todo", tasks);

    return tasks;
  },
  actions: {
    addTask:(task:Task)=>{
      const tasks = TaskAtom.value;
      tasks.push(task);
      cache.set("todo", tasks);
      TaskAtom.update([...tasks]);
      return tasks;
    },
    deleteTask: (index: number) => {
      const tasks = cache.get("todo", []);
      tasks.splice(index, 1);
      cache.set("todo", tasks);
      TaskAtom.update([...tasks]);
      return tasks;
    },
    changeStatus: (index: number) => {
      const tasks:Task[] = cache.get("todo", []);
      if(tasks[index].completed){
        tasks[index].completed = false;
      }else{
        tasks[index].completed = true;
      }
      cache.set("todo", tasks);
      TaskAtom.update([...tasks]);
      return tasks;
    },
  },
});
