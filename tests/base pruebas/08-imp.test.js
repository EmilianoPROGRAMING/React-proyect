import { getHeroeById, getHeroesByOwner } from "../../src/src/base-pruebas/08-imp-exp";

describe('pruebas en 08-imp', () => { 

    test('getHeroesById debe retornar el id de un heroe', () => {

        const id = 1;
        const hero = getHeroeById( id );


        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroesById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );


        expect( hero ).toBeFalsy();

    });

    test('getHeroesByOwnerDc debe retonar los heroes de DC', () => {

        const owner = 'DC';
        const heros = getHeroesByOwner( owner );

        expect( heros ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    });

    test('getHeroesByOwnerMarvel debe retonar los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heros = getHeroesByOwner( owner );

        expect( heros.length).toBe(2);
    });
 });