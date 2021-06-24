import  axios from  'axios'
import * as Constant from '../../services/constant'
export default class enseignantController {
Add(data) {
    return axios.post(Constant.createEnseignant_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getEnseignant_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneEseignantById(id) {
    return axios.get(Constant.getOneEnseignant_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
update(id,data) {
    return axios.put(Constant.updateEnseignant_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deleteEnseignant_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}