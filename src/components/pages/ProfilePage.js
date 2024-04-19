import React from 'react';
import Profile from '../profileHeader/ProfileHeader';
import Sidebar from '../sidebar/Sidebar';
import ProfileTabs from '../profileTabs/ProfileTabs';
import Tracks from '../tracks/Tracks';

import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div >
            <Profile />
            <ProfileTabs />
            <Sidebar />
            <div className="tracksColumn">
                <Tracks />
            </div>
        </div>
    );
}

export default ProfilePage;
