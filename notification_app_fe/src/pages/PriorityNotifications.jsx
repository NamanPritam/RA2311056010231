import {
  useEffect,
  useState
} from "react";

import {
  Card,
  CardContent,
  Typography,
  Container
} from "@mui/material";

import {
  fetchNotifications
} from "../services/api";


function PriorityNotifications() {

  const [
    notifications,
    setNotifications
  ] = useState([]);


  const getWeight =
    (type) => {

      const weights = {
        Placement: 3,
        Result: 2,
        Event: 1
      };

      return (
        weights[type] || 0
      );
    };


  useEffect(() => {

    const loadData =
      async () => {

        const data =
          await fetchNotifications();


        const sorted =
          [...data]
            .sort(
              (a, b) => {

                const weightDiff =
                  getWeight(
                    b.Type
                  ) -
                  getWeight(
                    a.Type
                  );


                if (
                  weightDiff !== 0
                ) {
                  return weightDiff;
                }


                return (
                  new Date(
                    b.Timestamp
                  ) -
                  new Date(
                    a.Timestamp
                  )
                );
              }
            )
            .slice(
              0,
              10
            );


        setNotifications(
          sorted
        );
      };


    loadData();

  }, []);


  return (

    <Container>

      <Typography
        variant="h4"
        sx={{
          marginBottom: 3
        }}
      >
        Priority Inbox
      </Typography>


      {
        notifications.map(
          (item) => (

            <Card
              key={item.ID}
              sx={{
                marginBottom: 2
              }}
            >

              <CardContent>

                <Typography
                  variant="h6"
                >
                  {item.Type}
                </Typography>


                <Typography>
                  {item.Message}
                </Typography>


                <Typography>
                  {item.Timestamp}
                </Typography>

              </CardContent>

            </Card>
          )
        )
      }

    </Container>
  );
}


export default PriorityNotifications;