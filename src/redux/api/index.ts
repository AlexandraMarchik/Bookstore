import {create} from "apisauce";


const API = create({
    baseURL: "https://api.itbook.store/1.0/",
})
const getBooks = ()=>{
    return API.get("/new" , )
}


export default {
    getBooks,
    };