const Category = require('./category');
const Picture = require('./picture');
const Figurine = require('./figurine');
const User = require('./user');
const Comment = require('./comment');

User.hasMany(Figurine , {
    as:'figurines',
    foreignKey:'user_id'
});

Figurine.belongsTo(User , {
    as:'user_figurines',
    foreignKey:'user_id'
});

Figurine.belongsTo(Category , {
    as:'category',
    foreignKey:category_id
});

Category.hasMany(Figurine , {
    as : 'figurines',
    foreignKey:category_id
});

Comment.belongsTo(User , {
    as:'users_comment',
    foreignKey:'user_id'
});

User.hasMany(Comment , {
    as:'comments',
    foreignKey:'user_id'
});

Comment.belongsTo(Figurine , {
    as:'figurine',
    foreignKey:'figurine_id'
})
Figurine.hasMany(Comment , {
    as:'figurine_comments',
    foreignKey:'figurine_id'
})

Picture.belongsTo(Figurine , {
    as:'figurine',
    foreignKey:'figurine_id'
})
Figurine.hasMany(Picture , {
    as:'figurine_pictures',
    foreignKey:'figurine_id'
});

module.exports = {Category , Picture , Figurine , User , Comment}