function loadJSON(callback, json_file) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("json/kinematics");
    xobj.open('GET', json_file, false);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
            return xobj.responseText;
        }
    };
    xobj.send(null);
}

function load_json(json_file) {
    var actual_JSON = null;
    loadJSON(function(response) {
        // Parse JSON string into object
        actual_JSON = JSON.parse(response);
    }, json_file);
    return actual_JSON;
}

function read_json(json_file) {
    return load_json(json_file);
}