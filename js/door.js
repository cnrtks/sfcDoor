const accordions = [
  CSSRulePlugin.getRule(".accordion:before"),
  CSSRulePlugin.getRule(".accordion:after"),
];
// defaul duration for changes
let dur = 2;
const buttonBorderDefault = "3px, solid black";
const opacityDefault = 0.5;

//FIXME:should be in lib
getCssVar = function (value) {
  return window.getComputedStyle(document.body).getPropertyValue(value);
};

const catagoryArr = [
  {
    name: "languages",
    bgColor: "#333",
    borderFill: "#ccc",
    stroke: "#666",
    strokeOpacity: 0.5,
    strokeWidth: "2%",
    strokeDasharray: "none",
    borders: true,
    backgroundSvg: "#noBackgroundSvg",
    buttonFill: getCssVar("--white"),
    buttonOpacity: 0.5,
    buttonTextColor: getCssVar("--charcoal"),
    accordionContentColor: getCssVar("--white-trans"),
    accordionTextColor: getCssVar("--black"),
    bannerTextColor: "white",
  },
  {
    name: "skillset",
    bgColor: getCssVar("--red"),
    borderFill: getCssVar("--yellow"),
    stroke: getCssVar("--blue"),
    strokeOpacity: 0.5,
    strokeWidth: "5%",
    strokeDasharray: "none",
    borders: false,
    backgroundSvg: "#noBackgroundSvg",
    buttonFill: getCssVar("--blue"),
    buttonOpacity: 1,
    buttonTextColor: getCssVar("--black"),
    accordionContentColor: getCssVar("--white-trans"),
    accordionTextColor: getCssVar("--black"),
    bannerTextColor: getCssVar("--red"),
  },
  {
    name: "clientSites",
    bgColor: "black",
    borderFill: "url(#patternPlaid)",
    stroke: "black",
    strokeOpacity: 1,
    strokeWidth: "0.5%",
    strokeDasharray: "none",
    borders: false,
    backgroundSvg: "#plaidRect",
    buttonFill: getCssVar("--purple"),
    buttonOpacity: 1,
    buttonTextColor: getCssVar("--black"),
    accordionContentColor: getCssVar("--black"),
    accordionTextColor: getCssVar("--white"),
    bannerTextColor: getCssVar("--green-light")
  },
  {
    name: "svgShowcase",
    bgColor: getCssVar("--blue-fade"),
    borderFill: getCssVar("--transparent"),
    stroke: "g6",
    strokeOpacity: 0,
    strokeWidth: "0",
    strokeDasharray: "none",
    borders: true,
    backgroundSvg: "#borderTree",
    buttonFill: getCssVar("--white"),
    buttonOpacity: 0.5,
    buttonTextColor: getCssVar("--charcoal"),
    accordionContentColor: getCssVar("--white-trans"),
    accordionTextColor: getCssVar("--black"),
    bannerTextColor: getCssVar("--green-light")
  },
  {
    name: "pointAndClick",
    bgColor: "black",
    borderFill: "white",
    stroke: getCssVar("--red"),
    strokeOpacity: 1,
    strokeWidth: "2%",
    strokeDasharray: "3%",
    borders: false,
    backgroundSvg: "#minBlackRedTrees",
    buttonFill: getCssVar("--black"),
    buttonOpacity: opacityDefault,
    buttonTextColor: getCssVar("--red"),
    accordionContentColor: getCssVar("--white-trans"),
    accordionTextColor: getCssVar("--black"),
    bannerTextColor: "black"
  },
  {
    name: "cardGames",
    bgColor: getCssVar("--g3"),
    borderFill: getCssVar("--gc"),
    stroke: getCssVar("--red"),
    strokeOpacity: opacityDefault,
    strokeWidth: "2%",
    strokeDasharray: "none",
    borders: true,
    backgroundSvg: "#noBackgroundSvg",
    buttonFill: getCssVar("--black"),
    buttonOpacity: opacityDefault,
    buttonTextColor: getCssVar("--red"),
    accordionContentColor: getCssVar("--white-trans"),
    accordionTextColor: getCssVar("--black"),
    bannerTextColor: "white"
  },
];

changeCatagory = function (c) {
  let tl = gsap.timeline();
  tl.to(".backgroundSvg", { duration: dur / 2, opacity: 0 });
  tl.to(c.backgroundSvg, { duration: dur / 2, opacity: 1 });
  gsap.to("body", {
    duration: dur,
    backgroundColor: c.bgColor,
  });
  gsap.to("#border", {
    duration: dur,
    fill: c.borderFill,
    stroke: c.stroke,
    strokeOpacity: c.strokeOpacity,
    strokeWidth: c.strokeWidth,
    strokeDasharray: c.strokeDasharray,
  });
  gsap.to(".ui-accordion-header", {
    duration: dur,
    backgroundColor: c.buttonFill,
    color: c.buttonTextColor,
    opacity: c.buttonOpacity,
  });
  gsap.to(".ui-accordion-content", {
    backgroundColor: c.accordionContentColor,
    color: c.accordionTextColor,
  });
  gsap.to("a", { color: c.accordionTextColor });
  gsap.to(accordions, {
    duration: dur,
    cssRule: { opacity: c.borders ? 1 : 0 },
  });
  gsap.to("#sfcBanner", {duration: dur, color: c.bannerTextColor});
};

$(".accordionButton").click((e) => {
  let catagory = catagoryArr.find((c) => c.name == e.target.id);
  changeCatagory(catagory);
});

$(".accordionButton").on("mouseenter", () => {
  gsap.set("#turbulence", { attr: { seed: gsap.utils.random(0, 500, 1) } });
  gsap.to("#dispMap", { attr: { scale: gsap.utils.random(20, 500, 1) } });
});

$(".accordionButton").on("mouseleave", () => {
  gsap.to("#dispMap", { attr: { scale: 1 } });
});
