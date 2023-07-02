import { useEffect, useState } from "react";
import "./PhotosList.css";
import photosService from "../../../Services/PhotosService";
import PhotoModel from "../../../Models/PhotoModel";
import { photosStore } from "../../../Redux/PhotosState";
import PhotoItem from "../PhotoItem/PhotoItem";

function PhotosList(): JSX.Element {
    const [photos, setPhotos] = useState<PhotoModel[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        const page = photosStore.getState().page;
        if (!page) {
            photosService.getPhotos().then((photos) => {
                setPhotos(photos);

                if (!photos.length) {
                    setErrorMsg("Unfortunately, we could not find any photos related to your request... please try a different category.");
                }
            })
                .catch(err => alert(err));
        }

        const unsubscribe = photosStore.subscribe(() => {
            setPhotos(photosStore.getState().photos);
        });
        
        return unsubscribe;
        
    }, []);
    return (
        <>
            {!photos.length && <p>{errorMsg}</p>}
            <div className="PhotosList">


                {!!photos.length &&
                    photos.map((p) => <PhotoItem photo={p} key={p.id} />)}
            </div>
        </>
    );
}

export default PhotosList;
