import placeTypeEnum from "./placeType.json"
import housingTypeEnum from "./housingType.json"



const getPlaceType = ([placeTypeId,precisePlaceTypeId]) => {
    const placeType = placeTypeEnum.find(placeType => placeType.id === placeTypeId)
    const precisePlaceType = placeType.placeKind.find(precisePlaceType => precisePlaceType.id === precisePlaceTypeId)
    return precisePlaceType.name
}
const getHousingType = (id) => {
    console.log(id)
    const housingType = housingTypeEnum.find(housingType => housingType.id === id)
    return housingType.name
}

const hydrateAccommodations = (list,place) => {
    console.log(placeTypeEnum,housingTypeEnum)
    return list.map((accommodation)=> {
        return {
            ...accommodation,
            placeType:getPlaceType(accommodation.placeType),
            housingType:getHousingType(accommodation.housingType),
            place:place
        }
    })
}

export default hydrateAccommodations