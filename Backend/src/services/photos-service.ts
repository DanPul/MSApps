import PhotoModel from "../models/photo-model";
import appConfig from "../utils/app-config";

// Retrieving the images details using the query parameters described in PixaBay documentation
async function getPhotos(pageNum: number, searchQ: string, order: string): Promise<PhotoModel[]> {
    const url = appConfig.photosUrl + `&q=${searchQ}` + `&page=${pageNum}` + `&order=${order}`;
    const response = await fetch(url);
    const json = await response.json();
    const photos: PhotoModel[] = json["hits"];
    return photos;
}

export default {
    getPhotos
}