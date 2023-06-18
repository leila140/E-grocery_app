import * as type  from "./typeActionCurrentUser";
export function login(email,nom,civilite,profile){
    return{type:type.LOGIN,payload:{email:email,nom:nom,civilite:civilite,profile:profile}}
}

export function logout(){
    return {type:type.LOGOUT}
}