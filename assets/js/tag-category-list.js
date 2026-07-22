function buildBalancedKeywordRows(container) {
  const items = Array.from(container.querySelectorAll('.tag-category-item'));
  if (items.length < 2) return;

  const createSeparator = () => {
    const separator = document.createElement('span');
    separator.className = 'tag-category-separator';
    separator.setAttribute('aria-hidden', 'true');
    separator.textContent = '•';
    return separator;
  };

  const appendItems = (parent, rowItems) => {
    rowItems.forEach((item, index) => {
      parent.appendChild(item);
      if (index < rowItems.length - 1) parent.appendChild(createSeparator());
    });
  };

  container.replaceChildren();
  appendItems(container, items);
  container.classList.remove('is-balanced');

  const availableWidth = container.clientWidth;
  const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
  const widths = items.map((item) => item.getBoundingClientRect().width);
  const separator = container.querySelector('.tag-category-separator');
  const separatorWidth = separator ? separator.getBoundingClientRect().width : 0;
  const separatorStyle = separator ? getComputedStyle(separator) : null;
  const separatorMargins = separatorStyle ? parseFloat(separatorStyle.marginLeft) + parseFloat(separatorStyle.marginRight) : 0;
  const betweenItemsWidth = separatorWidth + separatorMargins + 2 * gap;
  const totalWidth = widths.reduce((sum, width) => sum + width, 0) + betweenItemsWidth * (items.length - 1);
  const minimumRows = Math.max(1, Math.ceil(totalWidth / availableWidth));

  let bestLayout;
  for (let rowCount = minimumRows; rowCount <= items.length && !bestLayout; rowCount++) {
    const baseSize = Math.floor(items.length / rowCount);
    const largerRows = items.length % rowCount;
    const candidates = [];

    function addCandidate(row, remainingLargerRows, sizes) {
      if (row === rowCount) {
        const rowWidths = [];
        let offset = 0;
        for (const size of sizes) {
          const width = widths.slice(offset, offset + size).reduce((sum, itemWidth) => sum + itemWidth, 0) + betweenItemsWidth * (size - 1);
          rowWidths.push(width);
          offset += size;
        }
        if (rowWidths.every((width) => width <= availableWidth)) candidates.push({ sizes, score: Math.max(...rowWidths) - Math.min(...rowWidths) });
        return;
      }
      const rowsLeft = rowCount - row - 1;
      if (remainingLargerRows > 0) addCandidate(row + 1, remainingLargerRows - 1, [...sizes, baseSize + 1]);
      if (remainingLargerRows < rowsLeft + 1) addCandidate(row + 1, remainingLargerRows, [...sizes, baseSize]);
    }

    addCandidate(0, largerRows, []);
    candidates.sort((a, b) => a.score - b.score);
    bestLayout = candidates[0];
  }

  if (!bestLayout || bestLayout.sizes.length === 1) return;

  const fragment = document.createDocumentFragment();
  let offset = 0;
  for (const size of bestLayout.sizes) {
    const row = document.createElement('div');
    row.className = 'tag-category-row';
    appendItems(row, items.slice(offset, offset + size));
    fragment.appendChild(row);
    offset += size;
  }
  container.replaceChildren(fragment);
  container.classList.add('is-balanced');
}

function balanceKeywordRows() {
  document.querySelectorAll('.tag-category-items').forEach(buildBalancedKeywordRows);
}

document.addEventListener('DOMContentLoaded', balanceKeywordRows);
window.addEventListener('resize', balanceKeywordRows);
if (document.fonts) document.fonts.ready.then(balanceKeywordRows);
