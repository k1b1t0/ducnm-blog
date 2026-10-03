// Trinh phat nhac ky uc don gian (~35 dong)
let currentTrack = null

function initMemoryMusic() {
  const player = document.getElementById('sticky-bottom-player')
  const iframe = document.getElementById('yt-hidden-frame')
  const marquee = document.getElementById('player-marquee-text')
  const tracks = document.querySelectorAll('.memory-track')
  if (!player || !tracks.length) return

  // Tat / Dong phat nhac
  player.querySelector('#player-close-btn').onclick = () => {
    iframe.src = ''
    player.classList.remove('active', 'paused')
    if (currentTrack) currentTrack.classList.remove('is-playing')
    currentTrack = null
  }

  // Nut tam dung / tiep tuc
  player.querySelector('#player-toggle-btn').onclick = () => {
    if (!currentTrack) return
    const isPaused = player.classList.toggle('paused')
    currentTrack.classList.toggle('is-playing', !isPaused)
    const cmd = isPaused ? 'pauseVideo' : 'playVideo'
    iframe.contentWindow?.postMessage(`{"event":"command","func":"${cmd}","args":""}`, '*')
  }

  // Bam vao nut tren tung the bai hat
  tracks.forEach(track => {
    track.querySelector('.track-play-btn').onclick = () => {
      if (currentTrack === track) {
        player.querySelector('#player-toggle-btn').click()
        return
      }
      if (currentTrack) currentTrack.classList.remove('is-playing')
      currentTrack = track
      track.classList.add('is-playing')

      const song = track.dataset.song || 'Dang phat nhac...'
      marquee.innerHTML = `<b>${song}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>${song}</b>`

      const id = track.dataset.yt
      const isList = id.startsWith('PL') || id.length > 20
      iframe.src = isList
        ? `https://www.youtube-nocookie.com/embed/videoseries?list=${id}&autoplay=1&enablejsapi=1`
        : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&enablejsapi=1`

      player.classList.remove('paused')
      player.classList.add('active')
    }
  })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMemoryMusic)
else initMemoryMusic()
window.addEventListener('route', initMemoryMusic)
