import { getSaludo } from '../../src/src/base-pruebas/02-template-string';

    describe('pruebass en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola emiliano"', () => {

        const name = 'emiliano';
        const message = getSaludo( name );  

        expect( message ).toBe(`Hola ${ name }`)

    }); 
});