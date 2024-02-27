const btn_picture = document.querySelector('.btn_picture');
const gallery = document.querySelector('.gallery');

btn_picture.addEventListener('click', async() => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    
    const data = await response.json();

    data.message.forEach(photo => {
      gallery.innerHTML += `<picture><img src="${photo}" /></picture>`
    })
      const img = document.createElement('img');
      img.src = photo;
      img.alt = 'Random photo';
      gallery.appendChild(img);
    } catch (error) {
      console.log(error)
    }
  });
  
  
  