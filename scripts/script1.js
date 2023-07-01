var trimestre=document.querySelectorAll(".trimestre");
var classe=document.querySelectorAll(".classe");
var nav2=document.querySelector(".nav2");
var eleve=document.querySelectorAll(".liste ul li");;
var ul=document.querySelector(".liste ul");
var list=document.querySelector(".liste");
var titre=document.querySelector('title');
var valtrimestre;
var niv=document.querySelector("#niv");
var trim=document.querySelector("#trim");
var nom=document.querySelector("#nom");
var college=document.querySelector("#colleg");



var niveau;
      


for (let i = 0; i < trimestre.length; i++) {
    trimestre[i].addEventListener("click", function() {
       // alert(trimestre[i].textContent);
      nav2.style.display = "block";
      valtrimestre=trimestre[i].textContent;
      
    });
}



for (let i = 0; i < classe.length; i++) {
    classe[i].addEventListener("click", function() {
        var ul=document.querySelector("#liste ul");
        var x=classe[i];
        nom.innerHTML="";
        //alert(valtrimestre);
        //Suppressionde la balise ul dans #liste
        //var y=list.removeChild(ul);
      

      //creation de la balise ul dans #liste
      //var ulcreate=document.createElement('ul');
     // var uladd=list.appendChild(ulcreate);
      
      if(titre.textContent=="Trimestre 1"){
        trim.innerHTML="1er Trimestre"
        switch(true){
                case x.textContent=="6ème":niveau=sixieme1,niv.innerHTML="classe : 6ème";
                break;
                case x.textContent=="5ème":niveau=cinquieme1,niv.innerHTML="classe : 5ème";
                break;
                case x.textContent=="4ème":niveau=quatrieme1,niv.innerHTML="classe : 4ème";
                break;
                case x.textContent=="3ème":niveau=troisième1,niv.innerHTML="classe : 3ème";
                break;
                case x.textContent=="STC":niveau=stc1,niv.innerHTML="classe : Seconde S/L";
                break;
                case x.textContent=="PS":niveau=ps1,niv.innerHTML="classe : Première S";
                break;
                case x.textContent=="TS":niveau=ts1,niv.innerHTML="classe : Terminale S";
                break;   
            }
      }
      else if(titre.textContent=="Trimestre 2"){
        trim.innerHTML="2ème Trimestre"
        switch(true){
            case x.textContent=="6ème":niveau=sixieme2,niv.innerHTML="classe : 6ème";
            break;
            case x.textContent=="5ème":niveau=cinquieme2,niv.innerHTML="classe : 5ème";
            break;
            case x.textContent=="4ème":niveau=quatrieme2,niv.innerHTML="classe : 4ème";
            break;
            case x.textContent=="3ème":niveau=troisième2,niv.innerHTML="classe : 3ème";
            break;
            case x.textContent=="STC":niveau=stc2,niv.innerHTML="classe : Seconde S/L";
            break;
            case x.textContent=="PS":niveau=ps2,niv.innerHTML="classe : Première S";
            break;
            case x.textContent=="TS":niveau=ts2,niv.innerHTML="classe : Terminale S";
            break; 
            }

      }
      else if(titre.textContent=="Trimestre 3"){
        trim.innerHTML="3ème Trimestre"
        switch(true){
            case x.textContent=="6ème":niveau=sixieme3,niv.innerHTML="classe : 6ème";
            break;
            case x.textContent=="5ème":niveau=cinquieme3niv.innerHTML="classe : 5ème";
            break;
            case x.textContent=="4ème":niveau=quatrieme3,niv.innerHTML="classe : 4ème";
            break;
            case x.textContent=="3ème":niveau=troisième3,niv.innerHTML="classe : 3ème";
            break;
            case x.textContent=="STC":niveau=stc3,niv.innerHTML="classe : Seconde S/L";
            break;
            case x.textContent=="PS":niveau=ps3,niv.innerHTML="classe : Première S";
            break;
            case x.textContent=="TS":niveau=ts3,niv.innerHTML="classe : Terminale S";
            break; 
                
            }

      }
      else{

      }
     
    var ul2=document.querySelector(".liste ul");var z="";var tab;
      var b="";
      var tab=";"
      for(a=0;a<niveau.length;a++){
        

       
      
        z=z+"<li><span>"+niveau[a].nom+"</span><span>"+niveau[a].moyenne+"</span><span>"+niveau[a].rang+"e</span></li>";
      // tab=tab+;
       
        
      } ul2.innerHTML=z;
     
     eleve=document.querySelectorAll(".liste ul li");

     for (let i = 0; i < eleve.length; i++) {
        eleve[i].addEventListener("click", function() {
       // alert(eleve[i].querySelector("span").innerHTML);

        for(a=0;a<niveau.length;a++){
            if(eleve[i].querySelector("span").innerHTML==niveau[a].nom){
                var d="";
                for (const property in niveau[a]) {
                    d=d+"<li><span>"+`${property} </span><span>: ${niveau[a][property]}`+"</span></li>";
                  }
                  
                ul2.innerHTML=d;
                nom.style.display="block";
                nom.innerHTML="Nom :"+niveau[a].nom;
                document.querySelector(".liste ul li").style.display="none";
            }
        }
       // eleve[i].querySelector("table").style.visibility="visility";
       // eleve[i].querySelector("table").setAttribute("class", "table");

       // var c=eleve[i];
        //alert(c.textContent)
       // var tableau=document.c.querySelector("table") 
          //  var tab="";

        
       
    
        
        });
    }

      
    }); 
    

   
   

}





