let buscar = () => {
    let username = document.getElementById('usuario').value;
    fetch(`https://api.github.com/users/${username}?`)
    .then(response => response.json())
    .then(data => {
        let name1 = data.name;
        let img1 = data.avatar_url;
        let numRepos1 = data.public_repos;
        document.getElementById('informacion').innerHTML = `<h2>Resultados</h2>
                                                            <h4>Nombre</h4>
                                                            <p>${name1}</p>
                                                            <h4>Foto</h4>
                                                            <img src=${img1}/>
                                                            <h4>Número de repositorios</h4>
                                                            <p>${numRepos1}</p>`
    });

}

document.getElementById('btn1').addEventListener('click', buscar);