function fact(n){
    if(n==0){
        return(1);
    }
    if(n>0){
        return n*fact(n-1);
    }
    else{
        return("error")
    }
}

function applique(f,liste){
    res=[];
    for(i=0;i<liste.length;i++){
        res.push(f(liste[i]));
    }
    return(res)
}

msgs = [
    { "msg" : "Hello World", "usr": "Bob", "date":"7 mars 2025, 14h02"},
    { "msg" : "Blah Blah", "usr": "Alice", "date":"7 mars 2025, 14h07" },
    { "msg" : "I love cats", "usr": "Bob", "date":"7 mars 2025, 14h09" }
];

function update(liste){
    const amodif=window.document.getElementById("liste");
    amodif.innerHTML="";
    for(i=0;i<liste.length;i++){
        noeud=window.document.createElement("li");
        date=window.document.createElement("div");
        date.className="date";
        datetxt=window.document.createTextNode(liste[i]["date"]);
        noeudmsg=window.document.createTextNode(liste[i]["usr"]+" : "+liste[i]["msg"])
        date.appendChild(datetxt);
        noeud.appendChild(date);
        noeud.appendChild(noeudmsg)
        amodif.appendChild(noeud);
    }
}

function changestyle(){
    const title=window.document.getElementById("titre");

    title.style="color:"+getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function updateAPI(){
    fetch('http://localhost:8080/msg/getAll')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const amodif=window.document.getElementById("liste");
    amodif.innerHTML="";
        for(i=0;i<data.length;i++){
            noeud=window.document.createElement("li");
            date=window.document.createElement("div");
            date.className="date";
            datetxt=window.document.createTextNode(data[i]["date"]);
            noeudmsg=window.document.createTextNode(data[i]["usr"]+" : "+data[i]["msg"])
            date.appendChild(datetxt);
            noeud.appendChild(date);
            noeud.appendChild(noeudmsg)
            amodif.appendChild(noeud);
        }
    });

}


function addmsg(){
    usr=document.getElementById('pseudo').value
    msg=document.getElementById('message').value
    console.log(usr,msg)
    fetch('http://localhost:8080/msg/post/'+usr+"/"+msg)
    document.getElementById('message').value=""
    fetch('http://localhost:8080/msg/getAll')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const amodif=window.document.getElementById("liste");
    amodif.innerHTML="";
        for(i=0;i<data.length;i++){
            noeud=window.document.createElement("li");
            date=window.document.createElement("div");
            date.className="date";
            datetxt=window.document.createTextNode(data[i]["date"]);
            noeudmsg=window.document.createTextNode(data[i]["usr"]+" : "+data[i]["msg"])
            date.appendChild(datetxt);
            noeud.appendChild(date);
            noeud.appendChild(noeudmsg)
            amodif.appendChild(noeud);
        }
    });
}