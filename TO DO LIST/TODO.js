
var x=document.getElementsByTagName('li')
for(i=0;i<x.length;i++){
    var bt=document.createElement('button')
    con=document.createTextNode("\u00D7")
    bt.appendChild(con)
    bt.className="a"
    x[i].appendChild(bt)
}
var y=document.getElementsByClassName('a')
for(j=0;j<y.length;j++){
    y[j].onclick=function(){
        var yy=this.parentElement;
        yy.style.display="none"
    }
}
for(k=0;k<x.length;k++){
    var button=document.createElement('button')
    condition=document.createTextNode("\u2714")
    button.appendChild(condition)
    button.className="b"
    x[k].appendChild(button)
}
var yz=document.getElementsByClassName('b')
for(l=0;l<yz.length;l++){
    yz[l].onclick=function(){
        var zz=this.parentElement;
        zz.style.background="green"
    }
}
function ab(){
var z=document.getElementById('input1').value 
txt=document.createTextNode(z)

var bt=document.createElement('button')
con=document.createTextNode("\u00D7")
bt.className="a"
bt.appendChild(con)


var button=document.createElement('button')
condition=document.createTextNode("\u2714")
button.className="b"
button.appendChild(condition)

var s=document.createElement('li')
s.appendChild(txt)
s.appendChild(bt)
s.appendChild(button)
var n= document.getElementById('ul')
n.appendChild(s)
document.getElementById('input1').value=""

var y=document.getElementsByClassName('a')
for(j=0;j<y.length;j++){
    y[j].onclick=function(){
        var yy=this.parentElement
        yy.style.display="none"
    }
}

 var yz=document.getElementsByClassName('b')
for(l=0;l<yz.length;l++){
 yz[l].onclick=function(){
    var zz=this.parentElement
  zz.style.background="green"
   }
 }
}


