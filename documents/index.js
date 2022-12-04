module.exports = ({url}) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          </head>
          <body>
          <th class="logo-wrapper">
          <img width="120px" src="${url}" class="logo-img"  />
        </th>
          </body>
          
      
    </html>
    `;
};