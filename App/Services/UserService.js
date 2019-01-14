const DatabaseFactory = require('../Classes/DatabaseFactory');
const conn = DatabaseFactory.getConnection();
const User = require('../Models/User.js');

module.exports = class UserService{
    static get(id, callback){
        // new User().get(id, callback);
        User.findById(id, callback);
        // User.findByFields({id:id}, callback);
    }

    static save(obj, callback){
        var user = new User();
        user.fill(obj);
        if(obj.id)
            user.id = obj.id;
        user.save(callback);
    }

    static delete(id, callback){
        var user = new User();
        user.id = id;
        user.delete(callback);
    }
}