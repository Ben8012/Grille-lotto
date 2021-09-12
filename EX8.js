
//crée la grille grace a un nouvel objet creeGrille 

function creeGrille(){
       new Grille();
}

//constructeur des objets grilles
function Grille(){
       this.cases = [];
       this.afficher(); 
       
}

//constructeur des objet Case
function Case(grille, numero, td, span){
       this.grille = grille;
       this.numero = numero;
       this.td = td;
       this.span = span;
       this.coche = false;
}


// afficher la grille 
Grille.prototype.afficher = function(){
      
       var div = document.getElementById("grille");
       while (div.firstChild) div.removeChild(div.firstChild);
       var table = div.appendChild(document.createElement("table"));
       var k = 0;
       for (let i = 0; i <= 6; i++) {
              var tr = table.appendChild(document.createElement("tr"));
        
              for (let j = 0; j <= 6; j++) {

                     var td = tr.appendChild(document.createElement("td"));
                     td.setAttribute("style","width:50px; height:50px; text-align: center; border: solid 1px red; ")
                     var span = td.appendChild(document.createElement("span"));
                     span.appendChild(document.createTextNode(k));
                     span.setAttribute("class","opacity");

                     var c = new Case(this, k, td, span);
                     this.cases[this.cases.length] = c;

                     td.onclick = function(c) { return function() { c.afficherCase() }; }(c);
                     k++; 
              }
    }
   
}

tabNum=[];
Case.prototype.afficherCase = function(){
      
      if(tabNum.length <= 5){
              this.coche = !this.coche;
              if(this.coche){
                     this.span.setAttribute('class','noOpacity');
                     tabNum.push(this.numero);

              }
              else{
                     this.span.setAttribute('class','opacity');
                     for (let i = 0; i< tabNum.length; i++) {
                          if( this.numero == tabNum[i]){
                                 tabNum.splice(i,1)
                          } 
                     }
              }
   
      }
      else{
              this.span.setAttribute('class','opacity');
              for (let i = 0; i< tabNum.length; i++) {
                     if( this.numero == tabNum[i]){
                            tabNum.splice(i,1)
                     }
              }

       }
      
       if(tabNum.length == 6){
              var div = document.getElementById('message');
              while (div.firstChild) div.removeChild(div.firstChild);
              var p = div.appendChild(document.createElement('p'));
              p.appendChild(document.createTextNode("Votre gille de lotto contient les numéros: "+tabNum[0]+", "+tabNum[1]+", "+tabNum[2]+", "+tabNum[3]+", "+tabNum[4]+", "+tabNum[5]));
            
       }
       else{
              var div = document.getElementById('message');
              while (div.firstChild) div.removeChild(div.firstChild);
       }
       // console.log(this.numero);
       //console.log(tabNum);  
       //console.log(this.coche);
       //console.log(this.td);
       console.log(this.grille);
}



