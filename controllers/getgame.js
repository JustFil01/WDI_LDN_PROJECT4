const rp = require('request-promise');
const apiKey = process.env.IGDB_API_KEY;
//------------------------------------------------------------------------------
function getGame(req, res, next) {

  rp({
    method: 'GET',
    url: 'https://api-endpoint.igdb.com/games/',
    qs: {
      fields: '*',
      search: req.query.search
    },
    headers: {
      'user-key': apiKey
    },
    json: true
  })
    .then(response => {
      res.json(response);
    })
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = {getGame};
