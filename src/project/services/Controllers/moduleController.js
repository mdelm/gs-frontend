import  axios from  'axios'
import * as Constant from '../constant'
export default class moduleController {
Add(data) {
    return axios.post(Constant.createmodule_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getmodule_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneModuleById(id) {
    return axios.get(Constant.getOnemodule_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
updateModule(id,data) {
    return axios.put(Constant.updatemodule_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deletemodule_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}