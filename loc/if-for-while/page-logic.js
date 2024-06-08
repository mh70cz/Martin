function trimAfterDot(inputString) {
    let dotIndex = inputString.indexOf('.'); // Find the index of the first dot
    if (dotIndex === -1) return inputString; // Return the original string if there's no dot
    return inputString.substring(0, dotIndex); // Return the substring before the dot    
  }

function toggleVisibility(element) {
        let div = document.getElementById(element);
        if(div){
            if (div.style.display === 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        }
    }


let currentSketchScript = null;
let sketchTxtElement = null;

function loadSketch(sketchFile) {
    // Remove the existing sketch script if it exists
    if (currentSketchScript) {
        window.remove();
        //currentSketchScript.remove();
        document.body.removeChild(currentSketchScript);
        currentSketchScript = null;
    }

    // Create a new script element and load the new sketch
    currentSketchScript = document.createElement('script');
    currentSketchScript.src = sketchFile;
    document.body.appendChild(currentSketchScript);
    currentSketchScript.onload = function () {
        new p5();
    };

    if(sketchTxtElement){
        toggleVisibility(sketchTxtElement);  // make the soon to be old element with a text description invisible
    }
    sketchTxtElement = trimAfterDot(sketchFile) + "-txt";
    toggleVisibility(sketchTxtElement); // make the new element with a text description visible


}        