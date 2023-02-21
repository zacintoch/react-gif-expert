{/*Si pones un await tienes que agregar un async al principio*/}
//para crear esa url tienes que crear un proyecto en la pagina de Postman, luego
//entrar a la pagina de giphy developers y copiar el Gif URL que te dan ahi 
// y pegarlo en donde dice GET en el proyecto de Postman luego agregarle esto :"?" seguido de api_key= ,seguido de
// luego copiar el API key que te ha generado el Giphy en tu cuenta llamada zakintoch, en el GifExpertApp, copar ese api y pegarla en el postman 
// luego poner "&q=" seguido de el numero que quieras ponerle. 
// LUEGO COPIAR TODA ESA URL EN EL ARCHIVO : getGifs.js 

export    const getGifs = async( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=bYThwKL2uUMLWCF29J8vkMWNBbSJi9t1&q=${category}&limit=10`
        const resp= await fetch (url);
        const {data} = await resp.json();

        const gifs= data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }));

        
        return gifs;

    }