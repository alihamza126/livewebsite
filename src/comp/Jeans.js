import React from 'react'
import { NavLink } from 'react-router-dom'

function Jeans() {
  return (
    <div>
        <h2>Jeans Are Here</h2>
        <div id="carouseljean" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.rollingstone.com/wp-content/uploads/2023/05/best-jeans-for-men.jpg?w=1581&h=1054&crop=1" class="d-block w-100 " height={275}/>
    </div>
    <div class="carousel-item">
      <img src="https://rdmplus.com/wp-content/uploads/2022/05/0-Main-Hero-Images-GettyImages-583665441-1536x864.jpg" class="d-block w-100 " height={275} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://eatsleepwander.com/wp-content/uploads/2020/10/Black-and-White-Photo-Collage-YouTube-Thumbnail-scaled.jpg" class="d-block w-100 " height={275} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouseljean" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouseljean" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Jeans