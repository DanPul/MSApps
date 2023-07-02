import { createStore } from "redux";
import PhotoModel from "../Models/PhotoModel";

// App State - application level state:
export class PhotosState {
    public photos: PhotoModel[];
    public category: string;
    public page: number;
}

// Action Type - list of actions needed on the data:
export enum PhotosActionType {
    FetchPhotos = "FetchPhotos",
    ChangeCategory = "ChangeCategory",
    ChangePage = "ChangePage"
}

// Action - a single object describing single operation on the data:
export interface PhotosAction {
    type: PhotosActionType; // What we need to do?
    payload: any; // What is the data needed?
}

// Reducer - a function performing the needed actions:
export function photosReducer(currentState = new PhotosState(), action: PhotosAction): PhotosState {
    const newState = {...currentState};

    switch (action.type) {
        case PhotosActionType.FetchPhotos:
            newState.photos = action.payload;
            break;
        case PhotosActionType.ChangeCategory:
            newState.category = action.payload;
            newState.page = 1;
            break;
        case PhotosActionType.ChangePage:
            newState.page = action.payload;
    }

    return newState;
}

// Store - Redux manager:
export const photosStore = createStore(photosReducer);