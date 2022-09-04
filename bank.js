// bank user database
users = {
  1000: { acno: 1000, username: "neer", password: 1000, balance: 5000 },
  1001: { acno: 1001, username: "lisha", password: 1001, balance: 4000 },
  1002: { acno: 1002, username: "vyom", password: 1002, balance: 2000 },
};
//register
function register() {
  acno = reg_acno.value;
  password = reg_psw.value;
  username = reg_name.value;
  if (acno in users) {
    alert("alrady exist");
  } else {
    users[acno] = {
      acno,
      username,
      password,
      balance: 0
    }
    localStorage.setItem("users", JSON.stringify(users))
    // console.log(users);
    alert("register successfully");
    window.location = "index.html";
  }
}
//log in
function login() {
  acno = login_acno.value;
  psw = login_psw.value;
  users = JSON.parse(localStorage.getItem("users"))
  if (acno in users) {
    if (psw == users[acno]["password"]) {
      alert("log in sucessfull")
      window.location = "dash.html"
    } else {
      alert("incorrect password")
    }
  } else {
    alert("user doesnot exist")
  }
}
