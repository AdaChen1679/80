var sname =[];
var d_array =[];
function sub(){
    for(var i=1; i<=4; i++ ) {
        var n =document.getElementById("s" + i).value;
        sname.push(n);
        console.log(sname);
    }
    console.log(sname);
    var len = sname.length;
    for(var j=0; j<len; j++){
        d_array.push("<h4>NAME - "+sname[j]+"</h4>");
        console.log(d_array);
    }
    document.getElementById("display1").innerHTML=d_array;
    var rc = d_array.join(" ");
    console.log(rc);
    
    document.getElementById("display2").innerHTML=rc;
    document.getElementById("sub1").style.display="none";
    document.getElementById("sor1").style.display="inline";

}
function sor(){
    d_array.sort();
    var rc = d_array.join(" ");
    console.log(rc);
    document.getElementById("display2").innerHTML=rc;
}