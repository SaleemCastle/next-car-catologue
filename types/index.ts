import { MouseEventHandler } from "react"

export interface ICustomButtonProps {
    btnType?: 'submit' | 'button'
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    title: string
    textStyles?: string
    rightIcon?: string
}

export interface ISearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void;
}

export interface ICarProps {
    city_mpg: number
    Class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface FilterProps {
    manufacturer: string
    year: number
    fuel: string
    limit: number
    model: string
}

export interface ICustomFilterProps {
    title: string
    options: OptionProps[]
}

export interface OptionProps {
    title: string
    value: string
}

export interface IShowMoreProps {
    pageNumber: number
    isNextPage: boolean
}