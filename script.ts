let cont_section = document.getElementById("contact");
let cont_btn = document.getElementById("cont-btn");
// contact toggle
cont_btn?.addEventListener("click", () => {
  cont_section?.classList.toggle("hide");
});

//  education toggle

let edu_section = document.getElementById("education");
let edu_btn = document.getElementById("edu-btn");

edu_btn?.addEventListener("click", () => {
  edu_section?.classList.toggle("hide");
});

//  experience toggle

let exp_section = document.getElementById("skill");
let exp_btn = document.getElementById("expe-btn");


exp_btn?.addEventListener("click", () => {
  exp_section?.classList.toggle("hide");
});


//  language toggle
let lang_section = document.getElementById('lang')
let lang_btn = document.getElementById("lang-btn");

lang_btn?.addEventListener('click', ()=>{
    lang_section?.classList.toggle('hide');
})


let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});
