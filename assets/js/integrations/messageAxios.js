import { api } from '../api/api.js';

export const newMessage = async (messageJSON) => {
  const url = 'mensagem';
  const { data } = api.post(url, {
    nome: messageJSON.name,
    email: messageJSON.email,
    telefone: messageJSON.telephone,
    celular: messageJSON.phoneNumber,
    mensagem: messageJSON.message,
    id_tipo_mensagem: messageJSON.messageType,
  });

  return data;
};
