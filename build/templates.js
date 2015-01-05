angular.module("core").run(["$templateCache", function($templateCache) {$templateCache.put("app/templates/profile.view.html","<blockquote><div class=b-icon><i class=\"mdi-communication-phone red-text accent-2\"></i></div><div class=b-text><span>{{app.phone}}</span></div></blockquote><blockquote><div class=b-icon><i class=\"mdi-communication-email red-text accent-2\"></i></div><div class=b-text><span>{{app.email}}</span></div></blockquote><blockquote><div class=b-icon><i class=\"mdi-action-home red-text accent-2\"></i></div><div class=b-text><div>{{app.address}}</div></div></blockquote>");
$templateCache.put("app/templates/skill-set.view.html","<div class=io-section-card><div class=io-section-card-heading>Advanced</div><div class=io-section-logos><div class=img-wrap><img src=content/images/html5-logo.png class=\"responsive-img no-flex\"><h6>HTML 5</h6></div><div class=img-wrap><img src=content/images/css3-logo.png class=\"responsive-img no-flex\"><h6>CSS 3</h6></div><div class=img-wrap><img src=content/images/javascript-logo.png class=\"responsive-img no-flex\"><h6>JavaScript</h6></div><div class=img-wrap><img src=content/images/angular-logo.png class=\"responsive-img no-flex\"><h6>AngularJS</h6></div><div class=img-wrap><img src=content/images/nodejs_logo.png class=\"responsive-img no-flex\"><h6>NodeJS</h6></div><div class=img-wrap><img src=content/images/jquery-logo.png class=\"responsive-img no-flex\"><h6>jQuery</h6></div><div class=img-wrap><img src=content/images/express-logo.png class=\"top-lg responsive-img no-flex\"><h6>ExpressJS</h6></div><div class=img-wrap><img src=content/images/gulp-logo.png class=\"responsive-img no-flex\"><h6>GulpJS</h6></div><div class=img-wrap><img src=content/images/github-logo.png class=\"responsive-img no-flex\"><h6>Github</h6></div><div class=img-wrap><img src=content/images/ai-logo.png class=\"responsive-img no-flex\"><h6>Illustrator</h6></div><div class=img-wrap><img src=content/images/Ps-logo.png class=\"responsive-img no-flex\"><h6>Photoshop</h6></div><div class=img-wrap><img src=content/images/id-logo.png class=\"responsive-img no-flex\"><h6>InDesign</h6></div></div></div><div class=io-section-card><div class=io-section-card-heading>Strong</div><div class=io-section-logos><div class=img-wrap><img src=content/images/backbone-logo.png class=\"responsive-img no-flex\"><h6>BackboneJS</h6></div><div class=img-wrap><img src=content/images/coffeescript-logo.png class=\"responsive-img no-flex\"><h6>CoffeeScript</h6></div><div class=img-wrap><img src=content/images/jade-logo.png class=\"top-md responsive-img no-flex\"><h6>Jade</h6></div><div class=img-wrap><img src=content/images/stylus-logo.png class=\"responsive-img no-flex\"><h6>Stylus</h6></div><div class=img-wrap><img src=content/images/less-logo.png class=\"responsive-img no-flex\"><h6>Less</h6></div><div class=img-wrap><img src=content/images/sass-logo.png class=\"responsive-img no-flex\"><h6>Sass</h6></div><div class=img-wrap><img src=content/images/yeoman-logo.png class=\"responsive-img no-flex\"><h6>Yeoman</h6></div><div class=img-wrap><img src=content/images/grunt-logo.png class=\"responsive-img no-flex\"><h6>GruntJS</h6></div><div class=img-wrap><img src=content/images/mongo-logo.png class=\"top-lg responsive-img no-flex\"><h6>MongoDB</h6></div><div class=img-wrap><img src=content/images/slush-logo.png class=\"responsive-img no-flex\"><h6>SlushJS</h6></div><div class=img-wrap><img src=content/images/ionic-logo.png class=\"responsive-img no-flex\"><h6>Ionic</h6></div></div></div><div class=io-section-card><div class=io-section-card-heading>Experienced</div><div class=io-section-logos><div class=img-wrap><img src=content/images/neo4j-logo.png class=\"top-lg responsive-img no-flex\"><h6>Neo4J</h6></div><div class=img-wrap><img src=content/images/apps-script-logo.png class=\"responsive-img no-flex\"><h6>AppScript</h6></div><div class=img-wrap><img src=content/images/redis-logo.png class=\"responsive-img no-flex\"><h6>Redis</h6></div><div class=img-wrap><img src=content/images/postgresql-logo.png class=\"responsive-img no-flex\"><h6>PostgreSQL</h6></div><div class=img-wrap><img src=content/images/parse-logo.png class=\"top-md responsive-img no-flex\"><h6>Parse</h6></div><div class=img-wrap><img src=content/images/php-logo.png class=\"responsive-img no-flex\"><h6>PHP</h6></div><div class=img-wrap><img src=content/images/laravel-logo.png class=\"responsive-img no-flex\"><h6>Laravel</h6></div></div></div>");
$templateCache.put("app/core/views/header.view.html","<div class=nav-wrapper><div class=container><a ui-sref=home class=brand-logo>Logo</a><ul id=nav-mobile class=\"right side-nav\"><li><a ui-sref=messages>Messages</a></li><li><a href>Components</a></li><li><a href>JavaScript</a></li></ul></div></div>");
$templateCache.put("app/core/views/home.view.html","<div class=io-content-header><h1 class=\"grey-text darken-1\">{{app.name.all}}</h1><hr></div><div class=io-content-details><blockquote><div class=b-icon><i class=\"mdi-communication-phone red-text accent-2\"></i></div><div class=b-text><span>{{app.phone}}</span></div></blockquote><blockquote><div class=b-icon><i class=\"mdi-communication-email red-text accent-2\"></i></div><div class=b-text><span>{{app.email}}</span></div></blockquote><blockquote><div class=b-icon><i class=\"mdi-action-home red-text accent-2\"></i></div><div class=b-text><div>{{app.address}}</div></div></blockquote></div>");
$templateCache.put("app/templates/education/hackreactor.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/hr-logo.png class=responsive-img></div><div class=section-title>Hack Reactor</div><div class=\"section-date grey-text text-darken-1\"><span class>2014</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=pink-text>JavaScript Engineering & Product Development</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text\"></i><a class=indigo-text href=http://www.hackreactor.com>HackReactor.com</a></li><li class=center-item><i class=\"mdi-maps-place pink-text\"></i><span class=ingigo-text>San Francisco, California</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Immersive JavaScript Engineering program</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Studied Javascript Engineering, Product Development, Application Deployment, and Market Validation.</span></li></ul></div>");
$templateCache.put("app/templates/education/swbts.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/swbts-logo.png class=responsive-img></div><div class=section-title>SouthWestern Theological Center</div><div class=\"section-date grey-text text-darken-1\"><span class>2010-2013</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=pink-text>Hummanities & Liberal Arts</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text\"></i><a class=indigo-text href=\"http://college.swbts.edu/\">College.swbts.edu</a></li><li class=center-item><i class=\"mdi-maps-place pink-text\"></i><span class=ingigo-text>Fort Worth, Texas</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Studied for Bachelor in History of Ideas</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Studied Humanities and ideas to structure and implement currently forming ideas.</span></li></ul></div>");
$templateCache.put("app/templates/education/uco.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/uco-logo.png class=responsive-img></div><div class=section-title>University of Central OK</div><div class=\"section-date grey-text text-darken-1\"><span class>2009-2010</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text\"></i><a class=indigo-text href=\"http://www.uco.edu/\">UCO.edu</a></li><li class=center-item><i class=\"mdi-maps-place pink-text\"></i><span class=ingigo-text>Oklahoma City, Oklahoma</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Studied Engineering, Photography, Graphic Arts</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Studied a variety of professions, trying to find what I am able to exceed in.</span></li></ul></div>");
$templateCache.put("app/templates/projects/TraCom.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/tracom-logo.png class=responsive-img></div><div class=section-title>TraCom</div><div class=\"section-date grey-text text-darken-1\"><span class>2012-Today</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"blue-text text-lighten-2\">CRM & ERP</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text text-accent-2\"></i><span class=indigo-text>Project is private</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>Custom-developed a real-time Customer Relations Platform with rich Enerprise Resource Planning integration for H-I-S Coatings company.</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>Implemented full featured OAuth system using Laravel and PHP backend with Angular and jQuery on front end.</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>Employed Google API’s for strategic delivery, routing and just-in-time order scheduling, and platform-wide notifications.</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>Integrated SQL database to communicate with SQL data store, structured by current Point-of-Sale system.</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>Engaged company employees with continual A-B testing to improve UX design.</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>Provided fequent application feedback sessions for overall application health.</span></li><li class=center-item><i class=\"fa fa-circle blue-text text-lighten-2\"></i><span>TraCom is also used as the sole communications platform between Customer Relations and the Production Management team.</span></li></ul></div>");
$templateCache.put("app/templates/projects/mvvm.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=\"section-title mv-logo indigo-text\">mv<strong class=\"pink-text text-accent-2\">VM</strong></div><div class=\"section-date grey-text text-darken-1\"><span class>2014-Today</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"pink-text text-accent-2\">CLI Generator for FullStack Development</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text text-accent-2\"></i><a class=indigo-text href=http://mvvm-demo.azurewebsites.net>View Project</a></li><li class=center-item><i class=\"fa fa-circle pink-text text-accent-2\"></i><span>Integrated popular command line generators into one, with options for creating and saving local templates.</span></li><li class=center-item><i class=\"fa fa-circle pink-text text-accent-2\"></i><span>Maximized developer\'s opinion of mvVm by continualy implementing A B testing.</span></li><li class=center-item><i class=\"fa fa-circle pink-text text-accent-2\"></i><span>Re-Designed github for user\'s local machine, for saving and removing repos.</span></li><li class=center-item><i class=\"fa fa-circle pink-text text-accent-2\"></i><span>Developed and deployd clean documentation interface.</span></li><li class=center-item><i class=\"fa fa-circle pink-text text-accent-2\"></i><span>Provided testing and review system for developer contributions.</span></li></ul></div>");
$templateCache.put("app/templates/projects/plateful.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/plateful-logo.png class=responsive-img></div><div class=section-title>Plateful</div><div class=\"section-date grey-text text-darken-1\"><span class>2014</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"blue-text text-lighten-2\">Yelp, For Menu Items</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text text-accent-2\"></i><a class=indigo-text href=http://plateful.io>View Project</a></li><li class=center-item><i class=\"fa fa-circle orange-text\"></i><span>Identified competitive opportunity to exploit shortcomings in incumbent restaurant item recommendation services.</span></li><li class=center-item><i class=\"fa fa-circle orange-text\"></i><span>Developed from the ground up: photo-centric iOS & Android app to compete against Yelp among foodies.</span></li><li class=center-item><i class=\"fa fa-circle orange-text\"></i><span>Instituted a continuously integrated test and behavior driven development strategy and workflow.</span></li><li class=center-item><i class=\"fa fa-circle orange-text\"></i><span>Oversaw transition of the team to agile development, adhering to best-practice scrum methodologies.</span></li><li class=center-item><i class=\"fa fa-circle orange-text\"></i><span>Deployed RESTful API server and Neo4j graph-oriented database on scalable coordinating virtual machines.</span></li></ul></div>");
$templateCache.put("app/templates/projects/slushy.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/slushy-logo.png class=responsive-img></div><div class=section-title>Slush-y</div><div class=\"section-date grey-text text-darken-1\"><span class>2014-Today</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"purple-text text-darken-4\">SlushJS Generator</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text text-accent-2\"></i><a class=indigo-text href=http://http://github.com/joelcoxokc/slush-y>View Project</a></li><li class=center-item><i class=\"fa fa-circle purple-text text-darken-4\"></i><span>Developed a strategy to provide a good resource for best coding practices.</span></li><li class=center-item><i class=\"fa fa-circle purple-text text-darken-4\"></i><span>Integrated a gulp & a Yeoman-Generator into a system called slushy, allowing the full functionality of either technology.</span></li><li class=center-item><i class=\"fa fa-circle purple-text text-darken-4\"></i><span>Generates a full working application template with OAuth system, and user stories.</span></li><li class=center-item><i class=\"fa fa-circle purple-text text-darken-4\"></i><span>Using Angular, Gulp, Socket.io, NodeJS, ExpressJS, along with Google Material.</span></li></ul></div>");
$templateCache.put("app/templates/experience/designer.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-title>Graphic Artist</div><div class=\"section-date grey-text text-darken-1\"><span class>2006-Today</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=indigo-text>Contract & Freelance</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text text-accent-2\"></i><span class=indigo-text>Portfolio Comming Soon!</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>UI Design, PhotoGraphics, Illustrations, Vector Art, Logo\'s, Business Cards . . . And much more.</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Artwork created using Adobe Photoshop, Adobe Illustrator, and Adobe Fireworks.</span></li></ul></div>");
$templateCache.put("app/templates/experience/dfw-print.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/dfw-logo.png class=responsive-img></div><div class=section-title>DFW Print</div><div class=\"section-date grey-text text-darken-1\"><span class>2011-2013</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=pink-text>Senior Designer & Developer</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Improved customer sales and company reputation, by providing rich stationary designs.</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Exposed Adobe\'s design software to the company, by teaching the team how to affectively use Photoshop, Illustrator & InDesign.</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Discovered a true passion for engaging customer\'s, inorder to provide the design that would best fit their need.</span></li></ul></div>");
$templateCache.put("app/templates/experience/hackreactor.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/hr-logo.png class=responsive-img></div><div class=section-title>Hack Reactor</div><div class=\"section-date grey-text text-darken-1\"><span class>2014</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"blue-text text-darken-1\">Hacker in Residence</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-circle blue-text\"></i><span>Engaged in the development of current HR students by being an available educational resource.</span></li><li class=center-item><i class=\"fa fa-circle blue-text\"></i><span>Took advantage of time, diving into several technologies that extend the possibilities of programming.</span></li><li class=center-item><i class=\"fa fa-circle blue-text\"></i><span>Honored to be a Hacker in Residence under three month contract with HR.</span></li></ul></div>");
$templateCache.put("app/templates/experience/his-coatings-relations.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/his-logo.png class=responsive-img></div><div class=section-title>H-I-S Coatings</div><div class=\"section-date grey-text text-darken-1\"><span class>2001-2010</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"blue-text accent-2\">Customer Service & Many other Hats</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-circle blue-text accent-2\"></i><span>Established a firm understanding of customer relations, by working closely with serveral hundred customers.</span></li><li class=center-item><i class=\"fa fa-circle blue-text accent-2\"></i><span>Provided support between Customer Relations, the Delivery Team, and the Small Batch Production team.</span></li><li class=center-item><i class=\"fa fa-circle blue-text accent-2\"></i><span>Took the initiative to reorganize in house stocking system.</span></li><li class=center-item><i class=\"fa fa-circle blue-text accent-2\"></i><span>Explored several positions, wearing several hats, as my father requested.</span></li></ul></div>");
$templateCache.put("app/templates/experience/his-coatings.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/his-logo.png class=responsive-img></div><div class=section-title>H-I-S Coatings</div><div class=\"section-date grey-text text-darken-1\"><span class>2013-Today</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=green-text>Developer & Designer</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>Custom-developed a real-time Customer Relations Platform with rich Enerprise Resource Planning integration for H-I-S Coatings company.</span></li><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>Implemented full featured OAuth system using Laravel and PHP backend with Angular and jQuery on front end.</span></li><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>Employed Google API’s for strategic delivery, routing and just-in-time order scheduling, and platform-wide notifications.</span></li><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>Integrated SQL database to communicate with SQL data store, structured by current Point-of-Sale system.</span></li><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>Engaged company employees with continual A-B testing to improve UX design.</span></li><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>Provided fequent application feedback sessions for overall application health.</span></li><li class=center-item><i class=\"fa fa-circle green-text\"></i><span>TraCom is also used as the sole communications platform between Customer Relations and the Production Management team.</span></li></ul></div>");
$templateCache.put("app/templates/experience/hourglass-events.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-logo><img width=60px src=content/images/hourglass-logo.png class=responsive-img></div><div class=section-title>Hourglass Events</div><div class=\"section-date grey-text text-darken-1\"><span class>2013-Today</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=\"yellow-text text-darken-4\">Senior Graphic Artist & Developer</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-circle yellow-text text-darken-4\"></i><span>Stimulated the FAAMA\'s Annual Conventions with extraordinary graphics.</span></li><li class=center-item><i class=\"fa fa-circle yellow-text text-darken-4\"></i><span>Promoted convention Exhibitors thoughout each year, with continual email blasts, and mobile app ads.</span></li><li class=center-item><i class=\"fa fa-circle yellow-text text-darken-4\"></i><span>Accelerated attendee envolvment with simple and intuative mobile application.</span></li><li class=center-item><i class=\"fa fa-circle yellow-text text-darken-4\"></i><span>Engaged Exhibitors and FAAMA members with A-B Testing on event graphics and convention mobile app.</span></li><li class=center-item><i class=\"fa fa-circle yellow-text text-darken-4\"></i><span>Assisted event managment team with graphics & mobile app.</span></li><li class=center-item><i class=\"fa fa-circle yellow-text text-darken-4\"></i><span>Accompanied event team managment during each convention.</span></li></ul></div>");
$templateCache.put("app/templates/experience/photography.view.html","<div class=io-section-heading-xs><div class=io-section-heading-top><div class=section-title>Photographer</div><div class=\"section-date grey-text text-darken-1\"><span class>2008-2013</span></div></div><div class=io-section-heading-bottom><div class=section-subtitle><span class=indigo-text>Contract & Freelance</span></div></div></div><div class=io-section-content><ul><li class=center-item><i class=\"fa fa-chevron-right pink-text text-accent-2\"></i><span class=indigo-text>Portfolio Comming Soon!</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Business Events, Conventions, Parties, Weddings, Portraits . . . etc</span></li><li class=center-item><i class=\"fa fa-circle pink-text\"></i><span>Final Proofs created with Adobe Photoshop</span></li></ul></div>");
$templateCache.put("app/core/directives/mvVm/mvVm.view.html","<div class=\"container components\"><div class=\"line red lighten-2 center-align\"><h5 class=\"c vis-hide\">{{title}}</h5><h5 class=\"c vis-hide\">{{subtitle}}</h5></div></div>");
$templateCache.put("app/core/directives/vmItem/vmItem.view.html","<section class=\"vm-item white component\" data-ng-click=\"isOpen = !isOpen\" data-ng-class=\"{\'has-border\':hasBorder, \'vm-item-open\':isOpen}\" data-ng-transclude></section>");}]);