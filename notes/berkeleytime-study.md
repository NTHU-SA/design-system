# Berkeleytime 視覺設計系統（design.md）

> 從原始碼（`packages/theme`、`apps/frontend/src`）萃取，並對照 berkeleytime.com 正式站（2026-10）的實際畫面整理而成。
> 目的是學習它的**排版邏輯**與**元件設計規劃**，所以除了「數值是多少」，也會寫出「為什麼這樣設計」。

---

## 0. 一句話總結

**中性灰階 + 單一藍色強調色 + 細邊框取代陰影 + Inter 可變字體 + 32px 統一控制項高度 + 固定寬度側欄配上自適應內容區。**

它走的是 Linear / Vercel 那一派的「工具型介面」：畫面幾乎全是黑白灰，唯一的品牌色是 `blue-500`。真正的彩色只留給「資料」，例如成績、名額、課表色塊，所以資料一眼就跳出來。

---

## 1. 樣式架構（設計怎麼落地到程式）

| 層 | 技術 | 負責什麼 |
|---|---|---|
| 設計 token | CSS 自訂屬性（`ThemeProvider.scss`） | 色盤、字級、字重、語意色、明暗模式 |
| 版面原語 | Radix Themes 的 `Flex / Box / Grid / Container`（只載入 `layout.css`） | gap / padding 間距刻度 |
| 互動原語 | Radix UI primitives（Dialog、Dropdown、Tooltip、Select…） | 無障礙、鍵盤、定位 |
| 元件外觀 | SCSS Modules（`Component.module.scss`） | 每個元件自己的樣式，只引用語意 token |
| 狀態樣式 | `data-*` 屬性（`data-variant`、`data-state`、`data-disabled`） | 變體與狀態不靠 className 組合 |
| 圖示 | `iconoir-react`，全域預設 16×16、stroke 2 | 線性圖示，風格一致 |

**值得學的點：** 元件 SCSS 幾乎只寫 `var(--heading-color)`、`var(--border-color)` 這種**語意**變數，很少直接寫 `#fff` 或 `--zinc-900`。所以切換明暗模式時，元件程式碼一行都不用改。

---

## 2. 色彩

### 2.1 三層 token 結構

```
原始色盤 (primitive)        明暗對應 (theme-specific)       語意 (semantic，元件只用這層)
--neutral-900        →    --light-heading-color     →    --heading-color
--zinc-900           →    --dark-heading-color(white) ↗
```

切換方式：`body[data-theme="light|dark"]` 套用 `light-theme` / `dark-theme` mixin。沒設定時跟隨 `prefers-color-scheme`。使用者的選擇存在 `localStorage.theme`，選單提供 Light / Dark / System 三個選項。任何元素也都能加 `data-theme` 做局部強制，例如首頁導覽列的反白版本。

### 2.2 原始色盤

直接沿用 **Tailwind CSS v3 的完整色盤**：22 個色相 × `50–950`。

`slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose`

每個色相另外有 `-500-20`，也就是 500 色加 20% 透明度（`#RRGGBB33`），專門給 Badge 當底色。

### 2.3 語意色（核心，最值得抄）

| 語意 token | 用途 | Light | Dark |
|---|---|---|---|
| `--background-color` | 頁面底色 | `white` | `zinc-900` `#18181b` |
| `--foreground-color` | 卡片、面板、導覽列等「浮在上面」的表面 | `white` | `zinc-900` |
| `--backdrop-color` | 更深一層的底，例如頂部公告列 | `neutral-100` `#f5f5f5` | `zinc-950` `#09090b` |
| `--border-color` | **所有**分隔線、外框 | `rgb(0 0 0 / 10%)` | `rgb(255 255 255 / 10%)` |
| `--heading-color` | 標題、主要文字、hover 後的文字 | `neutral-900` `#171717` | `white` |
| `--description-color` / `--secondary-color` | 次要內文（描述段落） | `neutral-700` `#404040` | `zinc-300` `#d4d4d8` |
| `--paragraph-color` | 一般說明文字、未選取的連結與圖示 | `neutral-500` `#737373` | `zinc-400` `#a1a1aa` |
| `--label-color` | 最弱的文字：placeholder、群組標籤 | `neutral-400` `#a3a3a3` | `zinc-500` `#71717a` |
| `--button-hover-color` | 中性元素 hover 底色 | `neutral-100` | `zinc-800` |
| `--button-active-color` | 中性元素按下底色 | `neutral-200` | `zinc-700` |
| `--tooltip-color` | Tooltip 底色 | `white` | `zinc-950` |
| `--cancel-color` | 取消、危險動作 | `red-500` | `red-950` |
| `--blue-hover` | 藍色元素 hover | `blue-600`（變深） | `blue-400`（變亮） |

