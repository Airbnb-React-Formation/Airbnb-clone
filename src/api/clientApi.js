export const clientApi = async endpoint => {
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