import { useEffect, useRef } from "react";
import "../CopyRow/CopyRow.css";

function CopyRow({ label, value, id, copied, onCopy }) {
  const timeoutRef = useRef(null);

  // Sprzątanie timeoutu (żeby nie zostawały "wiszące" timery)
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleClick() {
    // jeśli w Contact masz timeout, to ten ref możesz usunąć.
    // tu zostawiamy prostą wersję: tylko wołamy onCopy.
    onCopy(value, id);
  }

  return (
    <section className="contactRow">
      <h2>{label}</h2>
      <div className="line">
        <span className="value">{value}</span>

        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Copy
        </button>

        {copied === id && <span className="copied">Skopiowano</span>}
      </div>
    </section>
  );
}

export default CopyRow;
