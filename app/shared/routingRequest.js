const axios = require('axios').default;

export const getSearchLocations = async (searchValues) => {
  try {
    let response = await fetch('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'location-request',
        search: {
          source: searchValues.originValue,
          dest: searchValues.destValue
        }
      })
    })
    let json = await response.json()
    return json.responseJson.data;
  }
  catch (error) {
    console.log(error)
  }
}

export const getLocationInformation = async (selectedLocations) => {
  let destination_place_id = selectedLocations.dest_id;
  let origin_location = selectedLocations.origin_loc;
  let dest_location = selectedLocations.dest_loc;

  let getDetails;
  let getPrediction;

  makeRequests = async () => {
    let date = new Date();
    let hourOfDay = date.getHours();

    await axios.post('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
      type: 'location-information',
      dest_id: destination_place_id,
    })
      .then((response) => { getDetails = response.data.responseDetails })
      .catch((error) => console.log("error: ", error))

    await axios.post('https://1qqdwcw8bf.execute-api.us-east-1.amazonaws.com/glider-backend-prod-hello', {
      type: 'prediction',
      origin_loc: origin_location,
      dest_loc: dest_location,
      hod: hourOfDay

    })
      .then((response) => getPrediction = response.data)
      .catch((error) => console.log(error))
  }

  await makeRequests();
  return (
    [getDetails, getPrediction]
  )
}

export const getTraffic = async (long, lat) => {
  try {
    let response = await fetch('https://1qqdwcw8bf.execute-api.us-east-1.amazonaws.com/glider-backend-prod-hello', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'traffic-status',
        long: long,
        lat: lat
      })
    })
    let json = await response.json()
    return json;
  }
  catch (error) {
    console.log(error)
  }
}