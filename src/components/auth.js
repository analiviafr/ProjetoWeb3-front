export const isAuthenticated = () => !!localStorage.getItem('app-token');

function isAdm({
//export const isAdm = () => (
  if (localStorage.getItem('app-token:role') === 'admin') {
    return true;
  }
  else {
    return false;
  }
});
