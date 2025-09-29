

var input = document.querySelector(".content");
var check = document.getElementById("valid");
var press = document.querySelector(".qr_button")
var qrCodeContainer = document.querySelector(".qrcode");
var downloadButton = document.querySelector(".Download");



console.log(input)
console.log(check)

input.addEventListener('input', () => {
  if (input.value.trim() === "") {
    check.style.color = "red";
    check.style.display = "block";
    check.innerHTML = "Please enter a valid text or URL"
  }
});
press.addEventListener('click',()=>{
    if (input.value.trim() === ""){
        check.style.color = "red"
        check.style.display = "block"
        check.style.paddingTop = "15px"
        check.innerHTML = "Please enter a valid text or URL"
    }
    else{
        check.style.display = "block"
        check.style.color = "green"
        check.style.paddingTop = "15px"
        check.innerHTML = "Thank you for using our service"
    }
})


press.addEventListener('click', () => {
    if (input.value.trim() === "") {
        // Show error if input is empty
        alert("Please enter a valid text or URL");
    } else {
        // Clear previous QR code (reset canvas)
        qrCanvas.getContext('2d').clearRect(0, 0, qrCanvas.width, qrCanvas.height);

        // Generate new QR code and render it to the canvas
        QRCode.toCanvas(qrCanvas, input.value.trim(), {
            width: 200,    // Width of the QR code
            height: 200,   // Height of the QR code
            color: {
                dark: "#000000",  // Dark color (black)
                light: "#ffffff"  // Light color (white)
            }
        }, function (error) {
            if (error) {
                console.error(error);
            }
        });
    }
});

downloadButton.addEventListener('click', function() {
    var dataURL = qrCanvas.toDataURL("image/png"); // Convert canvas to image URL (PNG format)
    
    // Create an anchor element for downloading the image
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'qr_code.png'; // Set the name of the downloaded file
    link.click(); // Trigger the download
});