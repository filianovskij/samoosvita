export default function HomePage() {
  return (
    <>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <i className="bi-back"></i>
              <span>Topic</span>
            </a>
            <div className="d-lg-none ms-auto me-4">
              <a className="navbar-icon bi-person smoothscroll" href="#top"></a>
            </div>
            <button
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarNav"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5 me-lg-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_2">
                    Browse Topics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_3">
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_4">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_5">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    aria-expanded="false"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                  >
                    Pages
                  </a>
                  <ul
                    aria-labelledby="navbarLightDropdownMenuLink"
                    className="dropdown-menu dropdown-menu-light"
                  >
                    <li>
                      <a className="dropdown-item" href="topics-listing.html">
                        Topics Listing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contact.html">
                        Contact Form
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-none d-lg-block">
                <a
                  className="navbar-icon bi-person smoothscroll"
                  href="#top"
                ></a>
              </div>
            </div>
          </div>
        </nav>
        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-white text-center">
                  Discover. Learn. Enjoy
                </h1>
                <h6 className="text-center">
                  platform for creatives around the world
                </h6>
                <form
                  className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
                  method="get"
                  role="search"
                >
                  <div className="input-group input-group-lg">
                    <span
                      className="input-group-text bi-search"
                      id="basic-addon1"
                    ></span>
                    <input
                      aria-label="Search"
                      className="form-control"
                      id="keyword"
                      name="keyword"
                      placeholder="Design, Code, Marketing, Finance ..."
                      type="search"
                    />
                    <button className="form-control" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block bg-white shadow-lg">
                  <a href="topics-detail.html">
                    <div className="d-flex">
                      <div>
                        <h5 className="mb-2">Web Design</h5>
                        <p className="mb-0">
                          When you search for free CSS templates, you will
                          notice that TemplateMo is one of the best websites.
                        </p>
                      </div>
                      <span className="badge bg-design rounded-pill ms-auto">
                        14
                      </span>
                    </div>
                    <img
                      alt=""
                      className="custom-block-image img-fluid"
                      src="images/topics/undraw_Remote_design_team_re_urdx.png"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="custom-block custom-block-overlay">
                  <div className="d-flex flex-column h-100">
                    <img
                      alt=""
                      className="custom-block-image img-fluid"
                      src="images/businesswoman-using-tablet-analysis.jpg"
                    />
                    <div className="custom-block-overlay-text d-flex">
                      <div>
                        <h5 className="text-white mb-2">Finance</h5>
                        <p className="text-white">
                          Topic Listing Template includes homepage, listing
                          page, detail page, and contact page. You can feel free
                          to edit and adapt for your CMS requirements.
                        </p>
                        <a
                          className="btn custom-btn mt-2 mt-lg-3"
                          href="topics-detail.html"
                        >
                          Learn More
                        </a>
                      </div>
                      <span className="badge bg-finance rounded-pill ms-auto">
                        25
                      </span>
                    </div>
                    <div className="social-share d-flex">
                      <p className="text-white me-4">Share:</p>
                      <ul className="social-icon">
                        <li className="social-icon-item">
                          <a
                            className="social-icon-link bi-twitter"
                            href="#"
                          ></a>
                        </li>
                        <li className="social-icon-item">
                          <a
                            className="social-icon-link bi-facebook"
                            href="#"
                          ></a>
                        </li>
                        <li className="social-icon-item">
                          <a
                            className="social-icon-link bi-pinterest"
                            href="#"
                          ></a>
                        </li>
                      </ul>
                      <a
                        className="custom-icon bi-bookmark ms-auto"
                        href="#"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="explore-section section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-4">Browse Topics</h2>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="design-tab-pane"
                    aria-selected="true"
                    className="nav-link active"
                    data-bs-target="#design-tab-pane"
                    data-bs-toggle="tab"
                    id="design-tab"
                    role="tab"
                    type="button"
                  >
                    Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="marketing-tab-pane"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#marketing-tab-pane"
                    data-bs-toggle="tab"
                    id="marketing-tab"
                    role="tab"
                    type="button"
                  >
                    Marketing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="finance-tab-pane"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#finance-tab-pane"
                    data-bs-toggle="tab"
                    id="finance-tab"
                    role="tab"
                    type="button"
                  >
                    Finance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="music-tab-pane"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#music-tab-pane"
                    data-bs-toggle="tab"
                    id="music-tab"
                    role="tab"
                    type="button"
                  >
                    Music
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="education-tab-pane"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#education-tab-pane"
                    data-bs-toggle="tab"
                    id="education-tab"
                    role="tab"
                    type="button"
                  >
                    Education
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    aria-labelledby="design-tab"
                    className="tab-pane fade show active"
                    id="design-tab-pane"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Web Design</h5>
                                <p className="mb-0">
                                  Topic Listing Template based on Bootstrap 5
                                </p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">
                                14
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Remote_design_team_re_urdx.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Graphic</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">
                                75
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Redesign_feedback_re_jvm0.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Logo Design</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">
                                100
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/colleagues-working-cozy-office-medium-shot.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-labelledby="marketing-tab"
                    className="tab-pane fade"
                    id="marketing-tab-pane"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Advertising</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">
                                30
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_online_ad_re_ol62.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Video Content</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">
                                65
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Group_video_re_btu7.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Viral Tweet</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">
                                50
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_viral_tweet_gndb.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-labelledby="finance-tab"
                    className="tab-pane fade"
                    id="finance-tab-pane"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    {" "}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Investment</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-finance rounded-pill ms-auto">
                                30
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Finance_re_gnv2.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="custom-block custom-block-overlay">
                          <div className="d-flex flex-column h-100">
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"
                            />
                            <div className="custom-block-overlay-text d-flex">
                              <div>
                                <h5 className="text-white mb-2">Finance</h5>
                                <p className="text-white">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Sint animi necessitatibus
                                  aperiam repudiandae nam omnis
                                </p>
                                <a
                                  className="btn custom-btn mt-2 mt-lg-3"
                                  href="topics-detail.html"
                                >
                                  Learn More
                                </a>
                              </div>
                              <span className="badge bg-finance rounded-pill ms-auto">
                                25
                              </span>
                            </div>
                            <div className="social-share d-flex">
                              <p className="text-white me-4">Share:</p>
                              <ul className="social-icon">
                                <li className="social-icon-item">
                                  <a
                                    className="social-icon-link bi-twitter"
                                    href="#"
                                  ></a>
                                </li>
                                <li className="social-icon-item">
                                  <a
                                    className="social-icon-link bi-facebook"
                                    href="#"
                                  ></a>
                                </li>
                                <li className="social-icon-item">
                                  <a
                                    className="social-icon-link bi-pinterest"
                                    href="#"
                                  ></a>
                                </li>
                              </ul>
                              <a
                                className="custom-icon bi-bookmark ms-auto"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-labelledby="music-tab"
                    className="tab-pane fade"
                    id="music-tab-pane"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Composing Song</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">
                                45
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Compose_music_re_wpiw.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Online Music</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">
                                45
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_happy_music_g6wc.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Podcast</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">
                                20
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Podcast_audience_re_4i5q.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-labelledby="education-tab"
                    className="tab-pane fade"
                    id="education-tab-pane"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Graduation</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-education rounded-pill ms-auto">
                                80
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Graduation_re_gthn.png"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Educator</h5>
                                <p className="mb-0">
                                  Lorem Ipsum dolor sit amet consectetur
                                </p>
                              </div>
                              <span className="badge bg-education rounded-pill ms-auto">
                                75
                              </span>
                            </div>
                            <img
                              alt=""
                              className="custom-block-image img-fluid"
                              src="images/topics/undraw_Educator_re_ju47.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-section section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white mb-4">How does it work?</h2>
              </div>
              <div className="col-lg-10 col-12 mx-auto">
                <div className="timeline-container">
                  <ul
                    className="vertical-scrollable-timeline"
                    id="vertical-scrollable-timeline"
                  >
                    <div className="list-progress">
                      <div className="inner"></div>
                    </div>
                    <li>
                      <h4 className="text-white mb-3">
                        Search your favourite topic
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, cumque magnam? Sequi, cupiditate quibusdam
                        alias illum sed esse ad dignissimos libero sunt,
                        quisquam numquam aliquam? Voluptas, accusamus omnis?
                      </p>
                      <div className="icon-holder">
                        <i className="bi-search"></i>
                      </div>
                    </li>
                    <li>
                      <h4 className="text-white mb-3">
                        Bookmark &amp; Keep it for yourself
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sint animi necessitatibus aperiam repudiandae nam
                        omnis est vel quo, nihil repellat quia velit error modi
                        earum similique odit labore. Doloremque, repudiandae?
                      </p>
                      <div className="icon-holder">
                        <i className="bi-bookmark"></i>
                      </div>
                    </li>
                    <li>
                      <h4 className="text-white mb-3">Read &amp; Enjoy</h4>
                      <p className="text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi vero quisquam, rem assumenda similique
                        voluptas distinctio, iste est hic eveniet debitis ut
                        ducimus beatae id? Quam culpa deleniti officiis autem?
                      </p>
                      <div className="icon-holder">
                        <i className="bi-book"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 text-center mt-5">
                <p className="text-white">
                  Want to learn more?
                  <a className="btn custom-btn custom-border-btn ms-3" href="#">
                    Check out Youtube
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="mb-4">Frequently Asked Questions</h2>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-5 col-12">
                <img
                  alt="FAQs"
                  className="img-fluid"
                  src="images/faq_graphic.jpg"
                />
              </div>
              <div className="col-lg-6 col-12 m-auto">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        aria-controls="collapseOne"
                        aria-expanded="true"
                        className="accordion-button"
                        data-bs-target="#collapseOne"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        What is Topic Listing?
                      </button>
                    </h2>
                    <div
                      aria-labelledby="headingOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                      id="collapseOne"
                    >
                      <div className="accordion-body">
                        Topic Listing is free Bootstrap 5 CSS template.{" "}
                        <strong>
                          You are not allowed to redistribute this template
                        </strong>{" "}
                        on any other template collection website without our
                        permission. Please contact TemplateMo for more detail.
                        Thank you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        aria-controls="collapseTwo"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                        data-bs-target="#collapseTwo"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        How to find a topic?
                      </button>
                    </h2>
                    <div
                      aria-labelledby="headingTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                      id="collapseTwo"
                    >
                      <div className="accordion-body">
                        You can search on Google with <strong>keywords</strong>{" "}
                        such as templatemo portfolio, templatemo one-page
                        layouts, photography, digital marketing, etc.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        aria-controls="collapseThree"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                        data-bs-target="#collapseThree"
                        data-bs-toggle="collapse"
                        type="button"
                      >
                        Does it need to paid?
                      </button>
                    </h2>
                    <div
                      aria-labelledby="headingThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                      id="collapseThree"
                    >
                      <div className="accordion-body">
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-section section-padding section-bg"
          id="section_5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center">
                <h2 className="mb-5">Get in touch</h2>
              </div>
              <div className="col-lg-5 col-12 mb-4 mb-lg-0">
                <iframe
                  allowFullScreen=""
                  className="google-map"
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                  style={{ border: 0 }}
                  width="100%"
                ></iframe>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                <h4 className="mb-3">Head office</h4>
                <p>
                  Bay St &amp;, Larkin St, San Francisco, CA 94109, United
                  States
                </p>
                <hr />
                <p className="d-flex align-items-center mb-1">
                  <span className="me-2">Phone</span>
                  <a className="site-footer-link" href="tel: 305-240-9671">
                    305-240-9671
                  </a>
                </p>
                <p className="d-flex align-items-center">
                  <span className="me-2">Email</span>
                  <a
                    className="site-footer-link"
                    href="mailto:info@company.com"
                  >
                    info@company.com
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mx-auto">
                <h4 className="mb-3">Dubai office</h4>
                <p>Burj Park, Downtown Dubai, United Arab Emirates</p>
                <hr />
                <p className="d-flex align-items-center mb-1">
                  <span className="me-2">Phone</span>
                  <a className="site-footer-link" href="tel: 110-220-3400">
                    110-220-3400
                  </a>
                </p>
                <p className="d-flex align-items-center">
                  <span className="me-2">Email</span>
                  <a
                    className="site-footer-link"
                    href="mailto:info@company.com"
                  >
                    info@company.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4 pb-2">
              <a className="navbar-brand mb-2" href="index.html">
                <i className="bi-back"></i>
                <span>Topic</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="site-footer-title mb-3">Resources</h6>
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a className="site-footer-link" href="#">
                    Home
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a className="site-footer-link" href="#">
                    How it works
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a className="site-footer-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a className="site-footer-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
              <h6 className="site-footer-title mb-3">Information</h6>
              <p className="text-white d-flex mb-1">
                <a className="site-footer-link" href="tel: 305-240-9671">
                  305-240-9671
                </a>
              </p>
              <p className="text-white d-flex">
                <a className="site-footer-link" href="mailto:info@company.com">
                  info@company.com
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
              <div className="dropdown">
                <button
                  aria-expanded="false"
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  English
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Thai
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Myanmar
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Arabic
                    </button>
                  </li>
                </ul>
              </div>
              <p className="copyright-text mt-lg-5 mt-4">
                Copyright © 2048 Topic Listing Center. All rights reserved.
                <br />
                <br />
                Design:{" "}
                <a href="https://templatemo.com" rel="nofollow" target="_blank">
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
