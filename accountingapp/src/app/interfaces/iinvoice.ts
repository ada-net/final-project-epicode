

export interface Iinvoice {

    id: number;
    data: Date;
    numero: number;
    anno: number;
    importo: number;
    stato: {
        id: number;
        nome: string;
    },
    cliente: {
        id: number;
        ragioneSociale: string;
        partitaIva: number;
        tipoCliente: string;
        email: string;
        pec: string;
        telefono: string;
        nomeContatto: string;
        cognomeContatto: string;
        telefonoContatto: string;
        emailContatto: string;
        indirizzoSedeOperativa: {
            id: number;
            via: string;
            civico: number;
            cap: number;
            localita: string;
                comune: {
                id: number;
                nome: string;
                provincia: {
                    id: number;
                    nome: string;
                    sigla: string;
                }
            }
        },
        indirizzoSedeLegale: {
            id: number;
            via: string;
            civico: number;
            cap: number;
            localita: string;
            comune: {
                id: number;
                nome: string;
                provincia: {
                    id: number;
                    nome: string;
                    sigla: string;
                }
            }
        },
        dataInserimento: Date;
        dataUltimoContatto: Date;
        fatturatoAnnuale: number;
    }
}