**文字的四階灰度**是整個系統層級感的來源：

```
heading (最深)  →  description/secondary  →  paragraph  →  label (最淺)
neutral-900         neutral-700                neutral-500     neutral-400
```

**設計觀察：**
- 邊框用**黑或白的 10% 透明**，不用固定灰色。同一個值疊在任何底色上都自然，明暗模式都適用。
- Light 模式用 `neutral`（純灰），Dark 模式用 `zinc`（帶一點冷藍）。暗色帶冷調比較不髒。
- Light 模式下 background 和 foreground 都是白色，層次全靠邊框區分。Dark 模式也一樣，兩者同為 `zinc-900`。這是「扁平、用線分區」的風格。

### 2.4 強調色與功能色

| 角色 | 色 | 用在哪 |
|---|---|---|
| **唯一品牌/互動色** | `blue-500` `#3b82f6` | Primary 按鈕、focus 外框、選取中的 tab 底線、Switch 開啟、Checkbox 勾選、連結 |
| 按下 | `blue-700` | Primary 按鈕 active |
| 「NEW」標記 | `indigo-500` | 導覽列新功能小膠囊 |
| 危險 | `red-500 / 600 / 700` | 刪除按鈕（預設 / hover / active） |
| 好 / 中 / 差 | `emerald-500` / `amber-500` / `rose-500` | 平均成績（A / B / 其他）、選課名額（充足 / 快滿 / 滿） |
| 系統狀態燈 | `green-500` / `yellow-500` / `blue-500` | 正常 / 有問題 / 維護中（頁尾） |

### 2.5 Badge 配色公式

```css
color:            var(--{color}-500);      /* filled 變體 */
background-color: var(--{color}-500-20);   /* 同色 20% 透明 */
/* border 變體：文字與 1px 邊框改用 --{color}-badge，
   light 模式 = 500，dark 模式 = 300（暗底上提亮） */
```

一個公式就能產生 22 種顏色的標籤，明暗模式都能讀。

### 2.6 課表配色（資料色）

課表與自訂事件**不開放全部 22 色**，只挑 10 個彼此差異大、冷暖交錯的色相，依加入順序循環使用：

`Blue → Amber → Violet → Emerald → Rose → Cyan → Pink → Lime → Fuchsia → Gray`

相鄰兩堂課永遠一冷一暖，不會撞色。

---

## 3. 字體排印

### 3.1 字體

- **Inter**，從 `rsms.me/inter/inter.css` 載入；瀏覽器支援時改用 **InterVariable**（可變字重）。
- 品牌字與標題開啟 OpenType 特性，這是它「看起來不像預設 Inter」的關鍵：

```css
font-feature-settings: "cv05", "cv06", "cv12", "cv13", "ss07";
/* cv05 小寫 l 帶尾鉤 | cv06 簡化 u | cv12 緊湊 f | cv13 緊湊 t | ss07 方形標點 */
```

用在：Logo「Berkeleytime」、卡片標題、課程頁大標，以及 `<Text variant="feature">`。

### 3.2 字級

**定義好的 token：**

| Token | 值 |
|---|---|
| `--text-12` | 12px |
| `--text-14` | 14px（內文預設） |
| `--text-16` | 16px |
| `--text-18` | 18px |
| `--text-28` | 28px |

**實際使用的完整字級階梯**（含 token 以外的硬寫值）：

