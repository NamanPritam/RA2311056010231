const express = require("express");

const router = express.Router();

const {
    createNotification,
    getNotifications,
    markAsRead,
    deleteNotification
} = require("../controllers/notificationController");


router.post(
    "/",
    createNotification
);

router.get(
    "/",
    getNotifications
);

router.put(
    "/:id",
    markAsRead
);

router.delete(
    "/:id",
    deleteNotification
);

module.exports = router;