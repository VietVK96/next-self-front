export const getToken = ()=> {
  const data = localStorage.getItem("auth_dental");
  const auth =  JSON.parse(data)
  return auth;
};

export const setToken = (t) => {
  localStorage.setItem("auth_dental", JSON.stringify(t));
};

export const removeToken = () => {
  localStorage.removeItem("auth_dental");
};

export const getUser = ()=> {
  const data = localStorage.getItem("user");
  const auth =  JSON.parse(data)
  return auth;
};

export const setUser = (t) => {
  localStorage.setItem("user", JSON.stringify(t));
};