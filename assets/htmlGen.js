function createManager(manager){
    return `<div class="card" style="width: 18rem;"><div class="card-header">${manager.role}</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: ${manager.name}</li><li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></ali><li class="list-group-item">Employee ID: ${manager.id}</li><li class="list-group-item">Office Number: ${manager.officeNum}</li></ul></div><br />`
}

function createEngineer(engineer){
    return `<div class="card" style="width: 18rem;"><div class="card-header">${engineer.role}</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: ${engineer.name}</li><li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></ali><li class="list-group-item">Employee ID: ${engineer.id}</li><li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li></ul></div><br />`
}

function createIntern(intern){
    return `<div class="card" style="width: 18rem;"><div class="card-header">${intern.role}</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: ${intern.name}</li><li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></ali><li class="list-group-item">Employee ID: ${intern.id}</li><li class="list-group-item">School: ${intern.school}</li></ul></div><br />`
}

function createHTML(manager,engineer,intern) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
    ${manager.map(createManager).join('\n')}
    ${engineer.map(createEngineer).join('\n')}
    ${intern.map(createIntern).join('\n')}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = {createHTML};
