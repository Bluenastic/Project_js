/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
const sr = ScrollReveal();
// Hiệu ứng cuộn cho mục "WHEY PROTEIN"
sr.reveal('#loadwhey .services-container > *', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
  });
  
  // Hiệu ứng cuộn cho mục "TĂNG SỨC MẠNH"
sr.reveal('#loadTangSm .services-container > *', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
  });
  
  // Hiệu ứng cuộn cho mục "VITAMIN - D3&K2 - DẦU CÁ"
sr.reveal('#loadVitamin .services-container > *', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
  });

  const leftBtn = document.querySelector('.scroll-left');
  const rightBtn = document.querySelector('.scroll-right');
  const servicesContainer = document.querySelector('.services-container');

leftBtn.addEventListener('click', () => {
  servicesContainer.scrollBy({
    left: -servicesContainer.offsetWidth,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  servicesContainer.scrollBy({
    left: servicesContainer.offsetWidth,
    behavior: 'smooth'
  });
});


fetch('http://localhost:3000/whey')
.then(response => response.json())
.then(data=>{
    const whey=data
    showwhey(data)
})
function showwhey(data){
    let loadwhey = document.getElementById('loadwhey');
    let kq="";
    data.forEach(item => {
        kq+=`<div class="services-box">
                <div class="product">       
                    <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-discount-price">Giá khuyến mãi: $19.99</p>
                    <p class="product-price">Giá: ${item.price} $</p>
                    <p class="product-discount-percentage">Giảm giá: 33%</p>
                </div> 
                <a href="detail.html" class="btn">Xem Ngay</a>
            </div>
             `
    });
    loadwhey.innerHTML=kq
    
}

fetch('http://localhost:3000/tangsm')
.then(response => response.json())
.then(data=>{
    const tangsm=data
    showTangsm(data)
})
function showTangsm(data){
    let loadtangsm = document.getElementById('loadTangSm');
    let kq="";
    data.forEach(item => {
        kq+=`<div class="services-box">
        <div class="product">       
            <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
            <h2 class="product-name">${item.name}</h2>
            <p class="product-discount-price">Giá khuyến mãi: $19.99</p>
            <p class="product-price">Giá: ${item.price} $</p>
            <p class="product-discount-percentage">Giảm giá: 33%</p>
        </div> 
        <a href="detail.html" class="btn">Xem Ngay</a>
    </div>
     `
    });
    loadtangsm.innerHTML=kq

    
}



fetch('http://localhost:3000/vitamin')
.then(response => response.json())
.then(data=>{
    const vitamin=data
    showVitamin(data)
})
function showVitamin(data){
    let loadvitamin = document.getElementById('loadVitamin');
    let kq="";
    data.forEach(item => {
        kq+=`<div class="services-box">
                <div class="product">       
                    <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-discount-price">Giá khuyến mãi: $19.99</p>
                    <p class="product-price">Giá: ${item.price} $</p>
                    <p class="product-discount-percentage">Giảm giá: 33%</p>
                </div> 
                <a href="detail.html" class="btn">Xem Ngay</a>
            </div>
             `
    });
    loadvitamin.innerHTML=kq
}


// loggin

$(document).ready(function() {
  $("#login-toggle-btn").on("click", function() {
    $("#login-dialog").modal("show");
    $("#register-dialog").modal("hide"); // Ẩn hộp thoại đăng ký nếu đang hiển thị
  });
  $("#register-toggle-btn").on("click", function() {
    $("#register-dialog").modal("show");
    $("#login-dialog").modal("hide"); // Ẩn hộp thoại đăng nhập nếu đang hiển thị
  });
});



//xử lý login 

let apiUser="http://localhost:3000/user";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emaildk = document.querySelector("#emaildk");
const passworddk = document.querySelector("#passworddk");
const fullname=document.querySelector("#name");
const bntLogin = document.querySelector("#dangnhap_home");
const bntSignup = document.querySelector("#dangki_home");

const getUser = async () => {
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
  };
  
  // login
  bntLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || password.value == "") {
      alert("Please enter your username and password");
    } else {
      getUser().then((data) => {
        const user = data.find(
          (user) =>
            user.email == email.value && user.password == password.value
        );
        if (user) {
          alert("Login success");
        //   window.location.href = "todolist.html";
        } else {
          alert("Login failed");
        }
      });
    }
  });

