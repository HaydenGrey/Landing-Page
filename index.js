class App extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        display: false
                }
                this.toggleDisplay = this.toggleDisplay.bind(this);
        };
        toggleDisplay() {
                this.setState((state) => ({
                  display: !state.display
                }));
              }

render() {
        
    return(
        <div>
        <div className="px-3 py-2 text-bg-dark position-sticky top-0 z-index-1020">
        <div className="container-fluid">
                <nav id="nav" className="nav navbar-header">
                <a className="navbar-brand d-flex flex-wrap align-items-left justify-content-left" href="#">
                <i class="fa-solid fa-hands-holding-circle"></i>
                {/*NavBar Links (empty)*/}
                <span className="" id="headerfont">General Website</span>
                </a>
                <br/>
                <a href="#shop" className="navbar-brand d-flex flex-wrap align-items-left justify-content-left d-xs-none"><span id="headerfont">Shop</span></a>

                <a href="#about" className="navbar-brand d-flex flex-wrap align-items-left justify-content-left d-xs-none"><span className="" id="headerfont">About</span></a>

                <a href="#contact" className="navbar-brand d-flex flex-wrap align-items-left justify-content-left d-xs-none"><span className="" id="headerfont">Contacts</span></a>

                </nav>
                </div>
        </div>
        <br/>
        <h1 className="text-center text-light bg-dark bg-gradient p-3 mb-4">(SiteName) Workshop Inc</h1>
        <img src="https://media.istockphoto.com/id/951514270/it/foto/sono-felice-di-lavorare-con-te.webp?s=612x612&w=is&k=20&c=buAgD8olRGFSDFeNsWcodo4AiwVZbnERAZqdDGiQeXk=" class="img-fluid" alt="" />
        <br/>
        <span id="about"></span>
        <div>
                <h2 class="text-center mt-5">About Us</h2>
                <div class="container-fluid shadow p-3 mb-5 bg-body rounded w-75 ">
                <p class="d-inline-block lh-lg">Band is a multidisciplinary creative studio based in the Pacific Northwest.
Their About Us page stands out by showcasing some of their unique and creative projects.
No number of words could hope to tell one of their potential clients nearly as much as these pictures can.
In this case, the 25 pictures featured on Band’s About Us page are worth much more than the 170 actual words you’ll read on the page.
The magical visuals and overall simple look and feel make this About Us page one of our top picks.
</p>
                </div>

        </div>
        <div class="mt-2" id="boxgrey">
        <h2 class="text-primary ms-3 mt-2 shadow p-3 mb-5 bg-body rounded text-center"><i class="fa-brands fa-algolia"></i> We Work For Your Success!! <i class="fa-brands fa-algolia"></i></h2>
        <h3 class="ms-3 mt-5 me-3 bg-primary bg-gradient p-2 text-light text-center">Our Objectives</h3>

        <div class="d-grid gap-2 col-5 mx-auto">
  <button onClick={this.toggleDisplay} class="btn btn-primary" type="button">View</button>

</div>
<br/>
{this.state.display && 
<div>
<div class="bg-primary bg-gradient p-2 text-light text-center">Improve Every Day</div>
<div class="bg-primary bg-gradient p-2 text-light bg-opacity-75 text-center">Never let Obstacles stop you</div>
<div class="bg-primary bg-gradient p-2 text-dark bg-opacity-50 text-center">Our Customers are Our Priority</div>
<div class="bg-primary bg-gradient p-2 text-dark bg-opacity-25 text-center">We're Family You Don't Need To Unionize</div>
<div class="bg-primary bg-gradient p-2 text-dark bg-opacity-10 text-center">A Raise Is Always Around The Corner</div>
</div>
}

<br/>
<img src="https://thumbs.dreamstime.com/b/love-our-customers-wooden-cork-billboard-colored-pins-board-paper-80760864.jpg" class="img-fluid" alt="" />
        </div>

        <br id="shop"/>
        <h2 class="border border-100 text-center">Offers and Specials</h2>
<br/>

<div class="container text-center mb-4">
  <div class="row row-cols-2">
    <div class="col"><img src="https://st.focusedcollection.com/14026668/i/650/focused_165961860-stock-photo-men-discussing-product.jpg" class="img-fluid" alt="" />
    <h4>900$</h4>
    <span className="badge text-dark bg-warning ms-3 mb-2"><i class="fa-regular fa-calendar-days"></i>On Sale</span>
    <p>full package</p>
    <p>Detailed marketing strategies for every business</p>
</div>
    <div class="col">
        <img src="https://st.focusedcollection.com/14026668/i/650/focused_165961860-stock-photo-men-discussing-product.jpg" class="img-fluid" alt="" />
        <h4>500$</h4>
        <span className="badge text-dark bg-secondary ms-3 mb-2"><i class="fa-regular fa-calendar-days"></i>Standard</span>
        <p>full package</p>
        <p>Best strategy advice from Professionals</p>
    </div>
    <div class="col">
    <img src="https://st.focusedcollection.com/14026668/i/650/focused_165961860-stock-photo-men-discussing-product.jpg" class="img-fluid" alt="" />
        <h4>300$</h4>
        <span className="badge text-dark bg-primary ms-3 mb-2"><i class="fa-regular fa-calendar-days"></i>Premium</span>
        <p>Startup</p>
        <p>New Start up project, you'll be able to work with our small team in a startup</p>
    </div>
    <div class="col">
    <img src="https://st.focusedcollection.com/14026668/i/650/focused_165961860-stock-photo-men-discussing-product.jpg" class="img-fluid" alt="" />
        <h4>150$</h4>
        <span className="badge text-dark bg-danger ms-3 mb-2"><i class="fa-regular fa-calendar-days"></i>Out Of Stock</span>
        <p>Best Tools</p>
        <p>PC Ready to start your business using our online and physical tools</p>
    </div>
  </div>
</div>
<br class="mt-3" id="contact"/>
<div class="mt-3 mb-2" id="boxgrey">
        <h3>Register To Our Newsletter</h3>
        <br/>
        <div class="d-flex flex-wrap align-center">
        <input placeholder="E-mail"></input>
        <button class="btn btn-warning"><b>Submit</b></button>
        <button class="btn btn-primary ms-2"><i class="fa-brands fa-twitter"></i></button>
        <button class="btn btn-danger ms-2"><i class="fa-brands fa-youtube"></i></button>
        <button class="btn btn-primary ms-2"><i class="fa-brands fa-facebook"></i></button>
        </div>

</div>

        </div>


        )
}}


ReactDOM.render(<App/>, document.getElementById("root"))

