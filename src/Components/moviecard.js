import React from "react";

function Tag({ name, director, poster }) {
  return (
    <div className="main">
      <div className="left">
        <div className="upper">
          <div className="sub-left">
            <img src={poster} alt="movie-banner " className="sub-left" />
          </div>
          <div className="sub-right">
            <h2>{name}</h2>
            <p>{director}</p>
            <p>
              <span
                style={{
                  border: "0.3px solid sweetwhite",
                  margin: "0.1rem",
                  padding: "0.2rem",
                  fontSize: "13px",
                }}
              >
                120 min
              </span>
              <span style={{ margin: "0.2rem", padding: "0.2rem", fontSize: "13px", color: "lightblue" }}>
                Action, Crime, Fantasy
              </span>
            </p>
          </div>
        </div>
        <div className="lower">
          <p>
            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
          </p>
        </div>
      </div>

      <div className="right">
        <img src={poster} alt="movie-banner" className="movie-banner" />
      </div>
    </div>
  );
}

export default Tag;