function initLightbox() {
  const dialog = document.querySelector('#lightbox-dialog')
  const lightboxImg = document.querySelector('#lightbox-img')
  const triggers = Array.from(document.querySelectorAll('article img:not(#lightbox-img)'))

  if (!dialog || !lightboxImg || !triggers.length) return

  let currentIndex = 0

  function showImage(index) {
    if (index < 0) index = triggers.length - 1
    if (index >= triggers.length) index = 0
    currentIndex = index
    lightboxImg.src = triggers[currentIndex].src
  }

  // Click event cho tung anh
  triggers.forEach((img, index) => {
    img.style.cursor = 'zoom-in'
    img.onclick = () => {
      showImage(index)
      dialog.showModal()
    }
  })

  // Nut dieu khien trong modal
  const prevBtn = dialog.querySelector('.lightbox-prev')
  const nextBtn = dialog.querySelector('.lightbox-next')
  const closeBtn = dialog.querySelector('.lightbox-close')

  // An nut dieu khien neu chi co 1 anh
  if (prevBtn) prevBtn.style.display = triggers.length > 1 ? '' : 'none'
  if (nextBtn) nextBtn.style.display = triggers.length > 1 ? '' : 'none'

  if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); showImage(currentIndex - 1) }
  if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); showImage(currentIndex + 1) }
  if (closeBtn) closeBtn.onclick = () => dialog.close()

  dialog.onclick = (e) => {
    if (e.target === dialog) dialog.close()
  }

  // Bat phim dieu huong (mui ten, esc)
  window.onkeydown = (e) => {
    if (!dialog.open) return
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1)
    if (e.key === 'ArrowRight') showImage(currentIndex + 1)
    if (e.key === 'Escape') dialog.close()
  }
}

document.addEventListener('DOMContentLoaded', initLightbox)
window.addEventListener('route', initLightbox)