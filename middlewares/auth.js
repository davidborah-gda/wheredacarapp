const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
const tokenWithBearer = req.headers.authorization;
//is there a token
if(!tokenWithBearer) {
    return next({msg: 'Unauthorized', status: 401 });
}
const isValid = tokenWithBearer.includes('Bearer');
//is the token formatted appropriately
if(!isValid) {
    return next({msg: 'Unauthorized', status: 401 });
}
//this removes the 'Bearer ' part leaving just the token
const token = tokenWithBearer.slice(7);
try {
    const payload = jwt.verify(token, process.env.SECRET);
    req.email = payload.eamil;
    req.id = payload.id;
    return next();
}
catch(err){
    return next({msg: 'Unauthorized', status: 401 });
 }
}