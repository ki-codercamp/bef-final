var update = document.querySelector('#update');

update.addEventListener('click', function(){
  fetch('employees/edit', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "firstName": update.value.firstName,
      "lastName": update.value.lastName,
      "title": update.value.title,
      "startDate": update.vaule.startDate,
      "wage": update.value.wage,
      "birthdate": update.value.birthdate
    });
  });
  console.log(fetch);
})
