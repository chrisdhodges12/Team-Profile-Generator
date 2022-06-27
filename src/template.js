const getManager = function (manager) {
  return `
    <div class="col-sm-3 d-flex justify-content-center">
        <div class="card w-100">
            <div class="card-header">
                <h2 class="card-title"> Manager</h2>
                <h3 class="card-title>">${manager.name}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${manager.email}">Send Email</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`;
};

const getEngineer = function (engineer) {
  return `
    <div class="col-sm-3 d-flex justify-content-center">
        <div class="card w-100">
            <div class="card-header">
                <h2 class="card-title"> Engineer</h2>
                <h3 class="card-title>">${engineer.name}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${engineer.email}">Send Email</a></li>
                    <li class="list-group-item">
                        GitHub: <a href="github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`;
};

const getIntern = function (intern) {
  return `
    <div class="col-sm-3 d-flex justify-content-center">
        <div class="card w-100">
            <div class="card-header">
            <h2 class="card-title"> Intern</h2>
            <h3 class="card-title>">${intern.name}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">Send Email</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>`;
};

generateHTML = (data) => {
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role == "Manager") {
      const manager = getManager(employee);
      cardArray.push(manager);
    }

    if (role == "Engineer") {
      const engineer = getEngineer(employee);
      cardArray.push(engineer);
    }

    if (role == "Intern") {
      const intern = getIntern(employee);
      cardArray.push(intern);
    }
  }

  const employees = cardArray.join("");
  return generate(employees);
};

const generate = function (employees) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="../templates/css/style.css">
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area row justify-content-center">
                  ${employees}
              </div>
          </div>
      </div>
  </body>
  </html>`;
};

// export to index
module.exports = generateHTML;
