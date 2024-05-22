// Hàm để bật/tắt hiển thị của form ứng tuyển
function toggleForm() {
    var form = document.getElementById("ung-tuyen-form");
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
    } else {
        form.classList.add("hidden");
    }
}

// Ẩn form đăng ký khi trang web được tải
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("ung-tuyen-form");
    form.classList.add("hidden");

    // Xử lý việc gửi form
    var formInputs = document.getElementById("ung-tuyen-form-inputs");
    formInputs.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        var ten = document.getElementById("ten").value;
        var dia_chi = document.getElementById("dia_chi").value;
        var so_dien_thoai = document.getElementById("so_dien_thoai").value;
        
        // Gửi thông tin đến server (hoặc xử lý theo nhu cầu)
        console.log("Tên:", ten);
        console.log("Địa chỉ:", dia_chi);
        console.log("Số điện thoại:", so_dien_thoai);
        
        // Sau khi xử lý, có thể ẩn form lại
        toggleForm();
    });
});
