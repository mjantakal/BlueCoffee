
var fruits = ["This is my first blog in this year-2020  ", "Orange", "Apple", "Mango", "Lemon", "cherry","Dates"];
var noOfRows = fruits.length / 3;
var k = 0;

if (!Number.isInteger(noOfRows)) {
    noOfRows = parseInt(noOfRows);
    noOfRows++;
}
for (var i = 0; i < noOfRows; i++) {

    // adding row 
    var divRow = document.createElement('div');
    divRow.className = "row";
    document.getElementById('container').appendChild(divRow);

    // Adding cells in a row
    for (j = 0; j < 3; j++) {
        var divForCol = document.createElement('div');
        divForCol.className = "col-sm-4";

        var aTagForBlog = document.createElement('a');
        aTagForBlog.setAttribute('href', '../Html/blog.html');

        var divBlogImage = document.createElement('div');
        divBlogImage.className = "blog-image";

        aTagForBlog.appendChild(divBlogImage);
        divForCol.appendChild(aTagForBlog);

        var aTagForTitleDiv = document.createElement('a');
        aTagForTitleDiv.setAttribute('href', 'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools');

        var divForTitle = document.createElement('div');
        divForTitle.className = "div-for-title";


        var blogTitle = document.createElement('h4');
        var blgTitleTxtNode = document.createTextNode(fruits[k]);
        blogTitle.appendChild(blgTitleTxtNode);

        var blogDisc = document.createElement('h5');
        var blgDiscTextNode = document.createTextNode("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,")
        blogDisc.appendChild(blgDiscTextNode);

        divForTitle.appendChild(blogTitle);
        divForTitle.appendChild(blogDisc);
        aTagForTitleDiv.appendChild(divForTitle);

        var divForInsights = document.createElement('div');
        divForInsights.className = "div-for-insights";

        var avatarDiv = document.createElement('div');
        avatarDiv.className = "div-for-avatar";

        var ancForAvatar = document.createElement('a');
        ancForAvatar.setAttribute('href','https://bootsnipp.com/snippets/z81qK');

        var imgForAvatar = document.createElement('img');
        imgForAvatar.className="authorImg";
        ancForAvatar.appendChild(imgForAvatar);
        avatarDiv.appendChild(ancForAvatar);
        divForInsights.appendChild(avatarDiv);

        var divForAuthDet = document.createElement('div');
        divForAuthDet.className="div-for-auth-det";

        var authName = document.createElement('h5');
        var authNameTextNode = document.createTextNode("Manasa Jantakal");
        authName.appendChild(authNameTextNode);

        var divForDateAndReadTime = document.createElement('div');
        divForDateAndReadTime.className="div-for-date-read";

        var dateOfPublish = document.createElement('h6');
        var dateTextNode = document.createTextNode("Mar 29");
        dateOfPublish.appendChild(dateTextNode);
        divForDateAndReadTime.appendChild(dateOfPublish);

        var spanDot = document.createElement('span');
        spanDot.className="dot";
        divForDateAndReadTime.appendChild(spanDot);

       
        var readTime = document.createElement('h6');
        var readTimeTextNode = document.createTextNode("6 min read");
        readTime.appendChild(readTimeTextNode);    
        divForDateAndReadTime.appendChild(readTime);

        // var likeIcon = document.createElement('i');
        // likeIcon.className="fas fa-thumbs-up";
        // divForDateAndReadTime.appendChild(likeIcon);

        divForAuthDet.appendChild(authName);
        divForAuthDet.appendChild(divForDateAndReadTime);
        divForInsights.appendChild(divForAuthDet);

        divForCol.appendChild(aTagForTitleDiv);
        divForCol.appendChild(divForInsights);
        divRow.appendChild(divForCol);

        k++;
        if (k == fruits.length) {
            break;
        }
    }

}

