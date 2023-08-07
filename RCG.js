let btn1=document.getElementById("btn")
let text1=document.getElementById("bc")

let arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
btn1.addEventListener("click", function(){
      
      let a=randomNumber()
      let b=randomNumber()
      let c=randomNumber()
      let d=randomNumber()
      let e=randomNumber()
      let f=randomNumber()
      let clr="#"+arr[a]+arr[b]+arr[c]+arr[d]+arr[e]+arr[f]
      console.log(clr)
      text1.textContent="Background Color: "+clr
 
	document.body.style.background=clr
})
 function randomNumber(){
 	return Math.floor(Math.random()*16)
 }
