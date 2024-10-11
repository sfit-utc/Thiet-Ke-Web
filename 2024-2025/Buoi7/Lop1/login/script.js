const username = document.getElementById('username');
const password = document.getElementsByName('password');

function login() {
    let u = username.value.trim();
    let p = password[0].value;
    if (u == '' || p == '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }
    if (validateEmail(u) == false) {
        alert('Email không hợp lệ');
        return;
    }
    if (p.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự');
        return;
    }
    alert('Đăng nhập thành công');
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}