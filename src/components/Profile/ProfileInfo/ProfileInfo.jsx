import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
}

export default ProfileInfo;