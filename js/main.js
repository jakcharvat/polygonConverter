console.log("hello");

var output;

function conv() {
    var input = document.getElementById('in').value;
    output = "POLYGON((";

    input = input.replace(/\n/g, "").replace(/\r/g, "").replace(/ /g, "").replace(/"/g, "").replace(/],\[/g, ";").replace(/,/g, "*").replace('"', "").replace('"', "").replace("[", "").replace("]", "").replace(/N/g, "").replace(/E/g, "").replace(/S/g, "-").replace(/W/g, "-");

    var st = input.split(";");
    var a = st.length;

    console.log(a);

    var nr = 0;
    var firstCoord = "";

    for (var i = 1; i <= a; i ++) {
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
        
        if (i == 1) {
            firstCoord = lon + " " + lat
        }

        output += lon + " " + lat + ",";
        nr += 1;
    }

    output += firstCoord + "))";
    document.getElementById('out').innerHTML = output;

    document.getElementById("allOut").classList.remove('hideBottom');
    document.getElementById("allIn").classList.add('hideTop');

    document.getElementById('lastButton').classList.add('show');
}

function back() {
    document.getElementById('in').value = "";

    document.getElementById("allOut").classList.add('hideBottom');
    document.getElementById("allIn").classList.remove('hideTop');
}

function last() {
    document.getElementById('out').innerHTML = output;

    document.getElementById("allOut").classList.remove('hideBottom');
    document.getElementById("allIn").classList.add('hideTop');
}

function copy() {
    // Create a dummy input to copy the string array inside it
    var dummy = document.createElement("input");

    // Add it to the document
    document.body.appendChild(dummy);

    // Set its ID
    dummy.setAttribute("id", "dummy_id");

    // Output the array into it
    document.getElementById("dummy_id").value = output;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand("copy");

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
}