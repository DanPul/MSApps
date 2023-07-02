import { ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { photosStore } from "../../../Redux/PhotosState";
import photosService from "../../../Services/PhotosService";

function PrevButton(): JSX.Element {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
        // The subscription for retrieving data from global state
        const unsubscribe = photosStore.subscribe(() => {
            const currPage = photosStore.getState().page;
            setIsDisabled(isNaN(currPage) || currPage <= 1); //In first loading we cant use the global state as we need
        });

        return unsubscribe;
    }, []);

    function prevPage(): void {
        const page = photosStore.getState().page - 1;
        const category = photosStore.getState().category;
        photosService.getPhotos(category, page);
    }

    return (
        <div className="PrevButton">

            <Button
                variant="contained"
                color="success"
                onClick={prevPage}
                disabled={isDisabled}
            >
                <ArrowBackIos /> Prev
            </Button>

        </div>
    );
}

export default PrevButton;
