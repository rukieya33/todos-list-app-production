
    var preview = document.getElementById('preview');
    

document.getElementById('uploadButton').addEventListener('change', async function(event) {
    var files = event.target.files;
    
    // Clear any existing content
    preview.innerHTML = '';

    // Loop through all selected files
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // Only process image files
      if (!file.type.match('image.*')) {
        continue;
      }

      var imgContainer = document.createElement('div');
      imgContainer.style.marginBottom = '20px'; // Spacing between each image container

      var img = document.createElement('img');
     try {
      const response = await fetch('https://todos-list-app-production-backend.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.imageUrl) {
        img.src = data.imageUrl;
        img.style.display = 'block';
      } else {
        alert('Upload failed: No image URL returned');
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed. Check console.');
    }
      img.style.height = '100px';
      img.style.display = 'block'; // Ensure the image is displayed in a block to put it on a new line
      img.style.marginBottom = '10px';

  };
 const reader = new FileReader();

  reader.onload = () => {
    const base64 = reader.result;
    preview.src = base64;
    localStorage.setItem('savedImage', base64); // persist image
  };
  if (file) {
    reader.readAsDataURL(file); // converts to base64
  }
      
      // Append the image and file info to the container
      imgContainer.appendChild(img);
    
// Store the image URL in sessionStorage
      
        var userInfo = document.createElement('p');
        userInfo.innerHTML = `${sessionStorage.getItem('logged_first')} ${sessionStorage.getItem('logged_last')} <p>(${sessionStorage.getItem('logged_email')})</p>`;
        document.getElementById('user').innerText = "Welcome Back, " + sessionStorage.getItem('logged_first') +  " " + sessionStorage.getItem('logged_last')
        document.getElementById("content").appendChild(userInfo)
        sessionStorage.setItem('user_details', userInfo.textContent)
        preview.style.backgroundImage = 'url(' + img.src + ')';
      preview.style.backgroundSize = 'cover';
      preview.style.backgroundPosition = 'center';
      
       
      // Append the container to the preview div

  });
  window.addEventListener('DOMContentLoaded', () => {
  const savedImage = localStorage.getItem('savedImage');
    var userInfo = document.createElement('p');
       userInfo.innerHTML = `<h3>${sessionStorage.getItem('logged_first')} ${sessionStorage.getItem('logged_last')}</h3> <p>(${sessionStorage.getItem('logged_email')})</p>`;
        document.getElementById('user').innerText = "Welcome Back, " + sessionStorage.getItem('logged_first') +  " " + sessionStorage.getItem('logged_last')
        document.getElementById("content").appendChild(userInfo)
        sessionStorage.setItem('user_details', userInfo.textContent)

    preview.style.backgroundImage = 'url(' + savedImage + ')';
    preview.style.backgroundSize = 'cover';
    preview.style.backgroundPosition = 'center';
    
    document.getElementById('uploadButton').style.display = 'block'; // Hide the upload button if an image is already set

        
    
      
});

const logout_user = () => {
  sessionStorage.clear();
}
