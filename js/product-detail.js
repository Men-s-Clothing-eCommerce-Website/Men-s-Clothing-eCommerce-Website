function fetchGithubData() {
  return axios.get("https://fakeapi.platzi.com/")
    .then(response => {
  console.log("response", response.data);
  return response.data;
    })
    .catch(error => {
      console.log("error", error)
    });
}


