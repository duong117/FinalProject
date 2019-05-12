import axios from 'axios'

const base_url='/api/clients'
export default{
    getAllClients(){
        return axios.get(base_url).then(response=>{
            return response.data
        })
    },
    addClient(client) {
        return axios.post(base_url,client).then(response =>{
            return response.data
        })
    },
    updateClient(client){
        return axios.patch(`${base_url}/${client.id}`,client).then(response =>{
            return response.data
        })
    },
    deleteClient(id){
        return axios.delete(`${base_url}/${id}`).then(response =>{
            return response.data
        })
    }
}
