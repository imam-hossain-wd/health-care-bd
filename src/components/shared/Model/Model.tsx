import { Button } from "@/components/ui/shadcn/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/shadcn/Model"
  


const Model = ({title}:any) => {
    return (
        <Dialog>
        <DialogTrigger>
            <Button className="w-28 h-9 m-5">{title}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
};

export default Model;
