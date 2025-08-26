// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  if (!products || products.length === 0) return [];

  const { selectedPreferences = [], selectedFeatures = [] } = formData;
};

export default { getRecommendations };