// var BASE_URL = "https://localhost:9800"
// var BASE_URL = "https://139.196.102.109:9800"
var BASE_URL = "https://www.starix.top:9800"


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return (false);
}
