import recommendationLinks from '../../constants/recommendationLinks';

function RecommendationList({ recommendations, loading }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {loading && (
        <p className="text-blue-500 font-semibold mb-2">Carregando recomendações...</p>
      )}

      {!loading && recommendations.length === 0 && (
        <p>Nenhuma recomendação encontrada.</p>
      )}

      {!loading && (
        <ul>
          {recommendations.map((recommendation, index) => {
            const url = recommendationLinks[recommendation.name] || "#";
            return (
              <li key={index} className="mb-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {recommendation.name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default RecommendationList;
