function initLightbox() {
  const dialog = document.querySelector('#lightbox-dialog')
  const lightboxImg = document.querySelector('#lightbox-img')

  if (!dialog || !lightboxImg) return

  let currentIndex = 0

  function getTriggers() {
    return Array.from(document.querySelectorAll('.lightbox-trigger'))
  }

  function showImage(index) {
    const triggers = getTriggers()
    if (!triggers.length) return
    if (index < 0) index = triggers.length - 1
    if (index >= triggers.length) index = 0
    currentIndex = index
    lightboxImg.src = triggers[currentIndex].src
  }

  // Click vào ảnh bất kỳ mở lightbox
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.lightbox-trigger')
    if (!target) return
    const triggers = getTriggers()
    const index = triggers.indexOf(target)
    if (index !== -1) {
      showImage(index)
      dialog.showModal()
    }
  })

  const prevBtn = dialog.querySelector('.lightbox-prev')
  const nextBtn = dialog.querySelector('.lightbox-next')
  const closeBtn = dialog.querySelector('.lightbox-close')

  if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); showImage(currentIndex - 1) }
  if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); showImage(currentIndex + 1) }
  if (closeBtn) closeBtn.onclick = () => dialog.close()

  dialog.onclick = (e) => {
    if (e.target === dialog) dialog.close()
  }

  window.addEventListener('keydown', (e) => {
    if (!dialog.open) return
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1)
    if (e.key === 'ArrowRight') showImage(currentIndex + 1)
  })
}

document.addEventListener('DOMContentLoaded', initLightbox)
window.addEventListener('nue:load', initLightbox)