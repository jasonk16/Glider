export const getSearchLocations = async (searchValues) => {
  try {
    let response = await fetch('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'location-search',
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

export const getLocationInformation = async (place_id) => {
  try {
    let response = await fetch('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'location-information',
        place_id: place_id
      })
    })
    let json = await response.json()
    return(json.responseJson.data);
  }
  catch (error) {
    console.log(error)
  }
}