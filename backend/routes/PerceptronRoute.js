import express from "express";
import { 
    runPerceptron,
    getPerceptron
} from "../controllers/PerceptronController.js";

const router = express.Router();

// Define routes and their corresponding controller functions
router.get('/runperceptron', runPerceptron); // Route to get all perceptron data
router.get('/perceptron', getPerceptron); // Route to get all perceptron data

export default router;
