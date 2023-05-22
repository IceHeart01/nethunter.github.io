function generateQRCode() {
    let usertext = document.getElementById("usertext").value;
    if (usertext) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, usertext);
     
    document.getElementById("qrcode-container").style.display = "block";
    }
    }