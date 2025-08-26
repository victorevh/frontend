import { singleProductStrategy } from './singleProduct.strategy.js';
import mockProducts from '../../../mocks/mockProducts.js';

describe('singleProductStrategy', () => {
  it('deve retornar apenas um produto', () => {
    const productsWithScore = mockProducts.map((p, i) => ({ ...p, score: i + 1 }));
    const recommended = singleProductStrategy(productsWithScore);

    expect(recommended).toHaveLength(1);
    expect(recommended[0].score).toBe(Math.max(...productsWithScore.map(p => p.score)));
  });

  it('deve retornar o último produto em caso de empate', () => {
    const productsWithScore = [
      { ...mockProducts[0], score: 5 },
      { ...mockProducts[1], score: 5 },
      { ...mockProducts[2], score: 3 },
    ];

    const recommended = singleProductStrategy(productsWithScore);

    expect(recommended).toHaveLength(1);
    expect(recommended[0].id).toBe(2);
  });

  it('deve retornar array vazio se receber array vazio', () => {
    const recommended = singleProductStrategy([]);
    expect(recommended).toEqual([]);
  });

  it('deve retornar array vazio se receber argumento inválido', () => {
    const recommended = singleProductStrategy(null);
    expect(recommended).toEqual([]);
  });
});
