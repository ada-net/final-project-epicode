export interface Imunicipality {
    id: number;
    nome: string;
    provincia: {
        id: number;
        nome: string;
        sigla: string
    }
}
