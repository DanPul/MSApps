import { Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { photosStore } from "../../../Redux/PhotosState";
import photosService from "../../../Services/PhotosService";
import { useEffect, useState } from "react";

function NextButton(): JSX.Element {
    const [currPage, setCurrPage] = useState<number>(1);
    const [arrLength, setArrLength] = useState<number>(0);

    useEffect(() => {
        // The subscription for retrieving data from global state
        const unsubscribe = photosStore.subscribe(() => {
            setCurrPage(photosStore.getState().page);
            setArrLength(photosStore.getState().photos.length);
        });

        return unsubscribe;
    }, []);

    function nextPage(): void {
        const page = currPage ? currPage + 1 : 2; // By default the next page is 2
        const category = photosStore.getState().category;
        photosService.getPhotos(category, page);
    }

    return (
        <div className="NextButton">

            <Button
                variant="contained"
                color="success"
                onClick={nextPage}
                disabled={arrLength < 9 || currPage >= 56} // The PixaBay API can retrieve up to 500 images so the last page is 56.
            >
                Next <ArrowForwardIos />
            </Button>

        </div>
    );
}

export default NextButton;
