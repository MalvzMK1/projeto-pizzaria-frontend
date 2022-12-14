import { api } from '../api/api.js';

export const getPizzas = async () => {
  const url = 'pizzas';
  const { data } = await api.get(url);

  return data;
};

export const getDrinks = async () => {
  const url = 'bebidas';
  const { data } = await api.get(url);

  return data;
};

export const getProducts = async () => {
  const url = 'produtos';
  const { data } = await api.get(url);

  return data;
};
