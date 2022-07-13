const quizdisplay = document.querySelector('#quiz')

fetch('http://localhost:3000/public')
   .then(response => {return response.json()})
   .then(data => {
       data.forEach( article => {
          const quizItem = quiz.title
          quizdisplay.insertAdjacentHTML()
       })
   })
   .catch(err => console.log(err))

