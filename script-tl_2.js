const photoData = [
  {
    "order": 1,
    "name": "1",
    "time": "5th\u20134th Century BCE",
    "about": "Pythagorean School: Proposed emission theory\u2014eyes emit rays to detect objects.",
    "description": "Engraving shows people viewing a dragon using visual rays, illustrating emission theory\u2014vision through rays from eyes forming shared perception."
  },
  {
    "order": 2,
    "name": "2",
    "time": "5th\u20134th Century BCE",
    "about": "Pythagorean School: Proposed emission theory\u2014eyes emit rays to detect objects.",
    "description": "Engraving shows people viewing a dragon using visual rays, illustrating emission theory\u2014vision through rays from eyes forming shared perception."
  },
  {
    "order": 3,
    "name": "3",
    "time": "4th Century BCE",
    "about": "Democritus: Intromission theory\u2014objects emit particles that enter the eyes.",
    "description": "Vision occurs when light rays enter the eyes from objects, forming images inside\u2014opposite of emission theory's outward rays."
  },
  {
    "order": 4,
    "name": "8",
    "time": "4th Century BCE",
    "about": "Plato (Timaeus): Vision involves \"visual fire\" from the eyes meeting external light.",
    "description": NaN
  },
  {
    "order": 5,
    "name": "9",
    "time": "9th and 13th centuries",
    "about": "Ibn al-Haytham (Alhazen) ",
    "description": "Alhazen demonstrates camera obscura: light through a small hole projects inverted image inside a dark room, proving intromission theory."
  },
  {
    "order": 6,
    "name": "10",
    "time": "9th and 13th centuries",
    "about": "Ibn al-Haytham proposed that light reflects from objects into the eye.",
    "description": "Medieval Arabic diagram showing brain and optic nerves, illustrating early neuroscience and intromission vision theory during the Islamic Golden Age."
  },
  {
    "order": 7,
    "name": "11",
    "time": "Medieval",
    "about": "The Allegory of Good Government: Effects of Good Government on the City",
    "description": "Scattered perspective shows urban daily life; multiple viewpoints prioritize narrative over realistic spatial representation."
  },
  {
    "order": 8,
    "name": "12",
    "time": "Early 15th Century",
    "about": "Filippo Brunelleschi",
    "description": "Linear perspective drawing and realized architecture both express Brunelleschi\u2019s vision of harmony, proportion, and spatial clarity in Renaissance design."
  },
  {
    "order": 9,
    "name": "13",
    "time": "Early 15th Century",
    "about": "Filippo Brunelleschi\u2018s perspective",
    "description": "Filippo Brunelleschi\u2019s experiment with linear perspective"
  },
  {
    "order": 10,
    "name": "14",
    "time": "Early 15th Century",
    "about": "The Delivery of the Keys",
    "description": "Perugino\u2019s use of one-point perspective unifies space, architecture, and narrative, embodying Renaissance ideals of order, clarity, and divine logic."
  },
  {
    "order": 11,
    "name": "15",
    "time": "Early 15th Century",
    "about": "Ideal City (or Ideal Cityscape)",
    "description": "An ideal Renaissance city rendered in perfect one-point perspective, symbolizing harmony, geometry, and humanist urban ideals through classical architecture."
  },
  {
    "order": 12,
    "name": "16",
    "time": "1500s",
    "about": " Leonardo da Vinci",
    "description": "Leonardo\u2019s diagram unites optics and perspective, showing how vision structures depth perception through converging rays and spatial geometry."
  },
  {
    "order": 13,
    "name": "17",
    "time": "1500s",
    "about": "Leonardo da Vinci and later developer",
    "description": "Leonardo studied camera obscura to understand vision and perspective, connecting optics, nature, and art through light and projection."
  },
  {
    "order": 14,
    "name": "18",
    "time": "1500s",
    "about": " Leonardo da Vinci and later developer",
    "description": "An evolved camera obscura, reflecting Leonardo\u2019s optical principles, projects real scenes for artistic tracing, linking vision, geometry, and image-making."
  },
  {
    "order": 15,
    "name": "19",
    "time": "1500s",
    "about": " Leonardo da Vinci ",
    "description": "This drawing is from Leonardo da Vinci\u2019s notebooks, and it\u2019s a powerful visual explanation of how vision and light work together\u2014a synthesis of anatomy, optics, geometry, and perspective."
  },
  {
    "order": 16,
    "name": "21",
    "time": "1500s",
    "about": " Leonardo da Vinci ",
    "description": "Leonardo\u2019s perspective study unites architecture and narrative, using geometric precision to structure space, movement, and visual drama dynamically."
  },
  {
    "order": 17,
    "name": "22",
    "time": "1500s",
    "about": " Leonardo da Vinci ",
    "description": "Leonardo\u2019s setup uses a transparent grid to trace objects, blending optics, geometry, and manual precision to master spatial representation."
  },
  {
    "order": 18,
    "name": "23",
    "time": "1500s",
    "about": " Leonardo da Vinci ",
    "description": "Leonardo\u2019s Last Supper unites linear perspective, psychological depth, and spiritual symbolism, making Christ the focal point of human drama."
  },
  {
    "order": 19,
    "name": "24",
    "time": "1600s",
    "about": "Johannes Kepler",
    "description": "Kepler revolutionized optics by showing the eye forms inverted images on the retina\u2014this diagram illustrates his influence on vision science."
  },
  {
    "order": 20,
    "name": "7",
    "time": "1600s",
    "about": "Johannes Kepler",
    "description": "These diagrams show the shift from optical refraction to neural mechanics, tracing vision from eye to brain to bodily response."
  },
  {
    "order": 21,
    "name": "25",
    "time": "1650s",
    "about": "Isaac Newton ",
    "description": "This prism image references Newton\u2019s discovery that white light contains all colors, foundational to modern optics and color theory."
  },
  {
    "order": 22,
    "name": "26",
    "time": "1650s",
    "about": "Isaac Newton and Christiaan Huygens",
    "description": "This diagram visualizes early optics, aligning with Newton\u2019s particle theory and Huygens\u2019 wave model\u2014two foundations of modern light science."
  },
  {
    "order": 23,
    "name": "27",
    "time": "1650s",
    "about": "Isaac Newton and Christiaan Huygens",
    "description": "This diagram shows image inversion through a lens, foundational to Kepler\u2019s retinal theory and Newton-Huygens optical developments in vision science."
  },
  {
    "order": 24,
    "name": "28",
    "time": "1839-",
    "about": " Louis Daguerre",
    "description": "Louis Daguerre invented the camera by fixing images with light-sensitive plates, transforming centuries of optical theory into photography."
  },
  {
    "order": 25,
    "name": "29",
    "time": "1839-",
    "about": "Wheatstone stereoscope",
    "description": "This Wheatstone stereoscope uses mirrors to deliver different images to each eye, pioneering 3D vision and stereoscopic depth perception."
  },
  {
    "order": 26,
    "name": "30",
    "time": "1840s",
    "about": "stereoscope",
    "description": "This 19th-century stereoscope uses binocular vision to merge two images into one 3D view, anticipating modern virtual reality optics."
  },
  {
    "order": 27,
    "name": "31",
    "time": "1840s",
    "about": "Brewster stereoscope",
    "description": "The Brewster stereoscope creates 3D illusions from twin photos, merging science and leisure in early immersive visual technology."
  },
  {
    "order": 28,
    "name": "32",
    "time": "1840s",
    "about": "stereograph",
    "description": "This pair of stereograph depicts 3D visual education at home, merging entertainment and learning through immersive stereoscopic photography."
  },
  {
    "order": 29,
    "name": "33",
    "time": "1850s\u20131870s ",
    "about": "Helmholtz and others, \u201cgrid method\u201d or \u201cperspectival net\u201d,",
    "description": "Helmholtz and others developed physiological optics, studying perception, afterimages, and eye movement."
  },
  {
    "order": 30,
    "name": "34",
    "time": "1900s",
    "about": "Optical illusions became tools to study visual processing.",
    "description": "This illusion by Kitaoka creates false motion using color and contrast, revealing how eye movements and brain processing shape perception."
  },
  {
    "order": 31,
    "name": "35",
    "time": "1900s",
    "about": "Cin\u00e9matographe by Auguste and Louis Lumi\u00e8re",
    "description": "The Lumi\u00e8re Cin\u00e9matographe was the first camera-projector, revolutionizing motion pictures and launching public cinema in 1895 Paris."
  },
  {
    "order": 32,
    "name": "36",
    "time": 1878,
    "about": "Eadweard Muybridge\u2019s photographic motion studies",
    "description": "Muybridge\u2019s motion study froze time into frames, proving gallop physics and pioneering photographic sequences that led directly to cinema\u2019s birth."
  },
  {
    "order": 33,
    "name": "37",
    "time": 1898,
    "about": "L'Arriv\u00e9e d\u2019un train en gare de La Ciotat",
    "description": "The Lumi\u00e8re brothers\u2019 train film stunned 1895 audiences, symbolizing cinema\u2019s power to turn everyday motion into immersive spectacle."
  },
  {
    "order": 34,
    "name": "38",
    "time": 1922,
    "about": "Oskar Schlemmer",
    "description": "Oskar Schlemmer\u2019s Triadic Ballet fused Bauhaus geometry with performance, transforming dancers into living sculptures of space, rhythm, and illusion."
  },
  {
    "order": 35,
    "name": "39",
    "time": "1920s\u20131930s",
    "about": "Wassily Kandinsky",
    "description": "Kandinsky\u2019s abstract masterpiece unites color, geometry, and rhythm into spiritual expression, echoing music and Bauhaus-era modernist ideals."
  },
  {
    "order": 36,
    "name": "40",
    "time": "1910s\u20131930s",
    "about": "Kanizsa Triangle,",
    "description": "The Kanizsa Triangle illusion reveals how the brain invents shapes using closure and contrast, illustrating Gestalt principles in perception."
  },
  {
    "order": 37,
    "name": "41",
    "time": "1920s",
    "about": "Gestalt psychology",
    "description": "Early 20th Century Avant-garde movements (Futurism, Constructivism, Bauhaus) experimented with abstract visual forms and perception."
  },
  {
    "order": 38,
    "name": "42",
    "time": "1920s",
    "about": "Montage theory ",
    "description": "The Kuleshov Effect shows how editing shapes meaning, with identical expressions appearing emotional when paired with changing contextual images."
  },
  {
    "order": 39,
    "name": "43",
    "time": 1929,
    "about": "Dziga Vertov",
    "description": "Vertov\u2019s Man with a Movie Camera celebrates cinema\u2019s power, blending surreal montage and self-reflexivity to redefine visual storytelling."
  },
  {
    "order": 40,
    "name": "44",
    "time": "1920s\u20131940s",
    "about": "Walter Benjamin",
    "description": " (The Work of Art in the Age of Mechanical Reproduction): Analyzed how photography and film change aura and perception."
  },
  {
    "order": 41,
    "name": "45",
    "time": "1970s\u20131980s",
    "about": "Jacques Lacan",
    "description": "Lacan\u2019s gaze theory reconfigures perspective, revealing how seeing is structured by desire, mediation, and the awareness of being watched."
  },
  {
    "order": 42,
    "name": "46",
    "time": "1970s\u20131980s",
    "about": "\u201cVisual Turn\u201d in cultural theory: Vision becomes a central topic in media, gender, and philosophy.",
    "description": "Crary critiques modern vision as dehumanized by digital media, while Fabro\u2019s sculpture playfully reinterprets bodily form through conceptual geometry."
  },
  {
    "order": 43,
    "name": "47",
    "time": 1968,
    "about": "Early VR prototypes and simulated environments pointed toward future immersion.",
    "description": "Ivan Sutherland\u2019s 1968 \"Sword of Damocles\" headset pioneered immersive VR by combining stereoscopic display and real-time head tracking."
  },
  {
    "order": 44,
    "name": "48",
    "time": 1968,
    "about": "Early VR prototypes and simulated environments pointed toward future immersion.",
    "description": "Ivan Sutherland\u2019s 1968 \"Sword of Damocles\" headset pioneered immersive VR by combining stereoscopic display and real-time head tracking."
  },
  {
    "order": 45,
    "name": "49",
    "time": 1975,
    "about": " world\u2019s first digital camera, built by Steve Sasson",
    "description": "Kodak\u2019s 1975 prototype digital camera, invented by Steve Sasson, captured black-and-white images digitally, launching the digital photography revolution."
  },
  {
    "order": 46,
    "name": "50",
    "time": 1969,
    "about": "the first video camera using a charge-coupled device (CCD) ",
    "description": "Boyle and Smith at Bell Labs pioneered CCD technology, enabling digital video and photography, transforming imaging in science, media, and daily life."
  },
  {
    "order": 47,
    "name": "51",
    "time": "2000s",
    "about": "CCTV surveillance cameras",
    "description": "Modern CCTV symbolizes automated vision\u2014shifting sight from human perception to machine surveillance, reshaping privacy, control, and social behavior."
  },
  {
    "order": 48,
    "name": "52",
    "time": "2000s",
    "about": "360-degree panoramic",
    "description": "Widespread use of digital cameras, surveillance systems, and Google Earth; vision becomes global and networked."
  },
  {
    "order": 49,
    "name": "53",
    "time": "2000s",
    "about": "satellite orbiting Earth",
    "description": "A satellite orbits Earth, embodying a disembodied gaze that transforms vision into data, surveillance, and planetary-scale observation.\n"
  },
  {
    "order": 50,
    "name": "54",
    "time": "2000s",
    "about": "Satellites visualize Earth\u2019s climate systems\u2014ice, heat, salinity, biology\u2014forming a synthetic vision beyond human sight, crucial for planetary stewardship.",
    "description": "Emergence of remote sensing, satellite imaging, and geo-visualization."
  },
  {
    "order": 51,
    "name": "58",
    "time": "2010s",
    "about": "Computer vision becomes common in facial recognition, autonomous vehicles, and healthcare.",
    "description": "AI-generated faces blend realism and distortion, revealing machine learning\u2019s visual logic and raising deep questions about authenticity and digital identity."
  },
  {
    "order": 52,
    "name": "57",
    "time": "2010s",
    "about": "an urban traffic scene enhanced with computer vision,",
    "description": "This image shows an urban traffic scene enhanced with computer vision, a type of artificial intelligence that enables machines to interpret and process visual data like humans do."
  },
  {
    "order": 53,
    "name": "55",
    "time": "2010s",
    "about": "AI-generated imagery (GANs) introduces non-indexical vision\u2014images that have no real-world referent.",
    "description": NaN
  },
  {
    "order": 54,
    "name": "56",
    "time": "2010s",
    "about": "AI-generated imagery (GANs) introduces non-indexical vision\u2014images that have no real-world referent.",
    "description": NaN
  },
  {
    "order": 55,
    "name": "59",
    "time": "2020s",
    "about": "Apple Vision Pro",
    "description": "This image shows the Apple Vision Pro, a mixed reality headset introduced by Apple in 2023. It\u2019s one of the most advanced consumer devices blending augmented reality (AR) and virtual reality (VR) into what Apple refers to as spatial computing.\n"
  },
  {
    "order": 56,
    "name": "60",
    "time": "2020s",
    "about": "Apple Vision Pro",
    "description": NaN
  },
  {
    "order": 57,
    "name": "61",
    "time": "2020s",
    "about": "Rise of synthetic vision: Machines \u201csee\u201d and interpret environments independently",
    "description": NaN
  },
  {
    "order": 58,
    "name": "62",
    "time": "2020s",
    "about": "Rise of synthetic vision: Machines \u201csee\u201d and interpret environments independently",
    "description": NaN
  }
];

