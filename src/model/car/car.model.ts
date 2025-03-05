export interface Car {
    id: number;
    placa: string;
    idEmpresa: number;
    nomeEmpresa: string;
    tipo: string;
    vencimento: string;
}

export interface SaveCar {
    plate: string;
    year: number;
    chassis: string;
    enterpriseId: number;
    type: string;
    maturity: string;
}