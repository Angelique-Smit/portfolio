//Translator
const translations = {
    en: {
        aboutMeNav : "About me",
        projectsNav : "My projects",
        workExperienceNav : "Work experience",
        aboutMePerson : `&lt Me as a person &gt`,
        aboutMePersonText : "My name is Angelique Smit and I am currently a creative media and game technologies student at Rotterdam University of Applied Siences. Besides programming, I spend my free time working in the university's fatlab helping students make their project ideas a reality or sewing my own clothes.",
        aboutMeDeveloper :  `&lt Me as a developer &gt`,
        aboutMeDeveloperText : "My programming journey began in 2022 when I decided I wanted to learn some basic code. Back then, I spent my time making simple sorting algorithms in C#. Nowadays, I am focussed on full-stack web-development with broad experience HTML, CSS, Javascript and PHP but I have also worked with Python and Typescript. I have experience with frameworks such as Laravel, NodeJS & Express, React, Excalibur and Tailwind. Additionally, I have knowledge of the use of micro-controllers such as the Circuit Playground and Microbit.",
        projectsTitle : `&lt Highlighted projects &gt`,
        projectsWebgameText : "For the last project in my first year, my classmate and I made a webgame, a dating simulator, in Javascript using Excalibur. During the 2 and a half weeks we had for development, my classmate and I made the artwork, wrote the dialogue and wrote all the code. We used Excalibur due to prior knowedge in the framework and its easy to use scene system. Our game secured second place in the project showcase and was briefly featured on our study's Twitch channel, which was hosted within the National Video Game Museum.",
        projectsIpcar : `&lt Interface for the IP-Car &gt`,
        projectsIpcarText : `My first 6-month project during my second year, 4 classmates and I worked on developing an interface for the IP-car, an RC car designed to host museum tours from a distance. Our team was not just focused on implementation but was leading the entire creative process, design sprint, and user research too. The project can be viewed <a href="https://cmgt.hr.nl/projecten/streamteam">here</a>.`,
        projectsSeeMore : `Interested in more of my projects? Visit my <a href="https://github.com/Angelique-Smit">Github</a> to see more of my projects.`,
        workExperienceTitle : `&lt Work Experience &gt`,
        workExperienceSteward : `&lt Student assistant 2023-Current &gt`,
        workExperienceStewardText : "Currently, I am working as a student assistant in our university fatlab. This is a lab full of different kinds of high-tech machinery such as 3D-printers, lasercutters, automatic embroidery machines and much more. As a student assistant, I am responsible for the upkeep of the lab, basic servicing of the machinery but most of all helping and inspiring the students and outsiders to build their school or personal projects. I answer people's questions, give advise and explain how to use the machinery to newcomers.",
        workExperienceRetail : `&lt Retail worker 2022-2023 &gt`,
        workExperienceRetailText : "After the pandemic I worked in a second-hand retail store called HetGoed. I sorted incoming items, put them inside of the store and managed the register. I mostly worked behind the register, actively conversing with customers.",
        workExperienceTutor: `&lt English Tutor 2021-2022 &gt`,
        workExperienceTutorText : "During the pandemic, I worked as a tutor for StudentPlus. During my time at the company, I tutored two individuals, one of them being dyslexic, in English to prevent them from falling further behind. I gave 1 hour student-focussed lessons each weak in which I made custom explanation sheets for the students, made expercises for them and gave feedback on what they should be studying more in. During this time, I tutored both in person and online."
    },

    nl: {
        aboutMeNav : "Over mij",
        projectsNav : "Mijn projecten",
        workExperienceNav : "Werkervaring",
        aboutMePerson : `&lt Over mij persoonlijk &gt`,
        aboutMePersonText : "Mijn naam is Angelique Smit en ik ben momenteel een student Creative Media en Game Technologies aan Hogeschool Rotterdam. Naast programmeren besteed ik mijn vrije tijd aan het werken in het fatlab van de hogeschool waar ik studenten help om hun projectideeën werkelijkheid te maken, of aan het maken van mijn eigen kleding.",
        aboutMeDeveloper :  `&lt Over mij als developer &gt`,
        aboutMeDeveloperText : "Mijn programmeeravontuur begon in 2022 toen ik besloot de basis van code te leren. Destijds spendeerde ik mijn tijd aan het maken van eenvoudige sorteeralgoritmen in C#. Tegenwoordig richt ik me op full-stack webdevelopment met brede ervaring in HTML, CSS, Javascript en PHP, maar ik heb ook gewerkt met Python en Typescript. Ik heb ervaring met frameworks zoals Laravel, NodeJS & Express, React, Excalibur en Tailwind. Daarnaast heb ik kennis van het gebruik van microcontrollers zoals de Circuit Playground en Microbit.",
        projectsTitle : `&lt Uitgelichte projecten &gt`,
        projectsWebgameText : "Voor het laatste project in mijn eerste jaar hebben mijn klasgenoot en ik een webgame, een dating simulator, gemaakt in Javascript met behulp van Excalibur. Gedurende de 2 en een halve week die we hadden voor de ontwikkeling van het spel, hebben mijn klasgenoot en ik de artwork gemaakt, de dialoog geschreven en alle code geschreven. We kozen voor Excalibur vanwege eerdere kennis van het framework en het eenvoudig te gebruiken scènesysteem. Ons spel behaalde de tweede plaats in de project showcase van onze jaarlaag en werd kort getoond op het Twitch-kanaal van onze studie, dat werd gehost binnen het Nationaal Videogame Museum.",
        projectsIpcar : `&lt Interface voor de IP-Car &gt`,
        projectsIpcarText : `Mijn eerste project van 6 maanden tijdens mijn tweede jaar werkte 4 klasgenoten en ik aan het ontwikkelen van een interface voor de IP-car, een op afstand bedienbare auto ontworpen om museumtours te houden. Ons team richtte zich niet alleen op implementatie, maar leidde onder andere ook het creatieve proces, de design sprint en het doelgroeponderzoek. Het project is <a href="https://cmgt.hr.nl/projecten/streamteam">hier</a> te bekijken.`,
        projectsSeeMore : `Geïnteresseerd in meer van mijn projecten? Bezoek mijn <a href="https://github.com/Angelique-Smit">Github</a> om meer van mijn projecten te zien.`,
        workExperienceTitle : `&lt Werkervaring &gt`,
        workExperienceSteward : `&lt Student-assistent 2023-heden &gt`,
        workExperienceStewardText : "Momenteel werk ik als student-assistent in het stadslab. Dit is een lab vol met verschillende soorten machines zoals 3D-printers, lasersnijders, automatische borduurmachines en meer. Als student-assistent ben ik verantwoordelijk voor het geordend houden van het lab, basis onderhoud van de machines, maar vooral voor het helpen en inspireren van de studenten om hun school- of persoonlijke projecten te realiseren. Ik beantwoord vragen, geef advies en leg nieuwkomers uit hoe ze de machines moeten gebruiken.",
        workExperienceRetail : `&lt Winkelmedewerker 2022-2023 &gt`,
        workExperienceRetailText : "Na de pandemie werkte ik in een tweedehands winkel genaamd HetGoed. Ik sorteerde binnenkomende artikelen, plaatste ze in de winkel en beheerde de kassa. Ik werkte voornamelijk achter de kassa.",
        workExperienceTutor: `&lt Bijlesgever Engels 2021-2022 &gt`,
        workExperienceTutorText : "Tijdens de pandemie werkte ik als bijlesgever voor StudentPlus. Gedurende mijn tijd bij het bedrijf gaf ik les aan twee individuen, waarvan er één dyslectisch was, in het vak Engels om een verdere achterstand te verkomen en de huidige achterstand in te halen. Ik gaf 1 uur per week studentgerichte lessen waarin ik gepersonaliseerde uitleg bladen maakte voor de studenten, oefeningen voor hen samenstelde en feedback gaf en vertelde welke onderdelen zij beter moesten leren. Gedurende deze tijd gaf ik zowel persoonlijk als online les."
    },
}

