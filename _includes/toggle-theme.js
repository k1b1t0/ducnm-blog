// const themes = [
//     {'name': 'system', 'text': 'System', 'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>'},
//     {'name': 'dark', 'text': 'Dark', 'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'},
//     {'name': 'light', 'text': 'Light', 'icon': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>.'}
// ]

function applyTheme(theme) {
    let dataTheme;
    if (theme === 'light' || theme === 'dark') {
        dataTheme = theme
    } else {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDarkMode) {
            dataTheme = "dark"
        } else {
            dataTheme = "light"
        }
    }

    localStorage.setItem("ducnm-blog-theme", theme);
    root.setAttribute("data-theme", dataTheme);
}

function getLabel(theme) {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
}

const toggleButton = document.querySelector('.theme-toggle');
const currentTheme = window.__THEME__ || localStorage.getItem("ducnm-blog-theme") || "system";
if (toggleButton) {
    toggleButton.textContent = getLabel(currentTheme);
}

const switchAudio = new Audio('/sounds/switch.wav');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-toggle').addEventListener('click', (e) => {
        switchAudio.play();
        let next;
        const current = localStorage.getItem("ducnm-blog-theme") || "system";
        if (current === "dark") {
            next = "light";
        } else if (current === "light") {
            next = "system";
        } else {
            next = "dark";
        }

        applyTheme(next);
        e.currentTarget.textContent = getLabel(next);
    })
})