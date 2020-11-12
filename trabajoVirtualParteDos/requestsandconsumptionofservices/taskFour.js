function searchOrg() {
    let nameOrg = document.getElementById('name').value;
    let url = `https://api.github.com/orgs/github/${nameOrg}`
    let list = document.querySelector('ul');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const repos_url = data.repos_url;
            return fetch(repos_url)
        })
        .then(listResponse => listResponse.json())
        .then(repoName => {
            for (const name of repoName) {
                list.innerHTML += `<li>${name.name}</li>`
            };
        })



}

document.getElementById('btn').addEventListener('click', searchOrg);