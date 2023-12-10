
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./List.module.css";

const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
          {
            headers: {
              "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          }
        );

        // Check if the response is successful
        if (response.status === 200) {
          setMovies(response.data.results.slice(4, 8)); // Adjust the range as needed
        } else {
          console.error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [genre]);
  

  return (
    <>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {genre}
      </p>
      <div style={{ display: "flex",  justifyContent:"space-evenly"  , overflow: "hidden" }}>
        {movies.map((movie, idx) =>
          <div key={idx} style={{ width: "20vw"}}>
            <img
              src={movie?.primaryImage?.url}
              style={{
                objectFit: "cover",
                width: "20vw",
                height: "25vh",
                borderRadius: "12px",
              }}
              alt={`Movie ${idx}`}
            />
          </div>
        )
      }
    </div>
  </>
);
};


export default List;

