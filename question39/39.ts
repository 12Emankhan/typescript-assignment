// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned


function describe_city(city:string ,country : string): void {
    console.log(`${city}- ${country}`)
}

describe_city('karachi',"pakistan")
describe_city('islamabad',"pakistan")
describe_city('lahore',"pakistan")
describe_city('makkah',"saudiarabia")
