export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SLeZlH9FB0UF1W32e3ZibT3KMKpg0viR&q=${encodeURI(category)}&limit=20&offset=0&rating=g&lang=es`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs =  data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return( gifs );

}
