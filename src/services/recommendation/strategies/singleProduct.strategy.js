import { Product } from "../types.js";

/**
 * Estratégia de recomendação de produto único.
 * Retorna apenas o último produto em caso de empate.
 * @param {Product[]} [products=[]] - Lista de produtos com score calculado
 * @returns {Product[]} Lista com um único produto recomendado
 */
export const singleProductStrategy = (products = []) => {
  if (!Array.isArray(products) || products.length === 0) return [];

  const maxScore = Math.max(...products.map((p) => p.score ?? 0));
  const candidates = products.filter((p) => p.score === maxScore);
  const lastCandidate = candidates[candidates.length - 1];

  return [lastCandidate];
};
