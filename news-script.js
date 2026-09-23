// AI 最新资讯页交互脚本 - 纯静态渲染，数据来自 data/news.js
// 三个模块：最新资讯 / 名人言论 / 新产品

// HTML 转义，避免数据中的特殊字符破坏结构
function escapeHtml(value) {
    return String(value === undefined || value === null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// 日期倒序（最新的排在最前）
function byDateDesc(a, b) {
    return String(b.date || '').localeCompare(String(a.date || ''));
}

// 外部链接：有 url 才渲染“查看原文”
function sourceLink(item) {
    if (!item.url) return '';
    return `<a class="news-source-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">查看原文 ↗</a>`;
}

/* ------------------------- 模块一：最新资讯 ------------------------- */

let allNews = [];
let currentCategory = 'all';

function renderNewsList(category) {
    const list = document.getElementById('news-list');
    if (!list) return;

    currentCategory = category || 'all';

    const items = currentCategory === 'all'
        ? allNews
        : allNews.filter(item => item.category === currentCategory);

    if (items.length === 0) {
        list.innerHTML = '<div class="news-empty">暂无该分类的资讯</div>';
        return;
    }

    list.innerHTML = items.map(item => `
        <article class="news-item">
            <div class="news-item-meta">
                <span class="news-badge news-badge-${escapeHtml(categoryClass(item.category))}">${escapeHtml(item.category || '资讯')}</span>
                <time class="news-date">${escapeHtml(item.date || '')}</time>
            </div>
            <h3 class="news-item-title">${escapeHtml(item.title || '')}</h3>
            <p class="news-item-summary">${escapeHtml(item.summary || '')}</p>
            <div class="news-item-footer">
                <span class="news-source">来源：${escapeHtml(item.source || '网络')}</span>
                ${sourceLink(item)}
            </div>
        </article>
    `).join('');
}

// 分类名 -> class 后缀（中文分类映射为稳定的英文样式名）
function categoryClass(category) {
    const map = {
        '模型发布': 'model',
        '产品发布': 'product',
        '开源生态': 'opensource',
        '产业动态': 'industry',
        '研究进展': 'research'
    };
    return map[category] || 'default';
}

function renderCategoryFilters() {
    const box = document.getElementById('news-filters');
    if (!box) return;

    const categories = [];
    allNews.forEach(item => {
        if (item.category && categories.indexOf(item.category) === -1) {
            categories.push(item.category);
        }
    });

    const chips = ['all'].concat(categories);
    box.innerHTML = chips.map((category, index) => `
        <button class="news-filter-tag${index === 0 ? ' active' : ''}"
                data-category="${escapeHtml(category)}"
                type="button">${category === 'all' ? '全部' : escapeHtml(category)}</button>
    `).join('');

    box.querySelectorAll('.news-filter-tag').forEach(button => {
        button.addEventListener('click', function () {
            box.querySelectorAll('.news-filter-tag').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderNewsList(this.dataset.category);
        });
    });
}

/* ------------------------- 模块二：名人言论 ------------------------- */

function renderQuotes() {
    const box = document.getElementById('quote-list');
    if (!box || !window.newsData) return;

    const quotes = (window.newsData.quotes || []).slice().sort(byDateDesc);

    if (quotes.length === 0) {
        box.innerHTML = '<div class="news-empty">暂无言论数据</div>';
        return;
    }

    box.innerHTML = quotes.map(item => `
        <figure class="quote-card">
            <div class="quote-mark">“</div>
            <blockquote class="quote-text">${escapeHtml(item.quote || '')}</blockquote>
            <figcaption class="quote-footer">
                <span class="quote-avatar">${escapeHtml((item.name || '?').slice(0, 1))}</span>
                <span class="quote-person">
                    <span class="quote-name">${escapeHtml(item.name || '')}</span>
                    <span class="quote-role">${escapeHtml(item.role || '')}</span>
                </span>
                <span class="quote-date">${escapeHtml(item.date || '')}</span>
            </figcaption>
            ${item.url ? `<a class="quote-source-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">来源：${escapeHtml(item.source || '网络')} ↗</a>` : ''}
        </figure>
    `).join('');
}

/* ------------------------- 模块三：新产品 ------------------------- */

function statusClass(status) {
    const map = {
        '已发布': 'released',
        '正式版': 'released',
        '已开源': 'opensource',
        '即将发售': 'upcoming',
        '即将发布': 'upcoming',
        '预览版': 'preview'
    };
    return map[status] || 'default';
}

function renderProducts() {
    const box = document.getElementById('product-list');
    if (!box || !window.newsData) return;

    const products = (window.newsData.products || []).slice().sort(byDateDesc);

    if (products.length === 0) {
        box.innerHTML = '<div class="news-empty">暂无产品数据</div>';
        return;
    }

    box.innerHTML = products.map(item => `
        <article class="product-card">
            <div class="product-card-head">
                <h3 class="product-name">${escapeHtml(item.name || '')}</h3>
                <span class="product-status product-status-${escapeHtml(statusClass(item.status))}">${escapeHtml(item.status || '')}</span>
            </div>
            <div class="product-meta">
                <span class="product-company">${escapeHtml(item.company || '')}</span>
                <span class="product-dot">·</span>
                <span class="product-category">${escapeHtml(item.category || '')}</span>
                <span class="product-dot">·</span>
                <time class="product-date">${escapeHtml(item.date || '')}</time>
            </div>
            <p class="product-desc">${escapeHtml(item.description || '')}</p>
            ${item.url ? `<a class="product-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">查看详情 ↗</a>` : ''}
        </article>
    `).join('');
}

/* ------------------------- 初始化 ------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    // 更新时间
    const dateEl = document.getElementById('update-date');
    if (dateEl && window.newsData && window.newsData.updated) {
        dateEl.textContent = '(更新于' + window.newsData.updated + ')';
    }

    if (!window.newsData) {
        ['news-list', 'quote-list', 'product-list'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = '<div class="news-empty">数据加载失败，请检查 data/news.js</div>';
        });
        return;
    }

    allNews = (window.newsData.news || []).slice().sort(byDateDesc);

    renderCategoryFilters();
    renderNewsList('all');
    renderQuotes();
    renderProducts();
});
