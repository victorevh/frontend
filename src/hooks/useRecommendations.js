// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../services/recommendation/recommendation.service';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecommendations = async (formData) => {
    setLoading(true);
    // Simula tempo de carregamento
    await new Promise(resolve => setTimeout(resolve, 150));
    const result = recommendationService.getRecommendations(formData, products);
    setRecommendations(result);
    setLoading(false);
    return result;
  };

  return { recommendations, getRecommendations, setRecommendations, loading };
}

export default useRecommendations;