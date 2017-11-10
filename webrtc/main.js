console.log('test!');

navigator.getUserMedia(
    {audio: true, video: false},
    function (mediaStream) {
        var src = window.URL.createObjectURL(mediaStream);
        console.log('src: ', src);
        document.getElementById('myVideo').src = src;
    },
    function (err) {
        console.log('err: ', err);
    }
);
