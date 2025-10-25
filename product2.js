// Đặt JS này trong file script.js hoặc thẻ <script>
function filterCars() {
    // 1. Lấy giá trị tìm kiếm và chuẩn hóa (viết thường, bỏ khoảng trắng dư)
    const searchInput = document.getElementById('searchInput');
    const filterValue = searchInput.value.toLowerCase().trim();

    // 2. Lấy danh sách tất cả các thẻ xe
    const carCards = document.querySelectorAll('.car-card');
    let visibleCarCount = 0;

    // 3. Lặp qua từng thẻ xe để kiểm tra điều kiện lọc
    carCards.forEach(card => {
        // Lấy tất cả thông tin liên quan từ các thuộc tính data-*, text content, v.v.
        // Đây là thông tin sẽ được dùng để lọc
        const make = card.dataset.make.toLowerCase();
        const model = card.dataset.model.toLowerCase();
        const year = card.dataset.year;
        const type = card.dataset.type.toLowerCase();
        const fuel = card.dataset.fuel.toLowerCase();
        const location = card.dataset.location.toLowerCase();

        // Nối tất cả thông tin thành một chuỗi duy nhất để dễ tìm kiếm
        const cardText = `${make} ${model} ${year} ${type} ${fuel} ${location}`;

        // Kiểm tra xem chuỗi tìm kiếm có nằm trong thông tin của xe không
        if (cardText.includes(filterValue)) {
            // Hiển thị thẻ xe
            card.classList.remove('hidden');
            visibleCarCount++;
        } else {
            // Ẩn thẻ xe
            card.classList.add('hidden');
        }
    });

    // 4. Cập nhật số lượng xe đang hiển thị
    document.getElementById('carCount').textContent = visibleCarCount;
}

// Gọi hàm lần đầu để đảm bảo số lượng xe hiển thị ban đầu là chính xác
document.addEventListener('DOMContentLoaded', () => {
    // Chỉ cần đảm bảo số lượng được cập nhật sau khi tải trang
    const initialCarCount = document.querySelectorAll('.car-card').length;
    document.getElementById('carCount').textContent = initialCarCount;
});
// Bắt sự kiện click cho tất cả thẻ car-card
document.querySelectorAll(".car-card").forEach(card => {
  card.addEventListener("click", () => {
    const make = card.getAttribute("data-make");
    const model = card.getAttribute("data-model");

    // Tạo URL đích, ví dụ: bmw-x5.html
    const url = `manager/${make}-${model}.html`.toLowerCase();

    // Chuyển hướng
    window.location.href = url;
  });
});
const openBtn = document.getElementById("openLoginBtn");
openBtn.addEventListener("click", () => {
    window.location.href = "account/account.html"; 
});
