function initBlogSearch() {
    const input = document.querySelector("#blog-search-input")
    if (!input) {
        return
    }

    function filterPost(query) {
        const q = (query || '').toLowerCase().trim()
        const url = new URL(window.location)
        if (q) {
            url.searchParams.set('query', q)
        } else {
            url.searchParams.delete('query')
        }
        window.history.replaceState({}, '', url)

        postList = document.querySelectorAll("table tr").forEach(row => {
            // Neu dang tim kiem (q) va noi dung row chua q
            row.hidden = (q && !row.textContent.toLowerCase().includes(q))
        })
    }

    input.oninput = (e) => filterPost(e.target.value)

    // Chay lan dau neu da co query trong URL
    const initialQuery = new URLSearchParams(window.location.search).get('query')
    if (initialQuery) {
        input.value = initialQuery
        filterPost(initialQuery)
    }

}

// Chay lan dau moi khi chuyen trang
document.addEventListener('DOMContentLoaded', initBlogSearch)
window.addEventListener('nue:load', initBlogSearch)
