
<style>

  html,body {
    font-size: 16px;
    font-family: 'Open Sans', serif;
    padding-top: 1rem;
    color: #622f75;
  }

  @media (min-width: 992px) {
    body {
      padding-top: 0;
      padding-left: 8rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Saira Extra Condensed', serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #343a40;
  }

  h1 {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Saira Extra Condensed', serif;
    font-size: 1.35rem;
  }

  .list-social-icons a {
    color: #495057;
  }

  .list-social-icons a:hover {
    color: #BD5D38;
  }

  .list-social-icons a .fa-lg {
    font-size: 1.75rem;
  }

  .list-icons {
    font-size: 3rem;
  }

  .list-icons .list-inline-item i:hover {
    color: #BD5D38;
  }

  #sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
    }
    #sideNav .navbar-brand {
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
    }
    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }
    #sideNav .navbar-collapse {
      display: flex;
      align-items: flex-start;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
    }
    #sideNav .navbar-collapse .navbar-nav {
      flex-direction: column;
      width: 100%;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }
  }

  section.resume-section {
    border-bottom: 1px solid #dee2e6;
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }

  section.resume-section .resume-item .resume-date {
    min-width: none;
  }

  @media (min-width: 768px) {
    section.resume-section {
      min-height: 100vh;
    }
    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
  }

  @media (min-width: 992px) {
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  .bg-primary {
    background-color: #622f75 !important;
  }

  .text-primary {
    color: #622f75 !important;
  }

  a {
    color: #622f75;
  }

  a:hover, a:focus, a:active {
    color: #622f75;
  }
</style>



<template>
  <div class="main-wrapper">
    <body id="page-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/li_avatar.jpg" alt="" />
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid p-0">

        <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div class="my-auto">
            <h1 class="mb-0">Kiel Hamilton 
              <span class="text-primary">Byrne</span>
            </h1>
            <div class="subheading mb-5"> Silver Spring, MD 20902 · (914) 512-8532 ·
              <a href="mailto:kiel.byrne@gmail.com">kiel.byrne@gmail.com</a>
            </div>
            <p class="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <ul class="list-inline list-social-icons mb-0">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/TdotHolla">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/tdotholla">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/kielbyrne/">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/tdotholla">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div class="my-auto">
            <h2 class="mb-5">Experience</h2>
            <div class="resume-item d-flex flex-column flex-md-row mb-5"  v-for="exp in experiences">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">{{exp.title}}</h3>
                <div class="subheading mb-3">{{exp.company}}</div>
                <ul>
                  <li v-for="des in exp.description">{{des}}</li>
                </ul>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">{{exp.start}} - {{exp.end}}</span>
              </div>
            </div>
          </div>

        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div class="my-auto">
            <h2 class="mb-5">Education</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">University of Maryland, Baltimore County</h3>
                <div class="subheading mb-3">Bachelor of Science Candidate</div>
                <div>Mechanical Engineering</div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">August 2001 - May 2007</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Fordham Preparatory School</h3>
                <div class="subheading mb-3">Regents Program</div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">August 1999 - May 2001</span>
              </div>
            </div>

          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="list-inline list-icons">
              <li class="list-inline-item">
                <i class="devicons devicons-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-css3"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-php"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-javascript"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-jquery"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-bootstrap"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-materializecss"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-meteorfull"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-terminal"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-windows"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-osx"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-linux"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-npm"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-bitbucket"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-github_badge"></i>
              </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Cross Functional Teams</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div class="my-auto">
            <h2 class="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
            <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
          <div class="my-auto">
            <h2 class="mb-5">Work Samples</h2>
            <div>
              <h3 class="text-center">CODE</h3>
              <section class="text-monospace"><h4>MOBB</h4>
                <p>The MOBB is a tool to locate businesses closest to you that are owned by those in Our Community. As a tool, It aims to help you discover new business near you, wherever you may be. <span><a href="https://www.mobb.biz" target="_blank">MOBB.biz</a></span>
                </p>
                <img src="./assets/ss_mobb_mobile.png" />
                <video width="400" controls autoplay />
                  <source src="./assets/MOBB_Demo.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </section>
            </div>
              <div><h3 class="text-center">MEDIA</h3></div>
              <div><h3 class="text-center">MISC.</h3></div>
          </div>
        </section>
      </div>
    </body>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        experiences: [
          {
            title: 'Co-Founder',
            company: 'PAKKE.US',
            location: 'Washington D.C',
            description: ['PAKKE is a platform to activate underutilized spaces--such as homes, apartments, backyards, and after hours shops--for unique multi-sensory, accessible and affordable experiences outside of the overcrowded norms we have come grown accustomed to. We believe in the joy of connecting people and elevating a vibrant network of artists, chefs, craftsmen, musicians, wellness talent, and writers for more unique experiences.'],
            start: 'May 2018',
            end: 'Present'
          }, {
            title: 'IT Services Manager',
            company: 'Perkins+Will',
            location: 'Washington D.C',
            description: ['Overall awesome'],
            start: 'April 2015',
            end: 'Present'
          }, {
            title: 'Voice Actor',
            company: 'Nelson\\Nygaard Consulting Associates',
            location: 'Washington D.C',
            description: [
            "Narrated the 'Strategic Mobility Plan' as presented to the New Orleans Regional Transportation Authority.",
            "Produced and Edited final audio, mixed with video and converted to compressed video format."
            ],
            start: 'November 2017',
            end: 'November 2017'
          }, {
            title: 'Voice Actor',
            company: 'Nelson\\Nygaard Consulting Associates',
            location: 'Washington D.C',
            description: [
              "Narrated the 'Multimodal Transportation Plan' as presented to the City of Fairfax.",
              "Produced and Edited final audio, mixed with video and converted to compressed video format.",
              ],
            start: 'November 2016',
            end: 'November 2016'
          }, {
            title: 'IT Support Specialist',
            company: 'HOK',
            location: 'Manhattan, NY | Los Angeles, CA | Washington D.C',
            description: [
              "Tier 1-3 support of hardware, software systems, and peripherals; including networking LAN and WLAN management. ",
              "Support global user-base on weekly basis via helpdesk ticketing system. ",
              "Provisioning and configuration of employee accounts and equipment throughout their life cycles. ",
              "Created technical documentation of processes and systems, as well as provided training sessions for staff. ",
              "Directly support of at most four offices at a time, equating to 200+ users in four cities. ",
              "Personal responsibility for fostering a ‘green workplace’ through sustainable work practices and technology policy."
            ],
            start: 'March 2012',
            end: 'April 2015'
          }, {
            title: 'IT Consultant',
            company: 'wHY Architecture',
            location: 'Los Angeles, CA',
            description: [
              "Configured home office for Founding Partner, including site-to-site connection to remote office location; allowing for the relocation of key staff and facilitation of business continuity during months-long office renovations.",
              "Repaired and reconfigured anti-virus, DHCP, DNS, and file sharing/storage (DFS/NAS) systems—including the automation of backup processes.",
              "Automated logon processes for consistent end-user environments across offices and devices."
            ],
            start: 'January 2013',
            end: 'August 2013'
          }, {
            title: 'IT Developer',
            company: 'Rent The Runway',
            location: 'Manhattan, NY',
            description: [
              "Administer all network, Internet, VOIP, cellular, security, A/V, deskside systems, and end-user software throughout their lifecycles; from procurement and configuration through maintenance, updates, and monitoring.",
              "Creation of I.T. related budgets, network usage, bandwidth and other reports.",
              "Creation and maintenance of technical documentation libraries including inventories and manuals.",
              "Created and led training programs in order to boost business productivity via user education.",
              "Administered the creation of an 'Intranet' which comprises corporate calendars, current events, frequented documents, social media feeds, and other resources."
            ],
            start: 'June 2011',
            end: 'March 2012'
          }, {
            title: 'Plumbing & Fire Protecion Design Engineer',
            company: 'Kallen & Lemelson, Consulting Engineers, LLP',
            location: 'Manhattan, NY',
            description: [
              "Provided plumbing, fire protection, and life safety consulting support to various international clientele. Projects include but are not limited to; healthcare facilities, schools, industrial structures."
            ],
            start: 'June 2010',
            end: 'March 2009'
          }, {
            title: 'Plumbing & Fire Protecion Design Engineer',
            company: 'Fiskaa, LLC',
            location: 'Manhattan, NY',
            description: [
              "Provided plumbing, fire protection, and life safety consulting support to various international clientele. Projects include but are not limited to; hotels, amusement park, residential, commercial and government office buildings, retail, healthcare facilities, schools.",
              "Created cost schedules for the plumbing and life safety systems involved on projects.",
              "Managed small team of CAD operators to efficiently satisfy tight deadlines.",
              "Awarded funds to obtain Plumbing Systems certificate at NYU.",
            ],
            start: 'June 2007',
            end: 'March 2009'
          }
          ],
        title: 'My portfolio'
      }
    }
  }
</script>


