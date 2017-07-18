import axios from 'axios';

export default class ApiItems {

    static getList(limit) {
        const base = String(API_URL);
        return axios.get(base+"/api/items?limit=" + limit);
    }
}