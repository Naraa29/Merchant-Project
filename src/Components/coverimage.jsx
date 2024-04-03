import React from "react";

function Cover() {
  return (
    <div
      style={{
        // height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        className="gt-card-single-image"
        src="/assets/images/cover1.png"
        alt="И мерчант"
        style={{
          maxHeight: "350px", // Set the max height to 50% of viewport height
          width: "100%", // Let the width adjust to maintain aspect ratio
        }}
      />
    </div>
  );
}

export default Cover;
