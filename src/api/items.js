import axios from 'axios';

export default class ApiItems {
    static getList(limit) {
        return axios.get("http://localhost:3001/api/items?limit=" + limit);
    }
}