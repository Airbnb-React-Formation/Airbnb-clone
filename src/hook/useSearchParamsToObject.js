import {useLocation} from "react-router-dom";

const useSearchParamsToObject = () => {

    const { search } = useLocation();
    // return useMemo(() => new URLSearchParams(search), [search]);
    const searchParams = new URLSearchParams(search)

    const searchParamsToObject = (entries) => {
        const result = {}
        for (const [key,value] of entries){
            result[key] = value
        }
        return result
    }
    return searchParamsToObject(searchParams.entries())
}

export default useSearchParamsToObject