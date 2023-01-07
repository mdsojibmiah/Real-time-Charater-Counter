const textareaE1 = document.getElementById("textarea");
const totalcounterE1 = document.getElementById("total-counter");
const remainingCounerE1 =  document.getElementById("remaining-counter");

textareaE1.addEventListener("keyup",()=>{
    updateCouner();
});

updateCouner(); // This function call - Charater & Remaining Show!

// Function Charater & Remaining Counter!
function updateCouner(){
    totalcounterE1.innerText = textareaE1.value.length; // Textarea counter vale pass total counter!
    remainingCounerE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length; // Remaining counter 
}