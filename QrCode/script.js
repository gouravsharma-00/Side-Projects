let button = document.getElementById('button');
let image  = document.getElementById('image');

button.onclick= () => {
    content = 'youtube.com';
    let linkQr = 'https://api.qrserver.com/v1/create-qr-code/';
    image.src = linkQr + '?size=150x150&data=' + content;
};