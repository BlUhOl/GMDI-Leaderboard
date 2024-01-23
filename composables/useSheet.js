let ALL_STAR_range = "PPSW - Star!A5:D56";
let ALL_MOON_range = "PPSW - Moon!A5:D56";
let ALL_DIAMOND_range = "PPSW - Diamond!A5:D56";
let ALL_UC_range = "PPSW - User Coin!A5:D56";
let ALL_DEMON_range = "PPSW - Demon!A5:D56";
let ALL_CP_range = "PPSW - CP!A5:D56";


const getVars = () => {
    const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
    const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;

    return { SPREAD_SHEET_ID, GOOGLE_API_KEY }
}

export async function ALL_STAR() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_STAR_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}
export async function ALL_MOON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_MOON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}
export async function ALL_DIAMOND() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_DIAMOND_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}
export async function ALL_UC() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_UC_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}
export async function ALL_DEMON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_DEMON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}
export async function ALL_CP() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_CP_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}


// export async function singleRow(row) {
//     const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();

//     const rowRange = `Sheet1!A${row}:D${row}`

//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`
//     return await useFetch(url)
// }