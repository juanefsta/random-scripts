## Scripts List

🔗 [Dolar Blue Info](https://github.com/juanefsta/random-scripts/tree/main/dolar-blue)

###### Makes a request to Ambito's Dolar Blue URL wich returns the following data:

| Parameter   | Type     |
| :---------- | :------- |
| `compra`    | `string` |
| `venta`     | `string` |
| `fecha`     | `date`   |
| `variacion` | `string` |

#### Installation

```node
  npm install

  node index.js
```

🔗 [Json To XML](https://github.com/juanefsta/jsonToExcelScript)

###### Node script to get a json from URL and export it to Excel It was used to connect to a login endpoint an get the token credential in order to reach an specific endpoind to get the data as a JSON.

#### Constants Reference

| Parameter       | Type       | Description                          |
| :-------------- | :--------- | :----------------------------------- |
| `email`         | `string`   | Login to system email - **Optional** |
| `password`      | `string`   | Passwork - **Optional**              |
| `loginURL`      | `string`   | Login URL - **Optional**             |
| `getDataURL`    | `string`   | URL to make the request              |
| `fileName`      | `string`   | Excel filename                       |
| `worksheetName` | `string`   | Excel worksheet name                 |
| `columnHeaders` | `string[]` | Excel columns definition             |

#### Installation

```node
  npm install

  node index.js
```
