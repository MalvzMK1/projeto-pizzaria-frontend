export const fetchProducts = async () => {
  const url = 'http://localhost:8080/v1/produtos';
  const response = await fetch(url);
  const data = response.json();

  return data;
};
