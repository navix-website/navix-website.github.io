const toggleSwitch = document.querySelector('#toggle-switch');
const footer = document.querySelector('footer');

function setTheme(theme) {
  console.log("setTheme called with theme:", theme);
  const body = document.body;
  const footer = document.querySelector("footer");
  const elementsToChange = [body, footer];

  elementsToChange.forEach((el) => {
    console.log("Setting theme class on element:", el);
    el.classList.remove("default-theme", "light-theme");
    el.classList.add(`${theme}-theme`);
  });
  change_images(theme)
}


function switchTheme(event) {
  if (event.target.checked) {
    setTheme('light');
    localStorage.removeItem('theme')
    localStorage.setItem('theme', 'light');
  } 
  else {
    setTheme('default');
    localStorage.removeItem('theme')
    localStorage.setItem('theme', 'default');
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  setTheme(currentTheme);
  toggleSwitch.checked = currentTheme === 'light';
}
function change_images(current_theme) {
    if (current_theme == 'light') {
        try {
            document.getElementById("footer_name").setAttribute("src", "img/NavixInGrey.png")
        } catch(e) {
            //pass
        }
        try {
            document.getElementById("tour_footer_name").setAttribute("src", "../img/NavixInGrey.png")
        } catch(e) {
            //pass
        }
        //For training page: WARNING DO NOT REUSE ID
        try {
            document.getElementById("training_classes_pic").setAttribute("src", "img/trainingclasses_light.png")
        } catch(e) {
            //pass
        }
        //For register page: WARNING DO NOT REUSE IDS
        try {
            document.getElementById("formstart_topimage").setAttribute("src", "img/formstart_light.png")
            document.getElementById("form1_topimage").setAttribute("src", "img/form1_light.png")
            document.getElementById("form2_topimage").setAttribute("src", "img/form2_light.png")
            document.getElementById("form3_topimage").setAttribute("src", "img/form3_light.png")
        } catch(e) {
            //pass
        }
    }
    if (current_theme == 'default') {
        try {
            document.getElementById("footer_name").setAttribute("src", "img/NavixInWhite.png")
        } catch(e) {
            //pass
        }
        try {
            document.getElementById("tour_footer_name").setAttribute("src", "../img/NavixInWhite.png")
        } catch(e) {
            //pass
        }
        //For training page: WARNING DO NOT REUSE ID
        try {
            document.getElementById("training_classes_pic").setAttribute("src", "img/trainingclasses_dark.png")
        } catch(e) {
            //pass
        }
        //For register page: WARNING DO NOT REUSE IDS
        try {
            document.getElementById("formstart_topimage").setAttribute("src", "img/formstart_dark.png")
            document.getElementById("form1_topimage").setAttribute("src", "img/form1_dark.png")
            document.getElementById("form2_topimage").setAttribute("src", "img/form2_dark.png")
            document.getElementById("form3_topimage").setAttribute("src", "img/form3_dark.png")
        } catch(e) {
            //pass
        }
    }
};
change_images()

/*progress bar*/
const scrollIndicator = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const percent = (scrollTop / (fullHeight - windowHeight)) * 100;

  scrollIndicator.style.width = `${percent}%`;
});
