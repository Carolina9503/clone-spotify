const TOKEN = "TOKEN";
export const getToken = () => window.localStorage.getItem(TOKEN);
export const setToken = (token) => window.localStorage.setItem(TOKEN, token);
