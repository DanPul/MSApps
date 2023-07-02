import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import PhotoModel from "../../../Models/PhotoModel";

interface PhotoItemProps {
    photo: PhotoModel;
}

function PhotoItem(props: PhotoItemProps): JSX.Element {

    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <div className="PhotoItem">

            <img
                src={props.photo.webformatURL}
                onClick={()=> setOpen(true)}
            />
            <Dialog open={open} onClose={()=> setOpen(false)}>
                <DialogTitle>Photo Details</DialogTitle>
                <DialogContent sx={{textAlign: "left"}}>
                    {Object.entries(props.photo).map(item => <p key={item[0]}><b>{item[0]}:</b><br />{item[1]}</p>)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default PhotoItem;
