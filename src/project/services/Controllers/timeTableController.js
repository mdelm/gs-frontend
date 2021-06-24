import  axios from  'axios'
import * as Constant from '../constant'
export default class timeTableController {
Add(data) {
    return axios.post(Constant.createtimeTable_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.gettimeTable_URL).then(res => {
        return res  
    }).catch(err => {
        return err
    })
}
getoneTimeTableById(id) {
    return axios.get(Constant.getOnetimeTable_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
updateTimeTable(id,data) {
    return axios.put(Constant.updatetimeTable_URL+id,data).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
    delete(id) {
    return axios.delete(Constant.deletetimeTable_URL+id).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
}