

import React, { useState } from 'react'
// el input 
//{/* este type y placeholder es para poner en el recuadro donde escribiremos, aparecera en el recuadro blanco: buscar gifs*/}
// el oninputchange = { oninputchange} es para que cambie el texto predeterminado que es 'one punch',  cuando nosotros queramos editarlo en el recuadro y queramos poner otra cosa
// el onsubmit es para poder cambiar el valor predeterminado que le pusimos, osea 'one punch' , porque si lo dejamos solo con el oninputchange no vamos a poder editarlo, por eso se usa el onsubmit para que cuando escribamos podemos borrar el 'one punch' y poner el nombre que deseemos
// form para poner un formulario 

//siempre que pongas un valor en el return que adjudique a una accion, siempre colocarle arriba del return su constante const 
//para no hacer un refresh del navegador web ponerle el event.preventDefault()

// el if input value trim . length <= 1 return , es para hacer que cuando tu escribas en el recuadro se borre lo que has escrito y vuelvas a escribir otra cosa
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('One Punch');
    
    const OnInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim() .length <= 1) return;

      //  setCategories( categories => [ inputValue, ...categories]);
    
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (   
        <form onSubmit= {onSubmit}>
            <p> Galeria de gifs </p>
            
            <input                
                type= "text"
                placeholder="Buscar Gifs"
                value= { inputValue } 
                onChange= { OnInputChange }  
                
                

            />
        </form>    

        
    )
}
