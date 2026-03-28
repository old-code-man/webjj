// 排行榜交互功能

// 切换排行榜区块的展开/收起
function toggleSection(sectionId) {
    const content = document.getElementById(`${sectionId}-content`);
    const header = content.previousElementSibling;

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        header.classList.add('collapsed');
    } else {
        content.classList.add('active');
        header.classList.remove('collapsed');
    }
}

// 筛选功能
document.addEventListener('DOMContentLoaded', function() {
    // 分类筛选
    const categoryButtons = document.querySelectorAll('[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮状态
            this.parentElement.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            // 筛选排行榜
            const category = this.dataset.category;
            const sections = document.querySelectorAll('.ranking-section');

            sections.forEach(section => {
                if (category === 'all') {
                    section.classList.remove('hidden');
                } else {
                    if (section.dataset.category === category) {
                        section.classList.remove('hidden');
                    } else {
                        section.classList.add('hidden');
                    }
                }
            });
        });
    });

    // 词性筛选
    const typeButtons = document.querySelectorAll('[data-type]');
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮状态
            this.parentElement.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            // 筛选项目
            const type = this.dataset.type;
            const items = document.querySelectorAll('.ranking-item');

            items.forEach(item => {
                const badge = item.querySelector('.badge');
                if (type === 'all') {
                    item.style.display = 'flex';
                } else {
                    const badgeType = badge.classList.contains(`badge-${type}`);
                    item.style.display = badgeType ? 'flex' : 'none';
                }
            });
        });
    });

    // URL参数处理（从首页快速访问）
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        // 自动激活对应的分类按钮
        const targetButton = document.querySelector(`[data-category="${category}"]`);
        if (targetButton) {
            targetButton.click();

            // 自动展开对应的排行榜
            const targetSection = document.querySelector(`.ranking-section[data-category="${category}"]`);
            if (targetSection) {
                const content = targetSection.querySelector('.ranking-content');
                if (!content.classList.contains('active')) {
                    content.classList.add('active');
                }
            }
        }
    } else {
        // 默认展开第一个排行榜
        const firstContent = document.querySelector('.ranking-content');
        if (firstContent) {
            firstContent.classList.add('active');
        }
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片
    document.querySelectorAll('.stat-card, .feature-card, .ranking-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // ESC 键收起所有排行榜
    if (e.key === 'Escape') {
        document.querySelectorAll('.ranking-content.active').forEach(content => {
            content.classList.remove('active');
            content.previousElementSibling.classList.add('collapsed');
        });
    }

    // 空格键展开/收起第一个可见的排行榜
    if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        const firstVisible = document.querySelector('.ranking-section:not(.hidden) .ranking-content');
        if (firstVisible) {
            const header = firstVisible.previousElementSibling;
            header.click();
        }
    }
});
