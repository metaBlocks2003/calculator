   var zero = document.getElementById("zero")
   var one = document.getElementById("one")
   var two = document.getElementById("two")
   var three = document.getElementById("three")
   var four = document.getElementById("four")
   var five = document.getElementById("five")
   var six = document.getElementById("six")
   var seven = document.getElementById("seven")
   var eight = document.getElementById("eight")
   var nine = document.getElementById("nine")


   var equals = document.getElementById("equals")
   var type = document.getElementById("typein")

   zero.addEventListener("click", function(){
      type.setAttribute("value", zero.getAttribute("value"))
   })
   one.addEventListener("click", function(){
      type.setAttribute("value", one.getAttribute("value"))
   })

   two.addEventListener("click", function(){
      type.setAttribute("value", two.getAttribute("value"))
   })

   three.addEventListener("click", function(){
      type.setAttribute("value", three.getAttribute("value"))
   })
   four.addEventListener("click", function(){
      type.setAttribute("value", four.getAttribute("value"))
   })
   five.addEventListener("click", function(){
      type.setAttribute("value", five.getAttribute("value"))
   })
   six.addEventListener("click", function(){
      type.setAttribute("value", six.getAttribute("value"))
   })
   seven.addEventListener("click", function(){
      type.setAttribute("value", seven.getAttribute("value"))
   })
   eight.addEventListener("click", function(){
      type.setAttribute("value", eight.getAttribute("value"))
   })
   nine.addEventListener("click", function(){
      type.setAttribute("value", nine.getAttribute("value"))
   })
   function add(n){
      type.value += n
   }

   function result (){
      type.value = eval(type.value)
   }

   function erase (){
      type.value = null
   }

   function perc(){
      type.value = type.value/100
   }