console.log("hello");

function conv() {
    var input = document.getElementById('in').value;
    var output = "POLYGON((";

    input = input.replace(/\n/g, "").replace(/\r/g, "").replace(/ /g, "").replace(/"/g, "");
    input = input.replace(/],\[/g, ";").replace(/,/g, "*");
    input = input.replace('"', "").replace('"', "").replace("[", "").replace("]", "");
    input = input.replace(/N/g, "").replace(/E/g, "").replace(/S/g, "-").replace(/W/g, "-");

    var st = input.split(";");
    var a = st.length;

    console.log(a);

    var nr = 0;

    for (var i = 1; i <= a; i ++) {
        if (output != "POLYGON((") {
            output += ",";
        }
        
        var coord = st[nr];
        var stCord = coord.split("*");
        var lat = stCord[0];
        var lon = stCord[1];
        
        if (lat.includes("d")) {
            var degrees = lat.split("d");
            var degree = parseFloat(degrees[0]);
            var decimal = degrees[1];
            
            var minutes = decimal.split("m");
            var minute = parseFloat(minutes[0]);
            var second = parseFloat(minutes[1]);
            
            var lonConverted = degree + (minute / 60) + (second / 3600);
            
            var latStr = lonConverted + "";
            
            var endAt = 12;
            var latCount = latStr.length;
            console.log(latCount)
            
            if (latCount < 12) {
                endAt = latCount;
            }
            
            lat = latStr.substring(0, endAt);
        }
        
        if (lon.includes('d')) {
            var degrees = lon.split("d");
            var degree = parseFloat(degrees[0]);
            var decimal = degrees[1];
            
            var minutes = decimal.split("m");
            var minute = parseFloat(minutes[0]);
            var second = parseFloat(minutes[1]);
            
            var lonConverted = degree + (minute / 60) + (second / 3600);
            
            var lonStr = lonConverted + "";
            
            var endAt = 12;
            var lonCount = lonStr.length;
            console.log(lonCount);
            
            if (lonCount < 12) {
                endAt = lonCount;
            }
            
            lon = lonStr.substring(0, endAt);
        }
        
        output += lon + " " + lat;
        nr += 1;
    }

    output += "))";
    document.getElementById('out').innerHTML = output;

    document.getElementById("labelTwo").classList.remove('hide');
}