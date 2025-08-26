// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  if (!products || products.length === 0) return [];
};

export default { getRecommendations };