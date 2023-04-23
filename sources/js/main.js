jQuery(function () {
  var isFileSaverSupported = init();
  Duck = new Dckuinojs();

  $(".compile-but").click(function (e) {
    var duckOutput = Duck.toArduino(
      $(".duckyscript").val(),
      $("#checkBtn").prop("checked")
    );
    if (duckOutput !== false) {
      $(".arduino").val(duckOutput);
      if (isFileSaverSupported) $(".dl-but").prop("disabled", false);
    } else {
      $(".arduino").val("Syntax error.");
      $(".dl-but").prop("disabled", true);
    }
  });
  $(".dl-but").click(function (e) {
    var sketchName = "Dckuino.js-" + makeId(4);
    var zipHandler = new JSZip();
    zipHandler.file(
      sketchName + "/" + sketchName + ".ino",
      $(".arduino").val()
    );
    zipHandler.file(
      "readme",
      $.ajax({
        url: "README.md",
        type: "get",
        success: function (data) {
          return data;
        },
      })
    );
    zipHandler.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, sketchName + ".zip");
    });
  });
});
function init() {
  $(".dl-but").prop("disabled", true);
  try {
    return !!new Blob();
  } catch (e) {}
}
function makeId(idLenght) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < idLenght; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
