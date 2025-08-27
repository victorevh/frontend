import { calculateScore } from './score.service.js';
import mockProducts from '../../mocks/mockProducts.js';

describe('calculateScore', () => {
  it('deve retornar 0 se nenhuma preferência ou feature corresponder', () => {
    const formData = {
      selectedPreferences: ['Pref inexistente'],
      selectedFeatures: ['Feature inexistente'],
    };
    const score = calculateScore(mockProducts[0], formData);
    expect(score).toBe(0);
  });

  it('deve contar corretamente correspondências de preferências', () => {
    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail'],
      selectedFeatures: [],
    };
    const score = calculateScore(mockProducts[0], formData);
    expect(score).toBe(1);
  });

  it('deve contar corretamente correspondências de features', () => {
    const formData = {
      selectedPreferences: [],
      selectedFeatures: ['Gestão de leads e oportunidades'],
    };
    const score = calculateScore(mockProducts[0], formData);
    expect(score).toBe(1);
  });

  it('deve contar correspondências de preferências e features juntas', () => {
    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail'],
      selectedFeatures: ['Gestão de leads e oportunidades'],
    };
    const score = calculateScore(mockProducts[0], formData);
    expect(score).toBe(2);
  });

  it('deve retornar 0 se formData não tiver arrays definidos', () => {
    const score = calculateScore(mockProducts[0], {});
    expect(score).toBe(0);
  });

  it('deve retornar 0 se product não tiver preferências nem features', () => {
    const product = { id: 999, name: 'Produto X', preferences: [], features: [] };
    const formData = { selectedPreferences: ['any'], selectedFeatures: ['any'] };
    const score = calculateScore(product, formData);
    expect(score).toBe(0);
  });

  it('deve contar todas correspondências múltiplas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
      ],
      selectedFeatures: [
        'Gestão de leads e oportunidades',
        'Automação de fluxos de trabalho de vendas',
      ],
    };
    const score = calculateScore(mockProducts[0], formData);
    expect(score).toBe(4);
  });
});
