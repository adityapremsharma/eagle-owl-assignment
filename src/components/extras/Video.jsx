import React, { useState } from "react";

export default function Video({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="spin"></div>}
      <video
        className={!loaded ? "hide" : null}
        autoPlay
        muted
        loop
        preload={"auto"}
        onLoadedData={() => setLoaded(!loaded)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
