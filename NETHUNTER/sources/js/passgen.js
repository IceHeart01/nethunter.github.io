var site, salt;
var text, password;
function generate() {
  site = document.getElementById("site_url").value;
  salt = document.getElementById("keyword").value;
  text = site + salt + "j93J$iu3ku#*fKJWUG83KWUEG8u*# Ku$#jG84KJ";
  password = md5(text);
  document.getElementById("pass_text").innerHTML = password;
}
