import React, { useState } from "react";

export default function Image({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="spin"></div>}
      <img src={src} alt={alt} onLoad={() => setLoaded(!loaded)} />
    </>
  );
}
