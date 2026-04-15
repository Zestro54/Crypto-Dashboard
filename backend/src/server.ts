import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(helmet()); // Set security headers

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Route handlers
app.get('/api/crypto', (req, res) => {
    res.send('Crypto endpoint');
});

app.get('/api/portfolio', (req, res) => {
    res.send('Portfolio endpoint');
});

app.get('/api/alerts', (req, res) => {
    res.send('Alerts endpoint');
});

app.get('/api/news', (req, res) => {
    res.send('News endpoint');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});