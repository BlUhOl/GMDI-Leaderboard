let ALL_STAR_range = "PPSW - Star!A5:D56";
let ALL_MOON_range = "PPSW - Moon!A5:D56";
let ALL_DIAMOND_range = "PPSW - Diamond!A5:D56";
let ALL_UC_range = "PPSW - User Coin!A5:D56";
let ALL_DEMON_range = "PPSW - Demon!A5:D56";
let ALL_CP_range = "PPSW - CP!A5:D56";
let ALL_version_date = "Beranda!B5"

let WEEKLY_STAR_range = "PPM - Star!B5:D56";
let WEEKLY_MOON_range = "PPM - Moon!B5:D56";
let WEEKLY_DIAMOND_range = "PPM - Diamond!B5:D56";
let WEEKLY_UC_range = "PPM - User Coin!B5:D56";
let WEEKLY_DEMON_range = "PPM - Demon!B5:D56";
let WEEKLY_CP_range = "PPM - CP!B5:D56";
let WEEKLY_version_date = "Beranda!B14"

let MONTHLY_STAR_range = "PPB - Star!B5:D56";
let MONTHLY_MOON_range = "PPB - Moon!B5:D56";
let MONTHLY_DIAMOND_range = "PPB - Diamond!B5:D56";
let MONTHLY_UC_range = "PPB - User Coin!B5:D56";
let MONTHLY_DEMON_range = "PPB - Demon!B5:D56";
let MONTHLY_CP_range = "PPB - CP!B5:D56";
let MONTHLY_version_date = "Beranda!B23"

let YEARLY_STAR_range = "PPT - Star!B5:D56";
let YEARLY_MOON_range = "PPT - Moon!B5:D56";
let YEARLY_DIAMOND_range = "PPT - Diamond!B5:D56";
let YEARLY_UC_range = "PPT - User Coin!B5:D56";
let YEARLY_DEMON_range = "PPT - Demon!B5:D56";
let YEARLY_CP_range = "PPT - CP!B5:D56";
let YEARLY_version_date = "Beranda!B32"


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
export async function ALLTIME_VERSION() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${ALL_version_date}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}


/////////////////////////////////////
export async function WEEKLY_STAR() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_STAR_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function WEEKLY_MOON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_MOON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function WEEKLY_DIAMOND() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_DIAMOND_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function WEEKLY_UC() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_UC_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function WEEKLY_DEMON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_DEMON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function WEEKLY_CP() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_CP_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function WEEKLY_VERSION() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${WEEKLY_version_date}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

/////////////////////////////////////
export async function MONTHLY_STAR() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_STAR_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function MONTHLY_MOON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_MOON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function MONTHLY_DIAMOND() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_DIAMOND_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function MONTHLY_UC() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_UC_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function MONTHLY_DEMON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_DEMON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function MONTHLY_CP() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_CP_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function MONTHLY_VERSION() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${MONTHLY_version_date}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

/////////////////////////////////////
export async function YEARLY_STAR() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_STAR_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function YEARLY_MOON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_MOON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function YEARLY_DIAMOND() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_DIAMOND_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function YEARLY_UC() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_UC_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function YEARLY_DEMON() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_DEMON_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function YEARLY_CP() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_CP_range}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function YEARLY_VERSION() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${YEARLY_version_date}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}



// export async function singleRow(row) {
//     const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();

//     const rowRange = `Sheet1!A${row}:D${row}`

//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`
//     return await useFetch(url)
// }