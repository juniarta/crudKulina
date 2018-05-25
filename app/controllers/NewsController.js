const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NewsKey);

const axios = require('axios');

module.exports = {
  fromSdk: async (ctx) => {
    const datanews = await newsapi.v2.everything({
      q: 'ios',
    });
    console.log(process.env.SENTRYKEY);
    ctx.res.ok(datanews);
  },

  fromUrl: async (ctx) => {
    const datanews = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=b217e6bf0b29420192bec0da0eb48d55');
    ctx.res.ok(datanews.data);
  },
};
