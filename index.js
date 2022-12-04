const Jimp = require('jimp')
const pdf = require('html-pdf')
const font2base64 = require('node-font2base64')
const imgbbUploader = require("imgbb-uploader");
const express=require('express')
const app=express()
const nodeHtmlToImage = require('node-html-to-image')
const PORT=process.env.PORT || 8888
const pdfTemplate = require('./documents');
const path=require('path')

app.use(express.json({extended:true}))

let assestPath=path.join(__dirname)
console.log(assestPath)
assestPath=assestPath.replace(new RegExp(/\\/g),'/')
const _data = font2base64.encodeToDataUrlSync('./RoadNumbers2.0.ttf')
app.listen(PORT,()=>{
    console.log("Backend has been launched...")
})
app.post("/create", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:-18px;} .second{font-size:83px;} .three{font-size:110px; position:relative;top:-18px;} body {width: 440px;height: 95px;} .text{position:absolute;display:flex;top:22px;gap:15px;left:55px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p1b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
                    
                })
        })
        .catch((error) => console.error(error))  )
    res.json({anime:"ok"})
})





// var fileName = './images/p1b.jpg';
// var imageCaption = 'DD 1234 FF';
// var loadedImage;
// Jimp.read(fileName)
//     .then(function (image) {
//         loadedImage = image;
//         return Jimp.loadFont(_data);
//     })
//     .then(function (font) {
//         loadedImage.print(font, 45, 15, imageCaption)
//                    .write(fileName);
//     })
//     .catch(function (err) {
//         console.error(err);
//     });