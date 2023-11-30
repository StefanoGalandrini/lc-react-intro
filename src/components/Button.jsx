import { useState } from "react";

export default function Button({ testo,
  testoCaricamento = "Caricamento in corso...",
  colore = 'blue',
  timeout = 1000,
  className = "",
  small = false,
  light = false,
  children }) {

  const [loading, setLoading] = useState(false);
  const sizeClasses = small ? "px-3 py-2 text-sm" : "px-4 py-3";
  const classColor = {
    'blue': 'bg-blue-500 hover:bg-blue-600',
    'red': 'bg-red-500 hover:bg-red-600',
    'green': 'bg-green-500 hover:bg-green-600',
    'orange': 'bg-orange-500 hover:bg-orange-600',
  };
  const classes = ["rounded transition-all duration-300 flex gap-2"];

  classes.push(sizeClasses);
  classes.push(classColor[colore] ?? classColor['blue']);
  classes.push(light && 'text-white');

  if (className) {
    classes.push(className);
  }

  function startLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, timeout);
  }

  return (
    <button className={classes.join(" ")} onClick={startLoading}>
      {/* {loading ? testoCaricamento : children?.[1]} */}
      {loading ? testoCaricamento : children}

      {/* {children?.[0]} */}

      {/* {children} */}
    </button>
  );
}