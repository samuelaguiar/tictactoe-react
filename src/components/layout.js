import React from "react";
import style from "./layout.module.scss";

export default ({ children }) => (
  <div className={style.layout}>
    <h2 className={style.textCenter}>
      Tic Tac Toe <span className={style.gameLogo}>Game</span>
    </h2>
    {children}
    <hr />
    <p className={style.textCenter}>
      Made with{" "}
      <span role="img" aria-label="love">
        🧡
      </span>{" "}
      by SAM
    </p>
  </div>
);
