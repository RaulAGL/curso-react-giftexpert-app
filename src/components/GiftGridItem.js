
import React from 'react';

const GiftGridItem = ({title,url, id}) => {

    return (
        <>
            <div className="card animate__animated animate__fadeIn  ">
                <img src={url} alt={title}/>
                <p>{title}</p>
            </div>
        </>
    );
}


export default GiftGridItem;