| 大小 | 字重 | 用途 |
|---|---|---|
| 48px | 600 | 首頁 Hero 大標（手機 32px），行高 1.1 |
| 32px | 500 | 首頁各區塊標題（About / Sponsors / Get Involved），行高 1.25 |
| 24px | 580 | Logo「Berkeleytime」 |
| 24px | 660 | 課程詳細頁大標（如「MATH 54 #02」） |
| 24px | 500 | 手機版全螢幕選單連結 |
| 20px | 580 | Dialog 標題 |
| 18px | 500 | Accordion 標題 |
| 16px | 660 | 卡片標題 |
| 16px | 400 | 段落內文（行高 1.5～1.6） |
| **14px** | 400 / 500 | **最常用**：說明文字、標籤、下拉選項、Badge、頁尾連結 |
| **13px** | 500 | **控制項**：按鈕、導覽列項目、公告列 |
| 12px | 400 / 500 | 課表事件、小型 CTA |
| 11px | 600 | 全大寫分組標題（`letter-spacing: 0.5px`），計數 Badge |
| 10px | 700 | 「NEW」膠囊 |

`<Text>` 元件另有一套 1–9 號字級：`12 / 14 / 16 / 18 / 20 / 24 / 28 / 35 / 60`。

### 3.3 字重

標準 `400 / 500 / 600 / 700`，加上兩個**可變字體才有的非標準字重**：

- **580**：Logo、Dialog 標題。比 500 重、比 600 輕，品牌感溫和。
- **660**：卡片與課程大標。比 600 更有份量，但不到 bold 的粗。

> 學習重點：可變字體讓你用 580、660 這種中間值，做出「有層級但不吵」的標題。

### 3.4 行高規則

| 情境 | 行高 |
|---|---|
| 控制項、標籤、單行標題 | `1`（高度交給元件的固定 height 控制） |
| 一般 `<Text>` | `1.25` |
| 段落、描述 | `1.5` |
| Accordion 內文 | `1.6` |
| Hero 大標 | `1.1` |

---

## 4. 間距與尺寸

### 4.1 間距刻度（Radix Themes）

版面用 `<Flex gap="3" p="5">` 這種數字刻度：

| 刻度 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| px | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 64 |

使用頻率：`gap="2"`(8px) 最多，其次是 `gap="3"`(12px) 和 `gap="4"`(16px)；面板內距多用 `p="5"`(24px)。

**本質上是 4px 網格**，常見值：`4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64`。

### 4.2 統一的控制項尺寸

| 元素 | 高 | 水平內距 |
|---|---|---|
| Button / IconButton / Input / MenuItem | **32px** | 12px（IconButton 為 32×32） |
| 下拉選單項目 | 30px | 12px |
| Select 觸發器 | 最小 44px | 16px（垂直 8px） |
| Checkbox | 16×16 | — |
| Switch | 27×16，圓鈕 12px | — |
| 公告列 | 最小 40px | 12px 16px |

> 學習重點：所有「可點擊的一列」都是 32px 高、12px 左右內距，放在同一排時天然對齊。

### 4.3 頁面留白

| 位置 | 值 |
|---|---|
| 首頁區塊、頁尾的左右留白 | 40px |
| 首頁區塊上下間距 | 48px |
| Hero 內距 | 48px（≤992px 時 24px） |
| 頁尾上下內距 | 64px，欄距 64px（手機 48px） |
| 導覽列內距 | 12px |
| Dialog 距螢幕邊緣最少 | 24px（`max-width: calc(100% - 48px)`） |

---

## 5. 圓角、邊框、陰影

### 5.1 圓角

| 半徑 | 用途 |
|---|---|
| **4px** | 控制項：按鈕、輸入框、Badge、Tooltip、Select、課表事件、Skeleton（最常用） |
| 6px | 選單內的項目、小型按鈕、計數 Badge |
| **8px** | 容器：卡片、Dialog、下拉選單、頁尾狀態徽章 |
| 30px / 999px | 膠囊：PillSwitcher、NEW 標記、Switch |

**原則：** 越小、越可互動的東西圓角越小（4），越大的容器圓角越大（8），膠囊型切換器全圓。

### 5.2 邊框優先，陰影克制

幾乎所有區隔都用 `1px solid var(--border-color)`，連卡片也是邊框加 `0 陰影`（正式站實測課程卡片 `box-shadow: none`）。

