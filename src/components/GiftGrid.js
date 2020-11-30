import React from 'react';
import GiftGridItem from "./GiftGridItem";
import {useFetchGifts} from "../hooks/useFetchGifts";


const GiftGrid = ({ category}) => {

    const {data, loading} = useFetchGifts(category);

    return (
        <>
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Cargando</p> }
            <div className="card-grid">
                {
                    data.map( (img) => (<GiftGridItem key={img.id} {...img} />    ) )
                }
            </div>
        </>
    )

}


export default GiftGrid;


