import axios from 'axios';

export function getQuestion() {

  var config = {
    method: 'get',
    url: 'https://raw.githubusercontent.com/stexity/react-assessment/master/src/questions.json',
  };

  return axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });

}