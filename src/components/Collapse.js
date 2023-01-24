import React, { useState } from "react";
import { FaAngleUp } from 'react-icons/fa';

export default function Collapse(props) {
  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };

  const { title, children } = props;
  const { cardState } = state;

  return (
      <div className="content-section-card" aria-hidden={cardState ? "false" : "true"}>
        <header
          className="card-header"
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <p className="card-header-title">{title}</p>
          <a className="card-header-icon">
            <span
              className="icon"
              style={{
                transform: cardState ? null : "rotate(180deg)",
                transition: "transform 250ms ease-out"
              }}
            >
              <FaAngleUp/>
            </span>
          </a>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "max-height 1s",
          }}
        >
          <div className="content">{children}<br/></div>
        </div>
      </div>
  );
};
