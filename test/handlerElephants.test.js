const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se ao passar o parâmetro `count` a função retorna o numero de elefantes do zoológico', () => {
    const param = 'count';
    const expected = 4;

    expect(handlerElephants(param)).toBe(expected);
  });

  it('Verifica se ao passa o parâmetro `name` a função retorna um array com os nomes dos elefantes do zoológico', () => {
    const param = 'names';
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(handlerElephants(param)).toEqual(expected);
  });

  it('Verifica se ao passa o parâmetro `averageAge` a função retorna a idade média dos elefenates do zoológico', () => {
    const param = 'averageAge';
    const expected = 10.5;

    expect(handlerElephants(param)).toBeCloseTo(expected);
  });

  it('Verifica se ao passa o parâmetro `location` a função retorna a sigla da localização dos elefantes', () => {
    const param = 'location';
    const expected = 'NW';

    expect(handlerElephants(param)).toEqual(expected);
  });

  it('Verifica se ao passa o parâmetro `popularity` a função retorna a popularidade dos elefantes', () => {
    const param = 'popularity';
    const expected = 5;

    expect(handlerElephants(param)).toEqual(expected);
  });

  it('Verifica se ao passa o parâmetro `availability` a função retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const param = 'availability';
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(handlerElephants(param)).toEqual(expected);
  });

  it('Verifica se ao não passar um parâmetro para a função ela retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se ao passar uma especie diferente de `elephants` a função retorna null', () => {
    expect(handlerElephants('snakes')).toBeNull();
  });

  it('Verifica se ao passar um parâmetro diferente de uma string retorna a mensagem `Parâmetro inválido, é necessário uma string`', () => {
    const param = 10;
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(handlerElephants(param)).toEqual(expected);
  });
});