陰影**只用在浮層**，而且很淡：

| 元素 | 陰影 |
|---|---|
| Tooltip | `0 0 12px rgba(0,0,0,.06)` |
| Dropdown | `0 4px 12px rgba(0,0,0,.10)` |
| Select 選單 | `0 8px 16px rgba(0,0,0,.12)` |
| 暗色模式選單 | `0 12px 24px rgba(0,0,0,.5)` 加 `0 0 0 1px rgba(255,255,255,.08)` 光環 |
| PillSwitcher 選中 | 三層疊加：`0 3px 2px /.06`、`0 3px 8px /.15`、`0 0 1px /.04` |

> 暗色模式陰影看不見，所以改用加深陰影加上一圈 8% 白色描邊來凸顯浮層。這是很實用的技巧。

---

## 6. 動態（Motion）

| 情境 | 時長 / 曲線 |
|---|---|
| **預設**：hover 時的顏色、底色、邊框 | **100ms ease-in-out**（全站最多） |
| Dialog 遮罩淡入淡出 | 150ms ease-in / ease-out |
| Dialog 本體 | 150ms，`scale(0.9) → 1` 加淡入（jumpIn） |
| 左側抽屜滑入 | 300ms `cubic-bezier(0.16, 1, 0.3, 1)`（快出慢停） |
| 左側抽屜滑出 | 250ms `cubic-bezier(0.4, 0, 1, 1)` |
| Dropdown 出現 | 400ms 同上 ease-out-expo，**只位移 2px** 加淡入 |
| Accordion 展開 | 200ms ease-out，箭頭轉 180° |
| Skeleton 呼吸 | 2s，opacity 1 → 0.6 → 1 |
| Loading 轉圈 | 1s linear，2px 邊框缺一角 |
| 主題切換圖示 | framer-motion，旋轉 -90° → 0° 加淡入，200ms |

**原則：** 動態幾乎都是「微」動態，位移只有 2px、縮放只到 0.9，時間 100～150ms。介面很跟手，不會表演。

---

## 7. 圖層（z-index）

定義在 `apps/frontend/src/main.scss`，只用於掛在 `<body>` 層級的元素：

| Token | 值 | 用途 |
|---|---|---|
| `--z-fixed` | 100 | 一般 fixed 元素 |
| `--z-nav` | 200 | 導覽 |
| `--z-overlay` | 300 | Dialog 遮罩 |
| `--z-modal` | 400 | Dialog 本體 |
| `--z-popover` | 500 | Dropdown、Popover |
| `--z-toast` | 600 | Toast |
| `--z-tooltip` | 700 | Tooltip |
| `--z-menu-overlay` | 800 | 手機全螢幕選單 |
| `--z-nav-header` | 900 | Sticky 頁首（要壓過手機選單） |
| `--z-nav-dropdown` | 1000 | 頁首裡的下拉 |
| `--z-dev` | 9999 | 開發工具 |

元件內部的區域性堆疊一律只用 `1, 2, 3`，不要用大數字。

---

## 8. 版面配置（Layout）

### 8.1 App 外殼

```
┌──────────────────────────────────────────────┐
│ Banner（公告列，≥768px 才顯示，backdrop 底色）   │ ← sticky，整組高度由 JS
├──────────────────────────────────────────────┤   寫入 --header-height
│ NavigationBar                                │   （實測約 108px）
├──────────────────────────────────────────────┤
│                                              │
│  <Outlet />  min-height: 100dvh              │
│  （工具頁用 scrollLock：height 100dvh +       │
│    overflow hidden，內部各欄自己捲動）          │
│                                              │
├──────────────────────────────────────────────┤
│ Footer                                        │
└──────────────────────────────────────────────┘
```

`Layout` 元件用 props 開關各部分：`banner / header / footer / scrollLock / headerBorder`。
Catalog、Grades、Schedule 這類「工具頁」都關掉 footer 並鎖定捲動，畫面像桌面 App。

### 8.2 導覽列

```
[Berkeleytime]                    Catalog  Scheduler  Gradtrak  Grades  Enrollment  Clubs(NEW)   ☀  [Sign in →]
 24px / 580                       ← 13px / 500 MenuItem，靠右 →                                  icon  primary btn
```

