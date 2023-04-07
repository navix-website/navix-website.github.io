function form_start() {
    document.getElementById("form_start").style.display = "none";
    document.getElementById("form_part1").style.display = "block";
    document.getElementById("form_part2").style.display = "none";
    document.getElementById("form_part3").style.display = "none";
    document.getElementById("form_complete").style.display = "none";
};
function form1_next() {
    const first_name = document.getElementById('firstnameField').value;
    const last_name = document.getElementById('lastnameField').value;
    const dob = document.getElementById('dobField').value;
    const nationality = document.getElementById('nationalityField').value;
    let first_name_filled = false;
    let last_name_filled = false;
    let dob_filled = false;
    let nationality_filled = false;
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
    if (first_name_filled) {
        document.getElementById("first_name_required").innerHTML = "*";
    }
    else {
        document.getElementById("first_name_required").innerHTML = "*You must fill out your first name.<br>";
    };
    if (last_name_filled) {
        document.getElementById("last_name_required").innerHTML = "*";
    }
    else {
        document.getElementById("last_name_required").innerHTML = "*You must fill out your last name.<br>";
    };
    if (dob_filled) {
        document.getElementById("dob_required").innerHTML = "*";
    }
    else {
        document.getElementById("dob_required").innerHTML = "*You must enter a date of birth.<br>";
    };
    if (nationality_filled) {
        document.getElementById("nationality_required").innerHTML = "*";
    }
    else {
        document.getElementById("nationality_required").innerHTML = "*You must select the country of your nationality.<br>";
    };
    if (first_name_filled && last_name_filled && dob_filled && nationality_filled) {
        document.getElementById("form_start").style.display = "none";
        document.getElementById("form_part1").style.display = "none";
        document.getElementById("form_part2").style.display = "block";
        document.getElementById("form_part3").style.display = "none";
        document.getElementById("form_complete").style.display = "none";
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function form2_prev() {
        document.getElementById("form_start").style.display = "none";
        document.getElementById("form_part1").style.display = "block";
        document.getElementById("form_part2").style.display = "none";
        document.getElementById("form_part3").style.display = "none";
        document.getElementById("form_complete").style.display = "none";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}

function form2_next() {
    const primary_email = document.getElementById('primaryemailField').value;
    const mobile_phone = document.getElementById('mobilephoneField').value;
    let primary_email_filled = false;
    let mobile_phone_filled = false;
    if (primary_email != "") {
        primary_email_filled = true;
    };
    if (mobile_phone != "") {
        mobile_phone_filled = true;
    };
    if(primary_email_filled && mobile_phone_filled) {
        document.getElementById("form_start").style.display = "none";
        document.getElementById("form_part1").style.display = "none";
        document.getElementById("form_part2").style.display = "none";
        document.getElementById("form_part3").style.display = "block";
        document.getElementById("form_complete").style.display = "none";
    }
    else {
        if (primary_email_filled) {
            document.getElementById("primary_email_required").innerHTML = "*";
        }
        else {
            document.getElementById("primary_email_required").innerHTML = "*You must enter your primary email.<br>";
        };
        if (mobile_phone_filled) {
            document.getElementById("mobile_phone_required").innerHTML = "*";
        }
        else {
            document.getElementById("mobile_phone_required").innerHTML = "*You must enter your mobile phone number.<br>";
        };
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function form3_prev() {
    document.getElementById("form_start").style.display = "none";
    document.getElementById("form_part1").style.display = "none";
    document.getElementById("form_part2").style.display = "block";
    document.getElementById("form_part3").style.display = "none";
    document.getElementById("form_complete").style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function form3_check() {
    let tour = localStorage.getItem("tour_selected");
    let tour_date = localStorage.getItem("tour_date_selected");
    let tour_filled = false;
    let tour_date_filled = false;
    if (tour != "not selected") {
        tour_filled = true;
    };
    if (tour_date != "not selected") {
        tour_date_filled = true;
    };
    if (tour_filled) {
        document.getElementById("tour_required").innerHTML = "*";
    }
    else {
        document.getElementById("tour_required").innerHTML = "*You must select a tour.<br>";
    };
    if (tour_date_filled) {
        document.getElementById("tour_date_required").innerHTML = "*";
    }
    else {
        document.getElementById("tour_date_required").innerHTML = "*You must select a date for your tour.<br>";
    };
    if (tour_filled && tour_date_filled) {
        cost_associated = localStorage.getItem('tour_cost')
        document.getElementById('registration_complete_cost').innerHTML = cost_associated;
        document.getElementById("form_start").style.display = "none";
        document.getElementById("form_part1").style.display = "none";
        document.getElementById("form_part2").style.display = "none";
        document.getElementById("form_part3").style.display = "none";
        document.getElementById("form_complete").style.display = "block";
        localStorage.removeItem('tour_cost');
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
function form_reload() {
    window.location.reload();
};
