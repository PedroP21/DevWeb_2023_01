const boasVindas = () => {
    alert("Boas vindas!")
 }
 
 var a = 3
 var b = 4
 var c = -5
 
 const delta = (b * b) - (4 * a * c)
 
 function valorX1() {
     const x1 = (-b + Math.sqrt(delta)) / (2 * a)
     console.log(x1.toFixed(0))
 }
 
 const valorX2 = () => {
     const x2 = (-b - Math.sqrt(delta)) / (2 * a)
     console.log(x2.toFixed(0))
     }
 
     const valorDelta = () => {
         console.log(delta)
     }