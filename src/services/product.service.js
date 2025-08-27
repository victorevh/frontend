import axios from 'axios';
import mockProducts from '../mocks/mockProducts';

const baseURL = 'http://localhost:3001';

const getProducts = async () => {
  if (process.env.REACT_APP_USE_MOCK === 'true') {
    return mockProducts;
  }

  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;
