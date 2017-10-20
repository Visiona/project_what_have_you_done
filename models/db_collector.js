// What I need:
// - ZIP Codes
// - associated politicians name, idea
// - images
// - party
// - basic info ie. email, website, tel no,
// - method for retrieving the bills recently voted upon by a given legislator.
// - how the legislator voted.


const request = require('request');

const proPublicaUri =
const gitPhotosUri = 'https://theunitedstates.io/images/congress/[size]/[bioguide].jpg'
const googleCivicUri = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAKNJ4jPqZkTsyqlh6pKBXbdRDhMRkvTTw&address='

class ApiWrapper {

  constructor(proPublicaApi, googleCivicUApi) {
    this.proPublicaApi = proPublicaApi
    this.googleCivicUApi = googleCivicUApi
  }




  _sendRequestGoogle(username, type, callback) {

    var options = { method: 'GET',
      url: `${baseUri}/${username}${type}`,
      headers:
       { 'apiKey': this.apiKey,
         'cache-control': 'no-cache',
         'User-Agent': 'Chrome' } };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      if (response.statusCode == 200) {
        callback(JSON.parse(body))
      }

    });
  }




}
