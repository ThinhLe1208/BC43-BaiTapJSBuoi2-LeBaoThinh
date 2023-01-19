// Bài 1: Tính lương nhân viên

// Đầu vào:
//     + Lương 1 ngày là 100.000
//     + Số ngày làm do người dùng nhập

// Các bước xử lý:
//     + B1: Tạo biến luongNgay là lương 1 ngày và gán giá trị
//     + B2: Tạo biến luongTong là kết quả tổng lương tương úng số ngày và khởi tạo giá trị ban đầu là 0
//     + B3: Tạo biến luongTongOutput là thẻ span hiển thị kết quả
//     + B4: Tạo hàm tinhLuong:
//         .Tạo biến ngayLam là số ngày làm do người dùng nhập vào
//         .Tính luongTong = luongNgay * ngayLam
//         .In kết quả trong luongTongOutput

// Đầu ra:
//     + Tổng tiền lương nhân viên tương ứng số ngày làm

var luongNgay = 100000;
var luongTong = 0;
var luongTongOuput = document.getElementById('luongTongOutput');

function tinhLuong() {
    var ngayLam = Number(document.getElementById('ngayLam').value);

    luongTong = luongNgay * ngayLam;
    luongTongOutput.innerHTML = luongTong + ' VNĐ';
}


// Bài 2: Tính giá trị trung bình

// Đầu vào:
//     + 5 số thực do người dùng nhập

// Các bước xử lý:
//     + B1: Tạo biến trungBinh là giá trị trung bình 5 số và khởi tạo giá trị ban đầu là 0
//     + B2: Tạo biến trungBinhOutput là thẻ span hiển thị kết quả
//     + B3: Tạo hàm tinhTrungBinh:
//         .Tạo 5 biến so1, so2, so3, so4, so5 là 5 số thực do người dùng nhập
//         .Tính trungBinh = (so1 + so2 + so3 + so4 + so5) / 5
//         .In kết quả trong trungBinhOutout

// Đầu ra:
//     + Giá trị trung bình của 5 số thực

var trungBinh = 0;
var trungBinhOutout = document.getElementById('trungBinhOutout');

function tinhTrungBinh() {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var so4 = Number(document.getElementById('so4').value);
    var so5 = Number(document.getElementById('so5').value);

    trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    trungBinhOutout.innerHTML = trungBinh;
}


// Bài 3: Quy đổi tiền

// Đầu vào:
//     + Giá USD là 23.500 VND
//     + Số tiền USD do người dùng nhập

// Các bước xử lý:
//     + B1: Tạo biến tyGia là tỷ giá giữa USD và VNĐ và gán giá trị 
//     + B1: Tạo biến tienVND là số tiền VNĐ sau khi quy đổi và khởi tạo giá trị ban đầu là 0 
//     + B2: Tạo biến tienVNDOutput là thẻ span hiển thị kết quả
//     + B3: Tạo hàm quyDoiTien:
//         .Tạo biến tienUSD là số tiền USD người dùng nhập vào
//         .tính tienVND = tyGia * tienUSD
//         .In kết quả trong tienVNDOutput

// Đầu ra:
//     + Số tiền sau khi quy đổi ra VND

var tyGia = 23500;
var tienVND = 0;
var tienVNDOutput = document.getElementById('tienVNDOutput');

function quyDoiTien() {
    var tienUSD = Number(document.getElementById('tienUSD').value);

    tienVND = new Intl.NumberFormat('vn-VN').format(tyGia * tienUSD);
    tienVNDOutput.innerHTML = tienVND + ' VNĐ';
}


// Bài 4: Tính diện tích, chu vi hình chữ nhật

// Đầu vào:
//     + Chiều dài hình chữ nhật do người dùng nhập
//     + Chiều rộng hình chữ nhật do người dùng nhập

// Các bước xử lý:
//     + B1: Tạo biến dienTich, chuVi là diện tích và chu vi hình chữ nhật và khởi tạo giá trị ban đầu là 0
//     + B2: Tạo biến kichThuocOutput là thẻ span hiển thị kết quả
//     + B3: Tạo hàm tinhKichThuoc:
//         .Tạo biến chieuDai, chieuRong là chiều dài và chiều rộng của hình chữ nhật do người dùng nhập vào
//         .Tính dienTich = chieuDai * chieuRong
//         .Tính chuVi = (chieuDai + chieuRong) * 2;
//         .In kết quả trong kichThuocOutput

// Đầu ra:
//     + Diện tích hình chữ nhật
//     + Chu vi hình chữ nhật

var dienTich = 0;
var chuVi = 0;
var kichThuocOutput = document.getElementById('kichThuocOutput');

function tinhKichThuoc() {
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);

    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    kichThuocOutput.innerHTML = 'diện tích ' + dienTich + ' và chu vi ' + chuVi;
}


// Bài 5: Tính tổng 2 ký số

// Đầu vào:
//     + 1 số có 2 chữ số do người dùng nhập

// Các bước xử lý:
//     + B1: Tạo biến tongCong là tổng 2 ký số và khởi tạo giá trị ban đầu là 0
//     + B2: Tạo biến tinhTongOutput là thẻ span hiển thị kết quả
//     + B3: Tạo hàm tinhTong :
//         .Tạo biến soNhapVao là số 2 chữ số do người dùng nhập
//         .Tính soHangDonVi = soNhapVao % 10
//         .Tính soHangChuc = Math.floor(soNhapVao / 10)
//         .Tính tongCong = soHangDonVi + soHangChuc
//         .In kết quả tongCong ra console

// Đầu ra:
//     + Tổng 2 ký số của số vừa nhập

var tongCong = 0;
var tinhTongOutput = document.getElementById('tinhTongOutput');

function tinhTong() {
    var soNhapVao = Number(document.getElementById('soNhapVao').value);

    var soHangDonVi = soNhapVao % 10;
    var soHangChuc = Math.floor(soNhapVao / 10);

    tongCong = soHangDonVi + soHangChuc;
    tinhTongOutput.innerHTML = tongCong;
}
