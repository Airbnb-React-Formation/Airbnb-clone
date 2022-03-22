

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
        .catch(err=>reject("erreur de l'opération fetch :" +err.message))
    })
}

const clientAuth = (endpoint, {token, data} = {}) => {
    let config = {
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
            'Content-Type': data ? 'application/json' : undefined,
        },
        method : data ? 'POST' : 'GET',
    }
    if(data) config = {...config,body:JSON.stringify(data)}
    return fetch(`/auth/${endpoint}`,config)
}

export {
    clientApi,
    clientAuth
}