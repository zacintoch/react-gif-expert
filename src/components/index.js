export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';


// este archivo sirve para no tener la necesidad de poner tantos imports dentro del mismo archivo donde se quiere importar algo como:
// import { AddCategory } from "./components/AddCategory.jsx";
// import { GifGrid } from "../components/GifGrid.jsx";

//cuando creas este archivo index.js con los exports, puedes hacerlo de esta manera mas facil dentro del archivo donde quieras importar:
//import { AddCategory, GifGrid } from './components';

//un solo import y dentro de las llaves los componentes y listo!


