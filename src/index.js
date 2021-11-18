const express = require('express');
const app = express()
const booksRoutes = require('./books/routes/index')
const port = 3000;

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//port config
app.listen(port)
console.log(`Server running on port ${port}`)


//Home
app.get('/', (req, res)=>{
    res.send("Bienvenido a la API de Books. Tipea '/api/v1/books' para obetner todos los libros ")
})

//ruta de la api
app.use('/api/v1/books', booksRoutes)

