import  { createContext } from 'react';

const UserContext = createContext()


// formas de exportar componentes: la primera permite importar con cualquier nombre que quieras, la segunda solo te deja usar el nombre con el que lo exportas
export default UserContext
// import lala from "./userContext.jsx"


// esta forma de exportarlo hace que el vs code lo importe mejor y se autocomplete al momento de querer importarlo 
// export { UserContext }
// import {UserContext}

