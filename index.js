const port = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://www.eucerin.de/";
axios(url)
  .then((response) => {
    const html = response.data;

    const load = cheerio.load(html);
    const teasers = [];

    load(".teasers", html).each(function () {
      const title = load(this).find(".uk-card-title").text();
      const url = load(this).find("source").attr("srcset");
      teasers.push({
        title,
        url,
      });
    })

    
    console.log(teasers);
  })

  
  .catch((err) => console.log(err));