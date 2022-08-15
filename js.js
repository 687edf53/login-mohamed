'use strict'
let submit = document.getElementById('submit')

let input1 = document.getElementById('input1')

let input2 = document.getElementById('input2')

let eye = document.getElementById('eye-icon')

let eye_sl = document.getElementById('eye-sl')


submit.addEventListener('click',function () {
  if (input1.value != '' && input2.value != '' && input1.value + '@'){
      alert("thanks for login")
  }
}
)


eye.addEventListener('click', function () {
  if (submit.value = 'login') {
    input2.setAttribute('type', 'text')
    this.style.display = 'none'
    if(eye.style.display = 'none') {
    eye_sl.style.display = 'inline-block'
    }
  }
})

eye_sl.addEventListener('click', function () {
  if (eye.style.display = 'none') {
    input2.setAttribute('type', 'password')
    eye.style.display = 'inline-block'
    eye_sl.style.display = 'none'
  }
})