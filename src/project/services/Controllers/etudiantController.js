import  axios from  'axios'
import * as Constant from '../../services/constant'
export default class etudiantController {
Add(data) {
    return axios.post(Constant.createEtudiant_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getEtudiant_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneEtudiantById(id) {
    return axios.get(Constant.getOneEtudiant_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
UpdateEtudiant(id,data) {
    return axios.put(Constant.updateEtudiant_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deleteEtudiant_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}