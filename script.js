function myFunction(path) {
    document.getElementById('myIframe').src = path;
    console.log(document.getElementById('myIframe').src);
  }

  document.body.onscroll = function myFunction2() {  
    const scrolltotop = document.scrollingElement.scrollTop;
    const target = document.getElementById("main1");
    const xvalue = "center";
    const factor = 0.5;
    const yvalue = scrolltotop * factor;

    const scrolltotop2 = document.scrollingElement.scrollTop;
    const target2 = document.getElementById("html");
    const xvalue2 = "center";
    const factor2 = 0.2;
    const yvalue2 = scrolltotop2 * factor2;

    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    target2.style.backgroundPosition = xvalue2 + " " + yvalue2 + "px";
  }

