import { useEffect, useState } from "react";

import "./AllNotifications.css";

import { fetchNotifications }
  from "../services/api";


export default function AllNotifications() {

  const [
    notifications,
    setNotifications
  ] = useState([]);

  const [
    viewed,
    setViewed
  ] = useState([]);

  const [
    filter,
    setFilter
  ] = useState("All");


  useEffect(() => {
    loadData();
  }, []);


  const loadData =
    async () => {

      const data =
        await fetchNotifications();

      setNotifications(data);
    };


  const markViewed =
    (id) => {

      if (
        !viewed.includes(id)
      ) {

        setViewed(
          [
            ...viewed,
            id
          ]
        );
      }
    };


  const filteredNotifications =

    filter === "All"

      ? notifications

      : notifications.filter(
          item =>
            item.Type === filter
        );



  return (

    <div
      className="page"
    >

      <h1>
        Campus Notification Hub
      </h1>


      <p
        className="stats"
      >

        Total:
        {" "}
        {notifications.length}

        {" | Viewed: "}
        {viewed.length}

      </p>



      <div
        className="filters"
      >

        {
          [
            "All",
            "Placement",
            "Result",
            "Event"
          ].map(
            type => (

              <button

                key={type}

                className={
                  filter === type
                    ? "active"
                    : ""
                }

                onClick={
                  () =>
                    setFilter(
                      type
                    )
                }
              >

                {type}

              </button>
            )
          )
        }

      </div>




      {
        filteredNotifications.map(
          item => (

            <div

              key={item.ID}

              className={
                viewed.includes(
                  item.ID
                )

                  ? "card viewed"

                  : "card"
              }

              onClick={
                () =>
                  markViewed(
                    item.ID
                  )
              }
            >

              <span
                className="badge"
              >

                {item.Type}

              </span>


              <h3>
                {item.Message}
              </h3>


              <p>
                {item.Timestamp}
              </p>

            </div>
          )
        )
      }

    </div>
  );
}