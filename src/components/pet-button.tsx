import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
// import { Children } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function PetButton({
  actionType,
  onClick,
  children,
}: PetButtonProps) {
  {
    if (actionType === "add") {
      return (
        <Dialog>
          <DialogTrigger>
            <Button size="icon">
              <PlusIcon className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent>Add a new pet</DialogContent>
        </Dialog>
      );
    }
    if (actionType === "edit") {
      return <Button variant="secondary">{children}</Button>;
    }

    if (actionType === "checkout") {
      return (
        <Button variant="secondary" onClick={onClick}>
          {children}
        </Button>
      );
    }
  }
  // If we leave off this return statement it will still work because we are taking care of all the possible scenarios in the above conditional statements
  //   return <Button>Edit</Button>;
}
