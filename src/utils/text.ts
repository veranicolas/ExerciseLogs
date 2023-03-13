
const capitalizeFirstLetter = (text:string) => {

    const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalized;
}
export { capitalizeFirstLetter }