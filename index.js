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
app.use(function(req, res, next) {


  res.header("Access-Control-Allow-Origin","http://yatsek123.freedomain.thehost.com.ua/wp-content/nomer-dlya-modeli-avtomobilya/"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  

  
  });
app.use(express.json({extended:true}))
app.use(express.static(path.join(__dirname, 'build')));

let assestPath=path.join(__dirname)
console.log(assestPath)
assestPath=assestPath.replace(new RegExp(/\\/g),'/')
const _data = font2base64.encodeToDataUrlSync('./RoadNumbers2.0.ttf')
const _data2=font2base64.encodeToDataUrlSync('./arial.ttf')
app.listen(PORT,()=>{
    console.log("Backend has been launched...")
})
app.post("/createP1B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:-18px;} .second{font-size:83px;} .three{font-size:110px; position:relative;top:-18px;} body {width: 440px;height: 95px;} .text{position:absolute;display:flex;top:22px;gap:10px;left:55px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p1b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})







app.post("/createP17B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:100px;
            position:relative;
            top:-8px;} .second{font-size:96px;
                position:relative;
                top:-6px;} .three{font-size:130px;
                position:relative;
                top:-30px;} body {width: 440px;height: 92px;} .text{position:absolute;display:flex;top:22px;gap:20px;left:50px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p17b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})




app.post("/createP11B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:50px;
            position:relative;
            top:30px;
            left:-23px;
            
        }
    .second{
        pointer-events:none;
        font-size:100px;
        font-weight:300;
        position:relative;
        top:-8px;
        left:-25px;
            } 
            .three{
                font-size:100px;
  font-weight:300;
  position:relative;
  top:-8px;
  left:-30px;
            }
            .four{
                font-size:130px;
                font-weight:300;
                position:relative;
                top:-28px;
                left:-35px;  
            } 
            body {width: 440px;height: 92px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:5px;
                     left:45px;
                     z-index:10;
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -35px;
                        left:-30px;
                        
                    }
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                  <div class="thre">-</div>
                  <div class="three">${req.body.thirstWord}</div>
                  <div class="four">${req.body.fourWord}</div>
                  </div> <img src="https://radiator.ks.ua/pic/number/p11b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})











app.post("/createP15B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:95px;
            position:relative;
            top:-4px;
            left:-23px;
            
        }
    .second{
        pointer-events:none;
        font-size:100px;
        font-weight:300;
        position:relative;
        top:-8px;
        left:-25px;
            } 
            .three{
                font-size:100px;
  font-weight:300;
  position:relative;
  top:-8px;
  left:-30px;
            }
            .four{
                font-size:130px;
                font-weight:300;
                position:relative;
                top:-28px;
                left:-35px;  
            } 
            body {width: 440px;height: 92px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:100px;
                     z-index:10;
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                  
                  <div class="three">${req.body.thirstWord}</div>
                  <div class="four">${req.body.fourWord}</div>
                  </div> <img src="https://radiator.ks.ua/pic/number/p15b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})






app.post("/createP7B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:95px;
            position:relative;
            top:-4px;
            left:-23px;
            
        }
    .second{
        pointer-events:none;
        font-size:100px;
        font-weight:300;
        position:relative;
        top:-8px;
        left:-25px;
            } 
            .three{
                font-size:127px;
  font-weight:300;
  position:relative;
  top:-27px;
  left:-30px;
            }
            
            body {width: 440px;height: 92px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:100px;
                     z-index:10;
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                  
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p7b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})






app.post("/createP16B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:95px;
            position:relative;
            top:-4px;
            left:-23px;
            
        }
    .second{
        pointer-events:none;
        font-size:100px;
        font-weight:300;
        position:relative;
        top:-8px;
        left:-25px;
            } 
            .three{
                font-size:127px;
  font-weight:300;
  position:relative;
  top:-27px;
  left:-30px;
            }
            
            body {width: 440px;height: 92px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                  
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p16b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})







app.post("/createP25B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:120px;
            position:relative;
            top:-10px;
            left:-50px;
            
        }
    .second{
        pointer-events:none;
        font-size:120px;
        font-weight:300;
        position:relative;
        top:-11px;
        left:-20px;
            } 
            .three{
                font-size:100px;
  font-weight:300;
  position:relative;
  top:0px;
  left:-30px;
            }
            
            body {width: 440px;height: 110px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     color:white;
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                  
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p25b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})















app.post("/createP24B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:165px;
            
            position:relative;
            top:-37px;
            left:-60px;
            
        }
    .second{
        pointer-events:none;
        font-size:130px;
        font-weight:300;
        position:relative;
        top:-11px;
        left:-75px;
            } 
            .three{
                font-size:130px;
  font-weight:300;
  position:relative;
  top:-11px;
  left:-105px;
            }
            
            body {width: 440px;height: 110px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     color:white;
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                  <div class="thre">-</div>
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p24b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})











