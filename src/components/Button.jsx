import { useState } from "react";

export default function Button() {
  const [loading, setLoading] = useState(false);

  function startLoading() {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <button className="rounded bg-blue-500 px-4 py-3" onClick={startLoading}>
      {loading ? 'Caricamento in corso...' : 'Clicca qui'}
    </button>
  );
}