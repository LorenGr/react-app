import axios from 'axios';

const base = String(API_URL);

export default class ApiItems {

    static getList(limit) {

        return axios.get(
            base
            + "/api/items"
            + (limit ? "?limit=" + limit : ""));
    }

    static editList(payload) {
        return axios.put(
            base
            + "/api/items/"
            + payload[0]['_id']
            , payload[0]);
    }

    static deleteList(payload) {
        return axios.delete(
            base
            + "/api/items/"
            + payload);
    }

    static addList(payload) {
        return axios.post(
            base
            + "/api/items"
            , payload[0]);
    }
}