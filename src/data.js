export const projectsData = [
    {
        id: 1,
        photo: require(`./images/react-playlist.png`),
        projectName: 'React Playlists',
        projectYear: '2022',
        projectDescription: 'Designed, implemented and shipped to production a React web app, in collaboration with Kevin Hanard. My favourite tracks on a single web page: discover new artists through my playlists.',
        skills: ["React", "Javascript", "styled-component", "Testing Library"],
        accomplishments: ["React.js app", "Design in Figma", "Styling with styled-component", "Dark/Light mode using `theme`", "Responsive web design", "Testing with Jest and Testing Library"],
        note: '',
        webLink: 'https://react-playlist.netlify.app/',
        github: 'https://github.com/julianoiret/playlist-react',
    },
    {
        id: 2,
        photo: require(`./images/mountain-map.png`),
        projectName: 'Mountain Map',
        projectYear: '2021',
        projectDescription: 'Explore mountain bike trails in 3D with Mountain Maps. Designed, implemented and shipped to production a Rails prototype of a web application in 2 weeks. Created by Andrew Calder, Jorge Andres Arias, Hongleang Lim and myself for our final project at Le Wagon web development bootcamp in Melbourne.',
        skills: ["Ruby on Rails", "Javascript", "SCSS", "Heroku", "Mapbox", "Stimulus", "Turbo", "PostgreSQL", "Bootstrap", "Cloudinary"],
        accomplishments: ["Ruby on Rails backend", "Front-end development in Bootstrap", "User authentication via Devise", "Mapbox API", "Image upload with Cloudinary", "AJAX query of Rails JSON"],
        note: '',
        webLink: 'https://www.mountain-maps.com/mountains',
        github: 'https://github.com/andycalder/mountain-maps',
        youtube: 'https://www.youtube.com/watch?v=Iajr2kyNPQ0&t=483s',
    },
    {
        id: 3,
        photo: require(`./images/react-projects.png`),
        projectName: "React projects",
        projectYear: '2021',
        projectDescription: 'All my React projects from freeCodeCamp in one website.',
        skills: ["React", "Javascript", "HTML", "CSS"],
        accomplishments: ["Reviews slider", "Clone of Stripe menu", "Modal", "Accordion", "Grocery && Birthday list", "Shopping cart"],
        note: '...& more projects!',
        webLink: 'https://react-projects-julia.netlify.app/',
        github: 'https://github.com/julianoiret/react-projects-portfolio',
    },
    {
        id: 4,
        photo: require(`./images/catstronaut.png`),
        projectName: 'Catstronaut',
        projectYear: '2022',
        projectDescription: 'Following these hands-on GraphQL tutorials and trainings from Apollo Odyssee, I deployed this app into production with Heroku using live data, resolvers & GraphQL mutations.',
        skills: ["React", "Javascript", "GraphQL", "Heroku"],
        accomplishments: ["Live data, resolvers, and data sources", "Update data with GraphQL mutations", "Deploy my app into production"],
        note: '',
        webLink: 'https://client-catstronauts-julia-h.herokuapp.com/',
        github: 'https://github.com/julianoiret/odyssey-lift-off-part5-client',
    },
    {
        id: 5,
        photo: require(`./images/template-1.png`),
        projectName: 'Template 1',
        projectYear: '2020',
        projectDescription: 'Designed a website template.',
        skills: ["HTML", "CSS"],
        accomplishments: ["Front-end development in Bootstrap", "Responsive web design"],
        note: 'Created before bootcamp',
        webLink: 'https://julianoiret.github.io/website-template-2/',
        github: 'https://github.com/julianoiret/website-template-2',
    },
    {
        id: 6,
        photo: require(`./images/template-2.png`),
        projectName: 'Template 2',
        projectYear: '2020',
        projectDescription: 'Designed a website template.',
        skills: ["HTML", "CSS"],
        accomplishments: ["Front-end development in Bootstrap", "Responsive web design"],
        note: 'Created before bootcamp',
        webLink: 'https://julianoiret.github.io/template-3/',
        github: 'https://github.com/julianoiret/template-3',
    },
];

