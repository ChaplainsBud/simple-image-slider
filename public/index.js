function counter(){
    fetch('/the-count')
        .then(data => data.json())
        .then(data => document.querySelector('P').innerHTML = `the current value is: ${data.count}`)
        document.querySelector('BODY').style.backgroundColor = "purple";
}



const arr = [
    "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1612295100/butler/scotch_stout_mfewwg.jpg",
    "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1612298740/butler/coffee_tbbuy5.jpg",
    "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1612296289/butler/classics1_ssynli.jpg"
]

function display_ct() {
    
         display_c();
     }
  
let count = 0;     

window.onload = (event) => {
    console.log('page is fully loaded');
    setInterval(function(){ 
   
        document.querySelector('.box').style.backgroundImage = `url(${arr[count]})`;

        console.log(`This is the ${count} for imgs`);
        if(`${count}` == arr.length - 1) {
          count = 0;
        } else {
          count++;
        }
       
       }, 6000);
  };



    
    






