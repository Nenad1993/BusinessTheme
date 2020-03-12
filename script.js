    function slideShow(){
        var radio = document.getElementsByClassName("radio");
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");

        for (var i in radio){
            if(radio[i].checked){
            slides[i].classList.add("active");
            dots[i].classList.add("clicked");
        }else if(slides[i].classList.contains("active")){
            slides[i].classList.remove("active");
            dots[i].classList.remove("clicked");
        }
    }
    
};

    function showNav(){
        if(document.getElementById("links").classList.contains("open")){
        document.getElementById("links").classList.remove("open");
    } else{
        document.getElementById("links").classList.add("open");
    }
    }


