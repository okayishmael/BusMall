/*
  student: Ishmael Sunday | http://ishmaelsunday.com
  Course: Code 201: Software Development and Application Foundatmental 
  Schoool: Code Partners | https://codepartners.net 
  Project: Click Tracking
  */

  //let start by getting our canvas tag by it's ID from the html

  let bmChart = document.getElementById('busmall-chart').getContext('2d');

  //next define function that populates the data for our chart by looping through our array.
  function populateChart() {

    // let Create an empty array that will store and returns our prop values.
    let propsArray = []; // array created
    
    //now lets loop through the Array
    for( let i = 0; i < propsArray.length; i++) {
        propsArray.push(bmImageArray[i][prop]);
    }

    return propsArray;
  };

  //Now lets declare a new variable  and assign it the value of the new instance or our chart object that will display our chart.
  function displayChart() {
    bmChart.innerHTML = '';
    let myChart = new Chart(bmChart, {
      //assigning property of type to be abar chart.
      type: 'bar',
      //lets set up our data property that will contain the labels for our data and the various datasets that we want displayed as bars
      data: {
        labels: populateChart('name'),
        datasets: [
          {
            label: '# of times clicke',
            data: populateChart('clicked'),
            backgroundColor: 'blue'
          },
          {
            label: 'Number of times shown',
            data: populateChart('shown'),
            backgroundColor: 'gray'
          }
        ],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }

    });
  }