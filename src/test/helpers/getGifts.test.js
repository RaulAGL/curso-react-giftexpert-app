import {getGifts} from "../../helpers/getGifts";


describe('Probar helper getGifts', () => {

    test('Recibir 10 elementos', async () => {

        const gifts = await getGifts('perro');

        expect( gifts.length ).toBe( 10 );
    });

    test('Si se envia la categoria vacia debe devolver un array vacio', async () => {

        const gifts = await getGifts('');

        
    });
});
