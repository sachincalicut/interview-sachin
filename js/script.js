let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
let themeBtn = document.querySelectorAll('.theme-buttons');
const inputs = document.querySelectorAll('.otp-card-input input');
const buttons = document.querySelectorAll('.otp-card button');


// Sidebar 
btn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
// Search
searchBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
// Toggle Color Switch Panel
document.querySelector('.switcher-btn').onclick = () => {
  document.querySelector('.color-switcher').classList.toggle('active');
  
}
// Color Picker
themeBtn.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('---sidebar-color', dataColor);
    })
})
// Otp Verify
inputs.forEach(input => {
    let lastInputStatus = 0;
    input.onkeyup = (e) => {
        const currentElement = e.target
        const nextElement = input.nextElementSibling
        const prevElement = input.previousElementSibling
        if(prevElement && e.keyCode === 8){
          if(lastInputStatus === 1){
              prevElement.value = ''
              prevElement.focus()

          }
          button.setAttribute('disable') 
          prevElement.value

        }else{
          const reg = /^[0-9]+$/
          if(!reg.test(currentElement.value)){
            currentElement.value = currentElement.value.replace(/\D/g,'')
          }else if(currentElement.value){
                if(nextElement){
                  nextElement.focus()
                }else{
                  button.removeAttribute('disabled')
                  lastInputStatus = 0
                }
          }
        }
    }

})