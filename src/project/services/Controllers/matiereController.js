import  axios from  'axios'
import * as Constant from '../constant'
export default class matiereController {
Add(data) {
    return axios.post(Constant.creatematiere_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getmatiere_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneMatiereById(id) {
    return axios.get(Constant.getOnematiere_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
update(id,data) {
    return axios.put(Constant.updatematiere_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deletematiere_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}