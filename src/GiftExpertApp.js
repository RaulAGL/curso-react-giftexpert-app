

import React, {useState} from 'react'
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const GifExpertApp = () => {

    const [categories,setCategories] = useState(['Horizon Zero Dawn']);



    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            {
                categories.map( (category) => {
                    return <GiftGrid key={category} category={category} />
                })
            }
        </>
    );
}


export default GifExpertApp;