export const experienceData = [
    {
        id: 1,
        job: "👩🏻‍💻 Associate Developer | REA Group",
        date: "2022 - Present",
        description: "Build UI components using TypeScript, React, styled-component, testing library, and APIs using NestJS, TypeScript and REA’s intern tools for realestate.com.au and ignite.realestate.com.au - Write, maintain and improve code - Review and provide feedback on pull requests - Ship a native project within 2 weeks using Kotlin and GraphQL, with a team of Grads and Springboarders - Work on pair-programming and independently, in an Agile environment - Additional technical expertise includes working with JavaScript, Scala, AWS, and Docker",
        where: "Sydney (Australia)"
    },
    {
        id: 2,
        job: "",
        date: "2017 - 2020",
        description: "🍽 🍸 Various experiences in hospitality as Bartender & Waitress",
        where: "QLD & TAS (Australia)"
    },
    {
        id: 3,
        job: "",
        date: "2015 - 2016",
        description: "🍅 🚜 Various experiences working on farms as Quality Controller, Administration Officer, Grader & Packer",
        where: "QLD & NT (Australia)"
    },
    {
        id: 4,
        job: "👥 Relationship Manager | Vivamural",
        date: "2013 - 2014",
        description: "Managed the after-sales service - Answered phone request - Assisted customers BtoB and BtoC - Quotations - Benchmarking",
        where: "Lille (France)"
    },
    {
        id: 5,
        job: "🗣 Store Supervisor | Yves Rocher",
        date: "2012 - 2013",
        description: "Support for opening a new store (creation of merchandising, inventory level) - Managed the store and sales team in store (3 customer advisors) - Advice and sales",
        where: "Flers-en-Escrebieux (France)"
    },
    {
        id: 6,
        job: "💄 Sales Team Leader | Yves Rocher",
        date: "2011 - 2012",
        description: "Managed sales team in store (7 customer advisors) - Advice and sales - Sales events",
        where: "Douai (France)"
    },
];

export const educationData = [
    {
        id: 1,
        logo: require(`./images/apollo.png`),
        name: "Apollo Odyssey",
        website: "https://www.apollographql.com/",
        title: "Apollo Graph Developer | Associate",
        description: "Odyssey is Apollo's official learning platform that offers free hands-on GraphQL tutorials. Each GraphQL tutorial comes with a real-life application that I built along with the instructor, step by step. I got many opportunities to practice with in-lesson code challenges to keep things concrete and hands-on.",
        curriculum: ["Understand the GraphQL & Apollo ecosystem", "Design a basic schema", "Create an Apollo Server and connect to a REST data source", "Implement Apollo Client library in a React app, build a basic GraphQL query and display results", "Use arguments in queries and resolvers", "Add a mutation to the schema", "Explain the best practices for shaping a mutation response and handling errors", "Use the `useMutation` hook to send a mutation to the server"],
        accomplishment: ["Shipped to production an app 'Catstronaut'", "Configure Apollo Server and Client for production"],
        time: "Certification issued on October 2022 | Online",
    },
    {
        id: 2,
        logo: require(`./images/le-wagon.png`),
        name: "Le Wagon",
        website: "https://www.lewagon.com/melbourne",
        title: "Web development | Full-time courses (10 weeks)",
        description: "Ranked as the World’s Best Coding Bootcamp for 4 years in a row (on Switchup and Coursereport), Le Wagon is a very product-driven program teaching the core concepts of programming and web development. During the course, I learnt how to build robust and beautiful web applications by myself, collaborate within a team of developers and adopt the technical workflow followed by successful startups.",
        curriculum: ["Understand the core concepts of object-oriented programming", "Structure a software following design patterns like MVC", "Integrate a 3rd party service using an API or scrape HTML data", "Design a relational database and build queries with SQL", "Build a UI following atomic design framework", "Code a CSS library using recent techniques like flexbox or CSS grid", "ES6 as a second programming language", "Adopt the right technical workflow: design a wireframe & mockup, test a UX with a prototype, split a user stories across my team and collaborate with branch and pull requests with git and Github", "Discover TDD (Test Driven Development) and learn how to cover your application's code with unit tests"],
        accomplishment: ["Designed, implemented and shipped to production a clone of Airbnb in team of 4 people in 5 days", "Designed, implemented and shipped to production a Rails prototype of a web application"],
        time: "April 2021 - June 2021 | Melbourne, Australia",
    },
    {
        id: 3,
        logo: require(`./images/coursera.png`),
        name: "Coursera | University of Michigan",
        website: "https://www.coursera.org/specializations/web-design",
        title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
        description: "This Specialization covers how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript. Mastering this range of technologies I'm now able to develop high quality web sites that, work seamlessly on mobile, tablet, and large screen browsers accessible, and that utilizes tools to create a site that is accessible to a wide audience, including those with visual, audial, physical, and cognitive impairments.",
        curriculum: ["Add interacitivity to web pages with Javascript", "Use the Document Object Model to modify pages", "Describe the basics of CSS", "Apply responsive design to enable page to be viewed by various devices"],
        accomplishment: ["Designed an accessible and responsive website"],
        time: "2019 - 2020 | Online, on my free time",
    },
    {
        id: 4,
        logo: require(`./images/iaelille.png`),
        name: "IAE Lille",
        website: "https://iaelille.fr/",
        title: "University School of Management: Bachelor of Business Administration",
        description: "The bachelor LPMO (Business Administration) is designed to develop the skills required for careers in business and management. IAE Lille has been providing a world class education since 1956.",
        curriculum: ["Leadership", "Marketing", "Global Business Economics", "Financial and Managerial Accounting", "Business Finance", "Data Analysis", "Managing People"],
        accomplishment: ["Submission of a thesis: How to improve customer loyalty and retention"],
        time: "Completed in 2014 | Lille, France",
    },
];
