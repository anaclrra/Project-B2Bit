import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/UserService';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../../assets/avatar.png';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUser();
        setUserProfile(profileData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
    
  };

   if (!userProfile) {
        return <div className='container w-40 m-auto mt-60 p-3 rounded-2xl shadow-md'>Carregando perfil...</div>;
    } 

  return (
    <div className='bg-[#F1F5F9] h-screen'>
      <header className='flex justify-end items-end  bg-white p-3 '>
        <button className="text-center font-medium px-4 mx-6 py-2 w-60 bg-[#02274F] text-white rounded-lg hover:bg-[#37699e]"
        onClick={handleLogout}
        >LogOut</button>
      </header>
  
      <div className="container w-96 m-auto p-2 mt-20 rounded-2xl shadow-md bg-white">
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-center font-medium mt-6'>Profile picture</h4>
            <img src={userProfile.avatar?.high || defaultAvatar} alt="User Avatar" 
            className='w-20 h-14 rounded-md mt-2' />
          </div>

          <div className='mx-3'>
            <p className='my-2'>Your <strong>Name</strong></p>
            <p className=' bg-gray-100 p-3 rounded-md'> {userProfile.name}</p>
          </div>
          <div className='mx-3'>
            <p className='my-2'>Your <strong>E-mail</strong></p>
            <p className='mb-6 bg-gray-100 p-3 rounded-md'>{userProfile.email}</p>
        
          </div>
        </div>
      </div>
    
  );
};

export default UserProfile;
