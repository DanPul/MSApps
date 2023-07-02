import cors from "cors";
import express from "express";
import catchAll from "./middleware/catch-all";
import routeNotFound from "./middleware/route-not-found";
import photoRoutes from "./routes/photo-routes";
import appConfig from "./utils/app-config";

const server = express();

server.use(cors({ origin: appConfig.clientUrl }));
server.use(express.json());
server.use("/api", photoRoutes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}/`));