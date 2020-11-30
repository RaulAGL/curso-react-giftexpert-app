
import  {useState, useEffect} from 'react';
import {getGifts} from "../helpers/getGifts";

export const useFetchGifts = (category) => {

    const [state,setState] = useState({
        data : [], loading : true
    });


    useEffect(() => {

    setTimeout( () => {
        getGifts(category).then(images => {
            setState({
                data: images,
                loading: false
            })
        })
    },5000)
    },[category])

    return state
}
