const {Router} = require('express');
const router = Router();
const {getBooks, getBookByID, createBook, deleteBook, updateBook, rating} = require('../controllers/index')

router.get('/', getBooks )
router.get('/:id', getBookByID)
router.post('/', createBook)
router.delete('/:id', deleteBook)
router.put('/:id', updateBook)
router.post('/rating/:id', rating )


module.exports = router;