import axios from "axios";

const blogRequest=axios.create({
    baseURL:'http://localhost:3000/blogs/'
});
const commodityRequest=axios.create({
    baseURL:'http://localhost:3000/commoditys/'
});

export const getblogData=(id)=>blogRequest.get(id);
export const getcommodityData=(id)=>commodityRequest.get(id);