const timeline = document.getElementById("timeline");

for (let i = 1; i <= 58; i++) {
  const item = document.createElement("div");
  item.className = "time-item";

  const match = photoData.find(p => p.order === i);
  if (match) {
    // 创建图片容器
const wrapper = document.createElement("div");
wrapper.className = "photo-wrapper";

// 图片元素
const img = document.createElement("img");
img.src = `timeline-img-jpg/${match.name}.jpg`;
img.alt = `Image ${i}`;
wrapper.appendChild(img);

// 点击切换放大
wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("zoomed");
});

// 固定显示 time 在底部
if (match.time) {
  const timeLabel = document.createElement("div");
  timeLabel.className = "photo-label bottom time";
  timeLabel.textContent = match.time;
  wrapper.appendChild(timeLabel);
}

// 避免 about 和 description 同时出现底部
let usedBottom = false;

["about", "description"].forEach(type => {
  if (match[type]) {
    const div = document.createElement("div");
    const pos = usedBottom ? "top" : (Math.random() > 0.5 ? "top" : "bottom");
    if (pos === "bottom") usedBottom = true;
    div.className = `photo-label ${pos} ${type}`;
    div.textContent = match[type];
    wrapper.appendChild(div);
  }
});

// 添加 wrapper 到时间点 item 中
item.appendChild(wrapper);
  }

  timeline.appendChild(item);
}

