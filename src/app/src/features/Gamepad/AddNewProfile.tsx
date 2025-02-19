import { FaPlus } from 'react-icons/fa';

import { Button } from 'app/components/shadcn/Button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from 'app/components/shadcn/Dialog';

const AddNewProfile = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    <FaPlus /> <span>Create a New Gamepad Profile</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="bg-white w-full max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create a New Gamepad Profile</DialogTitle>
                    <DialogDescription>
                        Create a new gamepad profile to use with your machine.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewProfile;
