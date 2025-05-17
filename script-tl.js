// 创建时间轴 DOM
const timeline = document.getElementById('timeline');

// 准备一个 map 存图片插入信息
let photoMap = new Map();

// 加载 CSV 并生成时间轴
fetch('photo-order.csv')
  .then(response => response.text())
  .then(csv => {
    // 解析 CSV
    const lines = csv.trim().split('\n');
    lines.shift(); // 移除表头
    lines.forEach(line => {
      const [order, name] = line.split(',');
      photoMap.set(parseInt(order), name.trim());
    });

    // 创建 1–58 时间点
    for (let i = 1; i <= 58; i++) {
      const item = document.createElement('div');
      item.className = 'time-item';
      item.textContent = i;

      // 如果当前时间点有图片，就插入
      if (photoMap.has(i)) {
        const img = document.createElement('img');
        img.src = `timeline-img-jpg/${photoMap.get(i)}.jpg`;
        img.alt = `Image ${i}`;
        img.style.maxWidth = '100%';
        img.style.marginTop = '10px';
        item.appendChild(img);
      }

      timeline.appendChild(item);
    }
  });

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

// 当用户滚动接近底部时显示 abstract.png
window.addEventListener("scroll", () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY;

  if (scrollY > maxScroll - 100) {  // 可根据情况调整阈值
    if (endOverlay.style.display === "none") {
      endOverlay.style.display = "flex";
      endImage.src = "abstract.png";
      gotoBtn.style.display = "none";
    }
  }
});

// 点击 abstract 显示 bibliography + 跳转按钮
endImage.addEventListener("click", () => {
  if (endImage.src.includes("abstract.png")) {
    endImage.src = "bibliography.png";
    gotoBtn.style.display = "inline-block";
  }
});

// 点击按钮跳转
gotoBtn.addEventListener("click", () => {
  window.location.href = "animation.html";
});


