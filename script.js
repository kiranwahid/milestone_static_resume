var cont_section = document.getElementById("contact");
var cont_btn = document.getElementById("cont-btn");
// contact toggle
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.addEventListener("click", function () {
    cont_section === null || cont_section === void 0 ? void 0 : cont_section.classList.toggle("hide");
});
//  education toggle
var edu_section = document.getElementById("education");
var edu_btn = document.getElementById("edu-btn");
edu_btn === null || edu_btn === void 0 ? void 0 : edu_btn.addEventListener("click", function () {
    edu_section === null || edu_section === void 0 ? void 0 : edu_section.classList.toggle("hide");
});
//  experience toggle
var exp_section = document.getElementById("skill");
var exp_btn = document.getElementById("expe-btn");
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener("click", function () {
    exp_section === null || exp_section === void 0 ? void 0 : exp_section.classList.toggle("hide");
});
//  language toggle
var lang_section = document.getElementById('lang');
var lang_btn = document.getElementById("lang-btn");
lang_btn === null || lang_btn === void 0 ? void 0 : lang_btn.addEventListener('click', function () {
    lang_section === null || lang_section === void 0 ? void 0 : lang_section.classList.toggle('hide');
});
var print_btn = document.getElementById("print_btn");
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener("click", function () {
    window.print();
});
