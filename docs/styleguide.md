---
tags: [ design ]
order: 0
description: A comprehensive Markdown and HTML living style guide based on Poor Man's Styleguide to test styles and typography.
---

# Style Guide

A living style guide to test and preview all typography, elements, and Markdown rendering on this site (inspired by *Poor Man's Style Guide*).

---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## Paragraphs & Text Formatting
 
This is a standard paragraph with **bold text**, *italicized text*, ***bold italicized text***, and ~~strikethrough text~~.
 
Code snippets inside paragraphs look like `const pi = 3.14159;` with monospace styling.
 
Chemical formula or notes can be written cleanly, and abbreviations like HTML and CSS are the core building blocks of the web.

---

## Links

- Standard link: [Visit Nue.js Official Documentation](https://nuejs.org)
- Relative link: [Return to Docs list](/docs/)
- Visited / Active link test: [Internal Home page](/)

---

## Blockquotes

> "Simplicity is about subtracting the obvious and adding the meaningful."
>
> — <cite>John Maeda, The Laws of Simplicity</cite>

### Nested Blockquote

> First level of quote with important context.
>
> > Nested blockquote reflecting a secondary thought or reference inside another discussion.

---

## Lists

### Unordered List
- First level item
  - Second level item (indented)
    - Third level item (deeply indented)
  - Another nested point
- Top level conclusion

### Ordered List
1. Discover requirements and set typographic baseline
2. Draft layouts using semantic HTML
   1. Define cascading layers (`@layer base, component`)
   2. Ensure high contrast and accessibility
3. Refine CSS custom properties and micro-interactions

### Task List (Checkboxes)
- [x] Set up Nue SSG project structure
- [x] Configure 70ch optimal reading width
- [ ] Build Masonry Photo Gallery
- [ ] Implement Dark / Light theme toggle

### Definition List (HTML DL)

<dl>
  <dt>Semantic HTML</dt>
  <dd>The use of HTML markup to reinforce the meaning of the content rather than just its appearance.</dd>

  <dt>SSG</dt>
  <dd>Static Site Generator — builds full HTML pages at build time for blistering fast performance.</dd>
</dl>

---

## Code & Syntax

Inline code looks like `const theme = localStorage.getItem('theme') || 'auto'` inside a paragraph.

### Code Block with Syntax Highlighting

```css
@layer base {
  body {
    max-width: 75ch;
    margin: 0 auto;
    line-height: 1.6;
    color: var(--base-800);
    font-family: system-ui, -apple-system, sans-serif;
  }
}
```

```javascript
// Theme toggle helper
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
```

---

## Tables

| Rank | Technology | Role | Status |
| :--- | :--- | :--- | :---: |
| 01 | HTML5 | Structure & Semantics | Standard |
| 02 | Modern CSS | Styling & Layouts | Standard |
| 03 | Vanilla JS | Progressive Enhancement | Optional |
| 04 | Nue.js | SSG & Static Bundling | Active |

---

## Images & Placeholders

[placeholder.blue height="260"]
*Caption: A sample responsive media placeholder styled with native CSS.*

[placeholder.yellow height="200"]

---

## Horizontal Rules

Three horizontal rules showing break aesthetics:

---

***

___

---

## Form Inputs & Interactive

Nue uses its own component/islands for dynamic interactive controls, but standard buttons and inputs can be styled with minimal classes:

[.thin]
  ### Text input
  [input type="text" placeholder="Enter your text..."]

  ### Email input
  [input type="email" placeholder="you@example.com"]

  ### Textarea
  [textarea placeholder="Additional notes..."]

---

## Form Controls

- [x] Completed task checkbox
- [ ] Incomplete task item
- Regular bullet point for comparison

---

## Horizontal Rules

A clean transition divider:

---

