'use strict'

// stolen form Phil's code
module.exports = (req, res, next) => {
    let name = req.query.name;
    if(!name) { 
        next(`Name Required`);
    } else { next(); }
}

// my original code
// module.exports = (req, res, next) => {
//     if(!req.query.name) { next(500) }
//     next();
// }