import { useEffect,useState } from "react";
import pressure from "../../assets/images/press.png"
import humidity from "../../assets/images/humidity.png"
import wind from "../../assets/images/windspeed.png"


const Weather = () => {
    const [date ,setDate] = useState("");
    const [time ,setTime] = useState("");
    const [weather, setWeather] = useState(false);

    useEffect( ()=>{
        const fetchWeather = async () =>{
            await fetch(
                // 6e04ce4969da4553a3d62439230812
                "https://api.weatherapi.com/v1/current.json?key=6e04ce4969da4553a3d62439230812&q=London&aqi=no"
            )
            .then(async (data) => await data.json())
            .then((data) => setWeather(data));
        };
        fetchWeather();
    } , []);


    useEffect(() => {
        const date = new Date(); //Object 
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        setTime(strTime);
      });
      useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
    
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
    
        const formattedToday = dd + "-" + mm + "-" + yyyy;
        setDate(formattedToday);
      });

  return (
    <div
      style={{
        width: "30vw",
        minHeight: "20vh",
        background: "#101744",
        borderRadius: "12px",
        marginTop: "12px",
      }}
    >
      <div
        style={{
          height: "7vh",
          background: "#FF4ADE",
          borderRadius: "12px",
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div>
        {weather ? (
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {" "}
            <div>
              <img
                src={weather.current.condition.icon}
                style={{ width: "50px", height: "50px" }}
              />
              <p>{weather.current.condition.text}</p>
            </div>
            <div>
              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "24px",
                  marginTop: "10px",
                }}
              >
                <span>{weather.current.temp_c}</span> C
              </p>

              <p>{weather.current.pressure_mb} mbar <br/>Pressure</p>
            </div>
            <div>
              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "24px",
                  marginTop: "10px",
                }}
              >
                {weather.current.wind_kph} km/h
              </p>
              <p>{weather.current.humidity} humidity</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weather;
