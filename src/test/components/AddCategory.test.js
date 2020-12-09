
import AddCategory from "../../components/AddCategory";
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Probar el change en el input', () => {

        const input = wrapper.find('input');
        const value = 'Hoila Mundo';

        input.simulate('change', { target: { value : value}});

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });


    test('Debe probar que fue ejecutado el submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategories ).toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        wrapper.find('input').simulate('change', { target : { value : 'Ghost Of Tsushima'} });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        const newValueInput = wrapper.find('input').prop('value').trim();
        console.log(newValueInput, 'Raul ');
        expect( newValueInput ).toBe('');
    });
});
