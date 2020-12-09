import GiftGrid from "../../components/GiftGrid";
import {shallow} from 'enzyme';
import React from 'react';
import {useFetchGifts} from '../../hooks/useFetchGifts';

jest.mock('../../hooks/useFetchGifts');

describe('Probar componente <GiftGrid />', () => {

    const category = 'Video Games';
    test('Probar el snapshot del componente', () =>  {

        useFetchGifts.mockReturnValue( { data: [], loading: false } );
        const wrapper = shallow( <GiftGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando cargue el useFetch', () => {
        const gifts = [
            { url : 'https//:domain/test.jpg', title: 'MyTitle', id: 'MyImage' },
            { url : 'https//:domain/test.jpg', title: 'MyTitle', id: 'MyImage2' }
        ];
        useFetchGifts.mockReturnValue( { data: gifts , loading: false } );
        const wrapper = shallow( <GiftGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GiftGridItem').length ).toBe( gifts.length );
    });
});