- 內距 12px，底部 1px 邊框，背景 `--foreground-color`。
- **選中指示器**：每個 MenuItem 用 `::before` 畫一條 2px 藍線，位置在 `bottom: -12px`，剛好落在導覽列的底邊框上。這是很精巧的對齊手法。
- hover 時用 `::after` 鋪一層 `--button-hover-color` 圓角 4px 底色，用 opacity 淡入。
- ≤992px：連結群組隱藏，改成漢堡按鈕，點開是全螢幕選單（24px 大字連結，內容從 `header-height + 24px` 往下排）。
- `invert` 變體：疊在彩色背景上時，文字改白色、半透明白 hover，選中線移到上方。

### 8.3 首頁（Landing）

1. **Hero**
   - 高度 `100svh - header + 16px`，內容貼**左下角**（`align-items: flex-end`），內距 48px。
   - 背景是由上到下的漸層，從 `--foreground-color` 平滑過渡到 `blue-500`（暗色用 `blue-800`）。用 9 個 `color-mix()` 停止點做出**非線性、柔和**的過渡，不是生硬的兩點漸層。
   - 疊一層 `noise.svg` 雜訊紋理（`mix-blend-mode: overlay`，opacity 0.4，暗色模式關閉），讓漸層不會出現色帶。
   - 右側放 Sather Tower（薩瑟塔）向量插圖，高 80%，距右 100px，從底部長出來。
   - 大標 48px / 600 / 白色，兩行。
2. **About**：置中，標題 32px / 500，內文 16px、最大寬度 500px，下面接一顆按鈕。
3. **Sponsors**：左邊標題加說明（最大寬度 400px），右邊放 logo 列（gap 32px）。
4. **Get Involved**：左右兩欄，左邊標題加說明，右邊 Accordion（最大寬度 680px）。≤660px 改成單欄置中，並隱藏說明。
5. 各區塊統一 `padding: 48px 40px`。

### 8.4 課程目錄（Catalog）：三欄主從式版面

```
┌──────────┬────────────┬─────────────────────────────────┐
│ Filters  │ List       │ Class Detail                    │
│ 360px    │ 384px      │ flex: 1                          │
│          │ ┌────────┐ │ ┌─────────────────────────────┐ │
│ 學期     │ │ Card   │ │ │ MATH 54 #02   (24px/660)    │ │ ← sticky header
│ 排序     │ │ 360px  │ │ │ 描述 / 指標 / 動作按鈕       │ │
│ 年級     │ └────────┘ │ │ Overview Sections Ratings…  │ │ ← tab + 滑動藍線
│ 學分     │  gap 10px  │ ├─────────────────────────────┤ │
│ …        │ ┌────────┐ │ │ 內容區（獨立捲動）            │ │
│          │ │ Card   │ │ │                             │ │
└──────────┴────────────┴─────────────────────────────────┘
```

- 每欄**各自捲動**。清單欄捲動時，頂部搜尋區下緣會淡入一條 18px 的漸層遮罩，暗示「下面還有東西」。
- 清單內距 `0 12px`，所以卡片寬度是 384 − 24 = 360px，卡片間距 10px。
- 卡片：1px 邊框、8px 圓角、無陰影，hover 時底色變 `--button-hover-color`，選中時邊框變 `blue-500`。
- 卡片內容：
  - 第一行：課號（標題 16px / 660）加上右側彩色平均成績（A 綠、B 橘、其他紅）。
  - 第二行：課名（`--description-color`，單行省略）。
  - 第三行：名額百分比、學分、預約席位、評分數等 meta，14px 灰色，icon 14px，間距 12px。
- 窄螢幕：篩選欄變成 384px 寬的左側抽屜，加半透明遮罩；欄與欄之間有 30px 寬的直條觸發鈕。
- 詳細頁的 tab 指示器是一條獨立的 2px 藍色圓角線，用 JS 計算位置後**滑動**到選中的 tab，比導覽列的靜態底線更進階。

### 8.5 課表編輯器（Schedule）

