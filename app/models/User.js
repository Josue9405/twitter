function getCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}

class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id ? id : Date.now();//id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = dateCreated ? dateCreated : getCurrentDate();
        this.lastUpdated = lastUpdated ? lastUpdated : getCurrentDate();
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name
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

module.exports = User