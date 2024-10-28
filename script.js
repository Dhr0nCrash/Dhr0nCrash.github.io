// script.js
function displayContent(menuNumber) {
  const contentDiv = document.getElementById('content');
  
  // Define content for each menu item
  const content = {
    1: { text: "Parks to Visit", image: "https://www.boredpanda.com/blog/wp-content/uploads/2014/10/forest-photography-1__880.jpg", overlayText: "Washington State offers a miriad of outdoor activities beautiful parks, majestic mountains, lakes, rivers and more!" },
    2: { text: "How to prepare", image: "https://www.boredpanda.com/blog/wp-content/uploads/2014/10/redwood-planet__880.png", overlayText: "So... What are you into? Calm walks in the woods? adrenaline seeking or something right in the middle..." },
    3: { text: "Things To Do", image: "https://www.boredpanda.com/blog/wp-content/uploads/2014/10/DSC_0428__880.jpg", overlayText: "We have years of experience planning trips for our customers from all over the world" },
    4: { text: "Contact Us", image: "https://www.boredpanda.com/blog/wp-content/uploads/2014/10/forest-photography-123__880.jpg", overlayText: "Give us an opportunity to cater to you some of the most beautiful outdoor aventures; You will love it!" } 
  };
  
  // Update the content div with selected menu item text and image
  contentDiv.innerHTML = `
    <h2>${content[menuNumber].text}</h2>
    <div class="image-container">
      <img src="${content[menuNumber].image}" alt="Image for Menu ${menuNumber}">
      <div class="overlay-text">${content[menuNumber].overlayText}</div>
    </div>  `;
}



