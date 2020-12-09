
import { shallow } from 'enzyme';
import GiftGridItem from "../../components/GiftGridItem";
import React from "react";

describe('Probar funcionalidad de giftGridItem',() => {

    const item = {
        title : 'Title',
        url : 'http://test.url'
    };
    const wrapper = shallow(<GiftGridItem {...item} />);


    test('Probar componente GiftGridItem con snapShot', () => {


        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de evaluar el parrafo que contenga el title', () => {

        const p = wrapper.find('p').text().trim();

        expect( p ).toBe( item.title );
    });

    test('Debe de evaluar que imagene contenga src y alt', () => {

        const img = wrapper.find('img');


        expect( img.prop('src') ).toBe( item.url );
        expect( img.prop('alt') ).toBe( item.title );

    });

    test('Debe probar que contenga la clase animate__fadeIn', () => {

        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);

    });

});
