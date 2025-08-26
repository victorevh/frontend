// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: 'SingleProduct' },
  products = []
) => {
  if (!products || products.length === 0) return [];

  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType } = formData;

  const calculateScore = (product) => {
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

  const productsWithScores = products.map((product) => ({
    ...product,
    score: calculateScore(product),
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
};

export default { getRecommendations };