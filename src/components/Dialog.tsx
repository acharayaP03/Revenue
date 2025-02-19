// import React, { useState } from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material";
import { tokens } from "../theme";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

export default function Dialog({ open, onClose }: DialogProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MuiDialog open={open} fullScreen={false} fullWidth={true} maxWidth="sm">
      <DialogTitle>
        <Typography variant="h3">Set your event</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5">Selected Event date.</Typography>
        <TextField
          type="date"
          fullWidth
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <Typography variant="h5"> Please select title for the event.</Typography>
        <TextField
          label="Title"
          type="text"
          fullWidth
          sx={{
            marginTop: "20px",
          }}
        />
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "transparent",
            color: colors.grey[100],
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            backgroundColor: colors.primary[500],
            color: colors.grey[100],
          }}
        >
          Save Event
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}
