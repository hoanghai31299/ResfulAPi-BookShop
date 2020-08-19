const Book = require('../models/books.model');

module.exports.getAllBooks = async(req,res,next)=>{
    try{
        const books = await Book.find().lean();
        return res.json({books,message:'success'});
    }
    catch(e){
        next(e)
    }
}
module.exports.getBookById = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const book = await Book.findById(id).lean();
        return res.json({books:book,message:"success"});
    }
    catch(e){
        next(e)
    }
}
module.exports.getBookByName = async(req,res,next)=>{
    try{
        const name = req.query.name;
        const books = await Book.find().lean();
        const found = books.filter(book => {
            return book.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        })
        return res.json({books:found,message:'success'})
    }
    catch(e){
        next(e)
    }
}