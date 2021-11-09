import fetch from "node-fetch";
import { ambito_dBlue_url } from "./constants.js";

// Create request and get data to parse
const response = await fetch(ambito_dBlue_url, {
  method: "GET",
});
console.log("* * * Consultando a Ambito: * * *");

const data = await response.json();
// Create the excel file
console.log("Dolar Blue Fecha ---> ", data.fecha);
console.log("Dolar Blue Compra ---> ", data.compra);
console.log("Dolar Blue Venta ---> ", data.venta);
console.log("Dolar Blue Variacion ---> ", data.variacion);

console.log("* * * * * * *");
