import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import photosService from "../../../Services/PhotosService";

function SelectButton(): JSX.Element {

    const [categoryValue, setCategoryValue] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    function search(): void {
        const category = categoryValue;
        if (!category) {
            handleClose();
            return;
        }
        photosService.getPhotos(category);
        handleClose();
    }

    return (
        <div className="SelectButton">

            <Button variant="contained" onClick={() => { setOpen(true) }}>
                Search Category
            </Button>
            {/* The modal to type the search parameter */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Search For A Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Category"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => setCategoryValue(e.target.value)} /* Help to retrieve the value from the input */
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={search}>Go</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default SelectButton;
