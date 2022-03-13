import {clientApi} from "./clientApi";

const getSearchedAccommodation = () => {
    return new Promise((resolve, reject) => {
        clientApi('accommodations')
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

const getAccommodation = id => {
    return new Promise((resolve, reject) => {
        clientApi(`accommodations/${id}`)
            .then(data=>resolve(data))
            .catch(err=> reject(err))
    })
}

export {getSearchedAccommodation,getAccommodation}