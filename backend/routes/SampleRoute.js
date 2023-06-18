import express from "express";
import { 
    getSample,
    getSampleById,
    createSample,
    updateSample,
    deleteSample
} from "../controllers/SampleController.js";

const router = express.Router();

// Define routes and their corresponding controller functions
router.get('/sample', getSample); // Route to get all sample data
router.get('/sample/:id', getSampleById); // Route to get sample data by ID
router.post('/sample', createSample); // Route to create a new sample data
router.patch('/sample/:id', updateSample); // Route to update sample data by ID
router.delete('/sample/:id', deleteSample); // Route to delete sample data by ID

export default router;
