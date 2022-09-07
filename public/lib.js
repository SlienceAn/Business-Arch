import axios from 'axios';

const arr = [];
export const getAllBody = (body) => {
    Object.values(body).map(el => {
        if (Array.isArray(el)) {
            el.map(ctx => getAllBody(ctx))
        } else {
            arr.push(el)
        }
    })
    return arr;
}

export const useAxios = (config) => {
    let res = ""
    let error = ""
    axios({
        ...config,
    })
        .then(result => res = result)
        .catch(err => error = err)
    return { res, error }
}
