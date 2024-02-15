document.addEventListener('DOMContentLoaded', function () {
  // Define an empty array to store trophies
  const trophies = [];

  // Add trophies to the array
  trophies.push({
    image: "Trophy 1.jpg",
    title: "Trophy 1",
    description: "Description for Trophy 1"
  });
  trophies.push({
    image: "Trophy 2.jpg",
    title: "Trophy 2",
    description: "Description for Trophy 2"
  });
  trophies.push({
    image: "Trophy 3.jpg",
    title: "Trophy 3",
    description: "Description for Trophy 3"
  });
  trophies.push({
    image: "Trophy 4.jpg",
    title: "Trophy 4",
    description: "Description for Trophy 4"
  });
  trophies.push({
    image: "Trophy 1.jpg",
    title: "Trophy 5",
    description: "Description for Trophy 5"
  });
  trophies.push({
    image: "Trophy 2.jpg",
    title: "Trophy 6",
    description: "Description for Trophy 6"
  });
  trophies.push({
    image: "Trophy 3.jpg",
    title: "Trophy 7",
    description: "Description for Trophy 7"
  });
  trophies.push({
    image: "Trophy 4.jpg",
    title: "Trophy 8",
    description: "Description for Trophy 8"
  });
  trophies.push({
    image: "Trophy 1.jpg",
    title: "Trophy 9",
    description: "Description for Trophy 9"
  });

  // Get the trophies section
  const trophySection = document.querySelector(".trophies");
 // Loop through the trophies array and create a card for each
 trophies.forEach(trophy => {
  // Create trophy card element
  const trophyCard = document.createElement("div");
  trophyCard.classList.add("trophy-card");

  // Create image element and set attributes
  const trophyImage = document.createElement("img");
  trophyImage.src = `images/${trophy.image}`;
  trophyImage.alt = trophy.title;
  trophyImage.classList.add("trophy-image");
  trophyCard.appendChild(trophyImage);

  // Create title element and set content
  const trophyTitle = document.createElement("h3");
  trophyTitle.classList.add("trophy-title");
  trophyTitle.textContent = trophy.title;
  trophyCard.appendChild(trophyTitle);

  // Create description element and set content
  const trophyDescription = document.createElement("p");
  trophyDescription.classList.add("trophy-description");
  trophyDescription.textContent = trophy.description;
  trophyCard.appendChild(trophyDescription);

  // Add event listener to redirect to the trophy-details.html page when the trophy card is clicked
  trophyCard.addEventListener("click", function () {
    // Modify the URL based on your project structure
    window.location.href = `trophy-details.html?trophy=${encodeURIComponent(trophy.title)}`;
  });

  // Add trophy card to the trophies section
  trophySection.appendChild(trophyCard);
});
  // Advertisements section
  const adSection = document.querySelector(".ads");
  const adImages = ["ad1.jpg", "ad2.jpg", "ad3.jpg"];
  const adNavigation = document.querySelector(".ad-navigation");
  let currentAdIndex = 0;

  function createAdLink(index) {
    const adLink = document.createElement("a");
    adLink.href = "#";
    adLink.classList.add("ad-link");
    adLink.onclick = () => handleAdClick(adImages[index]);

    const adImage = document.createElement("img");
    adImage.src = `images/${adImages[index]}`;
    adImage.alt = `Ad ${index + 1}`;

    adLink.appendChild(adImage);
    return adLink;
  }

  function updateAdDisplay() {
      adSection.innerHTML = "";
    
      // Add ad links
      for (let i = 0; i < adImages.length; i++) {
        const adLink = createAdLink(i);
        adSection.appendChild(adLink);
      }
    
      // Add navigation buttons
      adNavigation.innerHTML = "";
      adNavigation.appendChild(createNavButton("Previous", prevAd));
      adNavigation.appendChild(createNavButton("Next", nextAd));
    }
    
  function createNavButton(label, onClickFunction) {
    const button = document.createElement("button");
    button.textContent = label;
    button.onclick = onClickFunction;
    return button;
  }

  function handleAdClick(adImage) {
    console.log(`Clicked on ad: ${adImage}`);
    // Add any specific actions you want to perform when an ad is clicked
  }

  function prevAd() {
    currentAdIndex = (currentAdIndex - 1 + adImages.length) % adImages.length;
    updateAdDisplay();
  }

  function nextAd() {
    currentAdIndex = (currentAdIndex + 1) % adImages.length;
    updateAdDisplay();
  }

  // Initialize ad display
  updateAdDisplay();
});

