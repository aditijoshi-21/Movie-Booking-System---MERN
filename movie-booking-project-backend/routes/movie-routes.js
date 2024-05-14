import express from "express";
import {
  addMovie,
  getAllMovies,
  getMovieById,
  deleteM,
} from "../controllers/movie-controller";
// import { deleteMovie } from "../../movie-booking-project-frontend/src/api-helpers/api-helpers";
const movieRouter = express.Router();
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", addMovie);
movieRouter.delete("/:id", deleteM);

export default movieRouter;
