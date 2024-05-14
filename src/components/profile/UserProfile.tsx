import React, { useEffect, useState } from 'react';
import { getProfile } from '../../services/UserService';
import { User } from '../../types/User';


const UserProfile: React.FC = () => {
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

   if (!userProfile) {
        return <div>Carregando perfil...</div>;
    } 

  return (
    <div>
      <p>Nome: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
    
      {/* {userProfile.avatar && <img src={userProfile.avatar} alt="Avatar do usuário" />}
     */}
    </div>
  );
};

export default UserProfile;
