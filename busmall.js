/*
  student: Ishmael Sunday | http://ishmaelsunday.com
  Course: Code 201: Software Development and Application Foundatmental 
  Schoool: Code Partners | https://codepartners.net 
  Project: Click Tracking
  */

  //declearing an variable that holds an empty array
  let bmImageArray = [];

  //Here we will specify where in the html images are displayed.
  let elImgContainer = document.getElementById('image-container');

  //let create an object constructor function

  let BmImage = function( name, universe, filePath, id){
      this.name = name;
      this.universe = universe;
      this.filePath = filePath;
      this.id = id;
      this.clicked = 0;
      this.shown = 0;
      this.addClicks;
  };

  //check if localstorage exists
  if(localStorage.length > 0) {
      // if so, retrieve stored bmImage Array from  local storage that contains our clicks and shown
      let getData = localStorage.getItem('storagebmImageArray');
      console.log(bmImageArray);

      //than reasign the value of bmImageArray to the parsed version of BUs Mall Image array tht  we stored in the local storag
      bmImageArray  = JSON.parse(getData);
  } else{
  //lets create instantces of our object constructor

  let Alet = new BmImage('Alphabet', './assets/a.svg', 'a');
  let Blet = new BmImage('Alphabet', './assets/b.svg', 'b');
  let Clet = new BmImage('Alphabet', './assets/c.svg', 'c');
  let Dlet = new BmImage('Alphabet', './assets/d.svg', 'd');
  let Elet = new BmImage('Alphabet', './assets/e.svg', 'e');
  let Flet = new BmImage('Alphabet', './assets/f.svg', 'f');
  let Glet = new BmImage('Alphabet', './assets/g.svg', 'g');
  let Hlet = new BmImage('Alphabet', './assets/h.svg', 'h');
  let Ilet = new BmImage('Alphabet', './assets/i.svg', 'i');
  let Jlet = new BmImage('Alphabet', './assets/i.svg', 'j');
  let Klet = new BmImage('Alphabet', './assets/k.svg', 'k');
  let Llet = new BmImage('Alphabet', './assets/l.svg', 'l');
  let Mlet = new BmImage('Alphabet', './assets/m.svg', 'm');
  let Nlet = new BmImage('Alphabet', './assets/n.svg', 'n');
  let Olet = new BmImage('Alphabet', './assets/o.svg', 'o');
  let Plet = new BmImage('Alphabet', './assets/p.svg', 'p');
  let Qlet = new BmImage('Alphabet', './assets/q.svg', 'q');
  let Rlet = new BmImage('Alphabet', './assets/r.svg', 'r');
  let Slet = new BmImage('Alphabet', './assets/s.svg', 's');
  let Tlet = new BmImage('Alphabet', './assets/t.svg', 't');
  let Ulet = new BmImage('Alphabet', './assets/u.svg', 'u');
  let Vlet = new BmImage('Alphabet', './assets/v.svg', 'v');
  let Wlet = new BmImage('Alphabet', './assets/w.svg', 'w');
  let Xlet = new BmImage('Alphabet', './assets/x.svg', 'x');
  let Ylet = new BmImage('Alphabet', './assets/y.svg', 'y');
  let Zlet = new BmImage('Alphabet', './assets/z.svg', 'z');

  //let add the instances to empty array in line 9

  bmImageArray.push(Alet, Blet, Clet, Dlet, Elet, Flet, Glet, Hlet, Ilet, Jlet, Klet, Llet, Mlet, Nlet, Olet, Plet, Qlet, Rlet, Slet, Tlet, Ulet, Vlet, Wlet, Xlet, Ylet, Zlet);

}
  //Now lets define a function that randomly pick image object from our image array

  let randomImage = function() {
      console.log(bmImageArray);
      let randomNumber = Math.floor(Math.random() * bmImageArray.length);

      //declaring a variabel that will store the image object at the index of our random number

      let imgIndex = bmImageArray[randomNumber];

      //return 
      return imgIndex;
  }

  //let declare event handler clicked Counter in an event that present user with an object of 3 imgs
function imgClicked(event) {
   //set conditions
   //check..
   if(event.target.id === firstImg.id) {
       //do this
     firstImg.clicked += 1;
   }else if(event.target.id === secondImg.id) {
       //do this
   secondImg.clicked += 1;
   } else if(event.target.id === thirdImg.id) {
     //do this
     thirdImg.clicked += 1;
   }
 //Now lets invoke/call display Image function
 displayImages();

localStorage.setItem('storagebmImageArray', JSON.stringify(bmImageArray));
displayChart();
 //check to see if it works
 //console.log('even target', event.target);
 //console.log('event', 'firstImg.clicked', 'secondImg.clicked', 'thirdImg.clicked');
}

//let declare the 3 variables that will eventually hold our img objects  being displayed
let firstImg;
let secondImg;
let thirdImg;

//now let define the we mentioned in line 89 that display our random images (in this case 3 random imgs)
function displayImages() {
    //this clears the html container that hold the img /removes previously shouwn images
   elImgContainer.innerHTML = ''; //elImgContainer is referring to the div container in the html file that holds the images
   
   // let create a loop that itarates 3x to display 3 images
   for(let i = 0; i < 3; i++) {
       //let declare variable that whose value is that is returned from the randomImg func in line  59
       let imgObject = randomImage();
       //especify condition for each
       if(i === 0) {
           firstImg = imgObject;
       }else if(i === 1) {
           while(imgObject.id === firstImg.id) {
               imgObject = randomImage();
               console.log('second while', imgObject.id);
           }
          secondImg = imgObject; 
       } else {
           while(imgObject.id === firstImg.id || imgObject.id === secondImg.id) {
               imgObject = randomImage();
               console.log('third while', imgObject.id);
           }
           thirdImg = imgObject; 
       }
       //create a new img element
       let elImg = document.createElement('img'); //img element created

       //append/put the image in the element tag we just created in line 136
       elImgContainer.appendChild(elImg); // image in

       //set attributes
       elImg.setAttribute('id', imgObject.id);//this element now has the id of the id of what image object is being displaye at the time.
      
       //this attribute gets the image from the folder on the local drive/ or points to that.
       elImg.src = imgObject.filePath;

       //add EventListner
       elImg.addEventListener('click', imgClicked);

       //increment 
       imgObject.shown += 1;

   }
   
}

displayImages();
