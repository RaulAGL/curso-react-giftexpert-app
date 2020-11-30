
import  {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hi!');

    const handleInputValue = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(prevValue => [inputValue,...prevValue])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                    value={inputValue}
                   onChange={handleInputValue}/>
        </form>
    );
}

export default AddCategory;


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

