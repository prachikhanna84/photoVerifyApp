let uploadedImages = [];
let j = 0;

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                uploadedImages[j] = e.target.result;
                j++;
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('list').insertBefore(span, null);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }


}

function handleIDSelect(evt) {

    var idFiles = evt.target.files[0];
    // Only process image files.
    if (idFiles.type.includes('image/')) {
        var reader = new FileReader();
        reader.readAsDataURL(idFiles);
        reader.onload = function (e) {
            // result contains loaded file.
            uploadedImages[2] = reader.result;
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" src="', e.target.result,
                '" title="', escape(idFiles.name), '"/>'].join('');
            document.getElementById('list').insertBefore(span, null);
        }
    } else {
        console.log("error");
    }
}

function sendResponse(result){
    console.log(result);
    document.getElementById('response').hidden = false;
    document.getElementById('response').innerHTML = result;
}

function handleFileUpload(evt) {

    var raw = JSON.stringify({
        "liveimage1": uploadedImages[0],
        "liveimage2": uploadedImages[1],
        "idphoto": uploadedImages[2]
    });

    console.log("raw " , raw);

    const url = 'http://localhost:3000/data';
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body:  raw,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => sendResponse(result))
      .catch(error => console.log('error', error));

    //alert("The form was submitted");

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
document.getElementById('idFiles').addEventListener('change', handleIDSelect, false);
document.getElementById('submit').addEventListener('click', handleFileUpload, false);
