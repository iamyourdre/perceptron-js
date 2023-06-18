import express from "express";
import cors from "cors";
import SampleRoute from "./routes/SampleRoute.js";
import PerceptronRoute from "./routes/PerceptronRoute.js";

const app = express();

app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Parse JSON request bodies
app.use(SampleRoute); // Mount the Sample router for handling train data-related routes
app.use(PerceptronRoute); // Mount the Perceptron router for handling train data-related routes

app.listen(5000, () => console.log('Server up and running...'));
