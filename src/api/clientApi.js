import {getToken} from "./authApi";
import searchParamsToObject from "../helper/searchParamsToObject";


const clientApi = async endpoint => {
    return new Promise((resolve, reject) => {
        fetch(`/api/${endpoint}`)
            .then(res => {
                if (res.ok) {
                    resolve(res.json())
                } else {
                    reject('Erreur lors de la récupération des données')
                }
            })
            .catch(err => reject("erreur de l'opération fetch :" + err.message))
    })
}

const clientAuth = (endpoint, {token, data} = {}) => {
    let config = {
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
            'Content-Type': 'application/json',
        },
        method: data ? 'POST' : 'GET',
    }
    if (data) config = {...config, body: JSON.stringify(data)}
    return fetch(`/auth/${endpoint}`, config)
}

const saveSearchHistory = async (search) => {
    const token = await getToken()
    const data = {search}
    clientAuth('search-history', {token, data})
        .catch(err => console.log(err))
}

const getSearchHistory = async () => {
    const token = await getToken()
    return clientAuth('search-history', {token}).then(res => res.json())
        .then(data => {
            return data?.map(search => {
                const query = searchParamsToObject(search)
                return {
                    url: search,
                    destination: query.destination,
                    startDate: query.startdate,
                    endDate: query.enddate
                }
            })

        })
        .catch(err => console.log(err))

}

export {
    clientApi,
    clientAuth,
    saveSearchHistory,
    getSearchHistory,
}