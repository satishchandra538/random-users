const createNode = (type) => {
    return document.createElement(type);
}
const appendNode = (parent, child) => {
    return parent.appendChild(child)
}

fetch('https://randomuser.me/api?results=27')
    .then(resp => resp.json())
    .then(data => {
        const parent = document.getElementsByClassName('container-fluid')[0];
        let results = data.results;
        let i = results.length;
        console.log(results[0]);
        while (i != -1) {

            const row = createNode('div');
            row.classList.add("row");
            appendNode(parent, row);

            for (let j = 0; j < 3; j++) {
                i--;
                const user = createNode('div');
                appendNode(row, user);
                user.id = i;
                user.classList.add("col-md-4");
                user.classList.add("user");

                const picture = createNode('img');
                appendNode(user, picture);
                picture.classList.add("image");
                picture.src = results[i].picture.large;

                const details = createNode("div");
                details.classList.add("details");
                appendNode(user, details);

                const name = createNode('div');
                appendNode(details, name);
                name.innerHTML = `${results[i].name.title} ${results[i].name.first} ${results[i].name.last}`

                const gender = createNode('div');
                appendNode(details, gender);
                gender.innerHTML = `Gender - ${results[i].gender}`;

                const email = createNode('div');
                appendNode(details, email);
                email.innerHTML = `Email - ${results[i].email}`;

                const cell = createNode('div');
                appendNode(details, cell);
                cell.innerHTML = `cell - ${results[i].cell}`;

                const location = createNode('div');
                appendNode(details, location);
                location.innerHTML = `Location - ${results[i].location.city},${results[i].location.state},${results[i].location.country}`;
            }
        }
    })
