import placeTypeEnum from "./placeType.json"
import housingTypeEnum from "./housingType.json"
import amenities from "./amenities.json"


const getPlaceType = ([placeTypeId, precisePlaceTypeId]) => {
    const placeType = placeTypeEnum.find(placeType => placeType.id === placeTypeId)
    const precisePlaceType = placeType.placeKind.find(precisePlaceType => precisePlaceType.id === precisePlaceTypeId)
    return precisePlaceType.name
}
const getHousingType = (id) => {
    const housingType = housingTypeEnum.find(housingType => housingType.id === id)
    return housingType.name
}

const getRandomCoordinates = (mapBounds) => {
    const randomPositionFromInterval = (min, max) => {
        return Math.random() * (max - min) + min
    }
    const lat = randomPositionFromInterval(mapBounds.southWest.lat, mapBounds.northEast.lat)
    const lng = randomPositionFromInterval(mapBounds.southWest.lng, mapBounds.northEast.lng)
    return ([lat, lng])
}

const hydrateAccommodation = (accommodation, place, coordinate) => {
    return {
        ...accommodation,
        placeType: getPlaceType(accommodation.placeType),
        housingType: getHousingType(accommodation.housingType),
        place: place,
        coordinates: coordinate
    }
}

const hydrateAccommodations = (list, place, mapBounds) => {
    return list.map((accommodation) => {
        const randomCoordinates = Object.keys(mapBounds).length !== 0 && getRandomCoordinates(mapBounds)
        return hydrateAccommodation(accommodation, place, randomCoordinates)
    })
}

const hydrateAmenities = (amenitiesIdList) => {
    return amenitiesIdList.map(amenityId => {
        return amenities.find(amenity => {
           return amenity.id === amenityId
        })
    })
}

export {hydrateAccommodations, hydrateAccommodation, hydrateAmenities}