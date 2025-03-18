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
    year: number;
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

export interface UpdateCar {
    id: number;
    plate: string;
    year: number;
    chassis: string;
    type: string;
}