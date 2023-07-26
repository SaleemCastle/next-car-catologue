import { FilterProps, ICarProps } from "@/types"

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '61d1511b51msh3be6e8ce4d067e0p1aff51jsn9b5331e53ad4',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
}

export const fetchCars = async (filters: FilterProps) => {
    const { fuel, limit, manufacturer, model, year } = filters
    const response = await fetch(`${url}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: { ...options.headers }
    })

    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50
    const milageFactor = 0.1
    const ageFactor = 0.05

    const milageRate = city_mpg * milageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    const rentalRatePerDay = basePricePerDay + milageRate + ageRate
    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: ICarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, model, year } = car
    url.searchParams.append('customer', 'jmcudio')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model?.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)
    
    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname
}

export const auth = () => console.log('/*** Begin Authentication ***/')