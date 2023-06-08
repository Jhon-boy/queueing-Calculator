import * as math from "mathjs";

export const costoEsperaTotal =  (lamda, horas, Wq, costo) => {
    
    // let costoDiario = math.multiply( lamda , horas ,Wq, costo).valueOf();
    return math.multiply( lamda , horas ,Wq, costo);
}


export const costoFuncionamiento = async (lamda, horas, W, costo) => {
   
    return math.multiply(lamda, horas, W, costo).valueOf();
  };
  
export const costoServidorTotal = async (k, costo) => {
    return math.multiply(k, costo);
}