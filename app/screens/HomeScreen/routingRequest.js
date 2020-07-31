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
        source: searchValues.originValue,
        dest: searchValues.destValue
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

  const getDetails = await axios.post('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
    type: 'location-information',
    dest_id: destination_place_id,
  })
    .then((response) => response.data.result)
    .catch((error) => console.log("error: ", error))

  const getPrediction = await axios.post('https://1qqdwcw8bf.execute-api.us-east-1.amazonaws.com/glider-backend-prod-hello', {
    origin_loc: origin_location,
    dest_loc: dest_location
  })
    .then((response) => response.data)
    .catch((error) => console.log(error))

  return (
    [getDetails, getPrediction]
  )
  // try {
  //   let response = await fetch('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
  //     method: 'POST',
  //     // headers: {
  //     //   Accept: 'application/json',
  //     //   'Content-Type': 'application/json',
  //     // },
  //     body: JSON.stringify({
  //       type: 'location-information',
  //       dest_id: destination_place_id
  //     })
  //   })
  //   let json = await response.json();
  //   console.log(json.result);
  // }
  // catch (error) {
  //   console.log(error)
  // }
}