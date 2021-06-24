import  axios from  'axios'
import * as Constant from '../constant'
export default class salleController {
Add(data) {
    return axios.post(Constant.createsalle_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getsalle_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneSalleById(id) {
    return axios.get(Constant.getOnesalle_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
updateSalle(id,data) {
    return axios.put(Constant.updatesalle_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deletesalle_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}