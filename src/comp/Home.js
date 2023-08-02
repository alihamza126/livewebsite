import React from 'react'

function Home() {
  return (
    <div> 
    <h1>Home Page</h1>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://media.istockphoto.com/id/1470280153/photo/the-ingredients-for-homemade-pizza-on-white-wooden-background.jpg?s=1024x1024&w=is&k=20&c=Yr347dCYEsr7Jgg1hf1OHSC6OoBEoEMIr6atJoPOUG0=" class="d-block w-100 " height={475}/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1327819785/photo/cooking-recipe-on-a-tablet-computer.jpg?s=1024x1024&w=is&k=20&c=GA1ikyk1V2ogCfk8NkR3f3EUzILOyFMQwdb6uaCYqnY=" class="d-block w-100 " height={475} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/480711002/photo/woman-using-food-app-on-her-cell-phone.jpg?s=1024x1024&w=is&k=20&c=xmBGlJ29SFN1HcvW54XkMX4z-w6JZCRD6LxO6wf1Dw8=" class="d-block w-100 " height={475} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home