// 设置页面高度来支持滚动
window.addEventListener("load", () => {
  const timelineWidth = timeline.scrollWidth;
  document.body.style.height = timelineWidth + "px";
});

// 滚动控制时间轴横移
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  timeline.style.transform = `translateX(-${scrollY}px)`;
});

const introVideo = document.getElementById("intro-video");

if (introVideo) {
  const fadeOutAndRemove = () => {
    introVideo.classList.add("fade-out");
    setTimeout(() => {
      introVideo.remove();
    }, 600); // 匹配 CSS 中的 transition 时间
    window.removeEventListener("scroll", fadeOutAndRemove);
  };

  window.addEventListener("scroll", fadeOutAndRemove);
}
// 滚动时横向平移
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  timeline.style.transform = `translateX(-${scrollY}px)`;
});
const wrapper = document.createElement('div');
wrapper.className = 'photo-wrapper';

const endOverlay = document.getElementById("end-overlay");
const endImage = document.getElementById("end-image");
const gotoBtn = document.getElementById("goto-animation");

const imagePaths = [
  "bibliography.png",
  "ano_bibli1.png",
  "ano_bibli2.png",
  "ano_bibli3.png",
  "ano_bibli4.png",
  "word1.png",
  "word2.png",
  "word3.png"
];

let currentIndex = 0; // 当前图片索引

// 当用户滚动接近底部时显示 abstract.png
window.addEventListener("scroll", () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY;

  if (scrollY > maxScroll - 100) {  // 可根据情况调整阈值
    if (endOverlay.style.display === "none") {
      endOverlay.style.display = "flex";
      endImage.src = "abstract.png";
      endImage.style.display = "block";
      gotoBtn.style.display = "none";
    }
  }
});

// 点击 abstract 显示 bibliography + 跳转按钮
endImage.addEventListener("click", () => {
  if (endImage.src.includes("abstract.png")) {
    endImage.src = imagePaths[currentIndex]; // 显示 bibliography.png
    currentIndex++;
  } else {
    // 如果当前图片是 imagePaths 中的一张，则点击切换下一张
    if (currentIndex < imagePaths.length) {
      endImage.src = imagePaths[currentIndex];
      currentIndex++;
    } else {
      // 如果所有图片都看完了，隐藏图片，显示按钮
      endImage.style.display = "none";
      gotoBtn.style.display = "inline-block";
    }
  }
});

// 点击按钮跳转
gotoBtn.addEventListener("click", () => {
  window.location.href = "animation.html";
});



