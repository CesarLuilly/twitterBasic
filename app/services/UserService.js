const User = require("../models/User")

class UserService {
    constructor(
        id, 
        userName,
        name
    ){
        this.id = id 
        this.userName = userName 
        this.name = name 
    }
    
    static Create(
        id, 
        userName,
        name
        )
    {
        return new User(id, userName, name, "Sin bio")
    }

    static getInfo(user){
        let arrInfo = [];
        arrInfo.push(user.id)
        arrInfo.push(user.username)
        arrInfo.push(user.name)
        arrInfo.push(user.bio)
        return arrInfo
    }

    static updateUsername(user, userName){
        user.setUserName = userName
    }

    static getAllUsernames(users){
        return users.map(user => user.username);
    }
}

module.exports = UserService;