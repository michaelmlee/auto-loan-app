import { CarMake, CarModel } from "../store/actions/Car.actionsTypes"

export const fakeQueryCarMake = (): Promise<CarMake> =>
     new Promise (resolve => setTimeout(() =>
        resolve(carMake)
     , 200));

export const fakeQueryCarModel = (): Promise<CarModel> =>
    new Promise (resolve => setTimeout(() =>
            resolve(carModel)
        , 200));

export const fakeProcessApplication = (data: any): Promise<any> =>
    new Promise( (resolve, reject) => setTimeout((data) => {
            if(data.price > 1000000){
                const error = {
                    code: 400,
                    message: "cannot request for an auto loan worth over a million dollars"
                }
                reject(error);
            }
            const buyingLimit = data.income / 5;
            if(data.creditScore < 600 || data.price > buyingLimit){
                const error = {
                    message: "one or more fields did not meet the minimum requirements"
                }
                reject(error);
            } else {
                const response = {
                    status: 200,
                    body: "qualified"
                }
                resolve(response);
            }
        },800, data));


const carMake: CarMake = [
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

const carModel: CarModel = {
    Acura: [
        "ILX",
        "MDX",
        "NSX",
        "RDX",
        "RSX",
        "TL",
        "TLX",
        "TSX",

    ],
    BMW: [
        "1 Series",
        "2 Series",
        "3 Series",
        "4 Series",
        "5 Series",
        "6 Series",
        "7 Series",
        "8 Series",
        "M3",
        "M4",
        "M5",
        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X6",
        "X7",
        "Z3",
        "Z4"
    ],
    Ford: [
        "Bronco",
        "Edge",
        "Expedition",
        "Explorer",
        "F150",
        "F250",
        "F350",
        "Mustang",
        "Ranger"
    ],
    Honda: [
        "Accord",
        "Civic",
        "CR-V",
        "HR-V",
        "Odyssey",
        "Pilot",
        "Ridgeline",
        "S2000"
    ],
    Jeep: [
        "Cherokee",
        "Compass",
        "Gladiator",
        "Grand Cherokee",
        "Liberty",
        "Patriot",
        "Renegade",
        "Wrangler"
    ],
    Lexus: [
        "ES Model",
        "GS Model",
        "GX 460",
        "GX 470",
        "IS 250",
        "IS 350",
        "LC 400",
        "LS 500",
        "LS 600",
        "LX 470",
        "LX 570",
        "RX 300",
        "RX 350",
        "RX 400"
    ],
    Porsche: [
        "Boxster",
        "Cayman",
        "911",
        "911 Turbo",
        "918 Spyder",
        "Cayenne",
        "Cayman",
        "Macan",
        "Panamera",
        "Taycan"
    ],
    Subaru: [
        "Ascent",
        "Baja",
        "BRZ",
        "Crosstrek",
        "Forester",
        "Impreza",
        "Outback",
        "Tribeca",
        "WRX",
        "STI"
    ],
    Tesla: [
        "Model S",
        "Model 3",
        "Model X",
        "Model Y"
    ],
    Toyota: [
        "4Runner",
        "86",
        "Camry",
        "Corolla",
        "FJ Cruiser",
        "Highlander",
        "Land Cruiser",
        "MR2",
        "Prius",
        "RAV4",
        "Sienna",
        "Supra",
        "Tacoma",
        "Tundra"
    ]
}