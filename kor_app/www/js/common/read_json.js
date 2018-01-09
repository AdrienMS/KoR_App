function read_json(json_path, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", json_path, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    //var file_data = new File([""], json_path);
    //var r = new FileReader();
    //r.onload = function(e) {
    //    var contents = e.target.result;
    //    console.log(contents);
    //}
    //alert(r.readAsText(file_data));
}