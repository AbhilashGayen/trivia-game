// Check response code and return response as json
const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
  } 
  return response.json();
};


// Fetch quiz data
export const getQuiz = () => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=base64`
  )
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetching the quiz failed ${err}`);
    });
};
