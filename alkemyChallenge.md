# CHALLENGE REACT

## Objetivo

Desarrollar una aplicación para crear un equipo de superhéroes. La misma consumirá una API externa y
deberá mostrar diferentes atributos a nivel individual de cada miembro y del equipo consolidado.
Requerimientos técnicos

Consumir la API https://superheroapi.com/ en sus diferentes endpoints para realizar las diferentes
operaciones. Para realizar peticiones a la misma, deberás autenticarte con Facebook.

Adicionalmente, las diferentes secciones que tendrá la app deberán protegerse verificando que el usuario
autenticado disponga de un token que se almacenará en localStorage. El mismo se obtendrá de una API
con datos de muestra. Si un usuario intenta ingresar a cualquier ruta sin estar autenticado, deberá ser
redirigido al login.

La aplicación permitirá constituir un equipo de super heroes en base a la interacción con la API.

## Los componentes que deberá tener son:

### Formulario de Login

El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado. Deberá
contener los campos email y password.

Al hacer el submit del formulario, se deberá validar que ambos campos no estén vacíos, y mostrar un
mensaje al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la url
http://challenge-react.alkemy.org, con los campos email y password en el BODY.

Los datos válidos para obtener un token son:
email: challenge@alkemy.org
password: react

En el caso de obtener un error de la API, se deberá mostrar una alerta, caso contrario, redirigir al Home,
y almacenar el token obtenido en localStorage (el mismo se validará para determinar si el usuario estáautenticado o no).

### Equipo DONE

El Home de la aplicación mostrará a los miembros del equipo en un listado en grilla. Cada ítem del
listado contendrá el nombre del héroe, su imagen, y sus powerstats, y las acciones para ver el detalle o
eliminarlo del equipo. DONE

### Buscador de Héroes DONE

Para agregar un héroe a su equipo, se deberá visualizar un formulario que realice una petición GET al
endpoint de búsqueda y muestre los resultados disponibles. Esos resultados deberán mostrar imagen,
nombre del héroe y un botón para “Agregar al equipo”. DONE

### Detalle de Héroe DONE

Al hacer click en un héroe del equipo, se mostrarán los detalles que figuran en el endpoint. De ellos,
mostrar al menos: peso, altura, nombre completo, alias, color de ojos y cabello, y su lugar de trabajo. DONE

## Requerimientos funcionales DONE

En la pantalla de Home se deberá mostrar, además de los miembros del equipo:
● Acumulativo de powerstats, agrupados por cada uno, es decir: suma total de intelligence,
strength, etc. de todos los miembros individuales del equipo. DONE
● El powerstat que más acumulativo tenga debería aparecer arriba para categorizar el tipo
de equipo (inteligencia, fuerza, etc.). DONE
● Pesos y altura promedio del equipo. DONE
● El equipo debe tener 6 miembros. Debe haber 3 miembros con orientación buena y 3 con
orientación mala. Esto debe validarse al intentar agregar un nuevo héroe. DONE
● Se deberá poder eliminar un miembro del equipo, lo que generará un nuevo promedio de
peso, acumulativo de powerstats, etc. DONE

## Criterios a evaluar

● Diseño responsive, moderno e intuitivo.
● Puede ser algo minimalista, sencillo, pero funcional. Se puede usar cualquier framework
de CSS como Bootstrap, Materialize, Bulma.
● Conocimientos básicos de React
● Validación de los formularios
● Buenas prácticas de codificación
● Buenas prácticas para nombre de rutas

## Tests

De forma opcional, se podrán agregar tests unitarios para validar los elementos de la App:

- Verificación de usuario autenticado al ingresar a una ruta
- Validación de campos en submit de formulario de login o búsqueda
- Manejo de excepciones al obtener errores de la API
