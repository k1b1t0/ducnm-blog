# ducnm-blog

Personal blog & projects site built with [NueJS](https://nuejs.org).

## Scripts

### 1. Tạo bài viết mới (`./new.sh`)
Tự động chuyển tiêu đề tiếng Việt thành slug không dấu, thêm ngày hiện tại và frontmatter:
```bash
./new.sh "Tiêu đề bài viết" [tag1 tag2 ...]
# Ví dụ:
./new.sh "Học Nue cơ bản" dev web
```
-> Tạo file tại `blog/<slug>.md`.

### 2. Nén ảnh dán sang WebP (`./compress-pasted-images.sh`)
Tự động nén tất cả ảnh `.png`/`.jpg` trong `@shared/images/` sang `.webp` (chất lượng 82%), tự động cập nhật link trong các file `.md` và xóa ảnh gốc:
```bash
./compress-pasted-images.sh
```

### 3. Tạo tag Gallery ảnh (`./list-photos.sh`)
Tự nén ảnh trong thư mục album thành `.webp`, sinh cú pháp `[gallery ...]` và tự copy vào clipboard:
```bash
./list-photos.sh <tên-thư-mục-album>
# Ví dụ: ảnh để trong @shared/images/chuyen-di-da-lat/
./list-photos.sh chuyen-di-da-lat
```

## Chạy & Build

```bash
# Dev server
nue

# Build production
bun run build
# hoặc: nue build
```
