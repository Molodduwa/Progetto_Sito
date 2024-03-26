
export class Scarpa{
    public nome:string;
    public descrizione:string;
    public prezzo: number;
    public taglia: number;
    public dataUscita: string;
    public colorazione: string;
    public immagine: string;
    constructor(nome:string, descrizione:string,  taglia:number, dataUscita:string, colorazione:string,  prezzo:number, immagine: string){
        this.nome = nome;
        this.dataUscita = dataUscita;
        this.colorazione = colorazione;
        this.taglia = taglia;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
	    this.immagine = immagine;
    }
}