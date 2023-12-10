import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather";
import Timer from "../components/Browse/Timer";
import News from "../components/Browse/News";
import Notes from "../components/Browse/Notes";
import { useNavigate } from "react-router-dom";
const Browse = () => {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/movies");
    };
  return (
    <div
      style={{
        height: "100%",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "1vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "25px" }}>
        <div>
          <Info />
          <Weather />
          <Timer />
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <News />
        </div>
      </div>
      <button
        style ={{
          position: "absolute",
          bottom: "1px",
          right: "5px",
          marginTop:"3rem",
          background: "green",
          border: "none",
          color: "white",
          padding: "8px",
          borderRadius: "12px",
          width:"9vw",
          height:"5vh"
        }}
        onClick={handleClick}
      >
        Browse
      </button>
    </div>
  );
};

export default Browse;
