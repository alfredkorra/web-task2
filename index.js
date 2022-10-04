const port = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://www.eucerin.de/";
axios(url)
  .then((response) => {
    const html = response.data;

    const $ = cheerio.load(html);
    const teasers = [];

    $(".uk-card-media-top", html).each(function () {
      const title = $(this).text();
      const par = (p)
      const url = $(this).find("source").attr("srcset");
      teasers.push({
        // title,
        url,
        par
      });
    })

    
    console.log(teasers);
  })

  
  .catch((err) => console.log(err));

// const url = "https://www.eucerin.de/";
// axios(url)
//   .then((response) => {
//     const html = response.data;

//     const $ = cheerio.load(html);
//     const teasers = [];

//     $(".uk-card-title ", html).each(function () {
//     //   const title = $(this).text();
//       const title = $(this).find("p").length;
//       teasers.push({
//         title,
//         // url,
//       });
//     })

    
//     console.log(teasers);
//   })

// app.listen(port, () => console.log(`listening on port ${port}`));
