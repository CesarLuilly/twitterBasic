class User {
    constructor(
        id,
        username,
        name,
        bio,
        dateCreated, 
        lastUpdated
        )
    {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = Date.now();
        this.lastUpdated = Date.now();
    }

    get getUserName(){
        return this.username
    }

    get getBio(){
        return this.bio
    }
    
    get getDateCreated(){
        return this.dateCreated
    }
    
    get getLastUpdated(){
        return this.lastUpdated
    }

    set setUserName(userName){
        this.username = userName
    }
    
    set setBio(bio){
        this.bio = bio
    }
}

module.exports = User;



