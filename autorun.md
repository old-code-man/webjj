更新流程：
step：1  执行 scrape_arena.bat 爬取json，生成./data 下的js数据
step：3 检测榜单，如果每个榜单数据小于10则判定异常
step：4 检测没问题的话，执行git 更新和push   ./data下的js数据