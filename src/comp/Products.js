import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
    <h1>Products Menu</h1>
        <NavLink to={'shirts'}>Shirts Page</NavLink>
        <NavLink to={'jeans'}> Jeans page</NavLink>
        <br />
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://queue-it.com/media/ppcp1twv/product-drop.jpg" class="d-block w-100 " height={275}/>
    </div>
    <div class="carousel-item">
      <img src="https://rdmplus.com/wp-content/uploads/2022/05/0-Main-Hero-Images-GettyImages-583665441-1536x864.jpg" class="d-block w-100 " height={275} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://eatsleepwander.com/wp-content/uploads/2020/10/Black-and-White-Photo-Collage-YouTube-Thumbnail-scaled.jpg" class="d-block w-100 " height={275} alt="..."/>
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
<br />
    <Outlet/>
    </div>
  )
}

export default Products