const api = axios.create({
  baseURL: 'http://localhost:8080/v1/',
});

export const loginAdmin = async (adminInfos) => {
  const url = 'login/admin';
  const response = await api.post(url, {
    email: adminInfos.email,
    password: adminInfos.password,
  });

  return response;
};

// await loginAdmin({ email: 'zezinho@gmail.com', password: '666' });

export const createAdmin = async (adminInfos) => {
  const url = 'administrador';
  const response = await api.post(url, {
    nome: adminInfos.name,
    email: adminInfos.email,
    senha: adminInfos.password,
    foto: adminInfos.photo,
  });

  return response;
};
