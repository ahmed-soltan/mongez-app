import { Input } from "@/components/ui/input";
import { FormControlProps, useFormControl } from "@mongez/react-form";

const TaskInput = (props: FormControlProps) => {
  const { value, changeValue } = useFormControl(props);
  return (
    <Input
      type="text"
      value={value}
      onChange={e => {
        changeValue(e.target.value);
      }}
    />
  );
};

export default TaskInput;
