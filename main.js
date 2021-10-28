//Fix color

var arrayColor = [
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
  "#1abc9c",
  "#2ecc71",
  "#2899ff",
  "#9b59b6",
  "#e67e22",
  "#ea2b2b",
];

// Tinh thoi gian

var phut, giay, realtime;

function tinh_thoi_gian() {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;

  var seconds = Math.round(timeDiff);
  realtime = seconds;

  phut = Math.floor(seconds / 60);
  giay = seconds % 60;

  if (phut < 10) {
    phut = "0" + phut;
  }
  if (giay < 10) {
    giay = "0" + giay;
  }

  // console.log(phut+':'+giay);

  // document.getElementById("thoi_gian").innerText='Thời gian làm bài là: ' +phut+' : '+giay;
  document.getElementById("hien_thi_thoi_gian").innerHTML = `${phut} : ${giay}`;
}

// myVar = setInterval(bat_dau, 1000);

//myVar= setInterval(vong_lap,1000)
var myVar;
var startTime;
function bat_dau() {
  startTime = new Date();
  myVar = setInterval(() => {
    tinh_thoi_gian();
  }, 1000);
}

var input = document.getElementById("ten_thi_sinh");
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    hien_thi_ten();
  }
});

var ten_cua_thi_sinh;

var chu_de = document.getElementById("chu_de").innerHTML;

var du_lieu_cau_hoi = document.getElementById("du_lieu_cau_hoi").innerHTML;

var du_lieu_loi_dich = document.getElementById("du_lieu_loi_dich").innerHTML;

var du_lieu_thu_tu_xao_tron = [];
for (i = 0; i < 61; i++) {
  du_lieu_thu_tu_xao_tron.push(i);
}
shuffle(du_lieu_thu_tu_xao_tron);

cau_hoi = du_lieu_cau_hoi.split(" ,");
loi_dich = du_lieu_loi_dich.split(" ,");

var score = 0;

var dashElement;
var thu_tu_cau_hoi = 0;

var senArr_goc;

function sap_xep_cau(sen) {
  shuffle(arrayColor);
  document.getElementById("hien_thi_diem_so").innerHTML = score;
  document.getElementById("phat_nhac").setAttribute("src", "./audio/" + thu_tu_cau_hoi + ".mp3");

  document.getElementById("btn").style.display = "flex";
  document.getElementById("btn_tiep_tuc_dung").style.display = "none";
  document.getElementById("btn_tiep_tuc_sai").style.display = "none";

  document.getElementById("dash").style.fontSize = "1rem";
  document.getElementById("container").style.fontSize = "1rem";

  var senTrim = sen.trim();
  senArr = senTrim.split(/\s+/);
  senArr_goc = senTrim.split(/\s+/);
  shuffle(senArr);

  while (JSON.stringify(senArr) === JSON.stringify(sen.split(" "))) {
    shuffle(senArr);
  }

  dashElement = "";

  var btnElements = "";

  for (var i = 0; i < senArr.length; i++) {
    btnElements += `<button style=${`background:${arrayColor[i]}`} onclick=${`btnClick(this.id)`} id=${`btn${i}`} >${
      senArr[i]
    }</button>`;
  }

  var container = document.getElementById("container");
  container.innerHTML = btnElements;

  check_over();
  while (check_over()) {
    let x = document.getElementById("container").style.fontSize.split("rem");
    let y = parseFloat(x[0]);
    y = y - 0.01;
    document.getElementById("container").style.fontSize = `${y}rem`;
    document.getElementById("dash").style.fontSize = `${y}rem`;
  }
}

var picked = 0;
function dashClick(clicked) {
  var buttons = document.getElementsByTagName("button");

  var dash = document.getElementById("dash");
  dashChild = dash.childNodes;

  for (i = 0; i < senArr.length; i++) {
    if (document.getElementById(clicked).innerText.trim() == buttons[i].innerText.trim()) {
      if (buttons[i].style.opacity === "0.1") {
        buttons[i].style.opacity = "1";
        hien_thi_mau = document.getElementById(clicked).style.backgroundColor;
        buttons[i].style.backgroundColor = `${hien_thi_mau}`;
        buttons[i].style.color = "white";
        buttons[i].style.pointerEvents = "auto";
        break;
      }
    }
  }

  document.getElementById(clicked).remove();
}

