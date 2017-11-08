import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import mockData from '../mock'
const mockApi = new AxiosMockAdapter(axios)
mockApi.onGet('/getStaffList').reply((config) => {
  let data = mockData.staffData.splice(0, 20)
  return [200, data]
})
export default axios
