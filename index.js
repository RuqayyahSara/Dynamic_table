        var table = document.getElementById("table");
        var input = document.getElementById("input");
        var row;
        var data;

        window.onload = function (){
        var e=1;        
        for(var i=0;i<10;i++){
        row= table.insertRow(i);
        for(var j=0;j<10;j++){
        data = row.insertCell(j);
        data.innerHTML=e;
        e++;
        }
        }  
}

function changeData(){
        Delete();
        var e=1;     
        var ip= Number(input.value);
        for(var i=0;i<10;i++){
                row= table.insertRow(i);
                for(var j=0;j<10;j++){
                data = row.insertCell(j);
                table.rows[i].cells.item(j).innerHTML=e;
                if(e % ip==0)
                 table.rows[i].cells.item(j).innerHTML="**";
                 e++;
                }
            }   
        }
function Delete(){
for(var i=10;i>0;i--){
        table.deleteRow(i-1);
}
}   














  /*   
for(var i=0;i<10;i++){
            for(var j=0;j<10;j++){
            var b=Number(table.rows[i].cells.item(j).innerHTML);
            if(b % a==0)
             table.rows[i].cells.item(j).innerHTML="**";
            }
        }

var tr
= document.getElementById("tr");

tr.addEventListener("click",()=>{
    table.rows[2].cells.item(1).innerHTML="**";
});    
 
        } */
