import axios from "axios";
import PhotoModel from "../Models/PhotoModel";
import appConfig from "../Utils/AppConfig";
import { PhotosAction, PhotosActionType, photosStore } from "../Redux/PhotosState";

class PhotosService {

    public async getPhotos(categoryStr?: string, pageNum?: number): Promise<PhotoModel[]> {

        // building the request body
        const reqBody = {
            "searchQ": categoryStr ? categoryStr : "flowers",
            "page": pageNum ? pageNum : 1,
            "order": "latest"
        };

        // Making a POST request as declared by the backend server
        const response = await axios.post<PhotoModel[]>(appConfig.photosUrl, reqBody);
        const photos = response.data;

        // Handling global state
        const actions: PhotosAction[] = [
            { type: PhotosActionType.FetchPhotos, payload: photos }
        ];
        // Can only be one of the other (change page or new search),
        actions.push(photosStore.getState().category === categoryStr ?
            { type: PhotosActionType.ChangePage, payload: pageNum } : { type: PhotosActionType.ChangeCategory, payload: categoryStr }
        );
        // Initiating actions
        actions.forEach(action => photosStore.dispatch(action));

        return photos;
    }

}

const photosService = new PhotosService();

export default photosService;