export const getToken = () => {
    const token = sessionStorage.getItem('token');
    const expiration = parseInt(sessionStorage.getItem('tokenExpiration'), 10);
    const now = new Date().getTime();
  
    if (token && expiration > now) {
      return token;
    } else {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('tokenExpiration');
      return null;
    }
  };