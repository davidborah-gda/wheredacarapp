module.exports = function errorHandler(err, req, res, next){
    res.status(err.status || 500).json({
        msg: err.msg || 'Internal Server Error Please Try Again later.'
    });
};