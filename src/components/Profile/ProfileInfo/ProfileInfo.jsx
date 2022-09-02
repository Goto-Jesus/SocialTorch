import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        {/* shapka header */}
        <img className={s.header} src='https://thumbs.gfycat.com/ArcticEnergeticHuemul-size_restricted.gif'></img>
      </div>
      <div className={s.profileInfo}>
        <div>
          {/*Avatar*/}
          <img src='https://cdn-icons-png.flaticon.com/256/4825/4825015.png'></img>
        </div>
        <div>
          {/*Info*/}
          Firstname Lastname
        </div>
      </div>
    </div >
  );
}

export default ProfileInfo;