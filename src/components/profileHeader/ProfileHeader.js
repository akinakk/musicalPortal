import avatar from '../../imgs/avatar.jpg';
import defaultBG from '../../imgs/backgroundvinyl.jpg';
import React, { useState } from 'react';
import { Button } from '@mui/material';

import './ProfileHeader.css';

const ProfileHeader = () => {
    const [backgroundImage, setBackgroundImage] = useState(defaultBG);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setBackgroundImage(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="ProfileContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img src={avatar} alt="" className="ProfileImage" />
            <h1 className="ProfileName">Gustavo</h1>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="upload-photo"
            />
            <label htmlFor="upload-photo" className="UploadButton" >
                <Button component="span" variant="contained" color="success">Upload Photo</Button>
            </label>
        </div>
    );
}

export default ProfileHeader;
