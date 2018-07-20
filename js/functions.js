var output;

function conv() {
    try {
        // document.getElementById('copyButton').classList.remove('success');
        // document.getElementById('copyButtonSpan').innerHTML = 'Sure?';

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
            
            if (lat.includes("m")) {
                var degrees = lat.split("d");
                var degreeCheck = degrees[0];
                var decimal = degrees[1];
                
                var minutes = decimal.split("m");
                var minute = parseFloat(minutes[0]);
                var second = parseFloat(minutes[1]);
                
                var degree = parseFloat(degreeCheck);

                if (degreeCheck.includes("-")) {
                    var latConverted = degree - (minute / 60) - (second / 3600);
                }
                else {
                    var latConverted = degree + (minute / 60) + (second / 3600);
                }
                
                var latStr = latConverted + "";
                
                var endAt = 12;
                var latCount = latStr.length;
                console.log(latCount)
                
                if (latCount < 12) {
                    endAt = latCount;
                }
                
                lat = latStr.substring(0, endAt);
            }
            else if (lat.includes("d")) {
                var degrees = lat.split("d");
                var degree = parseFloat(degrees[0]);
                var decimal = parseFloat(degrees[1]);

                var degreeCheck = degree.toString();

                if (degreeCheck.includes("-")) {
                    var latConverted = degree - (decimal / 60);
                }
                else {
                    var latConverted = degree + (decimal / 60);
                }

                var latStr = latConverted + "";
                
                var endAt = 12;
                var latCount = latStr.length;
                console.log(latCount)
                
                if (latCount < 12) {
                    endAt = latCount;
                }
                
                lat = latStr.substring(0, endAt);
            }
            
            if (lon.includes("m")) {
                var degrees = lon.split("d");
                var degreeCheck = degrees[0];
                var decimal = degrees[1];
                
                var minutes = decimal.split("m");
                var minute = parseFloat(minutes[0]);
                var second = parseFloat(minutes[1]);
                
                var degree = parseFloat(degreeCheck);

                if (degreeCheck.includes("-")) {
                    var lonConverted = degree - (minute / 60) - (second / 3600);
                }
                else {
                    var lonConverted = degree + (minute / 60) + (second / 3600);
                }
                
                var lonStr = lonConverted + "";
                
                var endAt = 12;
                var lonCount = lonStr.length;
                console.log(lonCount)
                
                if (lonCount < 12) {
                    endAt = lonCount;
                }
                
                lon = lonStr.substring(0, endAt);
            }
            else if (lon.includes("d")) {
                var degrees = lon.split("d");
                var degree = parseFloat(degrees[0]);
                var decimal = parseFloat(degrees[1]);

                var degreeCheck = degree + "";

                if (degreeCheck.includes("-")) {
                    var lonConverted = degree - (decimal / 60);
                }
                else {
                    var lonConverted = degree + (decimal / 60);
                }

                var lonStr = lonConverted + "";
                
                var endAt = 12;
                var lonCount = lonStr.length;
                console.log(lonCount)
                
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
    catch (err) {
        console.log(err);
        alert('Please input correct coordinates');
    }
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

    document.getElementById('copyButton').classList.add('success');
    document.getElementById('copyButtonSpan').innerHTML = 'Success!';
}

function validate() {
    document.getElementById("in").classList.remove("error");
}

function exportCSV() {
    try {
        const toExport = output;
        let csvContent = "data:text/csv;charset=utf-8," + output;
        
        var encoded = encodeURI(csvContent)
        var getCSV = document.createElement("a");
        getCSV.setAttribute("href", encoded);
        getCSV.setAttribute("download", "airspace.csv");
        getCSV.innerHTML = "Click To Download";
        document.body.appendChild(getCSV);

        getCSV.click();
        getCSV.remove();
    }
    catch (err) {
        console.log(err);
    }
}