const videoElement = document.getElementById('video');
const button = document.getElementById('button')

//Prompt the user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); /* API */ 
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error here
    }
}

// add event listener on click.
button.addEventListener('click', async () => {
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset the button
    button.disabled = false;
});

//On Load
selectMediaStream();