app.post("/createP10B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:155px;
            
            position:relative;
            top:-33px;
            left:0px;
            
        }
    .second{
        pointer-events:none;
        font-size:155px;
        font-weight:300;
        position:relative;
        top:-33px;
        left:7px;
            } 
            .three{
                font-size:123px;
  font-weight:300;
  position:relative;
  top:80px;
  left:-250px;
            }
            
            body {width: 400px;height: 200px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                 
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p10b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1200/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})



























app.post("/createP6B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:140px;
            
            position:relative;
            top:-25px;
            left:55px;
            
        }
    .second{
        pointer-events:none;
        font-size:110px;
        font-weight:300;
        position:relative;
        top:75px;
        left:-130px;
            } 
            .three{
                font-size:140px;
  font-weight:300;
  position:relative;
  top:135px;
  left:-290px;
            }
            
            body {width: 344px;height: 270px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                 
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p6b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:800/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})














































app.post("/createP14B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:135px;
            
            position:relative;
            top:5px;
            left:-45px;
            
        }
    .second{
        pointer-events:none;
        font-size:60px;
        font-weight:300;
        position:absolute;
        top:190px;
        left:-20px;
            } 
            .three{
                font-size:160px;
  font-weight:300;
  position:absolute;
  top:110px;
  left:100px;
            }
            
            body {width: 344px;height: 270px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                 
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p14b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:800/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})




















app.post("/createP8B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:135px;
            
            position:relative;
            top:5px;
            left:-50px;
            
        }
    .second{
        pointer-events:none;
        font-size:60px;
        font-weight:300;
        position:absolute;
        top:190px;
        left:150px;
            } 
            .three{
                font-size:160px;
  font-weight:300;
  position:absolute;
  top:80px;
  left:28px;
            }
            
            body {width: 344px;height: 270px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  
                 
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p8b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:800/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})



















app.post("/createP13B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:135px;
            
            position:relative;
            top:5px;
            left:-10px;
            
        }
    .second{
        pointer-events:none;
        font-size:180px;
        font-weight:300;
        position:absolute;
        top:80px;
        left:40px;
            } 
            .three{
                font-size:135px;
  font-weight:300;
  position:absolute;
  top:110px;
  left:120px;
            }
            
            body {width: 344px;height: 280px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     color:white;
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  
                  <div class="second">${req.body.secondWord}</div>
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p13b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:800/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})





























app.post("/createP28B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:135px;
            
            position:relative;
            top:5px;
            left:-10px;
            
        }
    .second{
        pointer-events:none;
        font-size:180px;
        font-weight:300;
        position:absolute;
        top:80px;
        left:-15px;
            } 
            .three{
                font-size:135px;
  font-weight:300;
  position:absolute;
  top:110px;
  left:120px;
            }
            
            body {width: 344px;height: 270px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: -32px;
                        left:-90px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  
                  <div class="second">${req.body.secondWord}</div>
                  
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p28b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:800/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})






app.post("/createP23B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:155px;
            
            position:relative;
            top:-33px;
            left:55px;
            
        }
    .second{
        pointer-events:none;
        font-size:130px;
        font-weight:300;
        position:relative;
        top:100px;
        left:-170px;
            } 
            .three{
                font-size:130px;
  font-weight:300;
  position:relative;
  top:110px;
  left:-180px;
            }
            
            
            body {width: 390px;height: 250px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     color:white;
                     
                    }
                    .thre{
                        font-size: 100px;
                        font-weight: 300;
                        position: relative;
                        top: 83px;
                        left:-175px;
                        
                    }
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="second">${req.body.secondWord}</div>
                 <div class="thre">-</div>
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p23b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1200/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})















app.post("/createP20B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:200px;
            
            position:relative;
            top:-16px;
            left:-45px;
            
        }
        .thre{
            font-size: 140px;
            font-weight: 300;
            position: relative;
            top: -30px;
            left:-60px;
            
        }
    .second{
        pointer-events:none;
        font-size:200px;
        font-weight:300;
        position:relative;
        top:-14px;
        left:-70px;
            } 
            .three{
                font-size:130px;
  font-weight:300;
  position:relative;
  top:125px;
  left:-355px;
            }
            
            
            body {width: 440px;height: 255px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     color:white;
                     
                    }
                   
                   
                  @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="thre">-</div>
                  <div class="second">${req.body.secondWord}</div>
                 
                  <div class="three">${req.body.thirstWord}</div>
                  
                  </div> <img src="https://radiator.ks.ua/pic/number/p20b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1270/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})








