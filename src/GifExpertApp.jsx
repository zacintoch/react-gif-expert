import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


//Empezar con el comando rafc le damos enter y nos saldra el export con el const gifexp.. y el return
//le agregamos los signos mayores y menores de fragments en el return
// para crear categorias con listas poner debajo del export useState y la opcion de abajo y te saldra para poner la categories y el setCategories con el useState y 
// y de ahi le puedes poner lo que quieras como one punch man dragon ball demon slayer, etc

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes(newCategory)) return;
        
        setCategories([ newCategory, ...categories ]);
    }

        return (    
            <>
               {/* titulo */} 
                <h1>GifExpertApp</h1>
                {/* Input */}
                <AddCategory 
                //setCategories= {setCategories}  {/*aca se le pone input pero despues se le cambia por AddCategory para poder agregarle un texto de categoria como ejemplo : buscar gifs en el recuadro que se creo*/}
                
                    onNewCategory= {(value) => onAddCategory(value)}
                    //currentCategories= { categories}

                />  
                

                {  
                    categories.map(( category ) => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                        ))
                }        
            
        </>
    )
}


