import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Shirts() {
  return (
    <div><h2>Shirts are here</h2>
        <div className="container">
        <div id="carouselshirts" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/51x2-gY+vFL._AC_UX522_.jpg" class="d-block w-100 " height={375}/>
    </div>
    <div class="carousel-item">
      <img src="https://d2z0lqci37nukm.cloudfront.net/media/catalog/product/cache/f5772ab7378eedee4ad2fc7d131c4075/b/e/beige-large-check-short-sleeve-casual-shirt_1_1xrl3h5vtxdo4yxy.jpg" class="d-block w-100 " height={275} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/51x2-gY+vFL._AC_UX522_.jpg" class="d-block w-100 " height={275} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselshirts" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselshirts" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>  
        <div className="links">
        <NavLink to={'denny'}>Denny</NavLink>
        <NavLink to={'polo'}>Polo</NavLink>

      </div>

        <Outlet/> 
    </div>
  )
}

export default Shirts