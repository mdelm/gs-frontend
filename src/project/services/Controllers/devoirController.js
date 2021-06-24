import  axios from  'axios'
import * as Constant from '../constant'
export default class devoirController {
Add(data) {
    return axios.post(Constant.createDevoir_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getDevoir_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneDevoirsById(id) {
    return axios.get(Constant.getOneDevoir_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
update(id,data) {
    return axios.put(Constant.updateDevoir_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deleteDevoir_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}