import { multipleProductsStrategy } from './multipleProducts.strategy.js';
import mockProducts from '../../../mocks/mockProducts.js';

describe('multipleProductsStrategy', () => {
  it('deve retornar os produtos ordenados pelo ID', () => {
    const shuffledProducts = [mockProducts[2], mockProducts[0], mockProducts[1], mockProducts[3]];

    const recommended = multipleProductsStrategy(shuffledProducts);

    expect(recommended).toHaveLength(mockProducts.length);
    expect(recommended.map(p => p.id)).toEqual([1, 2, 3, 4]);
    expect(recommended.map(p => p.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
      'RD Conversas',
      'RD Mentor AI'
    ]);
  });

  it('deve retornar array vazio se receber array vazio', () => {
    const recommended = multipleProductsStrategy([]);
    expect(recommended).toEqual([]);
  });

  it('deve retornar array vazio se receber argumento não é array', () => {
    const recommended = multipleProductsStrategy(null);
    expect(recommended).toEqual([]);
  });
});
