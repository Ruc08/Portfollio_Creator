////Variables
// Testimonial Section Variables
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
// QNA Section Variables
const que = Array.from(document.getElementsByClassName('que'));
const ans = Array.from(document.getElementsByClassName('ans'));

////Functions
// Testimonial Section Functions
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
// QNA Section Functions
function hidhOpendeANS(k){
    ans[k].style.display = 'none';
    ans[k].classList.remove('show');
}
let k = -1;
function showANS(i){
    if(k > -1 && k != i){
        hidhOpendeANS(k);
    }
    if(que[i].nextElementSibling.classList.contains('show')){
        que[i].nextElementSibling.style.display = 'none';
        que[i].nextElementSibling.classList.remove('show');
    }
    else{
        que[i].nextElementSibling.style.display = 'block';
        que[i].nextElementSibling.classList.add('show');
    }
    k = i;
}

// Event Listener
// Testimonial Section Event Listener
arrowLeft.addEventListener('click', updateDetail);
arrowRight.addEventListener('click', updateDetail);
// QNA Section Event Listener
que.forEach((question, index) => {
    // console.log(index);
    question.addEventListener('click', () => {
        showANS(index)
    });
});