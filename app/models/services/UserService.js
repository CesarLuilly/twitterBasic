class UserService {
    constructor(
        id, 
        userName,
        name
    ){
        this.id = id 
        this.userName = userName 
        this.name = name 
        this.bio = "Sin bio"
    }

    set setUserName(userName){
        this.userName = userName
    }
    
    static Create(
        id, 
        userName,
        name
        )
    {
        return new UserService(id, userName, name)
    }

    static getInfo(user){
        let arrInfo = [];
        arrInfo.push(user.id)
        arrInfo.push(user.userName)
        arrInfo.push(user.name)
        arrInfo.push(user.bio)
        return arrInfo
    }

    static updateUsername(user, userName){
        user.setUserName = userName
    }

    static getAllUsernames(users){
        return users.map(user => user.userName);
    }
}

module.exports = UserService;