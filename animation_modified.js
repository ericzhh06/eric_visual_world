let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function handleScroll() {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

const myBack = document.querySelector(".my-back");
if (myBack) {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const vh = window.innerHeight;
  const scrollY = window.scrollY;
  const scrollVH = scrollY / vh;
  const scrollProgress = scrollY / maxScroll;

  let width;

  if (scrollVH < 1) {
    width = 160; // 顶部区域：保持最大
  } else if (scrollVH >= 1 && scrollVH < 3.1) {
    // 从 1 到 3.1 屏之间：缩小到 30
    const rangeProgress = (scrollVH - 1) / (3.1 - 1);
    width = 160 - (120 * rangeProgress); // 160 → 30
  } else if (scrollVH >= 3.1 && scrollVH < 6) {
    // red2 出现后：继续从 30 → 5
    const rangeProgress = (scrollVH - 3.1) / (6 - 3.1);
    width = 40 - (20 * rangeProgress); // 30 → 5
  } else {
    width = 10; // 到底后锁定最小值
  }

  // opacity 正常全程淡入
  const opacity = 0.3 + (0.7 * scrollProgress);

  // translateY：在 1.5vh 内固定；之后从 63 → 0%
  let translateY;
  if (scrollY <= 1.5 * vh) {
    translateY = 63;
  } else {
    const moveProgress = (scrollY - 1.5 * vh) / (maxScroll - 1.5 * vh);
    translateY = 63 - (63 * moveProgress);
  }

  myBack.style.width = `${width}vw`;
  myBack.style.opacity = `${opacity}`;
  myBack.style.transform = `translateX(-50%) translateY(${translateY}%)`;
}


  // ===== 黑色图辅助函数（支持持久显示） =====
  const updateImage = (selector, { fadeStart, fadeEnd, persistent = false }) => {
    const img = document.querySelector(selector);
    const relativeScroll = scrollY / vh;

    if (!img) return;

    if (relativeScroll < fadeStart) {
      img.style.opacity = 0;
    } else if (relativeScroll >= fadeStart && relativeScroll <= fadeEnd) {
      const mid = (fadeStart + fadeEnd) / 2;
      const progress = Math.abs(relativeScroll - mid) / ((fadeEnd - fadeStart) / 2);
      img.style.opacity = 1 - progress;
      img.style.width = "80vw";
    } else if (persistent && relativeScroll > fadeEnd) {
      img.style.opacity = 1;
      img.style.width = "80vw";
    } else {
      img.style.opacity = 0;
    }
  };

  // ===== 红色图辅助函数 =====
  const updateWidthSequence = (selector, { growStart, growEnd, shrinkStart, shrinkEnd }) => {
    const img = document.querySelector(selector);
    const relativeScroll = scrollY / vh;

    if (!img) return;

    if (relativeScroll < growStart) {
      img.style.width = "0vw";
      img.style.opacity = 0;
    } else if (relativeScroll >= growStart && relativeScroll <= growEnd) {
      const progress = (relativeScroll - growStart) / (growEnd - growStart);
      img.style.width = `${5 + (75 * progress)}vw`;
      img.style.opacity = 1;
    } else if (shrinkStart && relativeScroll >= shrinkStart && relativeScroll <= shrinkEnd) {
      const progress = (relativeScroll - shrinkStart) / (shrinkEnd - shrinkStart);
      img.style.width = `${80 - (80 * progress)}vw`;
      img.style.opacity = 1 - progress;
    } else if (shrinkEnd && relativeScroll > shrinkEnd) {
      img.style.width = "0vw";
      img.style.opacity = 0;
    } else {
      img.style.width = "80vw";
      img.style.opacity = 1;
    }
  };

  // 黑色图（延长淡入淡出区间）
  updateImage(".black3", { fadeStart: 0.1, fadeEnd: 3 });
  updateImage(".black2", { fadeStart: 3.1, fadeEnd: 7 });
  updateImage(".black1", { fadeStart: 7.2, fadeEnd: 7.4, persistent: true });

  // 红色图（延长出现 + 缩小阶段）
  updateWidthSequence(".red3", {
    growStart: 0.1,
    growEnd: 0.6,
    shrinkStart: 2.7,
    shrinkEnd: 3,
  });

  updateWidthSequence(".red2", {
    growStart: 3.1,
    growEnd: 5.8,
    shrinkStart: 5.9,
    shrinkEnd: 6.2,
  });

  updateWidthSequence(".red1", {
    growStart: 6.9,
    growEnd: 7.1,
    // red3 保持显示，无 shrink
  });
}

