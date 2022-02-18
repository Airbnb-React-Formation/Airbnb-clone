
export const asistance = [
    {"id" : "lien1", "to" : "https://www.airbnb.fr/help/home?from=footer", "label" : "Centre d/'aide"},
    {"id" : "lien2", "to" : "https://www.airbnb.fr/trust", "label" : "information de sécurité"},
    {"id" : "lien3", "to" : "https://www.airbnb.fr/help/article/2701/politique-relative-aux-cas-de-force-majeure-et-coronavirus-covid19", label:"Option d /'annulation"},
    {"id" : "lien4", "to" : "https://www.airbnb.fr/accessibility", "label" : "Nos meusure facce au covid-19"},
    {"id" : "lien5", "to" : "https://www.airbnb.fr/accessibility", "label" : "Soutenir les personnes en situation de handicap"},
    {"id" : "lien6", "to" : "https://www.airbnb.fr/neighbors", "label" : "signaler un problème de voisinage"}
]

export const communauté = [
    {id : "lien7",to : "https://fr.airbnb.org/?_ga=2.201301358.1310875223.1644778250-1564302037.1644778250&_set_bev_on_new_domain=1644789241_NTFhNjZlM2IwZjIz", label:"Airbnb.org : réponse au catastrophes"},
    {id : "lien8",to : "https://fr.airbnb.org/refugees?_ga=2.29340028.1310875223.1644778250-1564302037.1644778250&_set_bev_on_new_domain=1644789241_NTFhNjZlM2IwZjIz", label:"Soutenir les réfugiers afghans"},
    {id : "lien9",to : "https://www.airbnb.fr/diversity", label:"La diversité et l/'intégration"},
    {id : "lien10",to : "https://www.airbnb.fr/against-discrimination", label:"Lutte contre la discrimination"}
]

export const acceuilEtVoyageur = [
    {id : "lien11",to : "https://www.airbnb.fr/host/homes?from_footer=1", label:"Devenir hôte"},
    {id : "lien12",to : "https://www.airbnb.fr/aircover", label:"AirCover: protect"},
    {id : "lien13",to : "https://www.airbnb.fr/resources/hosting-homes", label:"Ressource pour les hôtes"},
    {id : "lien14",to : "https://community.withairbnb.com/t5/Community-Center-FR/ct-p/community-center-fr", label:"Forum de le communauté"},
    {id : "lien15",to : "https://www.airbnb.fr/help/article/1383/h%C3%A9bergement-responsable-en-france", label:"Accueillir de manière responsable"}
]

export const aPropos = [
    {id : "lien16",to : "https://news.airbnb.com/fr/", label:'Newsroom'},
    {id : "lien17",to : "https://www.airbnb.fr/2021-winter", label:'En savoir plus sur les nouveauté'},
    {id : "lien18",to : "https://news.airbnb.com/what-makes-airbnb-airbnb/", label:'Lettre de nos fondateurs'},
    {id : "lien19",to : "https://careers.airbnb.com/", label:"Carrières"},
    {id : "lien20",to : "https://investors.airbnb.com/home/default.aspx", label:"Investisseurs"},
    {id : "lien21",to : "https://www.airbnb.fr/luxury", label:"Airbnb Luxe"}
]

export function fetchApiFalse (){
    return {asistance, communauté, acceuilEtVoyageur, aPropos}
    
}