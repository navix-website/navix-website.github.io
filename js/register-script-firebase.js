import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBN7pQWlr89wXQQZpPBQ8XSfh7-9F566OI",
    authDomain: "navix-7afdf.firebaseapp.com",
    projectId: "navix-7afdf",
    storageBucket: "navix-7afdf.appspot.com",
    messagingSenderId: "651586104958",
    appId: "1:651586104958:web:038d4e72af531cfc12b22f",
    measurementId: "G-ZGGFHSFX27"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("submit").addEventListener("click", function() {

    const first_name = document.getElementById('firstnameField').value;
    const middle_name = document.getElementById('middlenameField').value;
    const last_name = document.getElementById('lastnameField').value;
    const dob = document.getElementById('dobField').value;
    const nationality = document.getElementById('nationalityField').value;
    let residencecountry = document.getElementById('residencecountryField').value;
    const primary_email = document.getElementById('primaryemailField').value;
    const secondary_email = document.getElementById('secondaryemailField').value;
    const mobile_phone = document.getElementById('mobilephoneField').value;
    const home_phone = document.getElementById('homephoneField').value;
    let tour = localStorage.getItem('tour_selected');
    let tour_date =  localStorage.getItem('tour_date_selected');
    const date_now = new Date();
    const application_time = date_now.toUTCString();
    let registrationid = first_name + " " + last_name + " at " + application_time;
    
    let first_name_filled = false;
    let last_name_filled = false;
    let dob_filled = false;
    let nationality_filled = false;
    let primary_email_filled = false;
    let mobile_phone_filled = false;
    let tour_filled = false;
    let tour_date_filled = false;
    if (first_name != "") {
        first_name_filled = true;
    };
    if (last_name != "") {
        last_name_filled = true;
    };
    if (dob != "") {
        dob_filled = true;
    };
    if (nationality != "-select-") {
        nationality_filled = true;
    };
    if (residencecountry == "-select-" && nationality != "-select-") {
        residencecountry = nationality;
    };
    if (primary_email != "") {
        primary_email_filled = true;
    };
    if (mobile_phone != "") {
        mobile_phone_filled = true;
    };
    if (tour != "not selected") {
        tour_filled = true;
    };
    if (tour_date != "not selected") {
        tour_date_filled = true;
    };
    if (first_name_filled && last_name_filled && dob_filled && nationality_filled && primary_email_filled && mobile_phone_filled && tour_filled && tour_date_filled) {
        try {
            setDoc(doc(db,"users",registrationid), {
                first_name: first_name,
                last_name: last_name,
                middle_name: middle_name,
                date_of_birth: dob,
                nationality: nationality,
                country_of_residence: residencecountry,
                primary_email: primary_email,
                secondary_email: secondary_email,
                mobile_phone_number: mobile_phone,
                home_phone_number: home_phone,
                tour: tour,
                tour_date: tour_date,
                application_time: application_time
            })
            console.log("Successfully registered!");
        } catch (e) {
            console.error("Error registering credentials: ", e);
        };
        localStorage.removeItem('tour_selected');
        localStorage.removeItem('tour_date_selected');
    };
});