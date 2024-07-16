import { Button } from "@/components/ui/button";
import { Form } from "@mongez/react-form";
import { TaskAtom } from "../../atoms/task-atom";
import TaskInput from "../../components/task-input";
import "./HomePage.css";
import TasksList from "./TasksList";

export default function HomePage() {
  const onSubmit = async (data: any) => {
    TaskAtom.addTask({ title: data.task, completed: false });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
      <Form
        onSubmit={({ values }) => {
          onSubmit(values);
        }}
        className="w-full flex items-center gap-3">
        <TaskInput name="task" />
        <Button type="submit">Add</Button>
      </Form>
      <TasksList />
    </div>
  );
}
