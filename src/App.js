import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import useRecommendations from './hooks/useRecommendations';
import useProducts from './hooks/useProducts';

function App() {
  const { products } = useProducts();
  const { recommendations, getRecommendations, setRecommendations, loading } = useRecommendations(products);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recomendador de Produtos RD Station</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="md:col-span-2 mb-4">
          <p className="text-lg text-gray-700">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div>
          <Form
            getRecommendations={getRecommendations}
            setRecommendations={setRecommendations}
          />
        </div>
        <div>
          <RecommendationList 
            recommendations={recommendations}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
