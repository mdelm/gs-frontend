import  axios from  'axios'
import * as Constant from '../../services/constant'
export default class userController {
Add(data) {
    return axios.post(Constant.createuser_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getUser_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneUserById(id) {
    return axios.get(Constant.getOneUser_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
update(id,data) {
    return axios.put(Constant.updateUser_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deleteUser_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
login(data) {
    return axios.post(Constant.loGIN_URL ,data).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}
authenticate(data){
    return axios.post(Constant.AUTH_URL,data).then(res=>{
        return res
    }).catch(err=>{
        return err
    }) 
}
logout(data) {
    return axios.post(Constant.loGOUT_URL,data).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}
refreshToken(data) {
return axios.post(Constant.refresh_URL,data).then(res=>{
    return res
}).catch(err=>{
    return err
})
}
authenticateAdmin(data){
    return axios.post(Constant.AUTHAdmin_URL,data).then(res=>{
        return res
    }).catch(err=>{
        return err
    }) 
}
authenticateEtudiant(data){
    return axios.post(Constant.AUTHEtudiant_URL,data).then(res=>{
        return res
    }).catch(err=>{
        return err
    }) 
}
authenticateEnseignant(data){
    return axios.post(Constant.AUTHEnseignant_URL,data).then(res=>{
        return res
    }).catch(err=>{
        return err
    }) 
}
}