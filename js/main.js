// Bài viết nổ bật
// Lấy tất cả các phần tử slider-group, nút next-button-left, nút next-button-right, và điểm slider-dot
let slider = document.querySelectorAll('.slider-group');
var nextButtonLeft = document.getElementById('next-button-left');
var nextButtonRight = document.getElementById('next-button-right');
var sliderDots = document.querySelectorAll('.slider-dot');

let index = 0;
let slideInterval; // Biến để lưu interval của chuyển slide tự động

// Hàm chuyển slide sang phải
function next() {
    slider[index].classList.remove('active-slider');
    sliderDots[index].classList.remove('dot-active');
    index = (index + 1) % slider.length;
    slider[index].classList.add('active-slider');
    sliderDots[index].classList.add('dot-active');
    restartAutoSlide(); // Bắt đầu lại chuyển slide tự động
}

// Hàm chuyển slide sang trái
function prev() {
    slider[index].classList.remove('active-slider');
    sliderDots[index].classList.remove('dot-active');
    index = (index - 1 + slider.length) % slider.length;
    slider[index].classList.add('active-slider');
    sliderDots[index].classList.add('dot-active');
    restartAutoSlide(); // Bắt đầu lại chuyển slide tự động
}

// Hàm bắt đầu lại chuyển slide tự động
function restartAutoSlide() {
    clearInterval(slideInterval); // Dừng interval hiện tại
    slideInterval = setInterval(autoSlide, 3000); // Tạo interval mới
}

// Gắn sự kiện click cho nút chuyển slide sang phải
nextButtonRight.addEventListener('click', function() {
    next();
});

// Gắn sự kiện click cho nút chuyển slide sang trái
nextButtonLeft.addEventListener('click', function() {
    prev();
});

// Hàm chuyển slide tự động
function autoSlide() {
    next();
}

// Thiết lập thời gian chuyển slide (đơn vị: mili giây)
slideInterval = setInterval(autoSlide, 3000); // Chuyển slide mỗi 3 giây (3000 mili giây)

// Dừng chuyển slide tự động khi người dùng di chuột vào slide
slider.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    slide.addEventListener('mouseleave', () => {
        restartAutoSlide(); // Bắt đầu lại chuyển slide tự động sau khi người dùng di chuột ra khỏi slide
    });
});

// Gắn sự kiện click cho các điểm slider-dot
sliderDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', function() {
        slider[index].classList.remove('active-slider');
        sliderDots[index].classList.remove('dot-active');
        index = dotIndex;
        slider[index].classList.add('active-slider');
        sliderDots.forEach((dot) => dot.classList.remove('dot-active')); // Clear all active dots
        sliderDots[index].classList.add('dot-active');
        restartAutoSlide(3000); // Điều chỉnh thời gian interval (3000 mili giây)
    });

    dot.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    dot.addEventListener('mouseleave', () => {
        restartAutoSlide(3000); // Điều chỉnh thời gian interval (3000 mili giây)
    });
});


//bản tin video
const dots = document.querySelectorAll('.dot');
const sliderEnds = document.querySelectorAll('.slider-end');
let currentSlideIndex = 0;
let autoSwitch;
// Hàm chuyển đổi slide
function switchSlide(slideIndex) {
    // Loại bỏ active class từ tất cả các slider-end và dots
    sliderEnds.forEach((sliderEnd) => {
        sliderEnd.classList.remove('active-slider-end');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    // Thêm active class cho slider-end và dot tương ứng với slideIndex
    sliderEnds[slideIndex].classList.add('active-slider-end');
    dots[slideIndex].classList.add('active');
    // Reset và khởi động lại interval
    clearInterval(autoSwitch);
    autoSwitch = setInterval(autoSwitchSlides, 3000);
}

//  slide end
function autoSwitchSlides() {
    // Tăng chỉ số slide hiện tại và kiểm tra xem nếu vượt quá số lượng slide, thì quay trở lại slide đầu tiên
    currentSlideIndex++;
    if (currentSlideIndex >= sliderEnds.length) {
        currentSlideIndex = 0;
    }
    switchSlide(currentSlideIndex);
}
// Gọi hàm chuyển đổi slide tự động
autoSwitch = setInterval(autoSwitchSlides, 3000);
// Lặp qua từng dot và gán sự kiện click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index; // Cập nhật chỉ số slide hiện tại
        switchSlide(currentSlideIndex); // Chuyển đến slide được chọn và khởi động lại interval
    });
});



//  responsive mobile menu 
function NavInputChange() {
    const navMobile = document.querySelector('.nav__mobile');
    const navInput = document.querySelector('.nav-input');
    const overlay = document.querySelector('.overlay');
    if (window.innerWidth < 1024) {
        navMobile.style.display = navInput.checked ? 'block' : 'none';
        overlay.style.display = navInput.checked ? 'block' : 'none';
    } else {
        navMobile.style.display = 'none';
        overlay.style.display = 'none';
    }
}
// Xử lý sự kiện khi tải trang và khi thay đổi kích thước cửa sổ
window.addEventListener('load', NavInputChange);
window.addEventListener('resize', NavInputChange);

// Xử lý sự kiện khi thay đổi giá trị của checkbox
document.querySelector('.nav-input').addEventListener('change', NavInputChange);

// Xử lý sự kiện khi click vào nút đóng nav
document.querySelector('.close').addEventListener('click', function() {
    const navInput = document.querySelector('.nav-input');

});
document.querySelector('.overlay').addEventListener('click', function() {
    const navInput = document.querySelector('.nav-input');
    navInput.checked = false; // Đảm bảo checkbox không được chọn
    NavInputChange();
});



//down menu menu mobile
var chevron = document.querySelectorAll('#down');
for (var i = 0; i < chevron.length; i++) {
    chevron[i].addEventListener('click', function() {
        var menu = this.nextElementSibling;
        menu.style.display = (menu.style.display == 'block') ? 'none' : 'block';

    });
}