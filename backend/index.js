import express from 'express';
import dotenv from "dotenv";
import './Models/db.js';
import router from './Routes/AuthRouter.js';
import cors from 'cors';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // Replace bodyParser
app.use(cors())


// Routes
app.use('/auth', router);
app.get('/api', (req, res) => res.send("START"));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server Error:', err);
});
