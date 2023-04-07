const launch_tour1_explanation = document.getElementById("launch_tour1_explanation")
const launch_tour2_explanation = document.getElementById("launch_tour2_explanation")
const launch_tour3_explanation = document.getElementById("launch_tour3_explanation")
function show_tour1() {
    launch_tour1_explanation.style.display = "block";
    launch_tour2_explanation.style.display = "none";
    launch_tour3_explanation.style.display = "none";
};
function show_tour2() {
    launch_tour1_explanation.style.display = "none";
    launch_tour2_explanation.style.display = "block";
    launch_tour3_explanation.style.display = "none";
};
function show_tour3() {
    launch_tour1_explanation.style.display = "none";
    launch_tour2_explanation.style.display = "none";
    launch_tour3_explanation.style.display = "block";
};
