const Admin = require('./Admin');
const Beverage = require('./Beverage');
const Entree = require('./Entree');


/* needs to be commented out

Admin.hasMany(Beverage, {
 onDelete: 'CASCADE',
});

Admin.hasMany(Entree, {
 onDelete: 'CASCADE',
});

*/



module.exports = { Admin, Beverage, Entree };
