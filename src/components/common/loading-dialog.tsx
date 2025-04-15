import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "../ui/alert-dialog";

import {Spinner} from "./spinner";

const LoadingDialog = () => {
    return (
        <AlertDialog open={true}>
            <AlertDialogTitle />
            <AlertDialogContent className="center bg-transparent border-none shadow-none">
                <Spinner />
            </AlertDialogContent>
        </AlertDialog>
    );
};

export  {LoadingDialog}