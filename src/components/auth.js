export const isAuthenticated = () => !!localStorage.getItem('app-token');
export const isAdm = () => (
  if (localStorage.getItem('app-token:role') === 'admin') {
    return true;
  }
  else {
    return true
  }
);
