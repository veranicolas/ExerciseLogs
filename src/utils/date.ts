
const parseDayOfTheYear = (datetime: string):string =>{

    const lastUpdate = new Date(datetime)

    const year = lastUpdate.getFullYear();
    const month = lastUpdate.getMonth() + 1;
    const day = lastUpdate.getDate();

    const parsedDate = [day, month, year].join('/');
    return parsedDate
    // console.log(withSlashes); // 👉️ "2023/1/4"

    // const withHyphens = [year, month, day].join('-');
    // console.log(withHyphens); // 👉️ "2023-1-4"
}

export { parseDayOfTheYear }