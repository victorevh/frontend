// getRecommendations.js
import { calculateScore } from './score.service.js';
import { singleProductStrategy } from './strategies/singleProduct.strategy.js';
import { multipleProductsStrategy } from './strategies/multipleProducts.strategy.js';
import { Product, FormData } from './types.js';

/**
 * Gera recomendações de produtos com base nos dados do formulário.
 * @param {FormData} formData - Dados do formulário preenchido pelo usuário
 * @param {Product[]} products - Lista de produtos disponíveis
 * @returns {Product[]} Lista de produtos recomendados
 */
const getRecommendations = (formData, products = []) => {
  if (!products.length) return [];

  const { selectedRecommendationType } = formData;

  const productsWithScores = products.map((product) => ({
    ...product,
    score: calculateScore(product, formData),
  }));

  const relevantProducts = productsWithScores.filter((p) => p.score > 0);

  if (!relevantProducts.length) return [];

  const strategies = {
    SingleProduct: singleProductStrategy,
    MultipleProducts: multipleProductsStrategy,
  };

  const strategyFn = strategies[selectedRecommendationType];
  return strategyFn ? strategyFn(relevantProducts) : [];
};

export default { getRecommendations };
