@echo off
chcp 65001 >nul
echo ========================================
echo   Arena.ai 排行榜一键获取脚本
echo ========================================
echo.

set PYTHON=C:\Users\li\.workbuddy\binaries\python\versions\3.14.3\python.exe
set API_SCRIPT=%~dp0arena_api.py
set API_DATA_DIR=%~dp0api_data
set JS_DIR=%~dp0js
set CSV_DIR=%~dp0csv

echo [使用免费 API 获取数据 - 无需代理]
echo.

echo.
echo [阶段 1/2] 通过 API 获取排行榜数据...
echo ---------------------------------------

echo [1/6] 获取 Code 排行榜...
%PYTHON% %API_SCRIPT% --name code -o %API_DATA_DIR%
echo.

echo [2/6] 获取 Text 排行榜...
%PYTHON% %API_SCRIPT% --name text -o %API_DATA_DIR%
echo.

echo [3/6] 获取 Text-to-Image 排行榜...
%PYTHON% %API_SCRIPT% --name text-to-image -o %API_DATA_DIR%
echo.

echo [4/6] 获取 Image-Edit 排行榜...
%PYTHON% %API_SCRIPT% --name image-edit -o %API_DATA_DIR%
echo.

echo [5/6] 获取 Text-to-Video 排行榜...
%PYTHON% %API_SCRIPT% --name text-to-video -o %API_DATA_DIR%
echo.

echo [6/6] 获取 Image-to-Video 排行榜...
%PYTHON% %API_SCRIPT% --name image-to-video -o %API_DATA_DIR%
echo.

echo.
echo [阶段 2/2] 转换为 JS 格式...
echo ---------------------------------------

REM 检查 csvtojsdata.py 是否存在并可处理 JSON
if exist "%~dp0convert-csv-to-js.js" (
    echo [可选] 运行 convert-csv-to-js.js...
)
echo.
node convert-json-to-js.js

echo ========================================
echo   全部完成！
echo   - API数据: %API_DATA_DIR%
echo   - JS数据:  %JS_DIR%
echo ========================================
echo.
echo API 数据格式: JSON
echo   - rank, model, vendor, license, score, ci, votes
echo.
pause
