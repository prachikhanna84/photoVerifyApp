  var uploadedImages = [] ;

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
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          uploadedImages[i] = e.target.result;
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

function handleIDSelect(evt){

    var idFiles = evt.target.files[0];
      // Only process image files.
    if (idFiles.type.includes('image/')) {
        var reader = new FileReader();
            reader.readAsDataURL(idFiles);
            reader.onload = function(e) {
                // result contains loaded file.
                e.target.result[2] = reader.result;
              var span = document.createElement('span');
              span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(idFiles.name), '"/>'].join('');
              document.getElementById('list').insertBefore(span, null);
            }
    }
    else{
        console.log("error");
    }
}


  function handleFileUpload(evt) {

    console.log(uploadedImages[1]);

}

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
  document.getElementById('idFiles').addEventListener('change',handleIDSelect,false);
  document.getElementById('submitButton').addEventListener('click',handleFileUpload,false);