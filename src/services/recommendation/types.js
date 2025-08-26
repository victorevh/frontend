/**
 * @typedef {Object} Product
 * @property {number} id - Identificador único do produto
 * @property {string} name - Nome do produto
 * @property {string[]} preferences - Preferências associadas ao produto
 * @property {string[]} features - Funcionalidades do produto
 * @property {number} [score] - Pontuação calculada dinamicamente
 */

/**
 * @typedef {"SingleProduct" | "MultipleProducts"} RecommendationType
 */

/**
 * @typedef {Object} FormData
 * @property {string[]} selectedPreferences - Preferências escolhidas pelo usuário
 * @property {string[]} selectedFeatures - Funcionalidades escolhidas pelo usuário
 * @property {RecommendationType} selectedRecommendationType - Tipo de recomendação
 */
