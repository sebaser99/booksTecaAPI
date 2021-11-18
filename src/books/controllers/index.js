const pool = require('../../db')
const {queryGetBooks, queryGetBookByID, queryCreateBook, queryDeleteBook, queryUpdateBook,
queryUpdateLike, queryUpdateDislike} = require('../queries/index')

const getBooks = async (req, res)=>{
    try{
        const response = await pool.query(queryGetBooks)
        res.json(response)


    }catch(err){
        res.status(404).json("Ocurrió un error")
    }
}   

const getBookByID = async (req, res)=>{
    const id = parseInt(req.params.id)
    try{
        const response = await pool.query(queryGetBookByID, [id])
        if(response.rows.length === 0){
            res.json({
                "status": false,
                "message": "el libro consultado no existe"
            })
        }
        res.json({
                "status": true,
                "data":  response.rows
           })


    }catch(err){
        res.status(404).json("Ocurrió un error")
    }
} 
const createBook = async (req, res)=>{
    const {author, title} = req.body

    try{
        const response = await pool.query(queryCreateBook, [title, author])
        res.json(response)


    }catch(err){
        res.status(404).json("Ocurrió un error")
    }
} 

const deleteBook = async (req, res)=>{
    const id = req.params.id

    try{
        const response = await pool.query(queryDeleteBook, [id])
        res.json(`El elemento con id ${id} ha sido eliminado satisfactoriamente `)


    }catch(err){
        res.status(404).json("Ocurrió un error")
    }
} 
const updateBook = async (req, res)=>{
    const id = req.params.id
    const {title, author} = req.body

    try{
        const response = await pool.query(queryUpdateBook, [title, author, id])
        res.json(`El elemento con id ${id} ha sido actualizado satisfactoriamente ${response.rows} `)


    }catch(err){
        res.status(404).json("Ocurrió un error")
    }
} 

const rating = async (req, res)=>{
    const id = req.params.id
    const {like} = req.body
    console.log(req.body)
    const book =  await pool.query(queryGetBookByID, [id])
    if(like){
        let numeroLikes = book.rows[0].likes
        const response = await pool.query(queryUpdateLike, [(numeroLikes + 1), id])
        
        res.json({
            "status": true,
            "message": "Tu calificación se ha aplicado correctamente"
        })
    }else{
        let numeroDislikes = book.rows[0].dislikes
        const response = await pool.query(queryUpdateDislike, [(numeroDislikes + 1), id])
        res.json({
            "status": true,
            "message": "Tu calificación se ha aplicado correctamente"
        })

    }


}

module.exports = {
    getBooks,
    getBookByID, 
    createBook, 
    deleteBook,
    updateBook,
    rating
}