// Form.js

import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';

function Form({ getRecommendations, setRecommendations }) {
  const { preferences, features } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'SingleProduct',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendedProducts = getRecommendations(formData);
    setRecommendations(recommendedProducts);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
