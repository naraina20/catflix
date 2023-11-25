import React from "react";

const Entertainment = () => {
  return (
    <>
     <div className="text-light ">
         <div className="hero-image"></div>
      </div>
      <div className="text-light ">
        <div className="bg-dark w-100" style={{ height: "10px" }}></div>
        <div className="w-75 m-auto d-flex row g-0 py-5">
          <div className="col-6 d-flex flex-column justify-content-center py-3 text-start">
            <h1 className="cheading">Enjoy on your TV</h1>
            <p className="cpara">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="col-6  py-3 overflow-hidden">
            <img
              className="img-fluid"
              src="/asset/images/tv.png"
              loading="lazy"
              alt="television"
            />
          </div>
        </div>
      </div>
      <div className="text-light ">
        <div className="bg-dark w-100" style={{ height: "10px" }}></div>
        <div className="w-75 m-auto d-flex row g-0 py-5">
          <div className="col-6  py-3 overflow-hidden">
            <img
              className="img-fluid"
              src="/asset/images/mobile.jpg"
              loading="lazy"
              alt="mobile"
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center py-3 text-start">
            <h1 className="cheading">Download your shows to watch offline</h1>
            <p className="cpara">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className="text-light ">
        <div className="bg-dark w-100" style={{ height: "10px" }}></div>
        <div className="w-75 m-auto d-flex row g-0 py-5">
          <div className="col-6 d-flex flex-column justify-content-center py-3 text-start">
            <h1 className="cheading">Watch everywhere</h1>
            <p className="cpara">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="col-6  py-3 overflow-hidden">
            <img
              className="img-fluid"
              src="/asset/images/device-pile-in.png"
              loading="lazy"
              alt="television"
            />
          </div>
        </div>
      </div>
      <div className="text-light ">
        <div className="bg-dark w-100" style={{ height: "10px" }}></div>
        <div className="w-75 m-auto d-flex row g-0 py-5">
          <div className="col-6  py-3 overflow-hidden">
            <img
              className="img-fluid"
              src="/asset/images/kids.png"
              loading="lazy"
              alt="mobile"
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center py-3 text-start">
            <h1 className="cheading">Create profiles for kids</h1>
            <p className="cpara">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions  */}

      <div className="text-light text-center">
        <div className="bg-dark w-100" style={{ height: "10px" }}></div>
        <h1 className="pt-5 cheading">Frequently Asked Questions</h1>
        <div className="w-75 m-auto">
          <div id="accordion">
            <div class="card bg-dark text-light mb-2">
              <button
                className="btn btn-link text-light"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div
                  class="card-header d-flex justify-content-between"
                  id="headingOne"
                >
                  <p className="">Collapsible Group Item #1</p>
                  <p className="cpara">
                    <i class="bi bi-plus-lg"></i>
                  </p>
                </div>
              </button>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