app.post("/createP22B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style>
         .first{
            font-size:80px;
            
            position:relative;
            top:-14px;
            left:-50px;
            
        }
        .thre{
            font-size: 70px;
            font-weight: 300;
            position: relative;
            top: -13px;
            left:-55px;
            
        }
        .thre2{
            font-size: 70px;
            font-weight: 300;
            position: relative;
            top: -13px;
            left:-70px;
            
        }
    .second{
        pointer-events:none;
        font-size:80px;
        font-weight:300;
        position:relative;
        top:-14px;
        left:-65px;
            } 
            .three{
                font-size:80px;
  font-weight:300;
  position:relative;
  top:-15px;
  left:-75px;
            }
             .four{
                font-size:50px;
  font-weight:300;
  position:relative;
  top:60px;
  left:-355px;
            }
            
            
            body {width: 354px;height: 180px;}

                 .text{
                     position:absolute;
                     display:flex;
                     top:22px;
                     gap:15px;
                     left:80px;
                     z-index:10;
                     
                     
                    }
                   
                   
                  @font-face {font-family: 'testFont';src: url(${_data2}) format('truetype')}</style><body style='font-family:"testFont";'>
                  <div class="text">
                  <div class="first">${req.body.firstWord}</div>
                  <div class="thre">-</div>
                  <div class="second">${req.body.secondWord}</div>
                  <div class="thre2">-</div>
                  <div class="three">${req.body.thirstWord}</div>
                  <div class="four">${req.body.fourWord}</div>
                  </div> <img src="https://radiator.ks.ua/pic/number/p22b.jpg" alt="" />
                  </body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1270/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})
























































































app.post("/createP3B", async(req,res)=>{
    
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:-18px;} .second{font-size:83px;} .three{font-size:110px; position:relative;top:-18px;} body {width: 440px;height: 95px;} .text{position:absolute;display:flex;top:22px;gap:10px;left:55px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p3b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url,size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                })
        })
        .catch((error) => console.error(error))  )
    
})






app.post("/createP2B", async(req,res)=>{
    
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:15px;font-size:70px;} .second{font-size:130px;position:relative;top:-28px;} .three{font-size:100px;position:relative;top:-8px;} body {width: 440px;height: 95px;} .text{position:absolute;display:flex;top:22px;gap:10px;left:55px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";color:white'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p2b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url,size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                })
        })
        .catch((error) => console.error(error))  )
    
})






app.post("/createP9B", async(req,res)=>{
    
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .numbertext{display:flex}.first{font-size:95px;
            position:relative;
            top:-4px;}
             .second{font-size:100px;position:relative;top:-7px;} 
             .three{font-size:130px;position:relative;top:-25px;} 
             body {width: 440px;height: 95px;} 
             .text{position:absolute;display:flex;top:22px;gap:90px;left:55px;z-index:10;}
              @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";color:white'><div class="text"><div class="first">${req.body.firstWord}</div><div class="numbertext"> <div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div></div> <img src="https://radiator.ks.ua/pic/number/p9b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url,size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                })
        })
        .catch((error) => console.error(error))  )
    
})





app.post("/createP5B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:-18px;} .second{font-size:83px;} .three{font-size:83px;position:relative;top:0px;} body {width: 440px;height: 95px;} .text{position:absolute;display:flex;top:22px;gap:35px;left:70px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p5b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})






app.post("/createP12B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:50px;
            position:relative;
            top:30px;
            left:-90px;} .three{font-size:83px;position:relative;top:10px;font-size:100px;
                
                position:relative;
                top:-8px;
                left:20px;} body {width: 440px;height: 95px;} .text{position:absolute;color:white;display:flex;top:22px;gap:35px;left:120px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://radiator.ks.ua/pic/number/p12b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
})








app.post("/createP99B", async(req,res)=>{
    
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:-18px;} .second{font-size:83px;} .three{font-size:110px; position:relative;top:-18px;} body {width: 460px;height: 95px;} .text{position:absolute;color:white;display:flex;top:22px;gap:15px;left:65px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="first">${req.body.firstWord}</div><div class="second">${req.body.number}</div><div class="three">${req.body.secondWord}</div></div> <img src="https://i.ibb.co/j4kFRbJ/p99b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url,size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                })
        })
        .catch((error) => console.error(error))  )
    
})





































app.post("/createP4B", async(req,res)=>{
    console.log(req.body)
    await nodeHtmlToImage({
        output: './images/image.png',
        html: `<html><style> .first{font-size:110px;position:relative;top:-18px;} .second{font-size:100px;} .three{font-size:110px; position:relative;top:-18px;} body {width: 440px;height: 90px;} .text{position:absolute;display:flex;top:15px;left:170px;z-index:10;} @font-face {font-family: 'testFont';src: url(${_data}) format('truetype')}</style><body style='font-family:"testFont";'><div class="text"><div class="second">${req.body.number}</div></div> <img src="https://radiator.ks.ua/pic/number/p4b.jpg" alt="" /></body></html>`
      })
        .then(() => imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", "./images/image.png")
        .then((response) => {
          console.log(response.url)
          pdf.create(pdfTemplate({url:response.url, size:1972/req.body.mashtab}), {format:"A4","type":"pdf"}).toFile('result.pdf', (err) => {
           
            console.log('Создано')
            res.download(path.resolve(__dirname,"result.pdf"))
                    
                }) 
        })
        .catch((error) => console.error(error))  )
    
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
