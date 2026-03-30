# -*- coding: utf-8 -*-
"""
arena_api.py - 使用免费 API 获取 Arena AI 排行榜数据

API 来源: https://github.com/oolong-tea-2026/arena-ai-leaderboards
文档: https://blog.wulong.dev/posts/i-built-an-auto-updating-archive-of-every-ai-arena-leaderboard/
"""

import argparse
import json
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime
import sys

# 强制 UTF-8 输出
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')


# API 配置
API_BASE = "https://api.wulong.dev/arena-ai-leaderboards/v1"
GITHUB_RAW_BASE = "https://raw.githubusercontent.com/oolong-tea-2026/arena-ai-leaderboards/main/data"

# 支持的排行榜列表
LEADERBOARDS = [
    "text",          # LLM聊天
    "code",          # 代码生成
    "vision",        # 多模态理解
    "text-to-image", # 图像生成
    "text-to-video", # 视频生成
    "image-to-video",# 图像动画
    "image-edit",    # 图像编辑
    "document",      # 文档理解
    "search",        # 搜索与RAG
    "video-edit",    # 视频编辑
]


def fetch_api(url: str) -> dict:
    """通过 API 获取数据"""
    print(f"      Request: {url}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_leaderboard(name: str, use_api: bool = True, date: str = None) -> dict:
    """获取单个排行榜数据"""
    if use_api:
        # 使用 REST API
        url = f"{API_BASE}/leaderboard?name={name}"
        if date:
            url += f"&date={date}"
        return fetch_api(url)
    else:
        # 直接从 GitHub 获取
        if not date:
            date = datetime.now().strftime("%Y-%m-%d")
        url = f"{GITHUB_RAW_BASE}/{date}/{name}.json"
        return fetch_api(url)


def fetch_all_leaderboards(boards: list = None, date: str = None) -> dict:
    """获取所有排行榜列表"""
    return fetch_api(f"{API_BASE}/leaderboards")


def save_json(data: dict, filepath: Path):
    """保存 JSON 数据"""
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    size = len(json.dumps(data, ensure_ascii=False))
    print(f"      Saved: {filepath} ({size:,} bytes)")


def print_leaderboard(data: dict, top_n: int = 10):
    """打印排行榜前 N 名"""
    meta = data.get("meta", {})
    models = data.get("models", [])

    leaderboard_name = meta.get('leaderboard', 'Unknown')
    source_url = meta.get('source_url', 'N/A')
    fetched_at = meta.get('fetched_at', 'N/A')

    print(f"\n  [Leaderboard: {leaderboard_name}] - {len(models)} models")
    print(f"  Source: {source_url}")
    print(f"  Fetched: {fetched_at}")
    print("  " + "-" * 60)
    print(f"  {'Rank':<6} {'Model':<35} {'Vendor':<12} {'ELO':<6}")
    print("  " + "-" * 60)

    for model in models[:top_n]:
        rank = model.get("rank", "-")
        name = model.get("model", "-")[:33]
        vendor = model.get("vendor", "-")[:10]
        score = model.get("score", "-")
        print(f"  #{rank:<5} {name:<35} {vendor:<12} {score}")
    print()


def main():
    parser = argparse.ArgumentParser(description="Arena AI Leaderboard Data Fetcher")
    parser.add_argument("--name", "-n", type=str, default=None,
                        help=f"Leaderboard name: {', '.join(LEADERBOARDS)}")
    parser.add_argument("--all", "-a", action="store_true",
                        help="Fetch all leaderboards")
    parser.add_argument("--list", "-l", action="store_true",
                        help="List all available leaderboards")
    parser.add_argument("--date", "-d", type=str, default=None,
                        help="Specify date (YYYY-MM-DD), default: today")
    parser.add_argument("--output", "-o", type=str, default="./api_data",
                        help="Output directory")
    parser.add_argument("--top", "-t", type=int, default=10,
                        help="Show top N (default 10)")
    parser.add_argument("--no-save", action="store_true",
                        help="Print only, don't save")
    parser.add_argument("--github", action="store_true",
                        help="Fetch directly from GitHub (not API)")

    args = parser.parse_args()

    output_dir = Path(args.output)
    use_api = not args.github

    # 列出所有排行榜
    if args.list:
        try:
            data = fetch_all_leaderboards()
            boards = data.get("leaderboards", {})
            print("\n[Available Leaderboards]")
            print(f"  Date: {data.get('date', 'N/A')}")
            print(f"  Total: {len(boards)} leaderboards\n")
            for name, info in boards.items():
                count = info.get("model_count", 0) if isinstance(info, dict) else 0
                print(f"  * {name:<20} - {count} models")
            print()
        except Exception as e:
            print(f"Fetch failed: {e}")
        return

    # 获取指定排行榜
    if args.name:
        names = [args.name]
    elif args.all:
        names = LEADERBOARDS
    else:
        names = ["text", "code", "text-to-image", "image-edit", "text-to-video", "image-to-video"]

    total = len(names)
    for i, name in enumerate(names, 1):
        print(f"\n[{i}/{total}] Fetching {name} leaderboard...")
        try:
            data = fetch_leaderboard(name, use_api=use_api, date=args.date)
            print_leaderboard(data, top_n=args.top)

            if not args.no_save:
                save_path = output_dir / f"{name}.json"
                save_json(data, save_path)
        except Exception as e:
            print(f"      [X] Fetch failed: {e}")
            # 备用：从 GitHub 获取
            if use_api:
                print(f"      Trying GitHub fallback...")
                try:
                    data = fetch_leaderboard(name, use_api=False, date=args.date)
                    print_leaderboard(data, top_n=args.top)
                    if not args.no_save:
                        save_path = output_dir / f"{name}.json"
                        save_json(data, save_path)
                except Exception as e2:
                    print(f"      [X] GitHub also failed: {e2}")

    print(f"\n{'='*60}")
    if not args.no_save:
        print(f"[OK] Complete! Data saved to: {output_dir.resolve()}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
