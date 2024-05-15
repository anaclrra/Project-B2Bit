import React, { useEffect, useState } from 'react';
import { getProfile } from '../../services/UserService';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getProfile();
        setUserProfile(profileData);
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
      }
    };

    fetchUserProfile();
  }, [userProfile]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
    
  };

   if (!userProfile) {
        return <div>Carregando perfil...</div>;
    } 

  return (
    <div>
      <header className='flex justify-end items-end bg-white p-3 '>
        <button className="text-center font-medium px-4 py-2 w-60 bg-[#02274F] text-white rounded-lg hover:bg-[#37699e]"
        onClick={handleLogout}
        >LogOut</button>
      </header>
  
      <div className="container w-96 m-auto mt-40 rounded-lg shadow-2xl bg-white">
        <div className='mb-60'>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-center font-medium'>Profile Picture</h4>
            <img src={userProfile.avatar} alt="User Avatar" />
          </div>

          <div className='m-3'>
            <p className='p-1'>Your <strong>Name</strong></p>
            <p className='bg-gray-100 p-3 rounded-md'> {userProfile.name}</p>
          </div>
          <div className='m-3'>
            <p className='p-1'>Your <strong>E-mail</strong></p>
            <p className='bg-gray-100 p-3 rounded-md'>{userProfile.email}</p>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
