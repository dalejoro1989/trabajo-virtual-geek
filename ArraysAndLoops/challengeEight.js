const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
  ];
  const ul = document.querySelector('ul')
  var list_task = tasks.array.forEach(tasks => {
  });( (tasks) =>{
    list_task += `<li> ${tasks.name} </li>`})
  ul.innerHTML = list_task