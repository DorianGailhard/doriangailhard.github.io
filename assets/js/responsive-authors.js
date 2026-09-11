function updateResponsiveAuthors(author) {
  const items = Array.from(author.querySelectorAll('.author-item'));
  if (items.length < 2) return;

  author.querySelector('.responsive-more-authors')?.remove();
  Array.from(author.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE && !node.textContent.trim())
    .forEach((node) => node.remove());
  items.forEach((item) => item.classList.remove('author-hidden'));

  const createMoreAuthors = (hiddenItems) => {
    const group = document.createElement('span');
    group.className = 'responsive-more-authors';
    group.append(', and ');

    const toggle = document.createElement('span');
    toggle.className = 'more-authors';
    const hiddenCount = hiddenItems.length;
    const collapsedText = `${hiddenCount} more author${hiddenCount === 1 ? '' : 's'}`;
    const expandedText = hiddenItems
      .map((item) => item.textContent.replace(/^[,\s]+/, '').trim())
      .join(', ');
    let expanded = false;

    const animateText = (text) => {
      toggle.textContent = '';
      let cursorPosition = 0;
      const textAdder = setInterval(() => {
        toggle.textContent = text.substring(0, cursorPosition + 1);
        cursorPosition += 1;
        if (cursorPosition === text.length) clearInterval(textAdder);
      }, 10);
    };

    toggle.textContent = collapsedText;
    toggle.title = `click to view ${collapsedText}`;
    toggle.addEventListener('click', () => {
      expanded = !expanded;
      const nextText = expanded ? expandedText : collapsedText;
      toggle.title = expanded ? 'click to show fewer authors' : `click to view ${collapsedText}`;
      animateText(nextText);
    });
    group.append(toggle);
    author.append(group);
    return group;
  };

  const originalWhiteSpace = author.style.whiteSpace;
  author.style.whiteSpace = 'nowrap';
  const hiddenItems = [];

  while (author.scrollWidth > author.clientWidth && items.length - hiddenItems.length > 1) {
    const item = items[items.length - hiddenItems.length - 1];
    item.classList.add('author-hidden');
    hiddenItems.unshift(item);
    author.querySelector('.responsive-more-authors')?.remove();
    createMoreAuthors(hiddenItems);
  }

  author.style.whiteSpace = originalWhiteSpace;
}

function fitPublicationAuthors() {
  document.querySelectorAll('.publications .author').forEach(updateResponsiveAuthors);
}

document.addEventListener('DOMContentLoaded', fitPublicationAuthors);
window.addEventListener('resize', fitPublicationAuthors);
if (document.fonts) document.fonts.ready.then(fitPublicationAuthors);
