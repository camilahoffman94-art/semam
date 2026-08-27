window.SEMAM_CHARTS = {
  renderBars(target, rows) {
    const max = Math.max(...rows.map(r => r.value), 1);
    target.innerHTML = rows.map(r => `<div class="bar-row"><div class="bar-label" title="${r.label}">${r.label}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(5, r.value / max * 100)}%"></div></div><div class="bar-value">${r.value}</div></div>`).join('');
  }
};
