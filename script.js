const ratingBtns = document.querySelectorAll('.rating-btn')
const submitBtn = document.querySelector('.btn-submit')
const cardBody = document.querySelector('.card-body')
const cardBodySubmitted = document.querySelector('.card-body-submitted')
const errorMsg = document.querySelector('.error-msg')
const selectedValue = document.querySelector('.selected-value')

let ratingValue = 0

const ratingSelect = (e) => {
    ratingBtns.forEach(btn => btn.classList.remove('selected'))
    e.target.classList.add('selected')
    ratingValue = e.target.dataset.value
    console.log(e.target.dataset.value)
}

const sumbitCheck = () => {
    if(ratingValue === 0){
        errorMsg.style.display = 'flex';
        submitBtn.classList.add('bounce')
        setTimeout(() => {
            submitBtn.classList.remove('bounce')
        }, 300);
    } else {
        selectedValue.textContent = ratingValue
        cardBody.style.display = 'none'
        cardBodySubmitted.style.display = 'flex'
    }
}

ratingBtns.forEach(btn => btn.addEventListener('click', ratingSelect))
submitBtn.addEventListener('click', sumbitCheck)