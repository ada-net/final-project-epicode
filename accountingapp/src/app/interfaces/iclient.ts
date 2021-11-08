export interface Iclient {
            id?: number;
            ragioneSociale: string;
            partitaIva: number;
            tipoCliente: string;
            email: string;
            pec: string;
            telefono: number;
            nomeContatto?: string;
            cognomeContatto?: string;
            telefonoContatto?: string;
            emailContatto?: string;
            indirizzoSedeOperativa: {
                id?: number;
                via: string;
                civico: number;
                cap: number;
                localita: string;
                comune: {
                    id?: number;
                    nome: string;
                    provincia: {
                        id?: number;
                        nome: string;
                        sigla: string
                    }
                }
            },
            indirizzoSedeLegale: {
                id?: number;
                via: string;
                civico: string;
                cap: number;
                localita: string;
                comune: {
                    id?: number;
                    nome: string;
                    provincia: {
                        id?: number;
                        nome: string;
                        sigla: string
                    }
                }
            },
            dataInserimento?: Date;
            dataUltimoContatto?: Date;
            fatturatoAnnuale?: number
}
