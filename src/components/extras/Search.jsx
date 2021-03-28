import React, { useState, useEffect } from "react";

export default function Search({ placeholder, debouncedText }) {
  const [input, setInput] = useState("");
  const [debounced, setDebounced] = useState(input);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounced(input);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [input]);

  return (
    <input
      type="text"
      onChange={(e) => {
        setInput(e.target.value);
        debouncedText(debounced);
      }}
      placeholder={placeholder}
    />
  );
}
