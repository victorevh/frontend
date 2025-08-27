import { useState } from 'react';

export default function useFormError() {
  const [error, setError] = useState('');

  const validateForm = ({ selectedPreferences = [], selectedFeatures = [], selectedRecommendationType = '' }) => {
    if (!selectedPreferences.length && !selectedFeatures.length) {
      setError('Você deve selecionar pelo menos uma preferência ou funcionalidade.');
      return false;
    }

    if (!selectedRecommendationType) {
      setError('Por favor, selecione o tipo de recomendação.');
      return false;
    }

    setError('');
    return true;
  };

  const clearError = () => setError('');

  return { error, validateForm, clearError };
}
