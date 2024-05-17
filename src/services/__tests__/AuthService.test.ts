import { describe, expect, test, jest } from '@jest/globals';
import { User } from '../../types/User';
import { login } from '../AuthService';
import nock from 'nock';

// Mocking localStorage
beforeEach(() => {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem(key: string) {
        return store[key] || null;
      },
      setItem(key: string, value: string) {
        store[key] = value;
      },
      clear() {
        store = {};
      },
      removeItem(key: string) {
        delete store[key];
      }
    };
  })();

  Object.defineProperty(global, 'localStorage', {
    value: localStorageMock,
    configurable: true,
    enumerable: true,
    writable: true
  });
});

describe('AuthService', () => { 
    test('should authenticate the user', async () => {
      nock('https://api.homologation.cliqdrive.com.br')
        .post('/auth/login/')
        .reply(200, {
          tokens: {
            access: 'tokenAccessValue'
          }
        });

      const user: User = { email: 'email@example.com', password: 'password' };
      const setItemSpy = jest.spyOn(localStorage, 'setItem');

      await login(user);

      expect(setItemSpy).toHaveBeenCalledTimes(1);
      expect(setItemSpy).toHaveBeenCalledWith('accessToken', 'tokenAccessValue');
    });

    test('should authenticate the user incorrectly', async () => {
    
      nock('https://api.homologation.cliqdrive.com.br', {})
      .post('/auth/login/')
      .reply(401, { tokens: { access: 'tokenAccessValue' } } );

      const user: User = {
      email: 'email@example.com',
      password: 'password',
      };

     
      const setItemSpy = jest.spyOn(localStorage, 'setItem');
  
      await expect(login(user)).rejects.toThrow('Erro ao fazer login:');
      
      expect(setItemSpy).not.toHaveBeenCalledTimes(1);
      expect(setItemSpy).not.toHaveBeenCalledWith('accessToken', 'tokenAccessValue');
      
      
  });
  });
