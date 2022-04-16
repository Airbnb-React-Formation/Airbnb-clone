const isMany = (number) => number > 1 ? "s" : ""

const capitalizeFirstLetter = (string) => (
    string.charAt(0).toUpperCase() + string.slice(1)
)

export {isMany,capitalizeFirstLetter}