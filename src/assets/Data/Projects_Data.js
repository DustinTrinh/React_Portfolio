export default [
    {
        id: "React_Portfolio",
        title: "React Portfolio",
        difficulty: 2,
        status: "Finished",
        date: "December 31st, 2022",
        introduction: "As I started to learn and React and want to have a website that display my portfolio, hence, this project is being born.",
        url: "",
        techStack: {
            frontEnd: {
                title: "Front-End",
                skills: ["React"],
            },
            backEnd: {
                title: "Back-End",
                skills: ["Javascript"],
            },
            others: {
                title: "Others",
                skills: ["None"],
            },
        },
        discussion: "As I am trying to familiar myself with this framework, I am working from easy to hard approach. At first, I will create a static website and then slowly improve it. For instance, after this website go live, I will start to integrate all data with a database instead of static JSON files. Moreover, I am looking to use Spring at the backend to help me with adding and modifying the contents of the website.",
        result: "Finished first step, to create a static website for my portfolio.",
        retrospective: "Not Yet",
    },
    
    {
        id: "BProtective",
        title: "BProtective (Bachelor Degree's Capstone)",
        difficulty: 4,
        status: "Finished",
        date: "August 21, 2021",
        introduction: "As a leader and the one who came up with the idea, BProtective is my proudest project up until this point. To begin with, BProtective is a safety app that allows users to send emergency signal and ask for helps from surrounding users (within 1KM for normal user and 3KM for authorities). The idea is to have immediate help in case of dangers. Additionally, the app will immediately notify nearby authorities and fastest path will be shown for authority to reach the victim as soon as possible. Lastly, parental or bonding features is added so people can add their parents or friends to their to-contacted and to-notify list whenever they turn on Emergency signal.",
        url: "https://github.com/DustinTrinh/BProtective",
        techStack: {
            frontEnd: {
                title: "Front-End",
                skills: ["Storyboard"],
            },
            backEnd: {
                title: "Back-End",
                skills: ["Swift", "Firebase"],
            },
            others: {
                title: "Others",
                skills: ["iOS Built-in libraries"],
            },
        },
        discussion: "One of the question I am being asked the most, from my Professor and Amazon interviewer is about the scanning feature, 'Why can other users can only view emergency signal within 1KM - 3KM radius?' Well, the idea is to get immediate help, meaning the helpers should be close to the victims. Additionally, the larger the radius, there will be more signals, pins on the map which, at one point it will overwhelm the device and result in a crash or heated devices. In short, I disagreed with my professor to allow the radius to be 'whole world', imagine the every single from all around the world being displayed on a mobile device's screen, it will cause tremendous breakdown needlessly to say. In fact, I did a demonstration by created 15000 emergency signals on the map, and to be honest, the on the whole world scale, it would be 20 or 30 times higher than that, each pins are being constantly updated as the victim move along with the data on Firebase server; and, of course it crashed. In reality, even Airbnb has to filter down their properties instead of showing 'all properties' on the map. In conclusion, I chose the stabability of the application instead of my grade, I did not allow 'all emergency signal' and just slightly increased the radius to 3-5KM despite the disagreement of my professor.",
        result: "Successfully finished the application within 2 months, and all planned features & functions worked. Capstone being approved with 90% grade.",
        retrospective: "I should improve the UI to be a bit more user friendly. ",
    },
    {
        id: "DataStructureAlgorithm_Study",
        title: "Data Structure & Algorithm Practise",
        difficulty: 6,
        status: "Ongoing",
        date: "August 2022 - Present",
        introduction:
            "Data Structure and Algorithm is essential for computer science and every programmer should be familiar with the concepts as well as the patterns. Hence, I tried my best to become better every day at it.",
        url: "https://github.com/DustinTrinh/DataStructureAlgorithm_Study",
        techStack: {
            frontEnd: {
                title: "Frontend",
                skills: ["None"],
            },
            backEnd: {
                title: "Backend",
                skills: ["JavaScript"],
            },
            others: {
                title: "Others",
                skills: ["None"],
            },
        },
        discussion:
            "I've learned DSA from various platforms (see Github) such as Youtube, Udemy and recently Educative. ",
        result: "After a few months, I am quite confident and solved over a hundred problems and applied the 16 patterns. I am also very confident analyzing codes and making modifications to reduce spaces and runtimes. In conclusion, most of my codes are always in the simplest form and runtimes & spaces are always being considered to save the cost as much as possible.",
        retrospective:
            "Practise more often on following topics: Permutation, Dynamic Programming and 2/3D matrix manipulation.",
    },
    {
        id: "iOSDevelopment",
        title: "iOS Mini Projects",
        difficulty: 1,
        status: "Finished",
        date: "September 5th, 2021",
        introduction:
            "Let's start by saying that iOS and Apple ecosystem had always been my favourite since the start of dawn. Learning, practising and using Swift always give me joy, hence, I start personal iOS projects whenever I have free time. And as technologies progress so fast with plenty of new features, I have to update my knowledge occasionally. In fact, learning projects will never be 'finished'.",
        url: "https://github.com/DustinTrinh/iOSDevelopment",
        techStack: {
            frontEnd: {
                title: "Frontend",
                skills: ["SwiftUI"],
            },
            backEnd: {
                title: "Backend",
                skills: ["SwiftUI", "Swift 4,5", "Firebase"],
            },
            others: {
                title: "Others",
                skills: ["APIs", "iOS Built-in Libraries"],
            },
        },
        discussion: "Personally, there are various of options to choose from in Frontend (SwiftUI vs Storyboard), Database (Firebase, SQLite, Core Data, ...), it is important to do in-depth research based on features and specs of the application.",
        result: "Created many mini projects and successfully applied knowledge for School Projects (BProtective) and Covid-19 Hackathon (Pay@Ease) ",
        retrospective: "I should practise more SwiftUI since it is new and yet, less complex to program than original storyboards.",
    },
    {
        id: "Pay@Ease",
        title: "Covid-19 Hackathon - Pay@Ease Project",
        difficulty: 4,
        status: "Finished",
        date: "July 3rd, 2020",
        introduction: "This Hackathon event is originated to help small businesses to deal with various problems during COVID-19. I chose to work on Contactless payment using a mobile phone to scan a QRCode and pay bills. To begin with, I created an iOS application that help users to create account, add payment method and pay bills by scanning QRCode. Simultaneously, I helped other teammate create a website to simulate how restaurants or other vendors create their bills. For instance, vendors just need to fill out the form and QRCode will be generated. And for security reason, users can choose to add fund into their accounts or use their own cards, but the first option will never save information of their cards.  ",
        url: "https://github.com/DustinTrinh/COVID_Hackathon",
        techStack: {
            frontEnd: {
                title: "Front-End",
                skills: ["HTML", "CSS", "Swift Storyboard"],
            },
            backEnd: {
                title: "Back-End",
                skills: ["Javascript", "Python", "Swift"],
            },
            others: {
                title: "Others",
                skills: ["Python Libraries", "Swift Libraries", "QRCode API"],
            },
        },
        discussion: "I would love to have Android app as well, though, due to time constraint (3 days), we are unable to do so. After all, I am very satisfy with the result as I learned many lessons and also improved my ability to code significantly.",
        result: "Won group stage for Contactless Paynot. Successfully finished Web & iOS Application, fully operated.",
        retrospective: "As a team leader, there are more things that I should improve. For instance, as I code 3 days straight without rest, I naively assume all team members will do the same, hence I assigned too many tasks which caused them to overwhelmed and discourage. Secondly, as a person who dealt with all documentation, I find that it should be improved to send more precise messages to end users and stakeholders.",
    },
    {
        id: "ILPH",
        title: "Instant License Plate Hunting",
        difficulty: 6,
        status: "Dropped",
        date: "June 18th, 2020",
        introduction: "A project's main purpose is for me to learn about Flask Framework and using Postgresql to store all data. It is a program to read license plate once the authority entered the License Plate numbers, Car brand and color.",
        url: "https://github.com/DustinTrinh/ILPH/tree/master/ILPH_Flask",
        techStack: {
            frontEnd: {
                title: "Front-End",
                skills: ["Flash Framework", "HTML", "CSS"],
            },
            backEnd: {
                title: "Back-End",
                skills: ["Python", "Javascript", "Postgresql"],
            },
            others: {
                title: "Others",
                skills: ["Sighthound Library", "AI/ML/DL Libraries"],
            },
        },
        discussion: "I used Flask framework and Postgresql for this project. To begin with, I created an interface to manage all the wanted vehicles, including details such as Color, Brand and License Plate (important). Secondly, I tried to create a model to read the license plate, used Sighthound library to read images and analyze to text. Though, there are various of constraints that are not being considered (my bad) such as videos' quality, weather factor, security and privacy issues. In fact, the model worked fine with perfect quality videos (720p - 4k), but the predictions are worse if the quality is worse than 720p. And lastly, it is hard to test the full software as it is impossible to retrieve full traffic footages and the computer is not strong enough to analyze streaming videos.",
        result: "I am comfortable working with Flask framework and connect with Database server.",
        retrospective: "Better documentation, researches and knowledge are needed for this project. (Well, need improve everything in general :D )",
    },
    {
        id: "Fishackathon",
        title: "Fishackathon Overfishing Measurement",
        difficulty: 6,
        status: "Finished",
        date: "May 24th, 2018",
        introduction: "A system to classify, monitor and report overfishing to prevent further harm to the ecosystem. The initial idea is to create a little device that can determine the weight and special species and then make a decision to either pull or drop the net.",
        url: "https://github.com/DustinTrinh/Fishackathon",
        techStack: {
            frontEnd: {
                title: "Front-End",
                skills: ["TKinter"],
            },
            backEnd: {
                title: "Back-End",
                skills: ["Python", "Postgresql"],
            },
            others: {
                title: "Others",
                skills: ["None"],
            },
        },
        discussion: "This is my first ever hackathon and I'd learned a lot of valuable lessons about documentation, programming and especially communication. To begin with, I would say this project's code is 90% mine despite my team had 5 people, 3 Project Managers and 2 Programmers (including me). For instance, 3 PM did not have any documentation and just briefly explain their ideas, which, in reality, we need a proposal that includes Budget, Time, Scope. Hence, all I could do is to begin the project with TKinter, added all the needed functionalities such as generate data to PDF, created mock data to simulate the flow of the program: Inspect the Net -> Make decision to pull or drop based on Weight, Location and Species -> Generate data. Though, the part where we have to use machine learning to read the species within the net was amazingly diffucult and I am unable to finish it within 2 days. At the end, we can only show the prototypes and the flow of the program.",
        result: "Failed to implement the machine learning model. Successfully create a prototype and demonstrate the flow to stakeholder.",
        retrospective: "Firstly, I honestly quite frustrated due to the lack of documentation and communication from the Project managers as this is their capstone project and got 2 months to prepare. Secondly, since this is just a hackathon, 4 out of 5 members did not take this project serious and one came in drunk the next day. Due to this event, I always set a few standards whenever I joined a hackathon or a project: Dedication, Commitment and Passion of a person toward the project. Also, I learned about Scrum Agile and participate in the documentation process and planning out realistic Scope, Time, Budget. ",
    },
];
