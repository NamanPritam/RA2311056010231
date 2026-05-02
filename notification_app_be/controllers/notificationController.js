const Notification = require("../models/Notification");
const Log = require("../../logging_middleware/logger");


const createNotification = async (req, res) => {

    try {

        const notification = await Notification.create(req.body);

        await Log(
            "backend",
            "info",
            "controller",
            "notification created"
        );

        res.status(201).json(notification);

    } catch (error) {

        await Log(
            "backend",
            "error",
            "handler",
            error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};


const getNotifications = async (req, res) => {

    const notifications = await Notification.find();

    res.json(notifications);
};


const markAsRead = async (req, res) => {

    const notification =
        await Notification.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );

    res.json(notification);
};


const deleteNotification = async (req, res) => {

    await Notification.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "deleted"
    });
};


module.exports = {
    createNotification,
    getNotifications,
    markAsRead,
    deleteNotification
};