const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao não passar nenhum argumento a função retorna um objeto com todos os horários de abertura', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    }
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Verifica se ao receber o dia como `Monday` em qualquer horário, retorna que o zoo estará fechado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(expected);
  });

  it('Verifica se ao receber o dia e hora em que o zoo estará aberto, retorna a mensagem de que está aberto', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(expected);
  });

  it('Verifica se ao receber um dia e um horário em que o zoo estará fechado, retorna a mensagem de que esta fechado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(expected);
  });

  it('Verifica se ao receber um dia inválido retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('DiaQualquer', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se ao receber uma hora inválida retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Tuesday', '90:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se ao receber uma hora inválida retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-MA')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se ao receber uma hora inválida retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:89-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Verifica se ao receber uma hora inválida retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('Tuesday', 'AB:89-AM')).toThrow(`The hour should represent a number`);
  });
});
