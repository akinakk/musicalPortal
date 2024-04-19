import React, { useState } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';
import './ProfileTabs.css';

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Paper className="ProfileTabs" elevation={10} sx={{ bgcolor: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                indicatorColor="transparent"
                centered
            >
                <Tab label="All tracks" />
                <Tab label="Albums" />
                <Tab label="Playlists" />
                <Tab label="Share" />
                <Tab label="Edit" />
            </Tabs>
            <div className="tabContent">
                {/* {activeTab === 0 && <p>All tracks</p>}
                {activeTab === 1 && <p>Albums</p>}
                {activeTab === 2 && <p>Playlists</p>}
                {activeTab === 3 && <p>Share</p>}
                {activeTab === 4 && <p>Edit</p>} */}
            </div>
        </Paper>
    );
}

export default ProfileTabs;
