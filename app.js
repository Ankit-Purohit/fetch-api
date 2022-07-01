// https://randomuser.me/api/;
let url = "https://randomuser.me/api/";

async function get() {
  let name = await fetch(url);
  return name;
}
function get_user(){
    get()
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let arr = data.results[0];
    check(arr);
  });
}
function check(ob) {
  console.log(ob);
  let nam = document.getElementById("name");
  let img = document.getElementById("ima");
  let gen = document.getElementById("gender");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let country = document.getElementById("country");
  nam.textContent = ob.name.first;
  img.setAttribute("src", ob.picture.medium);
  gen.textContent = ob.gender;
  email.textContent = ob.email;
  phone.textContent = ob.phone;
  country.textContent = ob.location.country;
}
