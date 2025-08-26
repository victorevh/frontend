// getRecommendations.js
import { calculateScore } from "./score.service";

const getRecommendations = (
  formData = { selectedRecommendationType: 'SingleProduct' },
  products = []
) => {
  if (!products || products.length === 0) return [];

  const { selectedRecommendationType } = formData;

  const productsWithScores = products.map((product) => ({
    ...product,
    score: calculateScore(product, formData)
  }));

  const relevantProducts = productsWithScores.filter(
    (product) => product.score > 0
  );

  if (relevantProducts.length === 0) return [];

  if (selectedRecommendationType === 'SingleProduct') {
    const maxScore = Math.max(...relevantProducts.map((p) => p.score));
    const candidates = relevantProducts.filter((p) => p.score === maxScore);
    const lastCandidate = candidates[candidates.length - 1];

    return [lastCandidate];
  }

  const relevantProductsSortedById = relevantProducts.sort((a, b) => a.id - b.id);
  
  return relevantProductsSortedById;
};

export default { getRecommendations };