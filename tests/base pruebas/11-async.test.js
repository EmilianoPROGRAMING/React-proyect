import { getImagen } from "../../src/src/base-pruebas/11-async-await";


describe('pruebas en 11-async-await.js', () => {

    test('getImagen debe de retornar un url', async() => {

        const url = await getImagen();
        expect( typeof url ).toBe('string');
     });
 });