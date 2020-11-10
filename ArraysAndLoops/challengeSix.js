const enviar = document.querySelector('.submit')
const movie1 = document.querySelector('.movie1')
const movie2 = document.querySelector('.movie2')

// console.log(movies)
function save(){
  let movies = [movie1.value, movie2.value]
  return (movies);
}
enviar.addEventListener(('click'), save)

