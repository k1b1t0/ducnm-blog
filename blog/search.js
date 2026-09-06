function initBlogSearch() {
  const input = document.querySelector('#blog-search-input')
  if (!input) return

  function filterPost(query) {
    const q = (query || '').toLowerCase().trim()
    const url = new URL(window.location)

    // Set param tren URL 
    if (q) url.searchParams.set('query', q)
    else url.searchParams.delete('query')
    window.history.replaceState({}, '', url)

    // An cac file khong lien quan
    const rows = document.querySelectorAll('table tr')
    rows.forEach(row => {
      const match = !q || row.textContent.toLowerCase().includes(q)
      row.style.display = match ? '' : 'none'
    })
  }

  input.oninput = (e) => filterPost(e.target.value)

  // Neu da co san query
  const initialQuery = new URLSearchParams(window.location.search).get('query')
  if (initialQuery) {
    input.value = initialQuery
    filterPost(initialQuery)
  }
}

document.addEventListener('DOMContentLoaded', initBlogSearch)
window.addEventListener('route', initBlogSearch)
