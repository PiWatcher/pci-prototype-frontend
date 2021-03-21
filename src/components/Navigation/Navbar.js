
// styling
import './Navbar.css';

// page imports
import React, { useContext, useState } from 'react';
import SearchBar from './SearchBar';
import BuildingMap from './BuildingMap';
import nauLogo from '../../images/nauLogoDash.svg';
import mapIcon from '../../images/mapIcon.svg';
import adminIcon from '../../images/adminIcon.svg';

// contexts
import { AuthContext } from '../../contexts/AuthContext';
import { Link, Route, Switch } from 'react-router-dom';
import AdminSettings from '../Admin/AdminSettings';



const Navbar = () => {


   const { userName, userRole, setAuthStatus } = useContext(AuthContext);

   // flag to show map or not on dashboard
   const [showMap, setShowMap] = useState(false);

   // flip flag for showing map div
   const onMapClick = () => setShowMap(!showMap);

   // sign out of dashboard, clear all data and reset auth status
   const signOut = () => {
      setAuthStatus(null);
   }


   // returns navbar component (includes logo and search bar)
   return (
      <div>
         <div className="navbar-component">
            <div className="image-div">
               <img className="logo" src={nauLogo} alt="NAU Logo" />
            </div>

            <div className="welcome-div">
               <p>
                  Welcome, {userName}
               </p>
            </div>

            <div className="search-div">
               <SearchBar />
            </div>

            <div className="mapIcon-div">
               <img className="map" onClick={onMapClick} src={mapIcon} alt="Map Icon" />
            </div>

            <Link to="/admin">
               <img className="admin" src={adminIcon} alt=" Admin Icon" />
            </Link>

            {userRole === 'admin' ?
               <div className="adminIcon-div">
                  <Link to="/admin">
                     <img className="adminIcon" src={adminIcon} alt=" Admin Icon" />

                  </Link>
               </div>
               :
               null
            }

            <div className="sign-out" onClick={signOut}>
               Sign Out
            </div>
         </div>

         <div className="map-div">
            {showMap ? <BuildingMap /> : null}
         </div>

      </div>
   );
}

export default Navbar;