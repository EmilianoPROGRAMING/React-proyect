import { render } from "@testing-library/react"
import { PrimerTarea } from "../src/src/PrimerTarea"


describe('Pruebas de <PrimerTarea />', () => { 

    test('debe de hacer match con el snapshot', () => { 

        const title = "Hola, soy Vegeta"
        render( <PrimerTarea title={title}/> )
    });
});