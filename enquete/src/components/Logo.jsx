import React from 'react';
import logoPrimary from "../assets/images/logoPrimary.png";
import logoSecondary from "../assets/images/logoSec.png";

export const Logo = () => {
  return (
    <img style={{
        width: '100%'
    }} src={localStorage.getItem('mode') === "light" ? logoPrimary : logoSecondary} alt="Ecodata" />
  )
}
