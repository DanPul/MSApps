import express, { Request, Response, NextFunction } from "express";
import photosService from "../services/photos-service";

const router = express.Router();

// A POST route because I use the request's body to deliver the parameters.
// POST http://localhost:4000/api/photos
router.post("/photos", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const searchQ = request.body.searchQ; // String to search.
        const pageNum = +request.body.page; // The number of the page.
        const order = request.body.order; // How the results should be ordered. Accepted values: "popular", "latest".
        const photos = await photosService.getPhotos(pageNum, searchQ, order);
        response.json(photos);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;