function btnClick(clicked) {
  var dashElement = document.createElement("div");
  var text = document.getElementById(clicked).innerText;

  hien_thi_mau = document.getElementById(clicked).style.backgroundColor;

  fix_hien_thi_mau = `background:${hien_thi_mau}`;

  dashElement.style.display = "inline";
  dashElement.innerHTML = `<li style='${fix_hien_thi_mau}' onclick=${`dashClick(this.id)`} id=${picked}>${text} </li>`; // add text at top of button

  document.getElementById("dash").appendChild(dashElement);

  picked++;

  document.getElementById(clicked).style.opacity = "0.1";
  document.getElementById(clicked).style.backgroundColor = "black";
  document.getElementById(clicked).style.color = "black";

  document.getElementById(clicked).style.pointerEvents = "none";
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

var phan_tram = 0;
function kiem_tra() {
  phan_tram++;
  tyle = (phan_tram / cau_hoi.length) * 100;
  document.getElementById("phan_tram").style.width = `${tyle}` + "%";

  ket_qua = document.getElementById("dash").textContent;
  if (cau_hoi[thu_tu_cau_hoi].split(" ").join("") === ket_qua.split(" ").join("")) {
    score++;
    document.getElementById("am_thanh_true_false").setAttribute("src", "./true.mp3");
    bang_true();
    document.getElementById("hien_thi_diem_so").innerHTML = score;
  } else {
    document.getElementById("am_thanh_true_false").setAttribute("src", "./false.mp3");
    bang_false();
  }
}

function bang_true() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("btn_tiep_tuc_dung").style.display = "flex";
  document.getElementById("btn_tiep_tuc_sai").style.display = "none";

  document.getElementById("container").style.display = "none";
  document.getElementById("bang_true_false").style.background = "var(--mau_nen)";
  document.getElementById("bang_true_false").style.display = "block";

  document.getElementById("bang_true_false").innerHTML = `<span> Correct </span>  <p>${loi_dich[thu_tu_cau_hoi]}<p>`;
  document.getElementById("nut_bam").style.background = "var(--mau_nen)";

  document.getElementById("bang_true_false").style.fontSize = "1rem";

  while (check_over_bang_true_fale()) {
    let x_true_false = document.getElementById("bang_true_false").style.fontSize.split("px");
    let y_true_false = parseFloat(x_true_false[0]);
    y_true_false = y_true_false - 0.1;
    document.getElementById("bang_true_false").style.fontSize = `${y_true_false}px`;
    console.log(y_true_false);
  }
}

function bang_false() {
  document.getElementById("nut_bam").style.background = "var(--mau_nen)";

  document.getElementById("btn").style.display = "none";
  document.getElementById("btn_tiep_tuc_dung").style.display = "none";
  document.getElementById("btn_tiep_tuc_sai").style.display = "flex";

  document.getElementById("container").style.display = "none";

  document.getElementById("bang_true_false").style.background = "var(--mau_nen)";

  document.getElementById(
    "bang_true_false"
  ).innerHTML = `<h1> Wrong </h1>  <p>${cau_hoi[thu_tu_cau_hoi]}</p>  <p>${loi_dich[thu_tu_cau_hoi]}</p>`;
  document.getElementById("bang_true_false").style.display = "block";
  document.getElementById("bang_true_false").style.fontSize = "1rem";

  // console.log(check_over_bang_true_fale())

  while (check_over_bang_true_fale()) {
    let x_true_false = document.getElementById("bang_true_false").style.fontSize.split("rem");
    let y_true_false = parseFloat(x_true_false[0]);
    y_true_false = y_true_false - 0.1;
    document.getElementById("bang_true_false").style.fontSize = `${y_true_false}rem`;
    console.log(y_true_false);
  }
}

function tiep_tuc_dung() {
  document.getElementById("dash").style.fontSize = "1rem";
  document.getElementById("container").style.fontSize = "1rem";

  document.getElementById("nut_bam").style.background = "var(--mau_nen)";

  document.getElementById("container").style.display = "block";
  document.getElementById("bang_true_false").style.display = "none";
  document.getElementById("dash").innerHTML = "";
  thu_tu_cau_hoi++;
  if (thu_tu_cau_hoi < cau_hoi.length) {
    sap_xep_cau(cau_hoi[thu_tu_cau_hoi]);
  } else end_game();
}

