export const getAllAdmins = async () => {
  const url = 'http://localhost:8080/v1/administradores';
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const api = axios.create({
  baseURL: 'http://localhost:8080/v1',
});

export const createAdmin = async (adminInfos) => {
  const url = '/administrador';
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

createAdmin({
  name: 'Teste',
  email: 'teste@gmail.com',
  password: '123',
  photo: 'https://avatars.githubusercontent.com/u/92887081?v=4',
});
