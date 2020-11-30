
const api_key = 'z6j0PqgkESBaeEzaPPPsVlbT7w7BfgFr';

export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=${api_key}`;

    const response = await fetch(url);
    const {data} = await response.json();

    return data.map( img => {
        return {
            id: img.id,
            title : img.title,
            url: img.images.downsized.url
        }
    });


}
