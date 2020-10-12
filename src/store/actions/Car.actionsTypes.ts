export type CarMake = string[];

export type CarModel = {
    [key: string]: string[]
}

export interface queryCarMakeSuccessI {
    type: string,
    payload: CarMake
}

export interface queryCarModelSuccessI {
    type: string,
    payload: CarModel
}