function tiep_tuc_sai() {
  document.getElementById("dash").style.fontSize = "1rem";
  document.getElementById("container").style.fontSize = "1rem";

  document.getElementById("nut_bam").style.background = "var(--mau_nen)";

  document.getElementById("container").style.display = "block";
  document.getElementById("bang_true_false").style.display = "none";
  document.getElementById("dash").innerHTML = "";
  thu_tu_cau_hoi++;
  if (thu_tu_cau_hoi < cau_hoi.length) {
    sap_xep_cau(cau_hoi[thu_tu_cau_hoi]);
  } else end_game();
}

function end_game() {
  document.getElementById("app").style.display = "none";
  document.getElementById("end_app").style.display = "block";
  document.getElementById("diem_so").innerHTML = "Score: " + `${score}` + "/" + cau_hoi.length;
  document.getElementById("tieu_de").innerHTML =
    `<span class="name">Name: ${ten_cua_thi_sinh} </span> ` + `<span class="name_tieu_de">${chu_de}</span>`;

  clearInterval(myVar);
  document.getElementById("ket_qua_time").innerHTML = `Time: ${phut}:${giay}`;

  send_data();
}

function click_share() {
  location.replace(
    "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fgeldunchannel&amp;src=sdkpreparse"
  );
}

kiem_tra_du_lieu_ten_thi_sinh();

function hien_thi_ten() {
  ten_cua_thi_sinh = document.getElementById("ten_thi_sinh").value;
  if (ten_cua_thi_sinh.length > 1) {
    localStorage.setItem("du_lieu_ten_thi_sinh", ten_cua_thi_sinh);
    document.getElementById("nhap_ten").style.display = "none";
    document.getElementById("app").style.display = "block";
    sap_xep_cau(cau_hoi[thu_tu_cau_hoi]);
    bat_dau();
  } else document.getElementById("thong_bao_ten").style.display = "flex";
}

function click_facebook() {
  location.replace("https://www.facebook.com/groups/geldunchannel");
}

function click_menu() {
  location.replace(`${document.getElementById("link_menu").innerHTML}`);
}

function check_over() {
  kiem_tra_man_hinh = document.getElementById("container");
  if (
    kiem_tra_man_hinh.scrollHeight > kiem_tra_man_hinh.clientHeight ||
    kiem_tra_man_hinh.scrollWidth > kiem_tra_man_hinh.clientWidth
  ) {
    // tran_man_hinh();
    return true;
  }

  return false;
}

function check_over_bang_true_fale() {
  kiem_tra_man_hinh = document.getElementById("bang_true_false");
  if (
    kiem_tra_man_hinh.scrollHeight > kiem_tra_man_hinh.clientHeight ||
    kiem_tra_man_hinh.scrollWidth > kiem_tra_man_hinh.clientWidth
  ) {
    // tran_man_hinh();
    return true;
  }

  return false;
}

function xoa_kiem_tra() {
  document.getElementById("thong_bao_ten").style.display = "none";
}

function kiem_tra_du_lieu_ten_thi_sinh() {
  if (localStorage.getItem("du_lieu_ten_thi_sinh")) {
    ten_cua_thi_sinh = localStorage.getItem("du_lieu_ten_thi_sinh");
    document.getElementById("nhap_ten").style.display = "none";
    document.getElementById("app").style.display = "block";
    sap_xep_cau(cau_hoi[thu_tu_cau_hoi]);
    bat_dau();
  } else {
    return;
  }
}

function send_data() {
  document.getElementById("send_form").innerHTML = `
    <input type="text" placeholder="Name Quiz" name="entry.1793627517" value="${chu_de}"><br>
        <input type="text" placeholder="Name User" name="entry.2109673701" value="${ten_cua_thi_sinh}"><br>
        <input type="text" placeholder="Score" name="entry.462995548"value="${score}/${cau_hoi.length}"><br>
        <input type="text" placeholder="Time" name="entry.2020970935"value="${phut}:${giay}"><br>
        <input type="text" placeholder="Real Time" name="entry.591785655"value="${realtime}"><br>
    
    `;
  document.myform.submit();
  console.log(realtime);
}
