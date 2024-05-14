
export const getProfile = async () => {
    const accessToken = localStorage.getItem('accessToken');
    
    try {
      const response = await fetch('https://api.homologation.cliqdrive.com.br/auth/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json;version=v1_web',
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao obter perfil do usuário');
      }
  
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error('Erro ao obter perfil do usuário: ' + error.message);
    }
  };
  