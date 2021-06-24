import  axios from  'axios'
import * as Constant from '../constant'
export default class coursController {
Add(data) {
    return axios.post(Constant.createCours_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getCours_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getoneCoursById(id) {
    return axios.get(Constant.getOneCours_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
update(id,data) {
    return axios.put(Constant.updateCours_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deleteCours_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}