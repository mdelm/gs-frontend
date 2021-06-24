import  axios from  'axios'
import * as Constant from '../constant'
export default class filiereController {
Add(data) {
    return axios.post(Constant.createfiliere_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getfiliere_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneFiliereById(id) {
    return axios.get(Constant.getOnefiliere_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
updateFiliere(id,data) {
    return axios.put(Constant.updatefiliere_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deletefiliere_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}