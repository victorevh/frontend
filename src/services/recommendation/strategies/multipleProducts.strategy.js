import { Product } from "../types.js";

/**
 * Estratégia de múltiplos produtos.
 * Retorna todos os relevantes, ordenados pelo ID.
 * @param {Product[]} products - Lista de produtos com score calculado
 * @returns {Product[]} Produtos recomendados
 */
export const multipleProductsStrategy = (products) => {
  if (!Array.isArray(products) || products.length === 0) return [];

  const sortedProductsByID = [...products].sort((a, b) => a.id - b.id);
  return sortedProductsByID;
};
