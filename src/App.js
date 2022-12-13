import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';
// import {BsPlusCircle} from 'react-icons/bs'



function App() {
  return (
    <div className='contaner-fluid' style={{backgroundColor:'black'}}>
      <nav className='navbar navbar-expand-lg '>
        <div className='nav'>
          <div className='netflix-logo'>
            <img className='img-fluid' src={require('./pictures/Netflix-Brand-Logo.png')} />
          </div>
          <div>
            <button className='signIn'>Sign In</button>
          </div>
        </div>
      </nav>


      <section className='sec1 container-fluid'>
        <div className='row p-5 justify-content-center'>
          <div className='col-sm-10 col-md-8 col-lg-6 text-light my-5 py-5' style={{textAlign:'center'}}>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-9 col-lg-9 px-0'>
                <input className='email my-3' placeholder='Email address'/>
              </div>
              <div className='col-sm-3 col-md-4 col-lg-3 px-0'>
                <button className='started-btn my-3'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='conatainer-fluid'>
        <div className='container'>
          <div className='row py-5 justify-content-center align-items-center text-light'>
            <div className='col-sm-11 col-md-5 col-lg-5 '>
              <h1>Enjoy on your TV.</h1>
              <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>

            <div className='col-sm-11 col-md-5 col-lg-5 '>
              <img className='img-fluid' src={require('./pictures/tv.png')} />
            </div>
          </div>
        </div>

      </section>


      <section className='conatainer-fluid'>
        <div className='container'>
          <div className='row p-5 justify-content-center align-items-center text-light'>
            <div className='col-sm-11 col-md-5 col-lg-5 '>
              <div>
                <img className='img-fluid' src={require('./pictures/mobile-0819.jpg')} />
              </div>
            </div>

            <div className='col-sm-11 col-md-5 col-lg-5 '>
              <h1>Download your shows to watch offline.</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className='conatainer-fluid'>
        <div className='container'>
          <div className='row p-5 align-items-center text-light'>
            <div className='col-sm-11 col-md-5 col-lg-5 mx-5 '>
              <h1>Watch everywhere.</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
          </div>
        </div> 
      </section>



      <section className='conatainer-fluid'>
        <div className='container'>
          <div className='row p-5 justify-content-center align-items-center text-light'>
            <div className='col-sm-11 col-md-5 col-lg-5 '>
              <div>
                <img className='img-fluid' src={require('./pictures/kid.png')} />
              </div>
            </div>

            <div className='col-sm-11 col-md-5 col-lg-5 '>
              <h1>Create profiles for kids.</h1>
              <p>
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid py-5 row justify-content-center align-items-center'>
          <div className='col-sm-10 col-md-8 col-lg-7 text-light' style={{textAlign:'center'}}>
            <h1 >Frequently Asked Questions</h1>
            <div className='circlecross'>
              <h4>What is Netflix?</h4>
              {/* <BsPlusCircle size={30} /> */}
            </div>

            <div className='circlecross'>
              <h4>How much does Netflix cost?</h4>
              {/* <BsPlusCircle size={30} /> */}
            </div>

            <div className='circlecross'>
              <h4>Where can I watch?</h4>
              {/* <BsPlusCircle size={30} /> */}
            </div>
            <div className='circlecross'>
              <h4>How do I cancel?</h4>
              {/* <BsPlusCircle size={30} /> */}
            </div>
            <div className='circlecross'>
              <h4>What can I watch on Netflix?</h4>
              {/* <BsPlusCircle size={30} /> */}
            </div>
            <div className='circlecross'>
              <h4>Is Netflix good for kids?</h4>
              {/* <BsPlusCircle size={30} /> */}
            </div>
            <p>
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-9 col-lg-9 px-0 gap-0'>
                <input className='email my-3' placeholder='Email address'/>
              </div>
              <div className='col-sm-3 col-md-4 col-lg-3 px-0'>
                <button className='started-btn my-3'>Get Started</button>
              </div>
            </div>
          </div>

        </section>

        <section className='container-fluid py-5'>
          <div className='container p-5'>
            <div className='row justify-content-center'>
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link'> Questions? Contact us.</a>
                  </li>
                </ul>
              </div>

              <div className='col-sm-6 col-md-3 col-lg-3'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link'>FAQ</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Investor Relations</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Privacy</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Speed Test</a>
                  </li>
                </ul>
              </div>


              <div className='col-sm-6 col-md-3 col-lg-3'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link'>Help Center</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Jobs </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Cookie Preferences</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Legal Notices</a>
                  </li>
                </ul>
              </div>

              <div className='col-sm-6 col-md-3 col-lg-3'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link'>Account</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Ways ti Watch </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Corporat Information</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Only on Netflix </a>
                  </li>
                </ul>
              </div>

              <div className='col-sm-6 col-md-3 col-lg-3'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link'>Media Center</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Terms of Use</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Contact Us</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>



    </div>


  );
}

export default App;
