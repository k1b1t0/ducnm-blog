let lightboxInitialized = false

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

  // Gắn event một lần duy nhất vào window / document
  if (!lightboxInitialized) {
    lightboxInitialized = true

    document.addEventListener('click', (e) => {
      const target = e.target.closest('.lightbox-trigger')
      if (target) {
        const currentDialog = document.querySelector('#lightbox-dialog')
        const currentImg = document.querySelector('#lightbox-img')
        if (!currentDialog || !currentImg) return

        const triggers = getTriggers()
        const index = triggers.indexOf(target)
        if (index !== -1) {
          showImage(index)
          if (typeof currentDialog.showModal === 'function') {
            currentDialog.showModal()
          }
        }
        return
      }

      // Nút điều khiển bên trong lightbox
      const currentDialog = document.querySelector('#lightbox-dialog')
      if (!currentDialog || !currentDialog.open) return

      if (e.target.closest('.lightbox-prev')) {
        e.stopPropagation()
        showImage(currentIndex - 1)
      } else if (e.target.closest('.lightbox-next')) {
        e.stopPropagation()
        showImage(currentIndex + 1)
      } else if (e.target.closest('.lightbox-close') || e.target === currentDialog) {
        currentDialog.close()
      }
    })

    window.addEventListener('keydown', (e) => {
      const currentDialog = document.querySelector('#lightbox-dialog')
      if (!currentDialog || !currentDialog.open) return
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1)
      if (e.key === 'ArrowRight') showImage(currentIndex + 1)
      if (e.key === 'Escape') currentDialog.close()
    })
  }
}

document.addEventListener('DOMContentLoaded', initLightbox)
window.addEventListener('nue:load', initLightbox)
initLightbox()