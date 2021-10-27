import  LocalStorage from './LocalStorage/LocalStorage.service'
class AuthService {
  static isUserLoggedIn = () =>
  LocalStorage.get('loggedIn')
}

export default AuthService
