const input = ['BINH','HUNG', 'PHUOC', 'CAO', 'KHANH'];
let max =  input[0].length
for ( let i = 0; i< input.length; i++){
  if(max <= input[i].length){
      max = input[i].length
  }
}
let output = [];
for ( let i = 0; i< input.length; i++){
    if (input[i].length == max) {
       output.push(input[i])
    }
}
console.log(output);
// //------bai 2------------
const input1 =  [60, 40, 55, 75, 64]
const input2 = []
const  input3 = []
for (let i = 0; i< input1.length; i++){
     if( i%2==0){
        input2.push(input1[i])       
     }else{
        input3.push(input1[i])
     }
}
let a = 0; b= 0;
for (let i = 0; i< input2.length; i++){    
    a = a+ input2[i]
}for (let i = 0; i< input3.length; i++){
    b = b+ input3[i]
}
let output1 = [a,b]
console.log(output1);
//--------bai 3------------
const btn = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const body = document.querySelector('body')

btn.addEventListener("click",(event)=>{
   let a =   Math.floor(Math.random() * 101);
   let b=  Math.floor(Math.random() * 101);
    let c =   Math.floor(Math.random() * 101);
const div = document.createElement('div')
   div.innerHTML = `<div class="color-wrapper" style="background-color: rgb(`+a+`, `+b+`, `+c+`);">
   <p>Choose color (#hex)</p>
   
   <input type="text" name="custom_color" placeholder="#ffffff" id="pickcolor" class="hex hex1 ">
   <input type="text" name="custom_color" placeholder="#ffffff" id="pickcolor" class="hex hex2">
   <input type="text" name="custom_color" placeholder="#ffffff" id="pickcolor" class="hex hex3">
   <!-- <div class="color-holder call-picker"></div>
   <div class="color-picker" id="color-picker" style="display:none" ></div> -->
  
   
</div>`
    body.append(div)

    const hex1 = document.querySelector('.hex1')
    const hex2 = document.querySelector('.hex2')
    const hex3 = document.querySelector('.hex3')
    hex1.value = a
    hex2.value = b
    hex3.value = c
    btn2.addEventListener("click", (e) =>{
        console.log(`rgb(`+a+`, `+b+`, `+c+`)`);
    })
    
})
