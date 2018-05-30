const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI ||
`mongodb://localhost/justgame-${env}`;
const secret = process.env.SECRET || 'this will be a scret for the users hashing';
const apiKey = process.env.IGDB_API_KEY;
//------------------------------------------------------------------------------
module.exports = { port, dbURI, secret, env, apiKey};
