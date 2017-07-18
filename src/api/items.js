import axios from 'axios';

export default class ApiItems {
    static getList(limit) {
        return axios.get("api/items?limit=" + limit);
    }
}