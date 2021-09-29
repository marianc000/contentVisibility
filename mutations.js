 
let targetNode = document.getElementById('caption-window-_2185');

// Options for the observer (which mutations to observe)
let config = {   childList: true, subtree: false,characterDataOldValue: true };
observer.disconnect();
 function callback(mutationsList, observer) {
  //  for (const mutation of mutationsList) {
  //      const t=mutation.target;
     console.log(mutationsList[0].target.innerText.replace('\n',' '));
      //  console.dir(mutation.target );
  //  }
};
 
let observer = new MutationObserver(callback);
 
observer.observe(document.getElementById('ytp-caption-window-container'), config);

// Later, you can stop observing
 observer.disconnect();