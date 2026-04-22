---
title: Testing markdown
date: 2026-04-22
---

## 1. Tiêu đề (Headings)
Sử dụng dấu `#` để tạo tiêu đề. Số lượng dấu `#` tương ứng với cấp độ tiêu đề (từ 1 đến 6).

# Tiêu đề cấp 1 (H1)
## Tiêu đề cấp 2 (H2)
### Tiêu đề cấp 3 (H3)
#### Tiêu đề cấp 4 (H4)

---

## 2. Định dạng văn bản (Emphasis)
- **Chữ đậm**: dùng `**văn bản**` hoặc `__văn bản__`.
- *Chữ nghiêng*: dùng `*văn bản*` hoặc `_văn bản_`.
- ***Đậm và nghiêng***: dùng `***văn bản***`.
- ~~Gạch ngang~~: dùng `~~văn bản~~`.

---

## 3. Danh sách (Lists)

### Danh sách không thứ tự (Unordered List)
* Mục thứ nhất
* Mục thứ hai
    * Mục con cấp 1
    * Mục con cấp 2
* Mục thứ ba

### Danh sách có thứ tự (Ordered List)
1. Bước một
2. Bước hai
3. Bước ba

---

## 4. Danh sách công việc (Checkboxes/Task List)
- [x] Công việc đã hoàn thành
- [ ] Công việc chưa làm
- [ ] Việc cần làm tiếp theo

---

## 5. Trích dẫn (Blockquotes)
> Đây là một dòng trích dẫn.
>
> Bạn có thể viết nhiều dòng trong một khối trích dẫn.

---

## 6. Mã nguồn (Code)

### Code trên cùng một dòng (Inline Code)
Sử dụng dấu backtick để bao quanh code: `print("Hello World")`

### Khối mã nguồn (Code Block)
Sử dụng 3 dấu backtick (```) kèm tên ngôn ngữ:

```python
def hello_world():
    print("Chào mừng bạn đến với Markdown!")
````

---

## 7\. Đường kẻ ngang (Horizontal Rule)

Sử dụng ba dấu gạch ngang `---`:

---

## 8\. Liên kết và Hình ảnh (Links & Images)

  - **Liên kết**: [Tên hiển thị](https://www.google.com)
  - **Hình ảnh**: 

<img src="./icon.jpg" alt="abc">

-----

## 9\. Bảng (Tables)

| STT | Tên Công Cụ | Chức Năng |
| :-- | :--- | :--- |
| 1 | Markdown | Viết tài liệu nhanh |
| 2 | VS Code | Trình soạn thảo tốt |
| 3 | Github | Lưu trữ mã nguồn |

-----


## 10\. Ký tự đặc biệt (Escaping Characters)

Nếu bạn muốn hiển thị các ký tự đặc biệt của Markdown (như dấu \#, \*), hãy dùng dấu gạch chéo ngược `\` phía trước:
\* Đây không phải là danh sách, đây là dấu sao.