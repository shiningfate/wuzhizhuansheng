(function () {
  function pct(current, max) {
    current = parseFloat(String(current || '').replace(/[^\d.]/g, ''));
    max = parseFloat(String(max || '').replace(/[^\d.]/g, ''));
    if (!max || isNaN(current)) return 0;
    return Math.max(0, Math.min(100, current / max * 100));
  }

  function safe(v, fallback) {
    v = String(v || '').trim();
    return v || fallback || '未知';
  }

  document.querySelectorAll('.mushoku-status-root').forEach(function (root) {
    if (root.dataset.rendered === '1') return;
    root.dataset.rendered = '1';

    var hpNow = safe(root.dataset.hpCurrent, '？');
    var hpMax = safe(root.dataset.hpMax, '？');
    var mpNow = safe(root.dataset.mpCurrent, '？');
    var mpMax = safe(root.dataset.mpMax, '？');

    var hpPct = pct(hpNow, hpMax);
    var mpPct = pct(mpNow, mpMax);

    var html = ''
      + '<div class="mushoku-status-card">'
      + '<details open>'
      + '<summary>主角状态</summary>'
      + '<div class="mushoku-status-section">'
      + '<div class="mushoku-row"><b>姓名：</b>' + safe(root.dataset.pcName) + '</div>'
      + '<div class="mushoku-row"><b>HP：</b>' + hpNow + ' / ' + hpMax + '</div>'
      + '<div class="mushoku-bar-shell"><div class="mushoku-bar-fill mushoku-hp" style="width:' + hpPct + '%"></div></div>'
      + '<div class="mushoku-row"><b>MP：</b>' + mpNow + ' / ' + mpMax + '</div>'
      + '<div class="mushoku-bar-shell"><div class="mushoku-bar-fill mushoku-mp" style="width:' + mpPct + '%"></div></div>'
      + '<div class="mushoku-row"><b>战力概评：</b>' + safe(root.dataset.pcPowerBrief, '未评估') + '</div>'
      + '</div>'
      + '</details>'

      + '<details>'
      + '<summary>目标NPC</summary>'
      + '<div class="mushoku-status-section">'
      + '<div class="mushoku-row"><b>姓名：</b>' + safe(root.dataset.targetName) + '</div>'
      + '<div class="mushoku-row"><b>立场：</b>' + safe(root.dataset.targetStance) + '</div>'
      + '<div class="mushoku-row"><b>危险：</b>' + safe(root.dataset.targetDanger) + '</div>'
      + '<div class="mushoku-row"><b>战力概评：</b>' + safe(root.dataset.targetPowerBrief, '未评估') + '</div>'
      + '</div>'
      + '</details>'

      + '<details>'
      + '<summary>三女主羁绊</summary>'
      + '<div class="mushoku-status-section">'
      + '<div class="mushoku-row"><b>洛琪希：</b>Lv.' + safe(root.dataset.roxyLv, '0') + '｜' + safe(root.dataset.roxyState, '暂无动向') + '</div>'
      + '<div class="mushoku-row"><b>希露菲：</b>Lv.' + safe(root.dataset.sylphyLv, '0') + '｜' + safe(root.dataset.sylphyState, '暂无动向') + '</div>'
      + '<div class="mushoku-row"><b>艾莉丝：</b>Lv.' + safe(root.dataset.erisLv, '0') + '｜' + safe(root.dataset.erisState, '暂无动向') + '</div>'
      + '</div>'
      + '</details>'

      + '<details>'
      + '<summary>当地传闻 / 新闻</summary>'
      + '<div class="mushoku-status-section">'
      + safe(root.dataset.localNews, '暂无新的当地传闻。')
      + '</div>'
      + '</details>'
      + '</div>';

    root.innerHTML = html;
  });
})();