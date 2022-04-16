import {useReducer} from "react";

const reducer = (state, action) => {
    if (action?.payload < 0)
        throw new Error();
    switch (action.type) {
        case 'adults' :
            if ((action.payload + state.children <= state.maxGuest) && (action.payload >= state.minAdults)) {
                state.adults = action.payload
            }
            break
        case 'children' :
            if (action.payload + (state.adults ? state.adults : 1) <= state.maxGuest) {
                if (!state.minAdults && action.payload > 0)
                    state.minAdults = 1
                if (!state.adults)
                    state.adults = 1
                if (action.payload === 0 && !state.infants && !state.pets)
                    state.minAdults = 0
                state.children = action.payload
            }
            break
        case 'infants' :
        case 'pets':
            if (action.payload <= 5) {
                if (!state.minAdults && action.payload > 0)
                    state.minAdults = 1
                if (!state.adults)
                    state.adults = 1
                if (action.payload === 0 && !state.children && (action.type === "pets" ? !state.infants : !state.pets))
                    state.minAdults = 0
                state[action.type] = action.payload
            }
            break
        case 'reset':
            state = {...state, adults: 0, children: 0, infants: 0, pets: 0}
            break
        default:
            throw new Error(`L'action "${action.type}" n'est pas supportée`);
    }
    return {...state}
}

const initialGuestState = {
    minAdults: 0,
    maxGuest: 16,
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
}
const useGuestField = (initState = {}) => {
    const [guest, dispatch] = useReducer(reducer, {...initialGuestState, ...initState})
    const setGuest = (guest, value) => {
        dispatch({type: guest, payload: value})
    }
    const resetGuest = () => {
        dispatch({type: "reset"})
    }
    const getGuestsText = () => {
        const isMany = (number) => number > 1 ? "s" : ""
        const guests = guest.adults + guest.children
        const text =
            guests && (guests + " voyageur" + isMany(guests))
            + (guest.infants ? (", " + guest.infants + " bébé" + isMany(guest.infants)) : "")
            + (guest.pets ? (", " + guest.pets + (guest.pets > 1 ? " animaux" : " animal") + " de compagnie") : "")
        return (text)
    }
    const displayGuestText = getGuestsText()
    return {
        guest,
        setGuest,
        resetGuest,
        displayGuestText
    };
}

export default useGuestField;