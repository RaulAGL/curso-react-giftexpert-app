
import GiftExpertApp from '../GiftExpertApp';
import React from 'react';
import {shallow} from 'enzyme';

describe('Probar funcionalidad en <GiftExpertApp />', () => {


    test('probar snapshot de GiftExpertApp', () => {

        const wrapper = shallow( <GiftExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categories', () => {

        const categories = ['the last of us', 'the last of us part II'];
        const wrapper = shallow( <GiftExpertApp defaultcategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('GiftGrid').length ).toBe( categories.length );
    });
});
