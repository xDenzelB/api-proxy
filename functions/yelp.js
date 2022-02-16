const fetch = require('node-fetch');

require('dotenv').config();


exports.handler = async (event) => {
  try {
    const name = event.queryStringParameters.search;


    const response = await fetch (`https://api.yelp.com/v3/businesses/search?location=${name}`, {
      headers : {
        Authorization: `Bearer ${process.env.YELP_KEY}`
      }
    });

    const json = await response.json();

    
   

    return { 
      statusCode: 200, 
      body: JSON.stringify(json),
    };
  } catch (error) {
   
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

