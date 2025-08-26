import { Product, FormData } from './types.js';

/**
 * Calcula o score de um produto com base nas preferências e funcionalidades escolhidas.
 * @param {Product} product - Produto a ser avaliado
 * @param {FormData} formData - Dados do formulário
 * @returns {number} Pontuação do produto
 */
export const calculateScore = (product, formData) => {
  const { selectedPreferences = [], selectedFeatures = [] } = formData;
  let score = 0;

  selectedPreferences.forEach((pref) => {
    if (product.preferences.includes(pref)) {
      score++;
    }
  });

  selectedFeatures.forEach((feat) => {
    if (product.features.includes(feat)) {
      score++;
    }
  });

  return score;
};