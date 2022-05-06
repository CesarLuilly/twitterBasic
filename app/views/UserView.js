const UserService = require("./../services/UserService")

class UserView {
    
    static createUser(
        payload
    ){
        if(
            //  //Payload is null
            payload === null
        ){
            console.log("Error es null");
            return {error: "El payload no existe."}
        }else if(
            //  //All properies from payload has a value.
            typeof payload.username === 'string' && 
            typeof payload.name === 'string' &&
            typeof payload.id === 'number'
        ){
            return UserService.Create(payload.id, payload.username, payload.name)
        }else{
            return {error:"Error, las propiedades del payload necesitan tener un valor valido"}
        }
    }
}

module.exports = UserView