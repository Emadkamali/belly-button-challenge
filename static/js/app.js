function apple() {
    const roadster = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

    // Fetch the JSON data and console log it
    d3.json(roadster).then(function(data) {
        let names = data.names
      console.log(names);
      let dropdown = d3.select("#selDataset");
      for (let i  = 0; i  < array.length; i ++) {
        const element = array[i ];
        
      }
    });  
}   

function createPanel(params) {
    
}

function createChart(params) {
    
}

function optionChanged(params) {
    
}
apple();