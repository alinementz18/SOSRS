let currentFacingMode = 'environment';
const videoPreview = document.querySelector('#video-preview');

const startCamera = (facingMode = 'environment') => {
    stopCamera();
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode,
            width: {
                max: 1980,
                ideal: 1024
            },
            height: {
                max: 1080,
                ideal: 768
            }
        }
    }).then((stream) => {
        videoPreview.srcObject = stream;
    }).catch((error) => {
        console.error('Erro ao acessar a câmera:', error);
    });
}

const stopCamera = () => {
    if (videoPreview.srcObject) {
        const stream = videoPreview.srcObject;
        const tracks = stream.get
