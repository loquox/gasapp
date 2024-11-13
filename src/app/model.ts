export interface Producto {

    id:string;
    nombre:string;
    precio?:number;
    precioReducido?:number;
    foto:string;
    fecha:Date;
    

}


export interface Cliente{
    uid:any;
    nombre:string;
    email:string;
    celular:string;
    foto:string;
    referencia: string;
    ubicacion:any;
}