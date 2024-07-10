import { counterAtom } from "@/apps/front-office/home/atoms/counter-atom";
import { Button } from "@/components/ui/button";

export default function UpdateCounterButton() {
  const updateCount = () => {
    counterAtom.update(count => count + 1);
  };

  return <Button variant={"outline"} onClick={updateCount}>Update Counter</Button>;
}
