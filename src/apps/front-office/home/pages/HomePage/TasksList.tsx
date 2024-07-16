import { TaskAtom } from "../../atoms/task-atom";
import TaskComponent from "../../components/Task";

const TasksList = () => {
  const tasks = TaskAtom.useValue();
  console.log(tasks)

  return (
    <div className="flex items-center justify-center flex-col w-full gap-2">
      {tasks.length>0 ? tasks.map((task, index) => (
        <TaskComponent key={index} task={task} index={index}/>
      )):(
        <div className="text-center w-full italic text-slate-600">You didn't add any tasks yet</div>
      )}
    </div>
  );
};

export default TasksList;