const languageSelectop = document.querySelector("select");

const amn = document.getElementById("about-me-nav")
const pn = document.getElementById("projects-nav")
const wen = document.getElementById("work-experience-nav")
const amp = document.getElementById("about-me-person")
const ampt = document.getElementById("about-me-person-text")
const amd = document.getElementById("about-me-developer")
const amdt = document.getElementById("about-me-developer-text")
const pt = document.getElementById("projects-title")
const pwt = document.getElementById("projects-webgame-text")
const pi = document.getElementById("projects-ipcar")
const pit = document.getElementById("projects-ipcar-text")
const psm = document.getElementById("projects-see-more")
const wet = document.getElementById("work-experience-title")
const wes = document.getElementById("work-experience-steward")
const west = document.getElementById("work-experience-steward-text")
const wer = document.getElementById("work-experience-retail")
const wert = document.getElementById("work-experience-retail-text")
const wet2 = document.getElementById("work-experience-tutor")
const wett = document.getElementById("work-experience-tutor-text")



languageSelectop.addEventListener("change", (event) =>{
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "en") {
        amn.innerHTML = translations.en.aboutMeNav;
        pn.innerHTML = translations.en.projectsNav;
        wen.innerHTML = translations.en.aboutMeNav;
        amp.innerHTML = translations.en.aboutMePerson;
        ampt.innerHTML = translations.en.aboutMePersonText;
        amd.innerHTML = translations.en.aboutMeDeveloper;
        amdt.innerHTML = translations.en.aboutMeDeveloperText;
        pt.innerHTML = translations.en.projectsTitle;
        pwt.innerHTML = translations.en.projectsWebgameText;
        pi.innerHTML = translations.en.projectsIpcar;
        pit.innerHTML = translations.en.projectsIpcarText;
        psm.innerHTML = translations.en.projectsSeeMore;
        wet.innerHTML = translations.en.workExperienceTitle;
        wes.innerHTML = translations.en.workExperienceSteward;
        west.innerHTML = translations.en.workExperienceStewardText;
        wer.innerHTML = translations.en.workExperienceRetail;
        wert.innerHTML = translations.en.workExperienceRetailText;
        wet2.innerHTML = translations.en.workExperienceTutor;
        wett.innerHTML = translations.en.workExperienceTutorText;
    } else if (language == "nl") {
        amn.innerHTML = translations.nl.aboutMeNav;
        pn.innerHTML = translations.nl.projectsNav;
        wen.innerHTML = translations.nl.aboutMeNav;
        amp.innerHTML = translations.nl.aboutMePerson;
        ampt.innerHTML = translations.nl.aboutMePersonText;
        amd.innerHTML = translations.nl.aboutMeDeveloper;
        amdt.innerHTML = translations.nl.aboutMeDeveloperText;
        pt.innerHTML = translations.nl.projectsTitle;
        pwt.innerHTML = translations.nl.projectsWebgameText;
        pi.innerHTML = translations.nl.projectsIpcar;
        pit.innerHTML = translations.nl.projectsIpcarText;
        psm.innerHTML = translations.nl.projectsSeeMore;
        wet.innerHTML = translations.nl.workExperienceTitle;
        wes.innerHTML = translations.nl.workExperienceSteward;
        west.innerHTML = translations.nl.workExperienceStewardText;
        wer.innerHTML = translations.nl.workExperienceRetail;
        wert.innerHTML = translations.nl.workExperienceRetailText;
        wet2.innerHTML = translations.nl.workExperienceTutor;
        wett.innerHTML = translations.nl.workExperienceTutorText;
    }
}