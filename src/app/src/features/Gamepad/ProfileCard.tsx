import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { LuX } from 'react-icons/lu';

import { Card, CardTitle } from 'app/components/shadcn/Card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from 'app/components/shadcn/Dialog';
import { Button } from 'app/components/shadcn/Button';

type ProfileCardProps = {
    title: string;
    link: string;
};

const ProfileCard = ({ title, link }: ProfileCardProps) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const onDelete = (e: React.MouseEvent<SVGElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setShowDeleteDialog(true);
    };

    const handleConfirmDelete = () => {
        console.log('delete');
        setShowDeleteDialog(false);
    };

    return (
        <>
            <Link to={link}>
                <Card
                    className="hover:bg-gray-300 bg-gray-100 cursor-pointer p-4 
                    flex flex-col items-center justify-center text-center gap-4 min-h-48 
                    transition-all duration-300 ease-in-out hover:scale-[1.02] h-full relative"
                >
                    <CardTitle>{title}</CardTitle>

                    <LuX
                        className="w-10 h-10 absolute z-10 top-2 right-2 hover:text-red-500"
                        onClick={onDelete}
                    />
                </Card>
            </Link>

            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>Delete Profile</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete "{title}"? This
                            action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setShowDeleteDialog(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleConfirmDelete}
                        >
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ProfileCard;
