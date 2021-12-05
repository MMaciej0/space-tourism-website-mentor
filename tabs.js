// tabs handler

const tabs = document.querySelectorAll(".tab-list > button");
const tabList = document.querySelector(".tab-list");

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

const dots = document.querySelectorAll(".dot-indicators > button");
const dotsList = document.querySelector(".dot-indicators");

dots.forEach((dot) => {
  dot.addEventListener("click", changeTabPanel);
});

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  //   hide all panels

  mainContainer
    .querySelectorAll("section")
    .forEach((section) => section.setAttribute("hidden", true));

  // show right panel

  mainContainer.querySelector(`#${targetPanel}`).removeAttribute("hidden");

  //   hide all destination images - hidden attribute doesnt work with pictures (WHY??!?!?)

  mainContainer
    .querySelectorAll("picture")
    .forEach((picture) => picture.classList.add("none"));

  // show right image

  const targetData = targetTab.getAttribute("data-image");
  mainContainer.querySelector(`#${targetData}`).classList.remove("none");
}
