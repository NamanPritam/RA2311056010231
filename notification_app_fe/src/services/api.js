import axios from "axios";


const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJucDg2MTdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNTg0NiwiaWF0IjoxNzc3NzA0OTQ2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmE2NDNiOGUtOTc1Mi00OTJhLTlhYmUtOTczZmM0N2U2NDA4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmFtYW4gcHJpdGFtIiwic3ViIjoiNzc1ZGRiNjktZWQ5MS00NjhlLWFjNzYtMTViMzE0ZWMyZTBkIn0sImVtYWlsIjoibnA4NjE3QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoibmFtYW4gcHJpdGFtIiwicm9sbE5vIjoicmEyMzExMDU2MDEwMjMxIiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNzc1ZGRiNjktZWQ5MS00NjhlLWFjNzYtMTViMzE0ZWMyZTBkIiwiY2xpZW50U2VjcmV0IjoiWVB4TnNneUZFemt3WlpSdiJ9.EUT7bIeeqbL_NClmrI4Y8gBmu0LA9XaKjE_sFjTBfag";


export const fetchNotifications =
  async () => {

    const response =
      await axios.get(
        "http://20.207.122.201/evaluation-service/notifications",
        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`
          }
        }
      );

    return response.data.notifications;
  };