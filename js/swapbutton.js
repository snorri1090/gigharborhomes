off_TopNav1 = new Image();
off_TopNav2 = new Image();
off_TopNav3 = new Image();
off_TopNav4 = new Image();
off_HomeBtn1 = new Image();
off_HomeBtn2 = new Image();

off_TopNav1.src = "images/topnav_search_off.jpg";
off_TopNav2.src = "images/topnav_luxury_off.jpg";
off_TopNav3.src = "images/topnav_about_off.jpg";
off_TopNav4.src = "images/topnav_contact_off.jpg";
off_HomeBtn1.src = "images/homeBtn_search_off.png";
off_HomeBtn2.src = "images/homeBtn_feature_off.png";

on_TopNav1 = new Image();
on_TopNav2 = new Image();
on_TopNav3 = new Image();
on_TopNav4 = new Image();
on_HomeBtn1 = new Image();
on_HomeBtn2 = new Image();

on_TopNav1.src = "images/topnav_search_on.jpg";
on_TopNav2.src = "images/topnav_luxury_on.jpg";
on_TopNav3.src = "images/topnav_about_on.jpg";
on_TopNav4.src = "images/topnav_contact_on.jpg";
on_HomeBtn1.src = "images/homeBtn_search_on.png";
on_HomeBtn2.src = "images/homeBtn_feature_on.png";

function swap() {
    if (document.images) {
        for (var x = 0;
x < swap.arguments.length;
x += 2) {
            document[swap.arguments[x]].src = eval(swap.arguments[x + 1] + ".src");
        }
    }
}