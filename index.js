let content = document.querySelector(".js-generated.content");

let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);

let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.setAttribute("src", "./assets/rizzo.jpg");
content.append(dogImage);

let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
content.append(dogDetails);

let descriptionHeader = document.createElement("h3");
descriptionHeader.setAttribute("class", "dog-description");
descriptionHeader.textContent = "Description:";
content.append(descriptionHeader);

let dogParagraph = document.createElement("p");
dogParagraph.setAttribute("class", "dog-paragraph");
dogParagraph.textContent =
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
content.append(dogParagraph);

let feedingHeader = document.createElement("h3");
feedingHeader.setAttribute("class", "feeding-time");
feedingHeader.textContent = "Feeding Times:";
content.append(feedingHeader);

let feedingList = document.createElement("ul");
feedingList.setAttribute("class", "time-list");
content.append(feedingList);

let feedingTimes = document.querySelector(".time-list");
let feedingTime1 = document.createElement("li");
feedingTime1.textContent = "9:00 am";
feedingTimes.append(feedingTime1);

let feedingTime2 = document.createElement("li");
feedingTime2.textContent = "12:00 pm";
feedingTimes.append(feedingTime2);

let feedingTime3 = document.createElement("li");
feedingTime3.textContent = "5:00 pm";
feedingTimes.append(feedingTime3);