- 左側側欄 384px，右側週曆格線。
- 事件色塊：圓角 4px、內距 8px，字 12px 白色（副標 10px，75% 白），未選中 opacity 0.5，選中時 1。

### 8.6 頁尾

```
Berkeleytime                 Product      Company       …
描述（14px 灰）               連結 14px    連結 14px
● All systems normal         …            …
──────────────────────────────────────────────────────
© …                                              右側連結
```

- 上方 1px 分隔線，上下內距 64px。
- 欄位標題 14px / 500 / heading 色；連結 14px / 400 / paragraph 色，hover 變 heading 色。
- 系統狀態徽章：32px 高、8px 圓角、hover 色底，前面一顆 8px 狀態燈。

### 8.7 反覆出現的「魔術寬度」

| 寬度 | 用途 |
|---|---|
| **384px** | 標準側欄：課程清單、篩選抽屜、課表側欄 |
| 360px | 篩選欄（桌面） |
| 512px | Dialog 預設寬 |
| 448px | 空狀態文字、圖表說明的最大寬度 |
| 320 / 400px | Popover（加入課表 / 收藏） |
| 256px | Tooltip 最大寬度 |
| 680px | 首頁內容欄最大寬度 |

---

## 9. 響應式斷點

**JS 斷點**（`useBreakpointMatch`，判斷 `width > N`）：

| 名稱 | 值 |
|---|---|
| ExtraSmall | 520 |
| Small | 768 |
| Medium | 1024 |
| Large | 1280 |
| ExtraLarge | 1640 |

**CSS 實際常用斷點**（依使用頻率）：

| 斷點 | 發生什麼事 |
|---|---|
| **992px** | 導覽列收合成漢堡選單、Hero 內距縮小（最常用） |
| **768px** | 公告列隱藏、頁尾欄距縮小、手機版判斷 |
| 1000px | 部分工具頁版面切換 |
| 700px | Hero 縮成 40svh、大標變 32px |
| 660px | 首頁兩欄變單欄 |

**手機細節：**
- 觸控裝置上 `input / select / textarea` 強制 16px，避免 iOS Safari 聚焦時自動放大。
- `touch-action: manipulation` 取消雙擊縮放延遲。
- 使用 `100dvh` / `100svh`，避開手機網址列造成的高度跳動。

---

## 10. 元件規格速查

### Button

| 變體 | 外觀 | hover | active |
|---|---|---|---|
| `primary`（預設） | 藍底白字 | `--blue-hover` | `blue-700` |
| `secondary` | 透明底、1px 邊框、paragraph 色字 | 灰底、heading 色字 | 深灰底 |
| `tertiary` | 透明底、1px 邊框、**藍字** | 灰底、深藍字 | 深灰底、`blue-700` |
| `isDelete` | 上述任一變體的藍改成紅 | `red-600` | `red-700` |
| `noFill` | 去掉邊框與底色 | — | — |

共同規格：32px 高、12px 左右內距、4px 圓角、13px / 500、icon 與文字 gap 8px。
focus：2px 藍色外框，offset 2px。disabled：opacity 0.5（secondary 與 tertiary 改成灰底淡字）。
可以用 `as={Link}` 渲染成其他元素。

### IconButton
32×32，`outline` 變體為 1px 邊框加 paragraph 色 icon，hover 變灰底加 heading 色。

### Input
32px 高、1px 邊框、4px 圓角、12px 內距、文字 heading 色；focus 時**只把邊框變藍**，沒有光暈。

### Select
- 觸發器：最小 44px、內距 8px 16px、14px 字。未選值時是 label 色，選了之後是 heading 色。focus 變 2px 藍框。
- 選單：4px 圓角、內距 4px、項目間距 4px、最高 300px。
- 分組標題：11px / 600 / 全大寫 / 0.5px 字距 / label 色。
- 可搜尋版本（cmdk）：頂部是搜尋列（icon 加無框輸入），下方清單。

### Card（組合式元件）
`Card.Root / Body / Heading / Description / Footer / Actions / ActionIcon / LeftBorder / RootColumn / ColumnHeader / ColumnBody`

