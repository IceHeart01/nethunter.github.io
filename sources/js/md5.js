var site;
var text, password;
function generate() {
  site = document.getElementById("md5_value").value;
  password = md5(site);
  document.getElementById("md5_result").innerHTML = password;
}
