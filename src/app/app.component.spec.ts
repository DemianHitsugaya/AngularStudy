import { Operaciones } from './operaciones';

describe('Test para operaciones', () => {
  describe('Test para suma y resta', () => {
    const operaciones = new Operaciones();
    it('Suma 2 numeros', () => {
      expect(operaciones.sumar(3, 5)).toEqual(8);
    });
    it('Restar 2 numeros', () => {
      expect(operaciones.restar(9, 5)).toEqual(4);
    });

    it('Multiplicar 2 numeros', () => {
      expect(operaciones.multiplicar(9, 5)).toEqual(45);
    });

    it('Dividir 2 numeros', () => {
      expect(operaciones.dividir(9, 3)).toEqual(3);
    });
  });
});
