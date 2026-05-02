# Notification System Design

## Overview

This project implements a full-stack notification management system
with centralized logging middleware.

The system allows users to:

- Create notifications
- View notifications
- Mark notifications as read
- Delete notifications

The application follows a modular architecture and integrates
logging across frontend and backend components.


---

## Technology Stack

### Frontend

- React
- Vite
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Logging

- Custom reusable logging middleware


---

## System Architecture

The frontend sends HTTP requests to backend APIs.

The backend processes business logic and stores data in MongoDB.

All critical events are captured by the logging middleware
and forwarded to the Affordmed evaluation server.


### Architecture Flow

Frontend → Backend API → MongoDB

Frontend → Logging Middleware

Backend → Logging Middleware

Logging Middleware → Affordmed Test Server


---

## API Endpoints


### Create Notification

POST `/api/notifications`

Creates a new notification.


### Get Notifications

GET `/api/notifications`

Fetches all notifications.


### Mark Notification As Read

PUT `/api/notifications/:id`

Updates read status.


### Delete Notification

DELETE `/api/notifications/:id`

Deletes notification.


---

## Logging Strategy

A reusable `Log()` function is implemented.

Every log contains:

- stack
- level
- package
- message


### Example

backend, info, service, backend server started


---

## Error Handling

The system handles:

- Invalid API requests
- Database failures
- Logging failures
- Network failures


---

## Scalability Considerations

Future enhancements:

- JWT authentication
- Redis caching
- WebSocket real-time notifications
- Queue-based event processing
- Microservice deployment


---

## Deployment Strategy

Frontend can be deployed on Vercel.

Backend can be deployed on Render.

MongoDB can be hosted using MongoDB Atlas.


---

## Conclusion

This project demonstrates a scalable notification platform
with modular architecture, reusable logging middleware,
REST APIs, and responsive frontend integration.