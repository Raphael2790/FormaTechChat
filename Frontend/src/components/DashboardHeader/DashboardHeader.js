import React, { useState, useMemo} from 'react';

import './DashboardHeader.css';

import camera from '../../assets/camera.svg';
import logo from '../../assets/logo_footer.png';

export default function DashboardHeader() {
  const [thumbnail, setThumbnail] = useState('');

  const preview = useMemo(() => {
    return thumbnail?URL.createObjectURL(thumbnail): null;
  } , [thumbnail])

  return (
      <div className="chat-header">
        <div className="chatName">
          <img src={logo} alt="Logo FormareTech"/>
          <h3>Chat - FormareTech</h3>
        </div>
        <div className="features-user">
          <label 
          id="thumbnail"
          style={{backgroundImage:`url(${preview})`}}
          className={thumbnail?"has-thumbnail":""}
          >
            <img src={camera} alt="Imagem Thumbnail"/>
            <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
          </label>
            <a href="/"><span className="material-icons">
            exit_to_app
            </span></a>
            
        </div>
      </div>
  )
}
