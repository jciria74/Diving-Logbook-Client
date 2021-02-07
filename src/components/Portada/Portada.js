import React from "react";
import logo from "../../img/myLogbook_turquoise.gif";
import manta from "../../img/manta-blue.png";
import "./Portada.scss";

export default function Portada() {
  return (
    <div className="Portada">
      <div className="container centered">
        <div>
          <img className="logo" src={logo} alt="divelogbook" />
        </div>
        <div>
          <img className="manta-img" src={manta} alt="manta" />
        </div>
      </div>
    </div>
  );
}
