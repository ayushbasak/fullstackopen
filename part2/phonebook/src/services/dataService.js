import axios from 'axios'
const baseUrl = 'http://localhost:3001/people'

const getAll = ()=>{
    return axios.get(baseUrl);
}

const create = (newObject)=>{
    return axios.post(baseUrl,newObject);
}

const update = (id, newObject)=>{
    return axios.put(`${baseUrl}/${id}`, newObject);
}

const deleteId = async (id)=>{
    let y = await axios.delete(`${baseUrl}/${id}`);
    return y;
}

const deleteAll = async ()=>{
    let data = await getAll().then(response => response.data);
    let id = data.map(curr => curr.id);
    id.map(curr => deleteId(curr).then(response => console.log(response)));
}

const dataService = {
    getAll: getAll,
    create : create,
    update : update,
    delete: deleteId,
    deleteAll: deleteAll
};
export default dataService