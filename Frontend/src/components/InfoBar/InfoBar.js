import React from 'react';

import './InfoBar.css'

import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';

export default function InfoBar({client}) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online icon"/>
        <h3>{client}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="Fechar"/></a>
      </div>
    </div>
  )
}
