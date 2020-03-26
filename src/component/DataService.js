import axios from 'axios'

const EMPLOYEE = 'manageEmp'
const EMP_PORTAL_URL = 'http://localhost:8089'
const EMPLOYEE_URL = `${EMP_PORTAL_URL}/empPort/${EMPLOYEE}`
class DataService {

    retrieveAllemployee() {
        return axios.get(`${EMPLOYEE_URL}/viewAllEmp`);
    }
    deletEmployee(id) {
        //console.log('executed service')
        return axios.delete(`${EMPLOYEE_URL}/delEmp?employeeId=${id}`);
    }
    createEmployee(employee) {
        return axios.post(`${EMPLOYEE_URL}/addEmp/`, employee);
    }

}export default new DataService()