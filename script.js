
let punkti = 10;
let kaulins1 = 0;
let kaulins2 = 0;
document.body.onload = function(){
    document.getElementById("apraksts").style.display = "none"
    document.getElementById("beigas").style.display = "none"
    document.getElementById("izvade").style.display = "none"
    document.getElementById("izveleVertiba").style.display = "none"
    document.getElementById("izvele").style.display = "none"
    document.getElementById("punkti").style.display = "none"
}

function kaulinuMesana(){
    kaulins1 = Math.floor(Math.random()*6) + 1;
    kaulins2 = Math.floor(Math.random()*6) + 1;
    document.getElementById("izvade").style.display = "block";
    document.getElementById("izvade").innerHTML = "Dators met abus metamos kauliņus:<br>"+
    "Pirmā kauliņa vērtība: " + kaulins1 +"<br>Otrā kauliņa vērtība: " + kaulins2;
    punkti--;
    document.getElementById("punkti").innerHTML = "Punktu skaits: <b>" + punkti + "</b>";
    if(kaulins1 + kaulins2 == 7){
        punkti+=2;
        document.getElementById("punkti").innerHTML = "Punktu skaits: <b>" + punkti + "</b>";
        document.getElementById("izvade").innerHTML = "Dators met abus metamos kauliņus:<br>"+
    "Pirmā kauliņa vērtība: " + kaulins1 +"<br>Otrā kauliņa vērtība: " + kaulins2 + "<br><b>Uzmesto kauliņu summa ir 7! Tu iegūsti 2 punktus! </b>";
    }
    if(punkti <= 0){
        document.getElementById("apraksts").style.display = "none"
        document.getElementById("beigas").style.display = "block"
        document.getElementById("izvade").style.display = "none"
        document.getElementById("izveleVertiba").style.display = "none"
        document.getElementById("izvele").style.display = "none"
        document.getElementById("punkti").style.display = "none"
        document.getElementById("playerName").style.display = "none"
            
        }
}
document.getElementById("ok").addEventListener("click", function(){
    let playerName =  document.getElementById("vards").value;
    document.getElementById("playerName").innerHTML = "Sveiki " + playerName + "!";
    document.getElementById("vards").style.display = "none";
    document.getElementById("ok").style.display = "none";
    document.getElementById("apraksts").style.display = "block";

    document.getElementById("punkti").style.display = "block"
    document.getElementById("punkti").innerHTML = "Punktu skaits: <b>" + punkti + "</b>";
    document.getElementById("izvele").style.display = "block";
    document.getElementById("izveleVertiba").style.display = "block";

    
        document.getElementById("izveleVertiba").addEventListener("keydown", function(event){
            if(event.key === "Enter"){
                if(document.getElementById("izveleVertiba").value == 1){
                    event.preventDefault();
                    document.getElementById('izveleVertiba').value = "";
                    kaulinuMesana();
            }
                if(document.getElementById("izveleVertiba").value == 2){
                    document.getElementById("apraksts").style.display = "none"
                    document.getElementById("beigas").style.display = "block"
                    document.getElementById("izvade").style.display = "none"
                    document.getElementById("izveleVertiba").style.display = "none"
                    document.getElementById("izvele").style.display = "none"
                    document.getElementById("punkti").style.display = "none"
                    document.getElementById("playerName").style.display = "none"
                }
        }
        })
    

    
})
