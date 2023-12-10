import { useState } from "react";


const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  ); 
  // console.log(text)
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "58vh",
        width: "25vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}
    >
      <p style={{ color: "black", fontSize: "1.5rem",marginLeft:"20px" }}> All notes</p>
      <textarea
        style={{
          width: "28vw",
          height: "55vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Notes;