function youtubeShowVideo() {
    var c,  v;
    v = document.querySelector(".youtube");
    console.log(v);
        c = document.createElement("div");
        c.setAttribute("class", "play");
        v.appendChild(c);
        v.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.setAttribute("class", "frame");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this);
            // document.querySelector(".video__fish").style.display = "none";
    }
}
youtubeShowVideo();