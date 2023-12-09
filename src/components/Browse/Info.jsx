import Profile from "../../assets/images/bigprofile.png"

const Info = () => {
    const info = JSON.parse(window.localStorage.getItem("userData"));
    const genre = JSON.parse(window.localStorage.getItem("genres"));

    return (
        <div
          style={{
            width: "30vw",
            minHeight: "36vh",
            background: "#5746EA",
            borderRadius: "12px",
            padding: "6px",
            display: "flex",
            gap: "9px",
          }}
        >
          <div>
            <img
              src={Profile}
              style={{
                height: "30vh",
                width: "6vw",
                position: "relative",
                top: "2vh",
              }}
            />
          </div>
          <div style={{ marginLeft:"10px"}}>
            <p style={{ color: "white", fontSize: "1.2rem" ,marginTop:"0"}}>{info.name}</p>
            <p style={{ color: "white", fontSize: "1.2rem" }}>{info.mail}</p>
            <p style={{ color: "white", fontSize: "1.2rem" }}>{info.username}</p>
            <Chips categories={genre} color={"#9F94FF"} />
          </div>
        </div>
      );
    };
    
    const Chips = ({ color, categories }) => {
      return (
        <div style={{ width: "20vw" }}>
          {categories.map((category) => (
            <button
              style={{
                background: `${color}`,
                borderRadius: "12px",
                width: "100px",
                color: "white",
                border: "none",
                padding: "6px",
                height: "30px",
                flexShrink: 0,
                margin: "10px",
              }}
            >
              {category}{" "}
              {/* <span style={{ color: "black", marginLeft: "4px" }}>X</span> */}
            </button>
          ))}
        </div>
      );
    };
    

export default Info;
