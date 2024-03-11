let note1 =  document.getElementById('note1')
let note2 = document.getElementById('note2')
let note4 = document.getElementById('header-div')
let note5 = document.getElementById('header')
let btn = document.getElementById('btn')
let subnote1  = document.getElementById('subnote1')
let subnote2 = document.getElementById('subnote2')
let subnote3  = document.getElementById('subnote3')
// let subnote4 = document.getElementById('subnote4')
// let subnote5  = document.getElementById('subnote5')
// let subnote6 = document.getElementById('subnote6')

subnote1.addEventListener('click',function(){
  var newtext ='bolu is from ogun state and he is a good boy'
  note4.className = 'show'
  note5.innerText =  newtext
})

subnote2.addEventListener('click',function(){
  var newtext ='it nice to be here'
  note4.className = 'show'
  note5.innerText =  newtext
})
subnote3.addEventListener('click',function(){
  var newtext ='bolu is from ogun state and he is a good boy'
  note4.className = 'show'
  note5.innerText =  newtext
})

subnote4.addEventListener('click',function(){
  var newtext ='it nice to be here'
  note4.className = 'show'
  note5.innerText =  newtext
})

subnote5.addEventListener('click',function(){
  var newtext ='bolu is from ogun state and he is a good boy'
  note4.className = 'show'
  note5.innerText =  newtext
})

subnote6.addEventListener('click',function(){
  var newtext ='it nice to be here'
  note4.className = 'show'
  note5.innerText =  newtext
})

// subnote3.addEventListener('click',function(){
//   var newtext ='it nice to be here and i am feeling good'
//   note4.className = 'show'
//   note5.innerText =  newtext
// })
btn.addEventListener('click',function(){
  note4.className = 'hide'
})
