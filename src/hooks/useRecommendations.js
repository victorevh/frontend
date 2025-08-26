// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../services/recommendation/recommendation.service';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getRecommendations = (formData) => {
    setLoading(true);
    const result = recommendationService.getRecommendations(formData, products);
    setRecommendations(result);
    setLoading(false);
    return result;
  };

  return { recommendations, getRecommendations, setRecommendations, loading };
}

export default useRecommendations;