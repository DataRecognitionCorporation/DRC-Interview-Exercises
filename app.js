const fetch = require('node-fetch');

const URL = 'https://gorest.co.in/public/v1/users';

const PATTERN = /gmail.com/;

async function getUsers() {
  const result = await fetch(URL);
  return await result.json();
}

(async () => {
  let data = await getUsers();

  let emails = data.data.filter(r => r.email.match(PATTERN)).map(r => r.email);

  for (let x of emails) console.log(x);
})();