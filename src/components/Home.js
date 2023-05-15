import React from 'react'
import { Routes,Route ,Link} from 'react-router-dom';
import '../Styles/Home.css'
import Home2 from '../Pages/Home2';
import Hyderabad from './../Pages/Hyderabad';
import Karnataka from './../Pages/Karnataka';
import Tamilnadu from '../Pages/Tamilnadu';
import AndhraPradesh from '../Pages/AndhraPradesh';
import Gujurat from '../Pages/Gujurat';
import Goa from '../Pages/Goa';

const Home = () => {
  return (
    <>
    <div className="container-fluid">
        <div className='container-fluid container1'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='heading'><b>Food Delivery</b></h1>
                        <h3>Find the best restaurants, cafés <br />and bars in India</h3>
                    </div>
                </div>
            </div>
            <div className='content'>
             <h2>Popular Locations In <img src='https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp' alt='flag' /> India</h2>
<p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,<br/> Zomato covers it all. Explore menus, 
    and million of restaurant photos and reviews from users<br/> just like you, to find your next great meal.</p>
     </div>

     <br/><br/>      


{/* Food items */}
  <div className="container-fluid">
  <div className="row text-center">
      
<div class="row">
<div class="col-md-4">
<div class="btn-group2">
<Link to="/Home/Hyderabad" class="btn btn-primary btn-block"> Hyderabad Specials</Link>
</div>
</div>
<div class="col-md-4">
<div class="btn-group2">
<Link to="/Home/Karnataka" class="btn btn-primary btn-block"> Karnataka Specials</Link>
</div>
</div>
<div class="col-md-4">
<div class="btn-group2">
<Link to="/Home/Tamilnadu" class="btn btn-primary btn-block"> Tamilnadu Specials</Link>
</div>
</div>
<div class="col-md-4">
<div class="btn-group2">
<Link to="/Home/Andhrapradesh" class="btn btn-primary btn-block"> Andhra Pradesh Specials</Link>
</div>
</div>
<div class="col-md-4">
<div class="btn-group2">
<Link to="/Home/Gujurat" class="btn btn-primary btn-block"> Gujurat Specials</Link>
</div>
</div>
<div class="col-md-4">
<div class="btn-group2">
<Link to="/Home/Goa" class="btn btn-primary btn-block"> Goa Specials</Link>
</div>
</div>
</div>

               </div>

                </div>
                </div>
                <Routes>
                  <Route path='/' element={<Home2 />}></Route>
                  <Route path='/Hyderabad' element={<Hyderabad />}></Route>
                  <Route path='/Karnataka' element={<Karnataka />}></Route>
                  <Route path='/Tamilnadu' element={<Tamilnadu />}></Route>
                  <Route path='/Andhrapradesh' element={<AndhraPradesh />}></Route>
                  <Route path='/Gujurat' element={<Gujurat />}></Route>
                  <Route path='/Goa' element={<Goa />}></Route>

                </Routes>
    </>
  )
}

export default Home
