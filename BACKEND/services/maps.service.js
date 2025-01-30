const axios = require('axios');

module.exports.getAddressCoordinate = async ( address ) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if(response.data.status === 'OK'){
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    }else {
      throw new Error('Unable to fetch coordinates');
    }
  }catch(error){
    console.error(error);
    throw error; 
  }
}

module.exports.getDistanceTime = async (origin, destination) => {
  if(!origin || !destination){
    console.error('Origin and Destination are required');
    console.log(origin, destination);
    throw new Error('Origin and Destination are required');
  }

  try {
    // First get coordinates for both locations
    const originCoords = await module.exports.getAddressCoordinate(origin);
    const destCoords = await module.exports.getAddressCoordinate(destination);

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originCoords.lat},${originCoords.lng}&destinations=${destCoords.lat},${destCoords.lng}&key=${apiKey}`; 

    const response = await axios.get(url);
    if(response.data.status === 'OK'){
      if(response.data.rows[0].elements[0].status !== 'OK'){
        throw new Error('Unable to fetch distance and time');
      }

      const distance = response.data.rows[0].elements[0].distance;
      const duration = response.data.rows[0].elements[0].duration;
      return {
        distance:{
          text: distance.text,
          value: distance.value,
        },
        duration:{
          text: duration.text,
          value: duration.value,
        },
      };
    }else {
      throw new Error('Unable to fetch distance and time');
    } 

  }catch(error){
    console.error(error);
    throw error;
  }
}

module.exports.getAutoSuggestions = async (input) => {
  if (!input) {
    return [];
  }
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      return response.data.predictions.map(prediction => prediction.description);
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}