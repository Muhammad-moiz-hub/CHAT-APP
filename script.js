var divtag = document.getElementById("contain");

var list = [];

var autoreply = ["hey", "hello", "i am good", "where are you", "OH ,WOW"];


console.log(autoreply[num]);

function btn() {
  var input = document.getElementById("input");
  if (input.value != "") {
    divtag.innerHTML = "";

    list.push({ text: input.value , admin :false });
    handletime();
    input.value = "";

    var num = Math.floor(Math.random() * autoreply.length);
    setTimeout(() => {
      list.push({ text: autoreply[num] ,admin :true});
      handletime();
    }, 1000);
    function handletime() {
        divtag.innerHTML = ""
      for (i = 0; i < list.length; i++) {
        divtag.innerHTML += `<h1 id="msg" class="h-[5vh] px-20  py-5 bg-white flex items-center ml-2 md:ml-20 mr-2 md:mr-20  ${list[i].admin? "self-start bubble right" :"self-end bubble left"} ">${list[i].text}</h1>`;
      }
    }
  }
}
