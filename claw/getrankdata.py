#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
HTML榜单数据提取工具
处理文件夹下的所有HTML文件，提取榜单信息并输出为CSV文件
"""

import os
import re
import csv
from pathlib import Path
from typing import List, Dict, Optional


def extract_text_from_html(html_content: str) -> str:
    """移除HTML标签，提取纯文本"""
    # 移除script和style标签及其内容
    text = re.sub(r'<script[^>]*>.*?</script>', '', html_content, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL | re.IGNORECASE)

    # 移除HTML标签
    text = re.sub(r'<[^>]+>', '\n', text)

    # 解码HTML实体
    text = text.replace('&nbsp;', ' ')
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('&amp;', '&')
    text = text.replace('&quot;', '"')

    return text


def extract_rank_data_method1(html_content: str) -> List[Dict[str, str]]:
    """
    方法1: 通过正则表达式从HTML中直接提取排名数据
    适用于简单的HTML表格结构
    """
    results = []

    # 尝试匹配表格行 <tr>...</tr>
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html_content, re.DOTALL | re.IGNORECASE)

    for row in rows:
        # 提取单元格内容
        cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.DOTALL | re.IGNORECASE)
        if len(cells) >= 2:
            # 清理单元格内容
            clean_cells = [re.sub(r'<[^>]+>', '', cell).strip() for cell in cells]
            clean_cells = [cell for cell in clean_cells if cell]

            if clean_cells and clean_cells[0].isdigit():
                # 假设第一列是排名
                rank_data = {
                    'rank': clean_cells[0],
                    'name': clean_cells[1] if len(clean_cells) > 1 else '',
                    'score': clean_cells[2] if len(clean_cells) > 2 else '',
                    'additional': ' | '.join(clean_cells[3:]) if len(clean_cells) > 3 else ''
                }
                results.append(rank_data)

    return results


def extract_rank_data_method2(html_content: str) -> List[Dict[str, str]]:
    """
    方法2: 从纯文本中提取排名数据
    适用于没有明显表格结构的页面
    """
    results = []

    # 提取纯文本
    text = extract_text_from_html(html_content)
    lines = text.split('\n')

    # 清理和过滤空行
    lines = [line.strip() for line in lines if line.strip()]

    # 查找排名模式
    i = 0
    while i < len(lines):
        line = lines[i]

        # 检查是否是纯数字（可能是排名）
        if line.isdigit() and int(line) < 10000:  # 假设排名不会超过10000
            rank = line

            # 收集后续的几行作为相关信息
            info_lines = []
            j = i + 1
            while j < len(lines) and j < i + 10:  # 最多查看后面10行
                next_line = lines[j]
                if next_line.isdigit() and int(next_line) == int(rank) + 1:
                    # 遇到下一个排名，停止
                    break
                if next_line and not next_line.startswith('http'):
                    info_lines.append(next_line)
                j += 1

            if info_lines:
                rank_data = {
                    'rank': rank,
                    'name': info_lines[0] if len(info_lines) > 0 else '',
                    'score': info_lines[1] if len(info_lines) > 1 else '',
                    'additional': ' | '.join(info_lines[2:5]) if len(info_lines) > 2 else ''
                }
                results.append(rank_data)
                i = j - 1

        i += 1

    return results


def extract_rank_data_method3(html_content: str) -> List[Dict[str, str]]:
    """
    方法3: 使用BeautifulSoup解析（如果可用）
    """
    try:
        from bs4 import BeautifulSoup

        soup = BeautifulSoup(html_content, 'html.parser')
        results = []

        # 尝试查找表格
        tables = soup.find_all('table')
        for table in tables:
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all(['td', 'th'])
                if len(cells) >= 2:
                    cell_texts = [cell.get_text(strip=True) for cell in cells]
                    if cell_texts and cell_texts[0].isdigit():
                        rank_data = {
                            'rank': cell_texts[0],
                            'name': cell_texts[1] if len(cell_texts) > 1 else '',
                            'score': cell_texts[2] if len(cell_texts) > 2 else '',
                            'additional': ' | '.join(cell_texts[3:]) if len(cell_texts) > 3 else ''
                        }
                        results.append(rank_data)

        # 如果没有找到表格，尝试查找列表
        if not results:
            lists = soup.find_all(['ul', 'ol', 'div'])
            for lst in lists:
                items = lst.find_all(['li', 'div'], recursive=False)
                for item in items:
                    text = item.get_text(separator='|', strip=True)
                    parts = [p.strip() for p in text.split('|')]
                    if parts and parts[0].isdigit():
                        rank_data = {
                            'rank': parts[0],
                            'name': parts[1] if len(parts) > 1 else '',
                            'score': parts[2] if len(parts) > 2 else '',
                            'additional': ' | '.join(parts[3:]) if len(parts) > 3 else ''
                        }
                        results.append(rank_data)

        return results

    except ImportError:
        print("BeautifulSoup not installed, skipping method 3")
        return []


def extract_rank_data(html_file: Path) -> List[Dict[str, str]]:
    """
    从HTML文件提取榜单数据
    尝试多种方法，返回最佳结果
    """
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # 尝试不同的提取方法
    results_method1 = extract_rank_data_method1(html_content)
    # results_method2 = extract_rank_data_method2(html_content)
    results_method3 = extract_rank_data_method3(html_content)
    # print(f" 提取到 {len(results_method1)}  {len(results_method2)} {len(results_method3)}条数据")

    # 选择结果最多的方法
    all_results = [
        ('Method 1 (Table)', results_method1),
        # ('Method 2 (Text)', results_method2),
        ('Method 3 (BeautifulSoup)', results_method3)
    ]

    best_method, best_results = max(all_results, key=lambda x: len(x[1]))
    #打印所有数量
    


    if best_results:
        print(f"  使用 {best_method} 提取到 {len(best_results)} 条数据")
    else:
        print(f"  警告: 未能提取到数据")

    return best_results


def save_to_csv(data: List[Dict[str, str]], output_file: Path):
    """将数据保存为CSV文件"""
    if not data:
        print(f"  没有数据可保存到 {output_file}")
        return

    # 获取所有可能的列名
    fieldnames = ['rank', 'name', 'score', 'additional']

    with open(output_file, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

    print(f"  成功保存 {len(data)} 条记录到 {output_file}")


def process_html_files(input_dir: str = '.', output_dir: Optional[str] = None):
    """
    处理目录下的所有HTML文件

    Args:
        input_dir: 输入目录路径，默认为当前目录
        output_dir: 输出目录路径，默认与输入目录相同
    """
    input_path = Path(input_dir)
    output_path = Path(output_dir) if output_dir else input_path

    # 确保输出目录存在
    output_path.mkdir(parents=True, exist_ok=True)

    # 查找所有HTML文件
    html_files = list(input_path.glob('*.html'))

    if not html_files:
        print(f"在 {input_path} 中未找到HTML文件")
        return

    print(f"找到 {len(html_files)} 个HTML文件")
    print("-" * 50)

    # 处理每个HTML文件
    for html_file in html_files:
        print(f"\n处理: {html_file.name}")

        try:
            # 提取数据
            rank_data = extract_rank_data(html_file)

            # 生成输出文件名
            output_file = output_path / f"{html_file.stem}.csv"

            # 保存为CSV
            save_to_csv(rank_data, output_file)

        except Exception as e:
            print(f"  错误: {e}")
            import traceback
            traceback.print_exc()

    print("\n" + "=" * 50)
    print("处理完成！")


if __name__ == '__main__':
    import sys

    # 获取命令行参数
    if len(sys.argv) > 1:
        input_directory = sys.argv[1]
        output_directory = sys.argv[2] if len(sys.argv) > 2 else None
    else:
        # 默认使用当前目录
        input_directory = '.'
        output_directory = None

    print("=" * 50)
    print("HTML榜单数据提取工具")
    print("=" * 50)
    print(f"输入目录: {input_directory}")
    print(f"输出目录: {output_directory if output_directory else '与输入目录相同'}")
    print()

    # 处理文件
    process_html_files(input_directory, output_directory)
