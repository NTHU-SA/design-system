# design-system

工具型產品用的視覺設計系統：白底、中性灰文字、紫調灰表面，主色為紫色。

| 檔案 | 內容 |
|---|---|
| [`DESIGN.md`](DESIGN.md) | 設計規格本體，採用 [DESIGN.md 格式](https://github.com/google-labs-code/design.md)：開頭 YAML 是 token，內文是規則與理由 |
| [`lab/palette-lab.html`](lab/palette-lab.html) | 色彩測試頁：把主視覺色延伸成 8 色分類色與狀態色，放進產品畫面亮暗並排比較。直接用瀏覽器開啟 |
| [`lab/hero-type-lab.html`](lab/hero-type-lab.html) | 字體與主視覺測試頁：比較系統字與 Noto Sans TC、中文字級、按鈕尺寸，以及首頁主視覺的各種組合 |
| [`notes/berkeleytime-study.md`](notes/berkeleytime-study.md) | 研究筆記：從 Berkeleytime 原始碼萃取出的排版與元件設計，是這份規格的起點 |

## 檢查 DESIGN.md

```bash
npx -p @google/design.md designmd lint DESIGN.md
```

目前預期是 0 個錯誤、0 個對比警告。剩下的警告都是「顏色沒有被元件引用」，因為暗色模式、邊框、狀態色、分類色與主視覺色塊的用法主要寫在內文規則裡。

## 在專案中使用

把 `DESIGN.md` 複製到專案根目錄，再在 `CLAUDE.md`、`AGENTS.md` 或 `.cursorrules` 加一行：「做 UI 之前先讀 DESIGN.md」。
