import React, { useState } from 'react';
import './Sidebar.css';
import homeIcon from '../../imgs/home.png';
import libraryIcon from '../../imgs/book.png';
import profileIcon from '../../imgs/user.png';
import languageIcon from '../../imgs/world.png';
import rightIcon from '../../imgs/angle-right.png';
import leftIcon from '../../imgs/angle-left.png';
import { Button } from '@mui/material';

const Sidebar = () => {
    const [list, setList] = useState(leftIcon);
    const [sidebar, setSidebar] = useState(true);

    const toggleList = () => {
        setList(previousList => previousList === leftIcon ? rightIcon : leftIcon);
        setSidebar(!sidebar);
    };

    return (
        <div>
            <div className='opener'>
                <Button onClick={toggleList}>
                    <img className='img' src={list} alt='Icon'/>
                </Button>
            </div>
            <div className={`Sidebar ${sidebar ? 'SidebarVisible' : 'SidebarHidden'}`}>
                <ul>
                    <li>
                        <img src={homeIcon} alt="Home" title="Home" />
                    </li>
                    <li>
                        <img src={libraryIcon} alt="Library" title="Library" />
                    </li>
                    <li>
                        <img src={profileIcon} alt="Profile" title="Profile" />
                    </li>
                    <li>
                        <img src={languageIcon} alt="Language" title="Language" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
