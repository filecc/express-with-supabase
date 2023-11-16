const supabase = require('../lib/supabase');
const CustomError = require('../lib/CustomError');

async function index (req, res, next) {
    const {data, error} = await supabase.from('posts').select('*');
    if (error) {
        next(new CustomError(error.message, 'NOTHING IN DB',  668));
        return
    }
    else {
        res.status(200).json(data);
    }
}

async function show (req, res, next) {
    const {data, error} = await supabase.from('posts').select('*').eq('slug', req.params.slug);
    if (error) {
        next(new CustomError(error.message, 'BAD_REQUEST',  669));
        return
    } else if (data.length === 0) {
        next(new CustomError('Post not found', 'NOT_FOUND', 700));
        return
    }
   
    res.status(200).json(data);
    
}


module.exports = {
    index,
    show
}