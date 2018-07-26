
<template>
  <div class="main-wrapper" id="page-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primaryz fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-lg-none d-sm-block">
            <img class="img-fluid img-profile rounded-circle mx-auto" width="44" src="./assets/li_avatar.jpg" alt="" />
          </span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/li_avatar.jpg" alt="" />
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
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
              <span class="text-primaryz">Byrne</span>
            </h1>
            <div class="subheading mb-5"> Silver Spring, MD 20902 · (914) 512-8532 ·
              <a href="mailto:kiel.byrne@gmail.com">kiel.byrne@gmail.com</a>
            </div>
            <p class="mb-5">
              <ul>
                <li class="dec-list">IT Services Engineer leveraging data and bespoke web-applications to support sustainable operations and resilient infrastructure.</li>
                <li class="dec-list">Software developer with a passion for leveraging crowd-sourced data to create tools that work as progressive web applications.  </li>  
                <li class="dec-list">Consult w/ small businesses to procure, configure, maintain IT systems & establish web/social media presence. </li>
                <li class="dec-list">Voice Actor & Audio Engineer specializing in Technical narrative, Video Game Characters & Movie Trailers.</li>
              </ul>
        </p>
            <ul class="list-inline list-social-icons mb-0">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/TdotHolla">
                  <span class="fa-stack fa-lg">
                    <span class="fa fa-circle fa-stack-2x"></span>
                    <span class="fa fa-facebook fa-stack-1x fa-inverse"></span>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/tdotholla">
                  <span class="fa-stack fa-lg">
                    <span class="fa fa-circle fa-stack-2x"></span>
                    <span class="fa fa-twitter fa-stack-1x fa-inverse"></span>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/kielbyrne/">
                  <span class="fa-stack fa-lg">
                    <span class="fa fa-circle fa-stack-2x"></span>
                    <span class="fa fa-linkedin fa-stack-1x fa-inverse"></span>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/tdotholla">
                  <span class="fa-stack fa-lg">
                    <span class="fa fa-circle fa-stack-2x"></span>
                    <span class="fa fa-github fa-stack-1x fa-inverse"></span>
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
                  <li class="dec-list" v-for="des in exp.description">{{des}}</li>
                </ul>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primaryz">{{exp.start}} - {{exp.end}}</span>
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
                <span class="text-primaryz">August 2001 - May 2007</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Fordham Preparatory School</h3>
                <div class="subheading mb-3">Regents Program</div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primaryz">August 1999 - May 2001</span>
              </div>
            </div>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="list-inline list-icons ">
              <li class="list-inline-item">
                <span class="devicons devicons-html5"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-w3c"></span>
              </li>              
              <li class="list-inline-item">
                <span class="devicons devicons-css3"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-php"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-javascript"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-jquery"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-sass"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-less"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-bootstrap"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-materializecss"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-react"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-meteorfull"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-grunt"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-terminal"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-windows"></span>
              </li>
              <li class="list-inline-item">
              <span class="devicons devicons-apple"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-linux"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-npm"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-bitbucket"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-github_badge"></span>
              </li>
              <li class="list-inline-item">
                <span class="devicons devicons-illustrator"></span>
              </li>
            </ul>
            <div class="subheading mb-3">Work-flow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li fa fa-check"></span>
                Mobile-First, Responsive Design for Progressive Web Apps (PWAs)</li>
              <li>
                <span class="fa-li fa fa-check"></span>
                Cross Browser Testing &amp; Debugging</li>
              <li>
                <span class="fa-li fa fa-check"></span>
                Cross Functional Teams</li>
              <li>
                <span class="fa-li fa fa-check"></span>
                Agile Development &amp; Scrum</li>
              <li>
                <span class="fa-li fa fa-check"></span>
                Constant Research on Emerging Trends & Technology</li>                
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div class="my-auto">
            <h2 class="mb-5">Interests</h2>
            <p>I tend to stay busy--if I'm not chasing after my two boys or making my wife laugh heartily, you can find me writing software to change the world. When I'm around my friends, we discuss financial literacy & paths to financial freedom (cryptocurrency, options, ForEx, entrepreneurship) Initiative 71 & the Farm Act, and group economics. Otherwise I'll be watching some YouTube video on metaphysics, ancient worlds, or lifehacking.</p>
            <p class="mb-0">When forced to stop thinking or doing, I enjoy <a href="https://www.youtube.com/channel/UCNDUud96oGK5xQ9gyg913vw">Desus & Mero</a> and <a href="https://www.youtube.com/user/AllDefDigital">All Def Digital</a> for some comic relief. I try to meditate with visualization or sound (crystal bowl). And I read up on spiritual Alchemy.</p>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
          <div class="my-auto">
            <h2 class="mb-5">Work Samples</h2>
            <div>
              <h3 class="text-center">CODE</h3>
              <section class="container-fluid">
                <h4>PAKKE</h4>
                <p><span><a href="https://www.pakke.us" target="_blank">PAKKE.us</a></span> is <em>the</em> resource to host, entertain, and attend unique local experiences. it is informative, responsive, progressive and socially engaging. The community is comprised of local entertainers, owners of inviting & accepting spaces, and party-goers bored with the 'typical night out'. 
                </p>
                <img width="620" class="rounded mx-auto d-block" src="./assets/ssf_pakke_desktop.png" />                
              </section>

              <section class="container-fluid">
                <h4>MOBB</h4>
                <p>The <span><a href="https://www.mobb.biz" target="_blank">MOBB</a></span> is a tool to locate businesses closest to you that are owned by those in Our Community. As a tool, It aims to help you discover new business near you, wherever you may be. 
                </p>
                <img width="320"  class="mx-auto d-inline" src="./assets/ss_mobb_mobile.png" />
                
                  <video width="320" controls >
                    <source class="rounded mx-auto d-inline" src="./assets/MOBB_Demo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                
              </section>
            </div>
              <div>
                <h3 class="text-center">MEDIA</h3>
                <p>I am a Voice Actor & Audio Engineer specializing in Technical narrative, Video Game Characters & Movie Trailers. I record with a Yeti Blue microphone &amp; engineer with Audacity software.</p>
                <h4>Characters Sample</h4>
                <audio controls class="w-100 mt-3">
                  <source src="./assets/KielByrne_C.mp3" type="audio/mp3">
                  Your browser does not support the audio element.
                </audio>
                <h4>Narrative Sample</h4>
                <audio controls class="w-100 mt-3">
                  <source src="./assets/KielByrne_N.mp3" type="audio/mp3">
                  Your browser does not support the audio element.
                </audio>
                <h4>Technical Sample (Multi-Modal Transportation Plan)</h4>
                <audio controls class="w-100 mt-3">
                  <source src="./assets/KielByrne_NN_NORTA.mp3" type="audio/mp3">
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div><h3 class="text-center">MISC.</h3></div>
          </div>
        </section>
      </div>
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
            description: ['Manage IT Systems & Services including TCP/IP infrastructure, LAN/WLAN, A/V, telephony, mobile, Virtual Reality technology, etc.', 'Provide direction for local IT standards & practices', 'Provide support, training, & technical documentation to design professionals'],
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
              "Narrated the 'Multi-modal Transportation Plan' as presented to the City of Fairfax.",
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
              "Support global user-base on weekly basis via help-desk ticketing system. ",
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
              "Automated log-on processes for consistent end-user environments across offices and devices."
            ],
            start: 'January 2013',
            end: 'August 2013'
          }, {
            title: 'IT Developer',
            company: 'Rent The Runway',
            location: 'Manhattan, NY',
            description: [
              "Administer all network, Internet, VOIP, cellular, security, A/V, desk-side systems, and end-user software throughout their life-cycles; from procurement and configuration through maintenance, updates, and monitoring.",
              "Creation of I.T. related budgets, network usage, bandwidth and other reports.",
              "Creation and maintenance of technical documentation libraries including inventories and manuals.",
              "Created and led training programs in order to boost business productivity via user education.",
              "Administered the creation of an 'Intranet' which comprises corporate calendars, current events, frequented documents, social media feeds, and other resources."
            ],
            start: 'June 2011',
            end: 'March 2012'
          }, {
            title: 'Plumbing & Fire Protection Design Engineer',
            company: 'Kallen & Lemelson, Consulting Engineers, LLP',
            location: 'Manhattan, NY',
            description: [
              "Provided plumbing, fire protection, and life safety consulting support to various international clientele. Projects include but are not limited to; healthcare facilities, schools, industrial structures."
            ],
            start: 'June 2010',
            end: 'March 2009'
          }, {
            title: 'Plumbing & Fire Protection Design Engineer',
            company: 'Fiskaa, LLC',
            location: 'Manhattan, NY',
            description: [
              "Provided plumbing, fire protection, and life safety consulting support to various international clientele. Projects include but are not limited to; hotels, amusement park, residential, commercial and government office buildings, retail, health care facilities, schools.",
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


