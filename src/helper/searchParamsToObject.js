const searchParamsToObject = (search) => {
    const searchParams = new URLSearchParams(search)
    const result = {}
    const entries = searchParams?.entries()
    for (const [key, value] of entries) {
        result[key] = value
    }
    return result
}
export default searchParamsToObject