// Danh sách slide (ảnh + text)
const slides = [
  {
    img: "images/car1.jpg",
    title: "Mustang Mach-E",
    desc: "Chỉ bạn có thể"
  },
  {
    img: "images/car2.jpg",
    title: "Toyota Camry",
    desc: "Đi tới trải nghiệm mới"
  },
  {
    img: "images/car3.avif",
    title: "Mercedes-AMG GT ",
    desc: "Bản lĩnh vượt thời gian"
  },
  {
    img: "images/car4.jpg",
    title: "VinFast VF 9 ",
    desc: "Công nghệ đỉnh cao, dẫn lối tương lai"
  }
];

let currentIndex = 0;

// Hàm hiển thị slide
function showSlide(index) {
  const hero = document.getElementById("hero");
  const title = document.getElementById("car-title");
  const desc = document.getElementById("car-desc");

  hero.style.backgroundImage = `url(${slides[index].img})`;
  title.textContent = slides[index].title;
  desc.textContent = slides[index].desc;
}

// Nút next
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Nút prev
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Hiển thị slide đầu tiên khi load
window.onload = function() {
  showSlide(currentIndex);
};
// Sự kiện nút
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.left');
const nextBtn = document.querySelector('.carousel-btn.right');
const cards = document.querySelectorAll('.event-card');


let index = 0; // vị trí hiện tại

// Lấy thông tin card
const cardStyle = getComputedStyle(cards[0]);
const cardMarginRight = parseInt(cardStyle.marginRight);
const cardWidth = cards[0].offsetWidth + cardMarginRight;

// Lấy số card hiển thị vừa trong khung
const container = document.querySelector('.carousel-container');
const visibleCards = Math.floor(container.offsetWidth / cardWidth);

// Số lần trượt tối đa
const maxIndex = cards.length - visibleCards;

function updateCarousel() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  // disable khi tới đầu/cuối
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === maxIndex;
}

// Next
nextBtn.addEventListener('click', () => {
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

// Prev
prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// chạy lần đầu
updateCarousel();


function updateCarousel() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  // disable khi tới đầu/cuối
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === maxIndex;
}

// Next
nextBtn.addEventListener('click', () => {
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

// Prev
prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// chạy lần đầu
updateCarousel();
  const navbar = document.getElementById("navbar");
  const aboutSection = document.getElementById("about"); // section about

  window.addEventListener("scroll", () => {
    const aboutTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutTop - 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
// Lấy phần tử
const openBtn = document.getElementById("openLoginBtn");
openBtn.addEventListener("click", () => {
    window.location.href = "account/account.html"; 
});




