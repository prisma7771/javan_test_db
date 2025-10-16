import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './api/api_routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

