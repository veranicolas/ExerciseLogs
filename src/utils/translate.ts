
interface translations {
    lower:string,
    middle:string,
    upper:string
}

const translateTypeExercise = (text:string) =>{

    const translations:translations = {
        'lower': 'Bajo',
        'middle': 'Medio',
        'upper': 'Alto'
    }

    return translations[text as keyof translations]
}
 
export { translateTypeExercise }