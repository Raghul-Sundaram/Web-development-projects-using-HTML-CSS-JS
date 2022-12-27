let videoList = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.play-video video');
let title = document.querySelector('.play-video p');
let vid = document.querySelectorAll('.video-list .vid');

videoList.forEach( vid =>{
    vid.onclick = () =>{
        videoList.forEach( vid => vid.classList.remove('active'));
        vid.classList.add('active');
        if(vid.classList.contains('active')){
            let src = vid.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = vid.children[1].innerHTML;
            title.innerHTML = text;
        }
    };
}  );

