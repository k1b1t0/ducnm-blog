# Dark Mode & Theme Toggle System

Tài liệu này giải thích cách hoạt động của hệ thống Dark Mode mới và các giải pháp đã áp dụng để loại bỏ hoàn toàn hiện tượng nhấp nháy (theme flash) khi tải trang, cũng như khắc phục hiện tượng giật navbar (layout shift).

---

## 1. Các Thay Đổi Chính

Chúng ta đã sửa đổi 3 file chính để thực hiện giải pháp tối ưu, đơn giản và tương thích tốt nhất:

### 1.1. [_includes/layouts/base.njk](file:///home/kibito/Desktop/repos/ducnm-blog/_includes/layouts/base.njk)
*   **Mặc định ban đầu:** Thêm thuộc tính `data-theme="system"` trực tiếp vào thẻ `<html>` làm giá trị mặc định.
*   **Script tối ưu ở Head:** Nhờ thêm thuộc tính `eleventy:ignore` vào thẻ `<script>`, Eleventy sẽ **không** trì hoãn (defer) hay gom nhóm đoạn script này vào bundle JS ở cuối trang nữa. Đoạn script này sẽ chạy **ngay lập tức và đồng bộ** trước khi trình duyệt hiển thị bất kỳ phần tử nào:
    1.  Lấy theme đã lưu từ localStorage (`system`, `light` hoặc `dark`). Để hỗ trợ các trình duyệt chặn localStorage ở chế độ ẩn danh hoặc bảo mật cao (như **Brave Mobile**), phần đọc localStorage này được bao bọc trong một khối `try...catch` riêng biệt. Nếu bị lỗi, theme sẽ tự động fallback về `"system"`.
    2.  Thiết lập thuộc tính duy nhất `data-theme` trên thẻ `<html>` bằng chính giá trị theme đã xác định.
    3.  Giải quyết theme thực tế (nếu là `system` thì kiểm tra `prefers-color-scheme: dark` của máy) để thiết lập thuộc tính CSS `color-scheme` trên thẻ `<html>` thông qua `style.colorScheme`. Điều này báo cho trình duyệt biết màu nền canvas mặc định cần vẽ trước cả khi phân tích xong file CSS.
*   **Nút Toggle mới:** Sử dụng 3 SVG icon tương ứng cho Sun (light), Moon (dark), và Monitor (system). Loại bỏ hoàn toàn script nội tuyến trong navbar.

### 1.2. [css/index.css](file:///home/kibito/Desktop/repos/ducnm-blog/css/index.css)
*   **Tái cấu trúc các biến màu theo thuộc tính `data-theme` duy nhất:**
    *   `:root` mặc định là **Light Theme** và thiết lập `color-scheme: light dark;`.
    *   Nếu hệ thống là tối (`prefers-color-scheme: dark`) và người dùng đang chọn chế độ `system` (`data-theme="system"`), chúng ta sẽ ghi đè các biến sang **Dark Theme** bằng bộ chọn `:root[data-theme="system"]`.
    *   Nếu người dùng chọn đích danh `light` hoặc `dark`, các bộ chọn `html[data-theme="light"]` và `html[data-theme="dark"]` sẽ tương ứng ghi đè.
*   **Hiển thị Icon theo cơ chế CSS-only:**
    *   Ẩn toàn bộ icon theo mặc định.
    *   Sử dụng CSS để chỉ hiển thị icon tương ứng với giá trị thuộc tính `data-theme` hiện tại (`system`, `dark`, hoặc `light`).
*   **Định dạng nút Toggle và Navbar:**
    *   Căn giữa các phần tử trong navbar theo chiều dọc (`align-items: center` trên lớp `.nav`).
    *   Sửa hiệu ứng hover của nút bật tắt: đổi màu nền (`background-color`) sang màu đỏ/cam (`var(--text-color-link)`) và màu icon sang màu nền trang (`var(--background-color)`), giống hệt hiệu ứng hover của các đường link khác trên trang.

### 1.3. [_includes/toggle-theme.js.njk](file:///home/kibito/Desktop/repos/ducnm-blog/_includes/toggle-theme.js.njk)
*   Hàm `applyTheme(theme)` cập nhật duy nhất thuộc tính `data-theme` thành giá trị được chọn (`system`, `light`, hoặc `dark`) và cập nhật `style.colorScheme` thực tế cho trình duyệt.
*   **Resiliency (Khả năng phục hồi):** Đọc theme hiện tại bằng `document.documentElement.getAttribute("data-theme")` thay vì đọc trực tiếp từ `localStorage`. Cách này giúp trạng thái hoạt động chính xác theo cơ chế in-memory/DOM kể cả khi lưu trữ `localStorage` của trình duyệt bị tắt/bị lỗi (như trên Brave Mobile).

---

## 2. Điểm Khác Biệt So Với Cách Cũ

1.  **Dùng `<script eleventy:ignore>`:** Cách cũ của bạn đặt script trong `<head>`, nhưng do Eleventy tự động gom tất cả script vào bundle chung và tải trễ (`defer`), script khởi tạo thực chất bị đẩy xuống cuối trang. Do đó, trang luôn được vẽ bằng theme mặc định trước rồi mới chạy script để đổi theme gây ra hiện tượng nháy. Sử dụng `eleventy:ignore` giúp script chạy tức thời ngay trong head.
2.  **Sử dụng thuộc tính duy nhất `data-theme`:** Thay vì tạo ra thêm thuộc tính phụ như `data-user-theme`, chúng ta gán trực tiếp giá trị lựa chọn của người dùng (`system`, `light`, `dark`) vào `data-theme`. CSS sẽ tự giải quyết trường hợp hệ thống (`system`) dựa vào `@media (prefers-color-scheme: dark)`.
3.  **Thiết lập `color-scheme` tức thời:** Bằng cách gán `style.colorScheme` trong script head, trình duyệt xác định được ngay màu nền canvas mặc định, tránh việc nhấp nháy màu trắng hoặc đen khi tải trang.
