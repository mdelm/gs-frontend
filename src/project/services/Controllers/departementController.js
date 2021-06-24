import  axios from  'axios'
import * as Constant from '../constant'
export default class departementController {
Add(data) {
    return axios.post(Constant.createDepartement_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getDepartement_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneDepartementById(id) {
    return axios.get(Constant.getOneDepartement_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
updateDepartement(id,data) {
    return axios.put(Constant.updateDepartement_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}

deleteDepartement(id) {
    return axios.delete(Constant.deleteDepartement_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}