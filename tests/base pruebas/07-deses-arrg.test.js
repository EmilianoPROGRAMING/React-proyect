import { retornaArreglo } from "../../src/src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arrg', () => {

    test('debe de retonar un string y un numero', () => { 

        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe( 'ABC');
        expect( numbers ).toBe( 123 );
     })
})