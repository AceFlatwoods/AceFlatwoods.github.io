// Unsure if it's called a handler but eh
// Why did I decide to do this without knowing any .js AAAAAA, IT TOOK 4 HOURS AND IT'S HALF BAKED

// In order to add one:
// Step 0: Add localizer="LOREM" in the HTML for whatever string you are trying to localize

// Step 1: Add the key to localizationKeys.js along with it's text

// Step 2: Make a constant, set localizer to that key
// Template: const LOREM = document.querySelector('[localizer="IPSUM"]');

// Step 3: Add it at the end on the data
// Template: LOREM.textContent = data[attr].IPSUM;

// If any of these steps is skipped you'll get an error, check console to see which line you have the error in and make a checklist for that specific localizer key in order to make sure that all the steps are covered



		const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('.langWrap a');
        
        // Constants here, mayhaps we should get like, a custom tool or something at some point
        // LAST KEY: DESCRIPTION_ABOUT_05  
        const NAVBAR_HOME = document.querySelector('[localizer="NAVBAR_HOME"]');
        const NAVBAR_ABOUT = document.querySelector('[localizer="NAVBAR_ABOUT"]');
        const NAVBAR_PROJECTS = document.querySelector('[localizer="NAVBAR_PROJECTS"]');
        const NAVBAR_FAQ = document.querySelector('[localizer="NAVBAR_FAQ"]');
        const NAVBAR_SOCIALS = document.querySelector('[localizer="NAVBAR_SOCIALS"]');
        const byText = document.querySelector('[localizer="BY"]');
        const langPick = document.querySelector('[localizer="LANGUAGE_PICK"]');

		const descrTiAbEl = document.querySelector('[localizer="ABOUT_TITLE"]');
		const descrAb01El = document.querySelector('[localizer="DESCRIPTION_ABOUT_01"]');
        const descrAb02El = document.querySelector('[localizer="DESCRIPTION_ABOUT_02"]');
        const descrAb03El = document.querySelector('[localizer="DESCRIPTION_ABOUT_03"]');
        const descrAb04El = document.querySelector('[localizer="DESCRIPTION_ABOUT_04"]');
        const descrAb05El = document.querySelector('[localizer="DESCRIPTION_ABOUT_05"]');
        const projectsTitle = document.querySelector('[localizer="PROJECTS_TITLE"]');
        const projectsEndText = document.querySelector('[localizer="PROJECT_END_TEXT"]');
        const question01FAQ = document.querySelector('[localizer="QUESTION_01"]');
        const Q01_A1 = document.querySelector('[localizer="Q01_A1"]'); // Yeah I got tired of the lowercase names and started copy pasting the key name, sue me
        const Q01_A2 = document.querySelector('[localizer="Q01_A2"]');
        const Q01_A3 = document.querySelector('[localizer="Q01_A3"]');
        const Q01_A4 = document.querySelector('[localizer="Q01_A4"]');
        const Q01_A5 = document.querySelector('[localizer="Q01_A5"]');
        const question02FAQ = document.querySelector('[localizer="QUESTION_02"]');
        const Q02_A1 = document.querySelector('[localizer="Q02_A1"]');
        const question03FAQ = document.querySelector('[localizer="QUESTION_03"]');
        const Q03_A1 = document.querySelector('[localizer="Q03_A1"]');
        const question04FAQ = document.querySelector('[localizer="QUESTION_04"]');
        const Q04_A1 = document.querySelector('[localizer="Q04_A1"]');
        const question05FAQ = document.querySelector('[localizer="QUESTION_05"]');
        const Q05_A1 = document.querySelector('[localizer="Q05_A1"]');
        const question06FAQ = document.querySelector('[localizer="QUESTION_06"]');
        const Q06_A1 = document.querySelector('[localizer="Q06_A1"]');
        const question07FAQ = document.querySelector('[localizer="QUESTION_07"]');
        const Q07_A1 = document.querySelector('[localizer="Q07_A1"]');
        const endText = document.querySelector('[localizer="END_TEXT"]');
        const socialsText = document.querySelector('[localizer="SOCIALS_TEXT"]');
        const footerText = document.querySelector('[localizer="FOOTER_TEXT"]');

		link.forEach(el => {
			el.addEventListener('click', (e) => {
                e.preventDefault(); // e is for event, added up there
				
                // Checks for active class from the class list, removes it and adds it to whatever you clicked
                langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');
                
				const attr = el.getAttribute('language');

                // Pain
                // textContent if it's a raw string, innerHTML if it has HTML code in the string, remember to use \"
                NAVBAR_HOME.textContent = data[attr].NAVBAR_HOME;
                NAVBAR_ABOUT.textContent = data[attr].NAVBAR_ABOUT;
                NAVBAR_PROJECTS.textContent = data[attr].NAVBAR_PROJECTS;
                NAVBAR_FAQ.textContent = data[attr].NAVBAR_FAQ;
                NAVBAR_SOCIALS.textContent = data[attr].NAVBAR_SOCIALS;
                byText.textContent = data[attr].BY;
                langPick.textContent = data[attr].LANGUAGE_PICK;
                descrTiAbEl.textContent = data[attr].ABOUT_TITLE;
				descrAb01El.textContent = data[attr].DESCRIPTION_ABOUT_01;
                descrAb02El.innerHTML = data[attr].DESCRIPTION_ABOUT_02;
                descrAb03El.textContent = data[attr].DESCRIPTION_ABOUT_03;
                descrAb04El.innerHTML = data[attr].DESCRIPTION_ABOUT_04;
                descrAb05El.textContent = data[attr].DESCRIPTION_ABOUT_05;
                projectsTitle.textContent = data[attr].PROJECTS_TITLE;
                projectsEndText.textContent = data[attr].PROJECT_END_TEXT;
                question01FAQ.textContent = data[attr].QUESTION_01;
                Q01_A1.innerHTML = data[attr].Q01_A1;
                Q01_A2.textContent = data[attr].Q01_A2;
                Q01_A3.textContent = data[attr].Q01_A3;
                Q01_A4.textContent = data[attr].Q01_A4;
                Q01_A5.textContent = data[attr].Q01_A5;
                question02FAQ.textContent = data[attr].QUESTION_02;
                Q02_A1.innerHTML = data[attr].Q02_A1;
                question03FAQ.textContent = data[attr].QUESTION_03;
                Q03_A1.innerHTML = data[attr].Q03_A1;
                question04FAQ.textContent = data[attr].QUESTION_04;
                Q04_A1.innerHTML = data[attr].Q04_A1;
                question05FAQ.textContent = data[attr].QUESTION_05;
                Q05_A1.textContent = data[attr].Q05_A1;
                question06FAQ.textContent = data[attr].QUESTION_06;
                Q06_A1.textContent = data[attr].Q06_A1;
                question07FAQ.textContent = data[attr].QUESTION_07;
                Q07_A1.innerHTML = data[attr].Q07_A1;
                endText.textContent = data[attr].END_TEXT;
                socialsText.textContent = data[attr].SOCIALS_TEXT;
                footerText.innerHTML = data[attr].FOOTER_TEXT;
			});
		});