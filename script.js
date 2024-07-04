let path = `M 10 100 Q 500 100 1500 100`;
let finalPath = `M 10 100 Q 500 100 1500 100`;

let string = document.querySelector(".string");
let main = document.querySelector(".main");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1500 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
    scrub: 2,
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1,
    ease: "elastic.out(1, 0.2)",
  });
});

main.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    x: dets.x,
    y: dets.y,
  });
});
