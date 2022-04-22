const UserService = require('./../services/UserService')

class Resp{
    constructor(user,error){
        this.user = user
        this.error = error
    }
}

class UserView{

    static resp = new Resp()

    static createUser(payload){
        if (payload == null){
            this.resp.error = "Payload no existe"
        }else if(!payload.hasOwnProperty('username') || !payload.hasOwnProperty('name') || !payload.hasOwnProperty('id') ){
            this.resp.error = "Propiedades faltantes"
        }else if(payload.id == null || payload.username == null || payload.name == null || payload.id == null){
            this.resp.error = "Datos inválidos"
        }else{
            this.resp.user = UserService.create(payload.id,payload.username,payload.name)
        }
        return this.resp
    }
}

module.exports = UserView