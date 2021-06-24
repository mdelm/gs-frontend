import  axios from  'axios'
import * as Constant from '../constant'
export default class attestationController {
Add(data) {
    return axios.post(Constant.create_pdf_URL, data).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}
getall() {
    return axios.get(Constant.fetch_pdf_URL).then(res => {
        return res 
    }).catch(err => {
        return err
    })
}

}