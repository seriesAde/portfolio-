document.getElementById('downloadBtn').addEventListener('click', function () {
    html2canvas(document.body).then(function (canvas) {
        // Create a link element
        let link = document.createElement('a');
        link.download = 'webpage-screenshot.png'; // filename
        link.href = canvas.toDataURL(); // get image data URL
        link.click(); // trigger download
    });
});
console.log ("hello world")

    const backgrounds = [
        'images/me_white_nobackground.png', 
        'images/promise_smile_short.jpg',
        '/images/me_white.jpg',
        '/images/promise.jpg', 
        '/images/me_smiling_white.jpg',
        '/images/me_native_ph.jpg', 
      ];
  
      let index = 0;
      const imageElement =document.getElementById('bg_image');
  
      function changeBackground() {      
          index = (index + 1) % backgrounds.length;
         
            imageElement.style.opacity= 0;
            setTimeout(()=>{
                imageElement.src=backgrounds[index];
                imageElement.style.opacity=1;
            }, 500);
      }
      setInterval(changeBackground,5000)
  
      // Initial background
      changeBackground();
  
      // Change every 3 minutes (180,000 ms)
      setInterval(changeBackground, 180000);