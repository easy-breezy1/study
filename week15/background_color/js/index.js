function showBgrd() {
switch (document.getElementById("background-clr").value) {
        case "dark": 
document.body.style.background = "#151719";
        document.body.style.color = "white";
        break;
        case "light": 
        document.body.style.background = "#FFF8DC";
        document.body.style.color = "#BA0846";
        break;
case "color":
    document.body.style.background = "linear-gradient(to right, #FB7BA2, #FCE043)";
    break;
    case "grey":
        document.body.style.background = "#9C9C9C";
        document.body.style.color = "white";
        break;
        case "brown":
            document.body.style.background = "#834D18";
            document.body.style.color = "#FFEFD5";
            break;
}
}