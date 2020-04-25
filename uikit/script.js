
//Créer les éléments <li>[box]</li>
function createChessItems (box) {
    var li = document.createElement('li');
        li.textContent = box;
        return li;
}

//Rattacher les enfants <li> au parent <ul>
function appendChildren (parent, children){
        children.forEach(function (child){
            parent.appendChild(child);
        });
}

var chessboard =  document.getElementById("chessboard");

//Créer array pour y inclure tous les éléments <li>
var chessboardBoxes = [  
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
    createChessItems(''),
];
    
appendChildren(chessboard,chessboardBoxes);  


