import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { AccountRoutes } from "./routes/accounts_routes.js";
import { DestinationRoutes } from "./routes/destinations_routes.js";
import { ErrorHandling } from "./middleware/errorhandling.js";
import { ReceiveDataRoutes } from "./routes/receivedata_routes.js";
import sequelize from "./config/database.js";
import { Authenticate } from "./middleware/authenticate.js";


dotenv.config();
const app = express();

// ==================================================================
// middleware

app.use(cors());
app.use(cors({
    origin: [process.env.URL, process.env.local, process.env.web],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// ==================================================================
// Error Handling

app.use(ErrorHandling);

// ==================================================================
// router

app.use(AccountRoutes);
app.use(DestinationRoutes);

// ==================================================================
// Middleware to check content type and method

app.use(Authenticate);

// ==================================================================

app.use(ReceiveDataRoutes);

// ==================================================================
// Sync database

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});

// ==================================================================