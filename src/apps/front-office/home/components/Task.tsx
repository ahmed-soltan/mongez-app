import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle, Ellipsis, Trash2, X } from "lucide-react";
import { Task, TaskAtom } from "../atoms/task-atom";
import { cn } from "@/lib/utils";

const TaskComponent = ({ task, index }: { task: Task; index: number }) => {
  return (
    <div className="w-full border rounded-md px-2 py-2 flex items-center justify-between">
      <h1 className={cn("text-slate-800 " , task.completed && "line-through")}>{task.title}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Ellipsis className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="text-rose-500 flex items-center"
            onClick={() => TaskAtom.deleteTask(index)}>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Task
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => TaskAtom.changeStatus(index)}>
            {!task.completed ? (
              <div className="text-emerald-500 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Completed
              </div>
            ) : (
              <div className="text-slate-500 flex items-center">
                <X className="w-4 h-4 mr-2" />
                Cancel Task
              </div>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskComponent;
