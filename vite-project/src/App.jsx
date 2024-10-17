import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import homeimage from './assets/newimage.jpg'
import FunctionC from './FunctionC'
import ClassC from './ClassC'
function App() {
  var propsobjecttop={
    name:'srikkanth',
    education:'engineering',
    address:'chennai'
  }
  var propsobjectbottom={
    name:'sathya',
    education:'arts',
    address:'mumbai'
  }
  
  return (
    <>
   <ClassC/>
   

  
    <header className='header-container'>
      <a href='#' className='logo'>portfolio</a>
      <nav className='navmenu'>
          <a href='/home'>Home</a>
          <a href='/about'>About</a>
          <a href='/services'>Services</a>
          <a href='/portfolio'>Portfolio</a>
          <a href='/dropdown'>Dropdown</a>
          <a href='/contact'>Contact</a>
          <a href='/more'>more</a> 
      </nav>
    </header>
   <ClassC colour='red'/>
    <section className='home'>
      <div className='home-content'>
        <h3>hi there</h3>
        <h1>Srikkanth</h1>
        <h3>and I'm a</h3>
        <p>I'm an engineer in my final year.
          
          <div className='home-sci'>
            <a href='#'></a>
            <a href='#'></a>
            <a href='#'></a>
            <a href='#'></a>

          </div></p>
          <a href='#' className='btnbox'>More about me</a>
      </div>
      </section>
          
    <section className='about'>
      <div className='about-img'>
        
      </div>
      <div className='about-text'>
        <h2>about me</h2>
        <h4>full stack developer</h4>
        <p>sdfjoj sfj fingl dskol jehrik fhieog ndjepif erhflnd ejifpls foojefv ndoijd fjf</p>
        <a href='#' className='btnboxx'>More about me</a>
      </div>
    </section>
    <section className='services'>
      <div className='container'>
        <h1 className='subtitle'>My Services</h1>
        <div className='services-list'>
          <div>
            <i className='serv1'></i>
            <i class="fa-brands fa-instagram"></i>
            <h2>UI/UX design</h2>
            <p>dk fjuodn fhfue nvhgsojf jaderu kfomsjs jeiojvn dfuujs vnskejvk gftuh</p>
            <a href='#' className='read'>learn more</a>
          </div>
          <div>
            <i className='serv2'></i>
            <h2>UI/UX design</h2>
            <p>dk fjuodn fhfue nvhgsojf jaderu kfomsjs jeiojvn dfuujs vnskejvk gftuh</p>
            <a href='#' className='read'>learn more</a>
          </div>
          <div>
            <i className='serv3'></i>
            <h2>UI/UX design</h2>
            <p>dk fjuodn fhfue nvhgsojf jaderu kfomsjs jeiojvn dfuujs vnskejvk gftuh</p>
            <a href='#' className='read'>learn more</a>
          </div>
        </div>
     

      </div>
    </section>
    <h1 className='sub-title2'>My Skills</h1>
    <section>
      <div className='container1' id='skills'>

        <h1 className='heading1'>Technical Skills</h1>
        <div className='technical-bars'>
          <div className='bar'>
            <div className='info'>
              <span>HTML</span>
            </div>
            <div className='progress-line html'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <div className='info'>
              <span>CSS</span>
            </div>
            <div className='progress-line css'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <div className='info'>
              <span>Javascript</span>
            </div>
            <div className='progress-line javascript'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <div className='info'>
              <span>Python</span>
            </div>
            <div className='progress-line python'>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className='container1'>
        <h1 className='heading1'>Professional Skills</h1>
        <div className='radial-bars'>
        <div className='radial-bar'>
          <svg x='100' y='100' viewBox='0 0 200 200'>
          <circle className='progressbar' cx='100' cy='100' r='80' ></circle>
          <circle className='path path-1' cx='100' cy='100' r='80' ></circle>
          </svg>
          <div className='percentage'>90%</div>
          <div className='text'>Creativity</div>
        </div>
        <div className='radial-bar'>
          <svg x='100' y='100' viewBox='0 0 200 200'>
          <circle className='progressbar' cx='100' cy='100' r='80' ></circle>
          <circle className='path path-2' cx='100' cy='100' r='80' ></circle>
          </svg>
          <div className='percentage'>85%</div>
          <div className='text'>Problem Solving</div>
        </div>
        <div className='radial-bar'>
          <svg x='100' y='100' viewBox='0 0 200 200'>
          <circle className='progressbar' cx='100' cy='100' r='80' ></circle>
          <circle className='path path-3' cx='100' cy='100' r='80' ></circle>
          </svg>
          <div className='percentage'>80%</div>
          <div className='text'>Communication</div>
        </div>
        <div className='radial-bar'>
          <svg x='100' y='100' viewBox='0 0 200 200'>
          <circle className='progressbar' cx='100' cy='100' r='80' ></circle>
          <circle className='path path-4' cx='100' cy='100' r='80' ></circle>
          </svg>
          <div className='percentage'>70%</div>
          <div className='text'>Leadership</div>
        </div>
        </div>
      </div>
    </section>
    <FunctionC dennis = {propsobjectbottom} />
    <footer className='contact' id='contact'>
      <div className='contact-text'>
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work together</h4>
        <p>jsdfkj jkfowo kvkdn ieuokwn kowuhn sfhhg kfjgh gldkeuoog dmslfivjj nvkjeiio jfnjkervnion jvbejrfbeuiv iveroivne vjorvio oernwoirioww hfwoh</p>
        <div className='contact-list'>
          <li><i className='bs bsx-send'></i>contact@gmail.com</li>
          <li><i className='bs bsx-phone'></i>1234567890</li>
        </div>
        <div className='contact-icons'>
          <a href=''><i class='bx bxl-facebook'></i></a>
          <a href=''><i class='bx bxl-facebook'></i></a>
          <a href=''><i class='bx bxl-facebook'></i></a>
          <a href=''><i class='bx bxl-facebook'></i></a>
        </div>
      </div>
    </footer>
  

   
    </>
  )
}

export default App
