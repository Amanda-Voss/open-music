let musicasDatabase = [
  {
    id: 1,
    imageUrl: 'https://i1.sndcdn.com/artworks-9eHemT8mcRiT-0-t500x500.jpg',
    title: 'Blinding Lights',
    autor: 'The Weeknd',
    musicStyle: 'Pop',
    price: 9.99,
  },
  {
    id: 2,
    imageUrl:
      'https://i1.sndcdn.com/artworks-IeJj19bzbXIrLiE3-Foa40Q-t500x500.jpg',
    title: 'Levitating',
    autor: 'Dua Lipa',
    musicStyle: 'Pop',
    price: 8.49,
  },
  {
    id: 3,
    imageUrl: 'https://i1.sndcdn.com/artworks-ljx5dbG0SjKa-0-t500x500.jpg',
    title: 'SICKO MODE',
    autor: 'Travis Scott',
    musicStyle: 'Hip-Hop',
    price: 10.5,
  },
  {
    id: 4,
    imageUrl:
      'https://i1.sndcdn.com/artworks-s3zOCWcV8XQVtQcv-0emq8A-t500x500.jpg',
    title: 'Believer',
    autor: 'Imagine Dragons',
    musicStyle: 'Rock Alternativo',
    price: 7.99,
  },
  {
    id: 5,
    imageUrl:
      'https://i1.sndcdn.com/artworks-HdP2hgHMtaycpDcx-BDjB0A-t1080x1080.jpg',
    title: 'Shape of You',
    autor: 'Ed Sheeran',
    musicStyle: 'Pop',
    price: 9.2,
  },
  {
    id: 6,
    imageUrl: 'https://i1.sndcdn.com/artworks-000584234423-y1fg41-t500x500.jpg',
    title: 'Bad Guy',
    autor: 'Billie Eilish',
    musicStyle: 'Electropop',
    price: 8.75,
  },
  {
    id: 7,
    imageUrl: 'https://i1.sndcdn.com/artworks-000063664660-wum57a-t500x500.jpg',
    title: 'Viva La Vida',
    autor: 'Coldplay',
    musicStyle: 'Rock',
    price: 7.5,
  },
  {
    id: 8,
    imageUrl:
      'https://i1.sndcdn.com/artworks-QJ6zzhbFtxOF3gwC-B5Y9VQ-t500x500.jpg',
    title: 'Hips Don’t Lie',
    autor: 'Shakira ft. Wyclef Jean',
    musicStyle: 'Latin Pop',
    price: 6.99,
  },
  {
    id: 9,
    imageUrl:
      'https://i1.sndcdn.com/artworks-Vbzwlj2vObER7q2j-1u8WPw-t500x500.jpg',
    title: 'Drivers License',
    autor: 'Olivia Rodrigo',
    musicStyle: 'Pop',
    price: 9.49,
  },
]
const ul = document.getElementById("music-list")


function listagem(lista) {
  lista.forEach((item, index) =>{
    //criando li
 const li =document.createElement("li")
 li.classList.add("music-card")


 //criando a img cover
 const img = document.createElement("img")
 img.src = item.imageUrl
 img.alt = item.title
 img.classList.add("music-cover")
 li.appendChild(img)

 //criando div container
 const divInfo = document.createElement("div")
 divInfo.classList.add("music-info-container")

 //adicioando title h5
 const musicTitle = document.createElement("h5")
 musicTitle.textContent = item.title
 divInfo.appendChild(musicTitle)

// discription container
 const divDescription = document.createElement("div")
 divDescription.classList.add("music-description-container")

//  discription p
  const authorName = document.createElement("P")
 authorName.classList.add("music-description")
 authorName.textContent = item.autor

 const musicStyle = document.createElement("P")
 musicStyle.classList.add("music-description")
musicStyle.textContent = item.musicStyle

divDescription.appendChild(authorName)
divDescription.appendChild(musicStyle)
divInfo.appendChild(divDescription)

//music price
const divPrice = document.createElement("div")
 divPrice.classList.add("music-price-container")

//  music price
const musicPrice = document.createElement("p")
musicPrice.classList.add("music-price")
musicPrice.textContent = "R$ " + item.price

// botao de comprar
const buyBtn = document.createElement("button")
buyBtn.classList.add("music-buy-btn")
buyBtn.textContent = "comprar"

divPrice.appendChild(musicPrice)
divPrice.appendChild(buyBtn)
divInfo.appendChild(divPrice)

li.appendChild(divInfo)
ul.appendChild(li)


})
}

listagem(musicasDatabase)