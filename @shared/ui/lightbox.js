function initLightbox() {
  const dialog = document.querySelector('#lightbox-dialog')
  const lightboxImg = document.querySelector('#lightbox-img')
  const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'))

  // Chỉ hoạt động khi trang hiện tại có modal và có ảnh
  if (!dialog || !lightboxImg || !triggers.length) return

  let currentIndex = 0

  function showImage(index) {
    if (index < 0) index = triggers.length - 1
    if (index >= triggers.length) index = 0
    currentIndex = index
    lightboxImg.src = triggers[currentIndex].src
  }

  // Gán sự kiện click cho từng ảnh của trang hiện tại
  triggers.forEach((img, index) => {
    img.onclick = () => {
      showImage(index)
      dialog.showModal()
    }
  })

  // Các nút điều khiển trong dialog
  const prevBtn = dialog.querySelector('.lightbox-prev')
  const nextBtn = dialog.querySelector('.lightbox-next')
  const closeBtn = dialog.querySelector('.lightbox-close')

  if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); showImage(currentIndex - 1) }
  if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); showImage(currentIndex + 1) }
  if (closeBtn) closeBtn.onclick = () => dialog.close()

  dialog.onclick = (e) => {
    if (e.target === dialog) dialog.close()
  }

  // Bắt phím điều hướng (chỉ phản hồi khi dialog đang mở)
  window.onkeydown = (e) => {
    if (!dialog.open) return
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1)
    if (e.key === 'ArrowRight') showImage(currentIndex + 1)
    if (e.key === 'Escape') dialog.close()
  }
}

document.addEventListener('DOMContentLoaded', initLightbox)
window.addEventListener('nue:load', initLightbox)
window.addEventListener('route', initLightbox)