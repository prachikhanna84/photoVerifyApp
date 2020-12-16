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
          var span = document.createElement('span');
          span.innerHTML = ['<img class="col-25" src="', e.target.result,
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
    console.log("evt.target", evt.target.files);
    console.log("idFiles.type", idFiles.type , typeof(idFiles.type))

      // Only process image files.
    if (idFiles.type.includes('image/')) {
        console.log("true");
        var reader = new FileReader();
            reader.readAsDataURL(idFiles);

            reader.onload = function(e) {
                // result contains loaded file.
                console.log(reader.result);
              var span = document.createElement('span');
              span.innerHTML = ['<img class="col-25" src="', e.target.result,
                                '" title="', escape(idFiles.name), '"/>'].join('');
              document.getElementById('list').insertBefore(span, null);
            }
    }
    else{
        console.log("error");
    }



}
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
  document.getElementById('idFiles').addEventListener('change',handleIDSelect,false);