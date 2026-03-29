// 榜单交互脚本 - 支持静态数据加载和动态排名

// 全局变量
let currentData = [];
let currentFilter = 'all';

// 渲染表格数据
function renderTable(data, filterType = 'all') {
    const tbody = document.querySelector('.ranking-table tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    currentData = data;
    currentFilter = filterType;

    // 筛选数据
    let filteredData = data;
    if (filterType === 'chinese') {
        // 筛选中国公司
        filteredData = data.filter(item => item.isChinese === true);
    } else if (filterType !== 'all') {
        // 原有的 region 筛选（兼容旧榜单）
        filteredData = data.filter(item => item.region === filterType);
    }

    // 检查是否需要重新排名（从 window.rankingData 获取设置）
    const shouldRerank = window.rankingData && window.rankingData.rerankAfterFilter !== false;

    // 重新计算排名或使用原始排名
    let newRank = 1;
    filteredData.forEach(item => {
        if (shouldRerank) {
            item.displayRank = newRank;
            newRank++;
        } else {
            // 使用原始 rank 字段
            item.displayRank = item.rank;
        }

        if (item.children) {
            // 如果有筛选，也要筛选 children
            let filteredChildren = item.children;
            if (filterType === 'chinese') {
                filteredChildren = item.children.filter(child => child.isChinese === true);
            } else if (filterType !== 'all') {
                filteredChildren = item.children.filter(child => child.region === filterType);
            }

            filteredChildren.forEach(child => {
                if (shouldRerank) {
                    child.displayRank = newRank;
                    newRank++;
                } else {
                    // 使用原始 rank 字段
                    child.displayRank = child.rank;
                }
            });

            // 如果筛选后没有 children，移除 collapsible 标记
            if (filteredChildren.length === 0) {
                item.filteredChildren = [];
                item.hasFilteredChildren = false;
            } else {
                item.filteredChildren = filteredChildren;
                item.hasFilteredChildren = true;
            }
        }
    });

    // 渲染行
    filteredData.forEach(item => {
        const row = createRow(item, false);
        tbody.appendChild(row);

        // 渲染子行（使用筛选后的 children）
        const childrenToRender = item.filteredChildren || item.children || [];
        if (childrenToRender.length > 0) {
            childrenToRender.forEach(child => {
                const childRow = createRow(child, true, item.displayRank);
                tbody.appendChild(childRow);
            });
        }
    });

    // 更新标题和图标（如果数据中有）
    if (data.title) {
        const titleElement = document.querySelector('.ranking-card-title span:last-child');
        if (titleElement) titleElement.textContent = data.title;
    }
    if (data.icon) {
        const iconElement = document.querySelector('.ranking-card-icon');
        if (iconElement) iconElement.textContent = data.icon;
    }

    notifyResize();
}

// 创建表格行
function createRow(item, isSub = false, parentRank = null) {
    const row = document.createElement('tr');
    row.className = isSub ? 'rank-row sub-row' : 'rank-row';

    // 检查是否有可显示的 children
    const hasChildren = item.hasFilteredChildren !== undefined
        ? item.hasFilteredChildren
        : (item.collapsible && item.children && item.children.length > 0);

    if (hasChildren) row.classList.add('collapsible');
    if (item.region) row.dataset.region = item.region;
    if (parentRank) row.dataset.parent = parentRank;

    // 排名列
    const rankCell = document.createElement('td');
    rankCell.className = 'col-rank';
    const rankBadge = document.createElement('span');
    rankBadge.className = 'rank-badge';
    if (isSub) {
        rankBadge.classList.add('sub');
    } else {
        if (item.displayRank === 1) rankBadge.classList.add('gold');
        else if (item.displayRank === 2) rankBadge.classList.add('silver');
        else if (item.displayRank === 3) rankBadge.classList.add('bronze');
    }
    rankBadge.textContent = item.displayRank;
    rankCell.appendChild(rankBadge);
    row.appendChild(rankCell);

    // 模型/名称列
    const nameCell = document.createElement('td');
    nameCell.className = item.model ? 'col-model' : 'col-name';
    const displayName = item.model || item.name;
    if (isSub) {
        nameCell.classList.add('sub-name');
        nameCell.innerHTML = `<span class="sub-indent">└─</span>${displayName}`;
    } else {
        // 检查是否有可显示的 children（考虑筛选）
        if (hasChildren) {
            const childCount = item.filteredChildren
                ? item.filteredChildren.length
                : (item.children ? item.children.length : 0);
            nameCell.innerHTML = `
                <span class="expand-icon">▶</span>
                <span class="model-name">${displayName}</span>
                <span class="series-count">+${childCount}</span>
            `;
        } else {
            nameCell.textContent = displayName;
        }
    }
    row.appendChild(nameCell);

    // 公司列（如果存在）
    if (item.company !== undefined) {
        const companyCell = document.createElement('td');
        companyCell.className = 'col-company';
        companyCell.textContent = item.company;
        row.appendChild(companyCell);
    }

    // 评分列
    const scoreCell = document.createElement('td');
    scoreCell.className = 'col-score';
    scoreCell.textContent = item.score;
    row.appendChild(scoreCell);

    // 使用量列（如果存在）
    if (item.usage !== undefined) {
        const usageCell = document.createElement('td');
        usageCell.className = 'col-usage';
        usageCell.textContent = item.usage;
        row.appendChild(usageCell);
    }

    // 趋势列（如果存在）
    if (item.trend !== undefined) {
        const trendCell = document.createElement('td');
        trendCell.className = 'col-trend';
        const trendSpan = document.createElement('span');
        trendSpan.className = item.trend_type === 'up' ? 'trend-up' :
                              item.trend_type === 'down' ? 'trend-down' : 'trend-stable';
        trendSpan.textContent = item.trend;
        trendCell.appendChild(trendSpan);
        row.appendChild(trendCell);
    }

    // 添加点击事件
    if (hasChildren) {
        row.onclick = function() {
            toggleCollapse(this);
        };
    }

    return row;
}

// 切换折叠/展开
function toggleCollapse(row) {
    row.classList.toggle('expanded');

    // 找到所有相关的子行
    const parentRank = row.querySelector('.rank-badge').textContent;
    let nextRow = row.nextElementSibling;

    while (nextRow && nextRow.classList.contains('sub-row')) {
        if (nextRow.dataset.parent === parentRank) {
            nextRow.classList.toggle('show');
        }
        nextRow = nextRow.nextElementSibling;
    }

    setTimeout(notifyResize, 300);
}

// 通知父窗口调整iframe高度
function notifyResize() {
    const height = document.body.scrollHeight;
    if (window.parent !== window) {
        window.parent.postMessage({
            type: 'resize',
            height: height
        }, '*');
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 显示加载状态
    const tbody = document.querySelector('.ranking-table tbody');
    if (tbody) {
        const colCount = document.querySelectorAll('.ranking-table thead th').length || 4;
        tbody.innerHTML = `<tr><td colspan="${colCount}" class="loading"><div class="loading-spinner"></div><div style="margin-top: 10px;">加载数据中...</div></td></tr>`;
    }

    // 从全局变量获取数据（通过外部script标签加载的数据文件）
    if (window.rankingData && window.rankingData.data) {
        // 渲染表格
        renderTable(window.rankingData.data);

        // 筛选按钮事件
        const filterButtons = document.querySelectorAll('.filter-tag');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 更新按钮状态
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // 获取筛选类型
                const filterType = this.dataset.filter;

                // 重新渲染表格
                renderTable(window.rankingData.data, filterType);
            });
        });
    } else {
        if (tbody) {
            const colCount = document.querySelectorAll('.ranking-table thead th').length || 4;
            tbody.innerHTML = `<tr><td colspan="${colCount}" class="empty-state"><div class="empty-state-icon">❌</div><div>数据加载失败</div></td></tr>`;
        }
    }

    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // ESC 键收起所有展开的行
        if (e.key === 'Escape') {
            document.querySelectorAll('.rank-row.expanded').forEach(row => {
                row.classList.remove('expanded');
            });
            document.querySelectorAll('.rank-row.sub-row.show').forEach(row => {
                row.classList.remove('show');
            });
            setTimeout(notifyResize, 300);
        }

        // 空格键展开/收起所有可折叠行
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            const collapsibleRows = document.querySelectorAll('.rank-row.collapsible:not(.hidden)');
            const hasExpanded = Array.from(collapsibleRows).some(row => row.classList.contains('expanded'));

            collapsibleRows.forEach(row => {
                if (hasExpanded) {
                    row.classList.remove('expanded');
                } else {
                    row.classList.add('expanded');
                }

                // 处理对应的子行
                const parentRank = row.querySelector('.rank-badge').textContent;
                let nextRow = row.nextElementSibling;
                while (nextRow && nextRow.classList.contains('sub-row')) {
                    if (nextRow.dataset.parent === parentRank) {
                        if (hasExpanded) {
                            nextRow.classList.remove('show');
                        } else {
                            nextRow.classList.add('show');
                        }
                    }
                    nextRow = nextRow.nextElementSibling;
                }
            });

            setTimeout(notifyResize, 300);
        }
    });

    // 监听内容变化
    const resizeObserver = new ResizeObserver(notifyResize);
    resizeObserver.observe(document.body);

    // 初始化高度
    notifyResize();
});

// 双击表头展开/收起所有
document.addEventListener('dblclick', function(e) {
    if (e.target.closest('.ranking-card-header')) {
        const collapsibleRows = document.querySelectorAll('.rank-row.collapsible:not(.hidden)');
        const hasExpanded = Array.from(collapsibleRows).some(row => row.classList.contains('expanded'));

        collapsibleRows.forEach(row => {
            if (hasExpanded) {
                row.classList.remove('expanded');
            } else {
                row.classList.add('expanded');
            }

            // 处理对应的子行
            const parentRank = row.querySelector('.rank-badge').textContent;
            let nextRow = row.nextElementSibling;
            while (nextRow && nextRow.classList.contains('sub-row')) {
                if (nextRow.dataset.parent === parentRank) {
                    if (hasExpanded) {
                        nextRow.classList.remove('show');
                    } else {
                        nextRow.classList.add('show');
                    }
                }
                nextRow = nextRow.nextElementSibling;
            }
        });

        setTimeout(notifyResize, 300);
    }
});
