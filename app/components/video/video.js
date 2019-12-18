function youtubeShowVideo() {
    var i, c,  v;
    v = document.querySelector(".youtube");
    console.log(v);
        i = document.createElement("img");
        i.setAttribute("src", "../img/bottom2.png");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        v.appendChild(i);
        v.appendChild(c);
        v.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.setAttribute("class", "frame");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
    }
}
youtubeShowVideo();