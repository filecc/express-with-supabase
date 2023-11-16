module.exports = function (err, req, res, next) {
    
    res.status(500).json({
        error: err.message,
        status: err.status,
        code: err.code
    });
};

