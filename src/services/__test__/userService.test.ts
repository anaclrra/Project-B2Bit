import nock from 'nock';
import { getUser } from '../UserService';

const responseBody = {
  id: 4,
  name: 'example',
  email: 'example@mail.com',
  is_active: true,
  avatar: null,
  type: 'Example',
  created: '2023-09-20T11:42:54.515946-03:00',
  modified: '2024-05-14T20:53:19.161495-03:00',
  role: 'example'
};

describe('UserService', () => {
  test('should get user profile successfully', async () => {
    

    nock('https://api.homologation.cliqdrive.com.br', {
      reqheaders: {
        authorization: 'Bearer tokenAccessValue'
      }
    })
    .get('/auth/profile')
    .reply(200, responseBody);

    const localStorageMock = {
      getItem: jest.fn().mockReturnValue('tokenAccessValue'),
      setItem: jest.fn(),
      clear: jest.fn(),
      removeItem: jest.fn(),
    };
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    const user = await getUser();
    expect(user).toEqual(responseBody);

    expect(nock.isDone()).toBeTruthy();
  });
  
  test('should throw error when failed to get user profile', async () => {

    nock('https://api.homologation.cliqdrive.com.br')
    .get('/auth/profile')
    .reply(500, responseBody);

    await expect(getUser()).rejects.toThrow('Erro ao obter perfil do usuário');

  });

});
