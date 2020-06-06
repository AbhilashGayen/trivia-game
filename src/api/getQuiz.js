const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
  } 
  return response.json();
};

export const getQuiz = (categoryId) => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
  )
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetching the quiz failed ${err}`);
    });
};
