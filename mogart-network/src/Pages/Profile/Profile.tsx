// Profile.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../MogartBase/Context/DataContext.tsx';
import Header from '../../MogartBase/ThemeParts/MainPart/Header/HeaderPart.tsx';
import Navbar from '../../MogartBase/ThemeParts/MainPart/Navbar/Navbar.tsx';
import ProfileHeader from './components/ProfileHeader/ProfileHeader.tsx';
import ProfileMainContent from './components/ProfileMainContent/ProfileMainContent.tsx';
import ProfileLeftSidebar from './components/ProfileLeftSidebar/ProfileLeftSidebar.tsx';
import ProfileRightSidebar from './components/ProfileRightSidebar/ProfileRightSidebar.tsx';
import { API_URL } from '../../MogartBase/Api/Api.tsx';
import axios from 'axios'; 

export interface UserData {
  VisibleID: string;
  UsrName: string;
  UsrDisplayName: string;
  UsrEmail: string;
  UsrDetail: string;
  UsrRegisterDate: string;
  UsrBirdDate: string;
  UsrBackgroundImage: string;
  UsrProfileImage: string;
  UsrSocialNetworkAdress: string;
  UsrSocialNetwork: string;
  UsrFollowers: number; 
  UsrFollowing: number;
  UsrScore: number; 
}


const Profile = () => {
  const navigate = useNavigate();
  const { username: urlUsername } = useParams<{ username?: string }>();
  const { isLoggedIn, isLoading, data } = useData();

  const [userData, setUserData] = useState<UserData | null>(null);
  const username = isLoggedIn ? (data?.UserName || '') : urlUsername || '';


  useEffect(() => {

    if (isLoading) {
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData[]>(`${API_URL}/GetUserData/${username}`);
        setUserData(response.data[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <div className="flex flex-1">
        <div className="flex">
          <div className="w-16 bg-blue-900"> </div>
          <div className="min-w-[250px] bg-white pt-16 h-screen">
            <ProfileLeftSidebar userData={userData} />
          </div>
        </div>
                
        <div className="flex flex-col flex-1 pt-4">
        <ProfileHeader userData={userData} />
          <div className="flex justify-center flex-1 overflow-hidden">
            <ProfileMainContent userData={userData} />
          </div>
        </div>
        
        <div className="w-1/4 bg-white pt-24">
          <ProfileRightSidebar userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
