import * as React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function App() {
  const [rating, setRating] = React.useState(0);
  const [tempRating, setTempRating] = React.useState(0);

  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          onSetRating={() => setRating(i + 1)}
          onHoverEnter={() => setTempRating(i + 1)}
          onHoverLeave={() => setTempRating(0)}
          filled={tempRating ? tempRating >= i + 1 : rating >= i + 1}
        />
      ))}
    </>
  );
}

function Star({ onSetRating, onHoverEnter, onHoverLeave, filled }) {
  return (
    <span
      role="button"
      onClick={onSetRating}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      {filled ? (
        <FaStar size="42" color="gold" />
      ) : (
        <FaRegStar size="42" color="gold" />
      )}
    </span>
  );
}
