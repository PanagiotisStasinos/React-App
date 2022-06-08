import axios from 'axios'

const TEST_API_URL = 'http://localhost:8080/product/';

class Test {

    getProducts(){
        return axios.get(TEST_API_URL);
    }
}

export default new Test();