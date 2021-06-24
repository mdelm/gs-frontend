import  axios from  'axios'
import * as Constant from '../constant'
export default class noteController {
Add(data) {
    return axios.post(Constant.createnote_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.getnote_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
update(id,data) {
    return axios.put(Constant.updatenote_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}