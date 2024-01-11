describe('pruebas en <DemoComponent />', () => {

test('esta es una prueba', () => {
    // inicializacion 
    const message1 = 'hola mundo';

    // estimulo
    const message2 = message1.trim();

    // prueba del estimulo
    expect(message1).toBe(message2)


});

});