- 1px 邊框、8px 圓角、`--foreground-color` 底、內距 16px。
- Heading 16px / 660 加上 feature settings；Description 單行省略（可改成換行）；Footer 是 gap 12px 的 meta 列。
- `LeftBorder`：左側 8px 寬的彩色色條（預設 `purple-500`），用來標示課表顏色等分類。

### Badge
內距 4px 8px、4px 圓角、14px 字；顏色公式見 §2.5。有 `filled` 和 `border` 兩種變體。

### MenuItem（導覽與 tab 用）
32px 高、13px / 500。用偽元素做 hover 底色（`::after`）和選中底線（`::before`，2px 藍），見 §8.2。

### DropdownMenu
8px 圓角、內距 4px、最小寬 150px、最高 300px。項目 30px 高、14px 字，外距 2px、圓角 6px（項目之間有內縮的留白感）。依彈出方向做 2px 位移淡入。

### Dialog
- 遮罩：用 `--background-color` 加 opacity 0.9，**不是黑色半透明**，所以亮色模式是「霧白」。
- 本體：512px 寬、8px 圓角、1px 邊框，置中，以縮放加淡入出現。
- Header / Footer 各用一條 1px 線與內容分隔。標題 20px / 580，副標 14px / 500 paragraph 色。
- `Drawer` 變體：從左或右滑入。

### Tooltip
最大寬 256px、4px 圓角、1px 邊框加極淡陰影。標題列 8px 12px、14px / 500，下方有分隔線；內文 12px 內距、14px、行高 1.5。顯示延遲只有 50ms。

### PillSwitcher（分段切換）
外層灰底膠囊（內距 3px、圓角 30px），選中項目變白底加三層柔和陰影，像一顆浮起的藥丸。另有 `fullWidth`、`tabs`（上圓角的檔案夾 tab）、`iconOnly`（28×28）三種變體。

### Switch / Checkbox
- Switch：關閉時底色用 `--border-color`，開啟時用 `blue-500`；白色圓鈕位移 100ms。
- Checkbox：16px、4px 圓角；未勾選是 2px paragraph 色邊框，勾選是藍底白勾。

### Accordion
項目之間用 1px 線分隔（最後一項沒有）。觸發列內距 16px 0、18px / 500，hover 時 opacity 0.8；20px 箭頭 icon 展開時旋轉 180°。內文 16px、行高 1.6，連結為藍色。

### Skeleton / LoadingIndicator
- Skeleton：`--border-color` 底、4px 圓角、2 秒呼吸動畫。
- LoadingIndicator：2px 邊框缺一角的圓圈，有 16px 與 32px 兩種尺寸，1 秒轉一圈。

---

## 11. 圖示

- 套件：**iconoir**（線性、圓頭）。
- 全域預設：16×16、`strokeWidth: 2`（由 `IconoirProvider` 統一設定）。
- 例外：導覽列主題切換 18px、卡片 meta 列 14px、Accordion 箭頭 20px。
- 顏色跟隨文字：預設 paragraph 色，hover 變 heading 色。

---

## 12. 值得學的設計手法（Takeaways）

1. **單一強調色**：全站只有 `blue-500` 代表「可互動或已選取」，其他彩色都是資料。使用者不用學「這個顏色代表什麼」。
2. **語意 token 加 data-theme**：元件只認語意變數，明暗模式在一個地方切換。這比 Tailwind 的 `dark:` 前綴更好維護。
3. **透明邊框**：`rgb(0 0 0 / 10%)` 一個值打天下，不用為每個底色挑灰。
4. **線條優於陰影**：卡片沒陰影，只有浮層有，層級清楚，畫面乾淨。
5. **32px 控制項高度**：按鈕、輸入框、選單項目、icon 按鈕全部同高，任意組合都能對齊。
6. **四階灰色文字**：heading → description → paragraph → label，不靠字級也能做出資訊層級。
7. **可變字體的中間字重**（580、660）加上 OpenType 特性，讓 Inter 有自己的個性。
8. **工具頁像桌面 App**：鎖定整頁捲動，固定寬側欄（360、384）加上自適應主區，每欄獨立捲動。
9. **偽元素做互動狀態**：hover 底色、選中底線用 `::before` / `::after` 加 opacity 過渡，不影響排版。
10. **100ms 微動態**：所有顏色變化都有過渡，但短到不會讓人感覺在等待。
11. **漸層加雜訊**：Hero 的多停止點 `color-mix()` 漸層疊上 noise 紋理，避免色帶、增加質感。

