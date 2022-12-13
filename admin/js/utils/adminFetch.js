const api = axios.create({
  baseURL: 'http://localhost:8080/v1/',
});

export const getAllAdmins = async () => {
  const url = 'administradores';
  const response = await api.get(url);
  const { data } = await response;

  return data;
};

export const createAdmin = async (adminInfos) => {
  const url = 'administradores';
  const response = await api.post(url, {
    body: {
      nome: adminInfos.name,
      email: adminInfos.email,
      senha: adminInfos.password,
      foto: adminInfos.photo,
    },
  });

  return response;
};

export const authenticateAdmin = async (adminInfos) => {
  const url = 'login/admin';
  const response = await api.post(url, {
    body: {
      email: adminInfos.email,
      password: adminInfos.password,
    },
  });

  return response;
};
