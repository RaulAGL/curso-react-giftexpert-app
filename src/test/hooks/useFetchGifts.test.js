import {useFetchGifts} from "../../hooks/useFetchGifts";
import {renderHook} from "@testing-library/react-hooks";

describe('debe probar el custom hook', () => {

    test('debe devolver el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts('The Last Of Us Part II'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        console.log(data, loading);

        expect( data ).toEqual( [] );
        expect( loading ).toBeTruthy();
    });

    test('debe de retornar un array de imgs y loagind false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts('The Last Of Us Part II'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        console.log(data, loading);

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
    });

});
