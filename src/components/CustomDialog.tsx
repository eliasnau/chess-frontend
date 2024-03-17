import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface CustomDialogProps {
  open: boolean;
  children: ReactNode;
  title: string;
  contentText: string;
  handleContinue: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  children,
  title,
  contentText,
  handleContinue,
}: CustomDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleContinue}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
