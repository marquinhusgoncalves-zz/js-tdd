async function getUsers(users) {
  const promises = users.map(user => fetch(`https://api.github.com/users/${user}`).then(r => r.json()));
  const people = await Promise.all(promises);
  console.log(people.map(p => p.company));
}
getUsers(['willianjusten', 'guilouro', 'lhbzr']);