bntSignup.addEventListener("click", (e) => {
    e.preventDefault();
    if (emaildk.value == "" || passworddk.value == "" ||fullname.value=="") {
      alert("Please enter your username and password");
    } else {
      const user = {
        name:fullname.value,
        email: emaildk.value,
        password: passworddk.value,
      };
      fetch(apiUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  });
  
  // search
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterProducts(searchTerm);
  });
  
  
  function filterProducts(searchTerm) {
    const tablewhey = document.querySelector('#tbl');
    tablewhey.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  
    fetch(urlwhey)
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(whey =>
          whey.name.toLowerCase().includes(searchTerm)
        );
        filteredData.forEach(whey => {
          renderwhey(whey);
        });
      });
  
    const tabletangsm = document.querySelector('#tbl');
    tabletangsm.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  
    fetch(urltangsm)
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(tangsm =>
          tangsm.name.toLowerCase().includes(searchTerm)
        );
        filteredData.forEach(tangsm => {
          rendertangsm(tangsm);
        });
      });
  
    const tablevitamin = document.querySelector('#tbl');
    tablevitamin.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  
    fetch(urlvitamin)
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(vitamin =>
          vitamin.name.toLowerCase().includes(searchTerm)
        );
        filteredData.forEach(vitamin => {
          rendervitamin(vitamin);
        });
      });
  }

  $("ul li:nth-child(1)").click(function(){
    $(".left-set img:nth-child(2)").animate({
      opacity: 1
    })
  })
  
  $("ul li:nth-child(2)").click(function(){
    $(".left-set img:nth-child(2)").animate({
      opacity: 0
    })
  })

//  detail design
// $(document).ready(function() {
//   var slider = $("#slider");
//   var thumb = $("#thumb");
//   var slidesPerPage = 4; //globaly define number of elements per page
//   var syncedSecondary = true;
//   slider.owlCarousel({
//       items: 1,
//       slideSpeed: 2000,
//       nav: false,
//       autoplay: false, 
//       dots: false,
//       loop: true,
//       responsiveRefreshRate: 200
//   }).on('changed.owl.carousel', syncPosition);
//   thumb
//       .on('initialized.owl.carousel', function() {
//           thumb.find(".owl-item").eq(0).addClass("current");
//       })
//       .owlCarousel({
//           items: slidesPerPage,
//           dots: false,
//           nav: true,
//           item: 4,
//           smartSpeed: 200,
//           slideSpeed: 500,
//           slideBy: slidesPerPage, 
//         navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
//           responsiveRefreshRate: 100
//       }).on('changed.owl.carousel', syncPosition2);
//   function syncPosition(el) {
//       var count = el.item.count - 1;
//       var current = Math.round(el.item.index - (el.item.count / 2) - .5);
//       if (current < 0) {
//           current = count;
//       }
//       if (current > count) {
//           current = 0;
//       }
//       thumb
//           .find(".owl-item")
//           .removeClass("current")
//           .eq(current)
//           .addClass("current");
//       var onscreen = thumb.find('.owl-item.active').length - 1;
//       var start = thumb.find('.owl-item.active').first().index();
//       var end = thumb.find('.owl-item.active').last().index();
//       if (current > end) {
//           thumb.data('owl.carousel').to(current, 100, true);
//       }
//       if (current < start) {
//           thumb.data('owl.carousel').to(current - onscreen, 100, true);
//       }
//   }
//   function syncPosition2(el) {
//       if (syncedSecondary) {
//           var number = el.item.index;
//           slider.data('owl.carousel').to(number, 100, true);
//       }
//   }
//   thumb.on("click", ".owl-item", function(e) {
//       e.preventDefault();
//       var number = $(this).index();
//       slider.data('owl.carousel').to(number, 300, true);
//   });


//       $(".qtyminus").on("click",function(){
//           var now = $(".qty").val();
//           if ($.isNumeric(now)){
//               if (parseInt(now) -1> 0)
//               { now--;}
//               $(".qty").val(now);
//           }
//       })            
//       $(".qtyplus").on("click",function(){
//           var now = $(".qty").val();
//           if ($.isNumeric(now)){
//               $(".qty").val(parseInt(now)+1);
//           }
//       });
// });

function goBack() {
  window.history.back();
}
  

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });