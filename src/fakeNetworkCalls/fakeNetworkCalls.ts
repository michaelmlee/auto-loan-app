export const fakeQueryCarMake = (): Promise<string[]> =>
     new Promise (resolve => setTimeout((() =>
        resolve(carMake))
     , 500));

const carMake: string[] = [
    "Acura",
    "BMW",
    "Ford",
    "Honda",
    "Jeep",
    "Lexus",
    "Porsche",
    "Subaru",
    "Tesla",
    "Toyota"
];