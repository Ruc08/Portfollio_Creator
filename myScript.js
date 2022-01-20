// Variables
const arrowLeft = document.getElementsByClassName('arrows')[0];
const arrowRight = document.getElementsByClassName('arrows')[1];
const clientImg = document.getElementsByClassName('clientImg')[0].firstElementChild;
const review = document.getElementsByClassName('reviewContent')[0].lastElementChild;
const clientName = document.getElementsByClassName('clientName')[0].firstElementChild;
const clientProfession = document.getElementsByClassName('clientName')[0].lastElementChild;
let i = 0;
const testimonials = [
    {img:"/Portfollio_Creator/Img/client-1.jpg", review:"Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.", name:"John Frankin", profession:"Founder, Double Bunch"},
    {img:"/Portfollio_Creator/Img/client-2.png", review:"This is unbelievable. After using Testimonial Generator my buisness skyrocketed!", name:"Jennifer Musk", profession:"Project Manager@ Microsoft"}
]
clientImg.src = testimonials[i].img;

//Functions
function updateDetail() {
    i++;
    if(i >= testimonials.length){
        i = 0;
    }
    // console.log(clientImg.src);
    clientImg.src = testimonials[i].img;
    review.textContent = testimonials[i].review;
    clientName.textContent = testimonials[i].name;
    clientProfession.textContent = testimonials[i].profession;
    // console.log(clientImg.src);
}

// Event Listener
arrowLeft.addEventListener('click', updateDetail);
arrowRight.addEventListener('click', updateDetail);
