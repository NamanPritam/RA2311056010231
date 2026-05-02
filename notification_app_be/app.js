const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Log = require("../logging_middleware/logger");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(
    process.env.MONGO_URI
)
.then(async () => {

    await Log(
        "backend",
        "info",
        "db",
        "database connected"
    );

    console.log("MongoDB connected");
})
.catch(async (error) => {

    await Log(
        "backend",
        "fatal",
        "db",
        error.message
    );

    console.log(error.message);
});


app.use(
    "/api/notifications",
    require("./routes/notificationRoutes")
);


const PORT =
    process.env.PORT || 5000;


app.listen(
    PORT,
    async () => {

        await Log(
            "backend",
            "info",
            "service",
            "backend server started"
        );

        console.log(
            `Server running on port ${PORT}`
        );
    }
);