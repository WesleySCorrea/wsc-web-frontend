export interface Car {
    id: number;
    placa: string;
    idEmpresa: number;
    nomeEmpresa: string;
    tipo: string;
    vencimento: string;
}

export interface CarDetails {
    id: number;
    plate: string;
    chassis: string;
    enterpriseName: string;
    type: string;
}

export interface SaveCar {
    plate: string;
    year: number;
    chassis: string;
    enterpriseId: number;
    type: string;
    maturity: string;
}