---

## 13. 不建議照抄的地方（原始碼裡的不一致）

學習時注意以下幾點，這些是它還沒整理乾淨的部分：

- **斷點不統一**：JS 是 768 / 1024，CSS 卻大量使用 992、1000、700、660、600。建議自己的專案統一用一組。
- **字級不完全走 token**：13px（按鈕、導覽列）、24px、32px、48px 都是硬寫值，沒有對應的 `--text-*` token。
- **圓角值太多**：除了 4、6、8，還有 2、3、12、20px 零星出現。建議收斂成 4 / 8 / full 三種。
- **少數硬寫色**：例如公告列 CTA 用 `rgb(56,126,236)`，不是 `blue-500`；全站 SCSS 約有 20 處硬寫的 hex 或 rgb。
- **未定義的變數**：`--light-paragraph-color-50` 指向不存在的 `--neutral-500-50`；Switch 的陰影用了沒有載入的 `--black-a7`。實際效果是這兩個樣式失效。

---

## 附錄：最小可複製骨架

想在自己的專案重現這套風格，最核心的就是這幾行：

```css
@import url("https://rsms.me/inter/inter.css");

:root {
  --blue-500: #3b82f6; --blue-600: #2563eb; --blue-700: #1d4ed8; --blue-400: #60a5fa;
  --text-12: .75rem; --text-14: .875rem; --text-16: 1rem; --text-18: 1.125rem; --text-28: 1.75rem;
}

[data-theme="light"], body:not([data-theme]) {
  --background-color: #fff;  --foreground-color: #fff;  --backdrop-color: #f5f5f5;
  --border-color: rgb(0 0 0 / 10%);
  --heading-color: #171717;  --description-color: #404040;
  --paragraph-color: #737373; --label-color: #a3a3a3;
  --button-hover-color: #f5f5f5; --button-active-color: #e5e5e5;
  --blue-hover: var(--blue-600);
}

[data-theme="dark"] {
  --background-color: #18181b; --foreground-color: #18181b; --backdrop-color: #09090b;
  --border-color: rgb(255 255 255 / 10%);
  --heading-color: #fff;  --description-color: #d4d4d8;
  --paragraph-color: #a1a1aa; --label-color: #71717a;
  --button-hover-color: #27272a; --button-active-color: #3f3f46;
  --blue-hover: var(--blue-400);
}

body {
  font-family: InterVariable, Inter, sans-serif;
  background: var(--background-color);
  color: var(--paragraph-color);
}

.brand, .title {
  font-feature-settings: "cv05", "cv06", "cv12", "cv13", "ss07";
}

.button {
  height: 32px; padding: 0 12px; border-radius: 4px;
  font-size: 13px; font-weight: 500;
  transition: background-color 100ms ease-in-out, color 100ms ease-in-out;
}

.card {
  border: 1px solid var(--border-color); border-radius: 8px;
  background: var(--foreground-color); padding: 16px;
}
```

---

### 原始碼索引

| 主題 | 檔案 |
|---|---|
| 全部 token | `packages/theme/src/components/ThemeProvider/ThemeProvider.scss` |
| 主題切換邏輯 | `packages/theme/src/components/ThemeProvider/index.tsx` |
| z-index、全域 reset | `apps/frontend/src/main.scss` |
| dark-mode mixin | `apps/frontend/src/_mixins.scss` |
| 斷點 | `packages/theme/src/hooks/useBreakpointMatch.ts` |
| 基礎元件 | `packages/theme/src/components/*` |
| App 外殼 | `apps/frontend/src/components/Layout`、`NavigationBar`、`Footer`、`Banner` |
| 首頁 | `apps/frontend/src/app/Landing/Hero`、`Organization` |
| 課程目錄 | `apps/frontend/src/app/Catalog`、`components/ClassBrowser`、`components/Class` |
| 課表配色 | `apps/frontend/src/app/Schedule/schedule.ts`（`scheduleClassColors`） |
