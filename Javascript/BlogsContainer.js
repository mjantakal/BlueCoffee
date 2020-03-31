
var fruits = ["Banana", "Orange", "Apple", "Mango","Lemon","cherry"];
var noOfRows = fruits.length/3;
var k=0;

if(!Number.isInteger(noOfRows)){
    noOfRows = parseInt(noOfRows);
    noOfRows++;
}
for(var i=0; i<noOfRows;i++){

    // adding row 
    var divRow = document.createElement('div');
    divRow.className="row";
    document.getElementById('container').appendChild(divRow);

    // Adding cells in a row
    for(j=0; j<3;j++){
        var divForCol = document.createElement('div');
        divForCol.className="col-sm-4";
        var blogTitleH3 = document.createElement('h3');
        var blgTitle = document.createTextNode(fruits[k]);
        k++;
        blogTitleH3.appendChild(blgTitle);
        divForCol.appendChild(blogTitleH3);
        divRow.appendChild(divForCol);
        if(k==fruits.length){
            break;
        }
    }
   
}

