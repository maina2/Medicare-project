// server.js
import express from 'express';
import config from './src/db/config.js';
import routes from './src/routes/routes.js';
import jwt from 'jsonwebtoken';
import { createServer } from 'http'; // Import createServer function
import { Server } from 'socket.io';
import cors from 'cors'; // Import cors middleware

const app = express();
const httpServer = createServer(app);

// Apply CORS middleware for Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// JWT middleware
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

// Socket.IO server with CORS middleware
const io = new Server(httpServer, {
    cors: {
        origin: "*", // Allow requests from any origin, you can specify your allowed origins here
        methods: ["GET", "POST"] // Allow only specified methods
    }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for incoming messages
    socket.on('message', (message) => {
        console.log('Message received:', message);

        // Emit the message to all connected clients except the sender
        socket.broadcast.emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Routes
routes(app);

// Root route
app.get('/', (req, res) => {
    res.send("Hello, Game store running");
});

// Server listening
httpServer.listen(3000, () => {
    console.log('Socket.IO server listening on port 3000');
});