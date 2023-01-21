const resAdvice = document.querySelector('.advice');
const resBtn = document.querySelector('.btn');
const resId = document.querySelector('.advice_index');

resBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response => 
    {
        return response.json();
    }).then(adviseData =>{
        const AdviceObj = adviseData.slip;
        resAdvice.innerHTML = `<p>${AdviceObj.advice}</p>`;
        // const AdviceId = adviseData.slip;
        // resId.innerHTML = `<p>${AdviceId.id}</p>`;
        
    }).catch(error => {
        console.log(error);
    })

}

