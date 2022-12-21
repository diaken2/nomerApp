module.exports = ({url,size}) => {
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
          <img width="${size}px" src="https://radiator.ks.ua/pic/number/p1b.jpg" class="logo-img"  />
        </th>
          </body>
          
      
    </html>
    `;
};
