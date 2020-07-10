Esta es una aplicacion donde puedes ver un listado de libros. Hay 30 libros en total y cada libro tiene 6 paginas. siga las instrucciones debajo para ver como funciona.

para instalarlo una vez descargado em proyecto, correr el siguiente comando: npm install.
una vez ejecutado el comando para empezar a correr el proyecto ejecutar el siguiente comando: npm run start

Cómo funciona?
para ver el listado de libros debe poner en la url "/api/books" y quedaría así "http://localhost:3000/api/books"
esto traerá el listado de libros que hay en la base de datos.
puede limitar la busquda mediante un query string. ej: "http://localhost:3000/api/books?limit=5"

para ver un libro en específico, añada el id a la url seguido de un /. "http://localhost:3000/api/book/5f08b8cce8a6b6052081b90c"

para ver las páginas que contiene ese libro añada pages al final de la url. ej: "http://localhost:3000/api/book/5f08ba05e8a6b6052081b913/pages"
tambien puede limitar las páginas mediante un query string. ej: "http://localhost:3000/api/book/5f08ba05e8a6b6052081b913/pages?limit=2"

y finalmente puede ver una pagina de un libro en especifico. con la siguiente url: "http://localhost:3000/api/book/5f08ba05e8a6b6052081b913/page/page1/html"
puede especificar el formato que quiere si es html o json, especificancolo al final

si es json sería: "http://localhost:3000/api/book/5f08ba05e8a6b6052081b913/page/page1/json".

