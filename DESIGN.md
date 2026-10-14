---
version: alpha
name: Neutral Tool UI
description: 白底、中性灰文字、紫調灰表面，搭配單一紫色強調色、以細邊框分層的工具型介面。適用於資料密集的 Web App、後台、目錄瀏覽與規劃工具。
colors:
  # ── 強調色（全站唯一）。主視覺色票：#6E619C
  primary: "#6E619C"
  primary-hover: "#5D4F8B"
  primary-active: "#4D4076"
  on-primary: "#FFFFFF"
  # ── 表面：白底，第二層用紫調灰。主視覺色票：#DCDBE6
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-sunken: "#F3F3F7"
  surface-hover: "#F3F3F7"
  surface-active: "#DCDBE6"
  border: "#2D26501F"
  # ── 文字（四階中性灰）。主視覺色票：#303031、#8A8B8C
  text-primary: "#303031"
  text-secondary: "#4D4D4E"
  text-tertiary: "#6C6C6D"
  text-muted: "#8A8B8C"
  # ── 狀態：原色用於圓點與填色；-text 用於亮色模式的文字、圖示與錯誤外框（暗色模式文字直接用原色）
  success: "#5CC184"
  success-text: "#16884F"
  warning: "#E7C869"
  warning-text: "#8D7102"
  danger: "#E17E6D"
  danger-text: "#B85A4A"
  danger-hover: "#A44839"
  info: "#67B5E1"
  info-text: "#2C7DA7"
  highlight: "#9281D4"
  highlight-text: "#7A69BA"
  # ── 分類資料色：依 1 → 8 的順序循環使用，冷暖交錯
  data-1: "#9281D4"  # 薰衣草紫
  data-2: "#E17E6D"  # 珊瑚紅
  data-3: "#A4E9DB"  # 薄荷綠
  data-4: "#E7C869"  # 芥末黃（新增）
  data-5: "#67B5E1"  # 天空藍（新增）
  data-6: "#E391B8"  # 莓果粉（新增）
  data-7: "#5CC184"  # 草綠
  data-8: "#C5997A"  # 駝色
  on-data: "#1F1F20"  # 資料色色塊上的文字，8 色上都 ≥ 4.5:1
  # ── 暗色模式對應
  primary-hover-dark: "#796DA8"
  primary-text-dark: "#9A8FC8"
  background-dark: "#141317"
  surface-dark: "#141317"
  surface-sunken-dark: "#0B0B0E"
  surface-hover-dark: "#242329"
  surface-active-dark: "#35343B"
  border-dark: "#FFFFFF1A"
  text-primary-dark: "#F1F3F5"
  text-secondary-dark: "#D1D1D2"
  text-tertiary-dark: "#A4A4A6"
  text-muted-dark: "#717173"
  # ── 主視覺幾何色塊：取自參考海報原色（2 個高彩度＋3 個柔和色）；只用於主視覺色塊與代表形狀，不用於 UI 元件、文字、圖表
  shape-lavender: "#8582C8"
  shape-mint: "#82D3C3"
  shape-coral: "#F45930"
  shape-tan: "#D5AA89"
  shape-green: "#06B070"
  # ── 頁尾：主色色相的深墨色（OKLCH L 0.26、C 0.035；暗色模式 L 0.22、C 0.025）。主色調整時跟著主色的色相重新計算
  footer-bg: "#252134"
  footer-bg-dark: "#1B1825"
typography:
  display:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.25
  headline-lg:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.35
  headline-md:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.35
    fontFeature: '"cv05", "cv06", "cv12", "cv13", "ss07"'
  wordmark:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    fontFeature: '"cv05", "cv06", "cv12", "cv13", "ss07"'
  title-lg:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
  title-md:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.4
  title-sm:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: '"cv05", "cv06", "cv12", "cv13", "ss07"'
  body-lg:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  control-lg:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1
  control:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
  control-sm:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
  caption:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  overline:
    fontFamily: Inter, Noto Sans TC, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 14px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 14px
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-primary}"
  button-secondary-active:
    backgroundColor: "{colors.surface-active}"
    textColor: "{colors.text-primary}"
  button-tertiary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 14px
  button-danger:
    backgroundColor: "{colors.danger-text}"
    textColor: "{colors.on-primary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 14px
  button-danger-hover:
    backgroundColor: "{colors.danger-hover}"
    textColor: "{colors.on-primary}"
  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.control-lg}"
    rounded: "{rounded.lg}"
    height: 44px
    padding: 0 18px
  button-secondary-lg:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.control-lg}"
    rounded: "{rounded.lg}"
    height: 44px
    padding: 0 18px
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.control-sm}"
    rounded: "{rounded.sm}"
    height: 28px
    padding: 0 10px
  button-secondary-sm:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.control-sm}"
    rounded: "{rounded.sm}"
    height: 28px
    padding: 0 10px
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-tertiary}"
    rounded: "{rounded.md}"
    size: 36px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 14px
  input-touch:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 0 12px
  option-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 14px
  form-action-bar:
    backgroundColor: "{colors.surface}"
    padding: 12px 16px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 16px
  card-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-secondary}"
  badge:
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  toast:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 10px 12px
  notice:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 10px 12px
  calendar-event:
    backgroundColor: "{colors.data-1}"
    textColor: "{colors.on-data}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 4px 6px
  nav-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 14px
  nav-item-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-primary}"
  menu:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 4px
  menu-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-tertiary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 32px
    padding: 0 12px
  menu-item-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-primary}"
  segmented-control:
    backgroundColor: "{colors.surface-hover}"
    rounded: "{rounded.full}"
    padding: 3px
  segmented-control-item:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  segmented-control-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
  checkbox:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    size: 16px
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.lg}"
    width: 512px
  tooltip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
    width: 256px
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    padding: 12px
  side-panel:
    backgroundColor: "{colors.surface}"
    width: 384px
  footer:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.text-secondary-dark}"
    typography: "{typography.body-md}"
    padding: 64px 40px
---

## Overview

**冷靜、精確、讓資料說話的工具型介面。** 畫面以白底和中性灰文字為主，第二層表面帶一點紫調，唯一的強調色是紫色。層次靠細邊框與四階灰色文字建立，而不是陰影或大量色塊。所有可點擊的元素同高、圓角小、反應快。整體感受接近桌面應用程式，而不是行銷網站。

### 設計原則

1. **單一強調色。** `{colors.primary}` 只代表「可以互動」或「目前選取」。其他彩色只留給資料（狀態、分類），以及主視覺色塊與代表形狀。
   理由：使用者不必學習顏色代表什麼，資料的顏色也會因此更醒目。
2. **用線分層，不用陰影。** 區塊之間用 1px `{colors.border}` 分隔，卡片沒有陰影。陰影只留給浮在畫面上方的元素。
   理由：畫面乾淨，層級一眼可辨，明暗模式都穩定。
3. **用灰階做文字層級。** 四階文字色（primary → secondary → tertiary → muted）先於字級變化。
   理由：不必放大字也能區分重要性，版面保持緊湊。
4. **控制項同高。** 按鈕、輸入框、導覽項目、圖示按鈕預設一律 36px 高（另有 28px 的小尺寸與 44px 的大尺寸）。
   理由：任意組合放在同一列都能自然對齊。
5. **微動態。** 顏色變化 100ms，位移不超過 2px，縮放不小於 0.9。唯一的例外是主視覺的物理堆疊（見 Layout › Pattern: Shape Pile）。
   理由：介面跟手，但不表演、不讓人等待。
6. **工具頁像桌面 App。** 整頁不捲動，固定寬度的側欄搭配自適應主區，每欄各自捲動。
   理由：操作中的工具列與清單永遠留在原位，不會被捲走。
7. **只用語意 token。** 元件只引用語意 token（例如 `{colors.border}`），不直接寫色值。明暗模式只在 token 層切換。
   理由：換主題或換色票時，元件程式碼一行都不用改。
8. **預設不用 Hero。** Hero 的強度依使用者決定：每天使用的人直接給工作畫面，公開入口的第一屏就是任務入口，只有明確要求時才做完整 Hero（見 Layout › Hero 強度）。
   理由：來用系統的人是來辦事的，第一屏就要能動手。
9. **表單以手機為準。** 多數人用手機填表。表單先照手機設計：一次一步、底部固定按鈕、44px 控制項、16px 輸入字，再放寬成桌面版。
   理由：手機上能順利填完，桌面上一定也可以；反過來不一定。

### 適用範圍

- **適合：** 資料密集的 Web App、後台與儀表板、目錄與搜尋介面、排程與規劃工具。
- **不適合：** 品牌表現強烈的活動頁、以圖像為主的內容網站、遊戲化介面。品牌表現集中在進入頁標題旁的代表形狀與頁尾上方的堆疊色塊（見 Layout › Hero 強度），工具頁本身維持安靜。

## Colors

### 色彩來源

UI 骨架來自主視覺色票的五個顏色，其餘的階層都從這五色衍生：

| 主視覺色票 | 對應 token | 衍生方式 |
|---|---|---|
| 紫 `#6E619C` | `primary` | 同色相加深兩階做 hover / active；暗色模式另做兩個較亮的階 |
| 炭黑 `#303031` | `text-primary` | 往淺色方向補 `text-secondary`、`text-tertiary` 兩階中性灰 |
| 淡紫灰 `#DCDBE6` | `surface-active` | 往白色方向補一階更淡的紫調灰 `#F3F3F7`，當 `surface-sunken` 與 `surface-hover` |
| 白 | `background` / `surface` | 頁面底色統一用純白 `#FFFFFF` |
| 灰 `#8A8B8C` | `text-muted` | 原色對比只有 3.4:1，只能當 placeholder 與停用文字；可閱讀的說明文字改用加深的 `text-tertiary` |

**配色原則：文字用中性灰，表面用紫調灰。** 文字保持中性，閱讀起來最乾淨；淡淡的紫調只出現在 hover、按下、凹陷區塊這些表面上，讓整個系統「看起來中性，但隱約帶著品牌紫」。

**狀態色與分類資料色**來自主視覺第二組的五個顏色（薰衣草紫、珊瑚紅、薄荷綠、駝色、草綠），再補上芥末黃、天空藍、莓果粉三個色相。新增的三色明度與彩度都對齊原本五色，8 色看起來是同一組。

### 色彩角色

| Token | 角色 | 使用規則 |
|---|---|---|
| `primary` / `-hover` / `-active` | 唯一強調色 | 只用於主要按鈕、focus 外框、選取指示線、開關與勾選、文字連結 |
| `on-primary` | 主色上的文字或圖示 | 與 `primary` 的對比必須 ≥ 4.5:1 |
| `background` | 頁面底色 | 純白，最底層 |
| `surface` | 卡片、面板、導覽列、浮層 | 和 `background` 同色，靠邊框區分 |
| `surface-sunken` | 比 surface 低一層的底 | 公告列、分段控制的外框底、表格標題列 |
| `surface-hover` / `surface-active` | 中性元素的 hover / 按下底色 | 只在互動時出現 |
| `border` | 所有分隔線與外框 | 一律使用 12% 透明的深紫灰（暗色模式為 10% 透明白） |
| `text-primary` | 標題、主要文字、hover 後的文字 | — |
| `text-secondary` | 描述段落、次要內文 | — |
| `text-tertiary` | 一般說明、meta 資訊、未選取的導覽與圖示 | — |
| `text-muted` | placeholder、停用狀態、純裝飾文字 | **不得**用於需要閱讀的資訊，因為對比不到 4.5:1 |
| `success` / `warning` / `danger` / `info` | 狀態色的原色 | 圓點、進度條、填色。不做大面積底色 |
| `*-text` | 狀態色的文字階 | 亮色模式下的狀態文字、圖示、錯誤外框；暗色模式直接用原色 |
| `highlight` / `highlight-text` | 新功能提示 | 只用於「NEW」這類弱提示 |
| `data-1` … `data-8` | 分類資料色 | 課表色塊、圖表數列、使用者標籤，依序循環 |
| `on-data` | 資料色塊上的文字 | 在 8 個資料色上都 ≥ 4.5:1 |
| `shape-*` | 主視覺幾何色塊 | 取自參考海報原色，彩度比 `data-*` 高；只用於主視覺色塊與代表形狀，見 Layout › Pattern: Shape Pile |
| `footer-bg` / `-dark` | 頁尾底色 | 主色色相的深墨色，只用於頁尾；頁尾裡的文字用暗色模式的文字階 |

### 使用規則

- **強調色的面積要小。** 不要把 `primary` 當大面積背景。
- **頁面底色用純白，不用灰底。** 工具頁靠邊框分層；若再墊一層灰底，白色面板與灰色縫隙交錯，資料密集的畫面會顯得零碎。灰色留給 `surface-sunken` 這種「刻意凹下去」的區塊。
- **邊框一律用 `border`**，不要用不透明的灰色。透明邊框疊在任何表面上都一致。
- **文字對比**：`text-primary`、`text-secondary`、`text-tertiary` 在它所在的表面（包括 `surface-sunken`）上都必須 ≥ 4.5:1。
- **紫色文字放在紫調灰上要加深**：`primary` 在 `surface-active`（`#DCDBE6`）上只有 4:1，這時文字改用 `primary-hover`。
- **淡底標籤（Badge）**：底色用該色的「淡底」階，文字用「文字」階（見下方「色階」）。不要直接用原色當文字：8 個原色在白底上都不到 4.5:1。不加同色外框。
- **互動狀態的推導**：hover 比預設深一階，active 再深一階。暗色模式的 hover 改成**亮一階**。

### 狀態色

| 狀態 | 原色 | 文字（亮色模式） | 用在哪裡 |
|---|---|---|---|
| 成功 `success` | 草綠 `#5CC184` | `#16884F` | 開放、正常、已完成 |
| 警告 `warning` | 芥末黃 `#E7C869` | `#8D7102` | 快滿、即將截止、回應變慢 |
| 危險 `danger` | 珊瑚紅 `#E17E6D` | `#B85A4A` | 額滿、錯誤、破壞性動作 |
| 資訊 `info` | 天空藍 `#67B5E1` | `#2C7DA7` | 候補、維護公告、一般通知 |
| 新功能 `highlight` | 薰衣草紫 `#9281D4` | `#7A69BA` | 「NEW」標記 |

- **狀態色只用在圓點、圖示、短文字與進度條上。** 不做大面積的底色，也不要和同色外框組成提示框（見 Components › Feedback）。
- **警告用偏黃的芥末黃**，不用駝色。駝色的深色階會變成咖啡色，讀起來像「土」而不是「注意」。
- **薰衣草紫只當「新功能」提示。** 它和主色紫是同一個色相，當一般狀態色容易被誤認為「可以點擊」。
- **危險按鈕**的底色用 `danger-text`。珊瑚紅原色配白字只有 2.9:1。
- **暗色模式**下，狀態文字直接使用原色；8 個原色在暗色底上都 ≥ 4.5:1。
- 狀態不能只靠顏色傳達，一定搭配文字。

### 分類資料色（8 色）

分類色的工作是讓同一個畫面上的不同項目一眼分得開。顏色數量至少要等於畫面上同時出現的項目數，否則就會撞色。需要 8 色的原因：

- **課表**：一學期常修 6～8 門課，再加上社團、打工等自訂事件。
- **趨勢與比較圖**：常見同時比較 4～8 條數列。
- **標籤與收藏夾**：使用者自己挑顏色，選項太少很快就重複。
- **上限**：超過 8～10 色後人眼很難再分辨。

| 順序 | 名稱 | 原色 | 冷暖 | 來源 |
|---|---|---|---|---|
| `data-1` | 薰衣草紫 | `#9281D4` | 冷 | 主視覺 |
| `data-2` | 珊瑚紅 | `#E17E6D` | 暖 | 主視覺 |
| `data-3` | 薄荷綠 | `#A4E9DB` | 冷 | 主視覺 |
| `data-4` | 芥末黃 | `#E7C869` | 暖 | 新增 |
| `data-5` | 天空藍 | `#67B5E1` | 冷 | 新增 |
| `data-6` | 莓果粉 | `#E391B8` | 暖 | 新增 |
| `data-7` | 草綠 | `#5CC184` | 冷 | 主視覺 |
| `data-8` | 駝色 | `#C5997A` | 暖 | 主視覺 |

- **依 1 → 8 的順序分配**，用完再從頭循環。順序冷暖交錯，相鄰的項目一冷一暖。
- **最接近的一組是珊瑚紅與駝色**（兩者都是暖色、明度接近），所以排在第 2 與第 8，讓它們相隔最遠。做大色塊沒問題，但在小圓點和細線上要留意。
- **不要再加第 9 色。** 超過 8 項時，第 9 項以後歸為「其他」並用中性灰，或改用文字分組。
- 分類色和狀態色共用部分色相。在課表、圖表這類情境裡，綠色色塊不代表「成功」；需要表達狀態時一定搭配文字。
- **不要把 `shape-*` 主視覺色當成資料色或狀態色使用。** 主視覺色取自海報原色，彩度比資料色高，兩者分開管理。

### 色階：一個顏色，四種用途

每個狀態色與分類色都衍生出四個色階：

| 色階 | 用途 | 亮色模式怎麼來 | 暗色模式 |
|---|---|---|---|
| **原色** | 色塊、圓點、進度條填色 | 原色 | 原色 |
| **文字** | 文字、圖示、錯誤外框（需要 4.5:1） | 沿同一色相加深明度，直到對白底達到 4.5:1 | 直接用原色 |
| **細線** | 折線、圖表上的細圖形（需要 3:1） | 沿同一色相加深明度，直到對白底達到 3:1 | 直接用原色 |
| **淡底** | 標籤底色 | 原色 16% 混入白色 | 原色 22% 混入暗色底 `#141317` |

計算後的數值：

| 名稱 | 原色 | 文字（亮） | 細線（亮） | 淡底（亮） | 淡底（暗） |
|---|---|---|---|---|---|
| 薰衣草紫 | `#9281D4` | `#7A69BA` | `#9281D4` | `#EEEBF8` | `#302B41` |
| 珊瑚紅 | `#E17E6D` | `#B85A4A` | `#DA7867` | `#FAEAE8` | `#412B2A` |
| 薄荷綠 | `#A4E9DB` | `#3D8175` | `#5C9F92` | `#F0FBF9` | `#344242` |
| 芥末黃 | `#E7C869` | `#8D7102` | `#B0922E` | `#FBF6E7` | `#423B29` |
| 天空藍 | `#67B5E1` | `#2C7DA7` | `#4D9CC7` | `#E7F3FA` | `#263743` |
| 莓果粉 | `#E391B8` | `#AB5E84` | `#CB7CA2` | `#FBEDF4` | `#422F3A` |
| 草綠 | `#5CC184` | `#16884F` | `#40A76C` | `#E5F5EB` | `#24392F` |
| 駝色 | `#C5997A` | `#956C4E` | `#B58A6B` | `#F6EFEA` | `#3B302D` |

- **色塊上的文字**一律用 `on-data`（`#1F1F20`），不用白字。白字在 8 個原色上都低於 3.4:1。

### 暗色模式

| 亮色 token | 暗色 token | 說明 |
|---|---|---|
| `background` / `surface` | `background-dark` / `surface-dark` | 帶一點紫調的近黑，不用純黑；兩者同色，同樣靠邊框分層 |
| `surface-sunken` | `surface-sunken-dark` | 比表面更深 |
| `surface-hover` / `-active` | `surface-hover-dark` / `-active-dark` | 越互動越亮 |
| `border` | `border-dark` | 10% 透明白 |
| `text-*` | `text-*-dark` | 四階順序不變；最亮的文字用主視覺的淺灰 `#F1F3F5`，比純白柔和 |
| `primary-hover` | `primary-hover-dark` | 按鈕 hover 變亮而不是變暗 |
| `primary`（當文字） | `primary-text-dark` | `primary` 在暗底上只有 3.4:1，所以連結、選取線、紫色文字在暗色模式改用這個較亮的紫 |
| 狀態與分類色的 `*-text` | 原色 | 原色在暗色底上已經夠亮，文字、圖示、細線都直接用原色；淡底見「色階」表 |
| `footer-bg` | `footer-bg-dark` | 只比頁面暗色底亮一點，所以頁尾上方再加一條 1px `border-dark` |

- 主要按鈕在暗色模式仍使用 `primary` 底色加白字。
- 用 `data-theme="light"` 或 `data-theme="dark"` 切換。未設定時跟隨系統設定。
- 主題選單提供 Light / Dark / System 三個選項，並記住使用者的選擇。
- 任何區塊都可以用 `data-theme` 局部強制成某個主題。Hero 與堆疊色塊不需要強制亮色：色塊不和文字重疊，暗色模式直接放在暗色底上。

### 調整色票時的檢查清單

1. 主色至少要有四個明度階（暗色 hover 用的亮版、預設、hover、active），而且 `primary` 要能和白字達到 4.5:1。
2. 確認四階文字色在 `surface` 和 `surface-sunken` 上的對比。
3. 執行 `npx -p @google/design.md designmd lint DESIGN.md`，查看對比警告。

## Typography

### 字體

- **英文與數字：Inter**（可變字體）。標題與 wordmark 開啟 OpenType 特性 `cv05 cv06 cv12 cv13 ss07`：帶尾鉤的小寫 l、簡化的 u、緊湊的 f 與 t、方形標點。
- **中文：Noto Sans TC（思源黑體）可變字體**，字重範圍 100～900。
- 字型順序固定為 `Inter, "Noto Sans TC", system-ui, sans-serif`：英文與數字先用 Inter，中文才使用 Noto Sans TC。
- **一定要載入 Noto Sans TC，不要依賴系統字。** Windows 的微軟正黑體只有 300、400、700 三種粗細：設成 500 的中文會被畫成 400（看起來偏細），設成 580、600 會直接跳到 700（看起來偏粗）。Mac 的蘋方又是另一套粗細，跨平台不一致。
- **用可變字體，不用固定字重。** 中文字體會依字元切成約 108 個分片，瀏覽器只下載頁面用到的分片。可變字體每個分片約是單一字重的 1.85 倍，所以只要用到 3 種以上粗細就比較省；這套系統會用到 400、500、600 三種。
- **字重只用三種**：內文 400；標籤、導覽、按鈕 500；標題 600。

### 字級

字級以中文為準。中文字面比英文大，所以 20px 以上的標題比英文習慣的尺寸小 10～15%；14px 以下的文字則不縮小，避免筆畫擠在一起。

| Token | 規格（字級 / 字重 / 行高） | 用途 |
|---|---|---|
| `display` | 44 / 600 / 1.25 | 進入頁與 Hero 的主標（手機縮為 32px） |
| `headline-lg` | 28 / 500 / 1.35 | 進入頁的區塊標題、強度 3 頁首標題（手機縮為 24px） |
| `headline-md` | 22 / 600 / 1.35 | 工具頁的詳細頁主標、強度 2 橫幅標題、表單完成畫面標題 |
| `wordmark` | 18 / 600 / 1.3 | 產品名稱 logo 文字，搭配 28px 的 logo 圖示 |
| `title-lg` | 18 / 600 / 1.4 | 對話框標題 |
| `title-md` | 17 / 500 / 1.4 | 手風琴（Accordion）標題、小節標題 |
| `title-sm` | 16 / 600 / 1.4 | 卡片標題、步驟標題 |
| `body-lg` | 16 / 400 / 1.6 | 進入頁段落、Hero 說明文字、觸控裝置的輸入框文字 |
| `body-md` | 15 / 400 / 1.6 | **預設內文**、區塊說明、選單項目 |
| `body-sm` | 14 / 400 / 1.6 | 密集介面文字：表格、卡片描述、標籤、公告列、Toast |
| `label-md` | 14 / 500 / 1.4 | 欄位標籤、頁尾欄標題、分段控制 |
| `control-lg` | 15 / 500 / 1 | 大按鈕 |
| `control` | 14 / 500 / 1 | 預設按鈕、導覽項目、分頁 tab |
| `control-sm` | 13 / 500 / 1 | 小按鈕 |
| `caption` | 12 / 400 / 1.5 | 只用於數字、時間、短標籤，例如「9/20 23:59」「78/80」 |
| `overline` | 12 / 500 / 1.4，字距 0.08em | 眉標、選單分組標題 |

### 規則

- **中文內文最小 14px**（`body-sm`）。`caption` 的 12px 只用於數字、時間與短標籤，不用於完整的句子。
- **行高**：內文一律 1.6；標題 1.25～1.4；控制項 1。
- 預設內文用 `body-md`；表格、卡片、Toast 這類密集介面用 `body-sm`；進入頁段落與 Hero 說明用 `body-lg`。
- 控制項文字依按鈕尺寸使用 `control-sm`、`control`、`control-lg`，行高 1，元件高度由元件本身決定。
- **大標題（`display`）不加標點符號**，用換行斷句。例如寫成兩行「遇到校園問題」「讓學生會陪你處理」，不寫「遇到校園問題，讓學生會陪你處理。」。
- 層級優先用**文字顏色與字重**區分，不要靠一直加大字級。
- 眉標（`overline`）：中文沒有大小寫，用 0.08em 的字距營造標籤感；英文眉標可以全大寫。
- 單行標題或描述超出寬度時用省略號截斷。段落最大寬度約 500～680px。
- 觸控裝置上，輸入框字級至少 16px，避免 iOS 聚焦時自動放大畫面。

## Layout

### 間距

採用 **4px 網格**。所有間距都從 spacing token 取值：

| Token | 值 | 常見用途 |
|---|---|---|
| `xs` | 4px | 圖示與文字的緊密間距、選單內距 |
| `sm` | 8px | **預設元素間距**、按鈕內圖示與文字的間距 |
| `md` | 12px | 控制項的左右內距、清單項目間距、meta 資訊列的間距 |
| `lg` | 16px | 卡片內距、表單欄位間距 |
| `xl` | 24px | 面板內距、窄螢幕的頁面左右留白 |
| `2xl` | 32px | 大區塊內的群組間距 |
| `3xl` | 40px | 桌面版頁面左右留白 |
| `4xl` | 48px | 進入頁區塊的上下間距 |
| `5xl` | 64px | 頁尾上下內距與欄距 |

### 內容容器

進入頁、內容頁與表單頁的內容都放在同一個容器裡：

- **最大寬度 1200px，置中。** 左右留白 40px（≤ 992px 為 24px，≤ 520px 為 16px）。
- **共用一條左緣。** 導覽列的 wordmark、Hero 文字、每個區塊的標題、頁尾，全部對齊容器的左緣。不要讓各區塊自己決定左邊距。
- **兩欄型區塊**：標題欄 280～320px，內容欄最大 680px，兩欄之間固定 64px。不要用「左右推開」（justify-between）的排法：在寬螢幕上，標題會貼著左邊、內容貼著右邊，中間空出一大片。
- 背景色、分隔線、主視覺的色塊可以延伸到畫面邊緣，但文字與元件一律對齊容器。
- 工具頁（Master–Detail、Sidebar + Canvas）不受這個容器限制，照各自的固定欄寬排列。

### 固定尺寸

| 項目 | 尺寸 |
|---|---|
| 控制項高度（按鈕、輸入框、導覽項目、圖示按鈕） | 預設 36px；小 28px；大 44px。觸控裝置的點擊範圍至少 44px |
| 選單項目高度 | 32px |
| 內容容器最大寬度 | 1200px |
| 圖示 | 16px（行內 meta 用 14px，導覽列用 18px） |
| 標準側欄 / 清單欄 | 384px |
| 篩選欄 | 360px |
| 浮動面板（Popover） | 320～400px |
| 對話框 | 512px（距離螢幕邊緣至少 24px） |
| Tooltip 最大寬度 | 256px |
| 空狀態文字最大寬度 | 448px |
| 閱讀內容最大寬度 | 680px |

### 斷點

| 名稱 | 條件 | 行為 |
|---|---|---|
| `phone` | ≤ 520px | 單欄；按鈕可以撐滿寬度 |
| `mobile` | ≤ 768px | 隱藏公告列；多欄版面只顯示清單或詳細其中一欄；堆疊色塊縮小並減少數量；兩欄內容區塊改成單欄；任務卡改成單欄 |
| `tablet` | ≤ 992px | 導覽收合成漢堡選單；側欄改成抽屜；頁面左右留白從 40px 改為 24px；表單改成單欄、進度列與底部固定按鈕列 |
| `desktop` | > 992px | 完整的多欄版面 |
| `wide` | ≥ 1280px | 可以加開一欄，或加寬主區 |

- 高度使用 `100dvh` 或 `100svh`，避免手機瀏覽器網址列造成畫面跳動。

### Pattern: App Shell

```
┌────────────────────────────────────────────┐
│ 公告列（可選，surface-sunken，≤768px 隱藏）  │ ← 整組 sticky，高度寫入
│ 導覽列                                      │   --header-height
├────────────────────────────────────────────┤
│ 頁面內容                                     │
├────────────────────────────────────────────┤
│ 頁尾（只出現在進入頁與內容頁）                │
└────────────────────────────────────────────┘
```

- **導覽列**
  - 左側放 28px 的 logo 圖示加 `wordmark`；右側依序放導覽項目（`control`、`text-secondary`）、主題切換按鈕、主要 CTA（預設尺寸的 primary 按鈕）。
  - 高度約 60px，內容對齊內容容器的左右緣，底部一條 1px `border`。
  - **選取指示**：在選取的項目下方畫一條 2px 的 `primary` 底線，位置剛好和導覽列底邊框重疊。
  - hover 時用一層 `surface-hover` 圓角底色淡入。
- **≤ 992px**：導覽項目收進漢堡按鈕，點開後是全螢幕選單，連結用 24px / 500 的大字，從頁首高度下方開始排列。
- **反白版本**：導覽列疊在彩色背景上時，文字改白、hover 改用半透明白，選取線移到上方。

### Pattern: Master–Detail（工具頁）

適用情境：瀏覽大量同類項目，並查看單筆的詳細內容。

```
┌──────────┬────────────┬──────────────────────────────┐
│ 篩選欄    │ 清單欄      │ 詳細區                        │
│ 360px    │ 384px      │ 自適應寬度                    │
│          │ ┌────────┐ │ ┌──────────────────────────┐ │
│          │ │ 卡片    │ │ │ 標題 headline-md          │ │ ← sticky
│          │ └────────┘ │ │ meta 資訊 · 動作按鈕       │ │
│          │ ┌────────┐ │ │ 分頁 tab（滑動的指示線）    │ │
│          │ │ 卡片    │ │ ├──────────────────────────┤ │
│          │ └────────┘ │ │ 內容（自己捲動）            │ │
└──────────┴────────────┴──────────────────────────────┘
```

- **整頁**：高度 `100dvh − 頁首高度`，整頁不捲動，每欄各自捲動。欄與欄之間用 1px `border` 分隔。
- **清單欄**
  - 左右內距 12px，卡片間距 8～12px。
  - 捲動後，頂部搜尋區的下緣淡入一條約 18px 的漸層遮罩，提示「上方還有內容」。
- **清單卡片**
  - 第 1 列：`title-sm` 標題，右側放一個彩色的狀態值。
  - 第 2 列：`text-secondary` 描述，單行省略。
  - 第 3 列：`caption` 或 `body-md` 的 meta 資訊列，每項都是 14px 圖示加文字，項目間距 12px。
  - 選取時卡片外框改成 `primary`。
- **詳細區**
  - 頂部是 sticky 標題列，底部一條 `border`。
  - 分頁 tab 的選取指示線是一條獨立的 2px 圓角線，切換分頁時**滑動**到新的 tab。
- **≤ 992px**：篩選欄改成從左側滑入的抽屜（384px），後方加上遮罩。
- **≤ 768px**：一次只顯示清單或詳細其中一欄。

### Pattern: Sidebar + Canvas（編輯器）

適用情境：行事曆、地圖、排程、視覺化編輯器。

- 左側是 384px 的 `side-panel`，放清單或設定；右側是自適應的畫布。
- 畫布上的項目色塊依序使用**分類資料色** `data-1` → `data-8`。規格見 Components › Data Visualization 的「課表色塊」。
- 沒有被聚焦的項目降到 50% 透明度；聚焦的項目維持 100%。

### Hero 強度：依使用者決定

要不要 Hero，不看產品是「工具」還是「網站」，而是看使用者：第一次來、需要被引導的人需要說明；每天打開來工作的人只需要工作畫面。**預設不用 Hero**：公開入口用 Entry Page，一般內頁用強度 3，工作畫面用強度 4。強度 2 用在偶爾使用的頁面，強度 1 只有在明確要求時才做。

| 強度 | 名稱 | 什麼情境 | 長什麼樣子 |
|---|---|---|---|
| 1 | 完整 Hero | **只在明確要求時使用**，例如活動宣傳頁 | 接近滿版，大標＋說明＋兩顆大按鈕，大量色塊物理堆疊 |
| 2 | 橫幅 | 偶爾使用的頁面：登入後首頁、案件頁、狀態摘要 | 依內容長高的帶狀區，一句摘要＋一個主要行動，5～6 個色塊堆在右側 |
| 3 | 頁首點綴 | 一般內頁：表單、搜尋、說明、設定 | 一般的頁面標題列，標題旁放一個代表形狀 |
| 4 | 不用 Hero | 每天使用的工作畫面：清單、後台、編輯器 | 一打開就是工作狀態；品牌感只靠紫色與字體 |

- 強度越低，品牌越安靜。工作畫面裡，資料與狀態的顏色是畫面上最鮮豔的東西。
- 同一個產品的不同頁面用不同強度。例如申訴系統：進入頁用 Entry Page、填寫申訴用強度 3、案件頁用強度 2、幹部後台用強度 4。

### Pattern: Entry Page（進入頁，不用 Hero）

公開系統的第一頁。不放 Hero，第一屏就讓人開始辦事。

```
┌──────────────────────────────────────────────┐
│ 眉標                                          │
│ 大標第一行                                     │
│ 大標第二行 ✦ ← 代表形狀                         │
│ 說明（body-lg，最大寬 560px）                   │
│ ┌─────────────────────┐ ┌─────────────────────┐ │
│ │ 主要任務              │ │ 次要任務              │ │
│ │ 說明＋大按鈕           │ │ 說明＋行內表單         │ │
│ └─────────────────────┘ └─────────────────────┘ │
│ 圖示＋安心要點 × 3                              │
├──────────────────────────────────────────────┤
│ 兩欄區塊：處理流程                               │
├──────────────────────────────────────────────┤
│ 兩欄區塊：常見問題（Accordion）                   │
├──────────────────────────────────────────────┤
│ 結尾：一句話＋按鈕      │      物理堆疊的色塊      │
├──────────────────────────────────────────────┤
│ 頁尾（深色，色塊停在它的上緣）                    │
└──────────────────────────────────────────────┘
```

- **大標**：`display`、不加標點、換行斷句。第二行行尾放一個 0.72em 的代表形狀（見 Shapes › 代表形狀），和字身垂直對齊。頁面上方內距 56px（手機 32px）。
- **任務卡**：2～3 張同高並排，≤ 768px 改成單欄。規格同 Card，內距 24px（手機 20px）。每張卡只有一個動作：
  - 主要任務：`title-lg` 標題、一兩句說明（寫出要花多久、會得到什麼）、一顆大的 primary 按鈕（手機撐滿寬度）。
  - 次要任務（例如查詢進度）：輸入框直接放在卡片裡，右邊接一顆大的 secondary 按鈕。不要讓人先點進另一頁才能輸入。
- **安心要點**：任務卡下方一列 3 個「16px 圖示＋短句」，回答第一次來的人最擔心的事（例如可以不公開身分、可以直接拍照、進度會寄信通知）。`body-sm`、`text-tertiary`，不做成卡片；手機改成直排。
- **內容區塊**：一律用兩欄型（標題欄＋內容欄），上下內距 48px（手機 36px），區塊之間用一條全寬的 `border` 分隔。步驟說明用編號圓點（32px、`surface-sunken` 底、等寬數字），每步一行等寬數字的時間提示，例如「約 5 分鐘」。
- **結尾**：頁尾前的最後一段，上方一條 `border`。左側一句 `headline-lg`、一句說明與一顆大按鈕，對齊內容容器；右側是物理堆疊的色塊（見 Pattern: Shape Pile），色塊直接落在頁尾的上緣。≤ 768px 時文字在上、色塊在下。

### Pattern: Banner（強度 2 橫幅）

- 全寬帶狀區，底部一條 `border`，高度由內容決定（桌面約 180～260px）。
- 左側文字對齊內容容器，最大寬 520px：眉標（例如「案件 A-0912 · 10/06 送出」）、`headline-md` 標題（一句話說明最新狀態）、一句說明、一顆 primary 加最多一顆 secondary 按鈕。
- 右側是 5～6 個物理堆疊的色塊，代表形狀最大。色塊停在文字右邊，不和文字重疊。
- ≤ 768px：文字在上，色塊移到下方約 128px 高的帶狀區；按鈕並排撐滿寬度。

### Pattern: Page Header（強度 3 頁首點綴）

- 一般的頁面標題列：`headline-lg` 標題、下方一句 `text-tertiary` 說明（最大寬 680px）、右側可以放一個 secondary 動作或狀態文字（例如「草稿已自動儲存 · 14:32」）。底部一條 `border`。
- 標題左側放一個 36px 的代表形狀（手機 28px），和標題垂直置中、間距 12px。只放這一個，不放其他色塊。
- 上下內距 32 / 28px（手機 20 / 18px）。

### Pattern: Full Hero（強度 1，只在明確要求時使用）

- 高度接近一個螢幕（`100svh − 頁首高度`），文字貼齊左下角並對齊內容容器左緣。底色用 `background`，跟著亮暗模式切換，不強制亮色。
- 主標用 `display`、不加標點；下方接 `body-lg` 說明（最大寬 500px）與兩顆大按鈕（primary＋secondary）。
- 色塊用物理堆疊（見 Pattern: Shape Pile），**所有色塊在同一層**：不分文字前後兩層，也不和文字重疊。要堆得又大又高又多：12～15 個，最大的約是最小的 2～3 倍，堆起來至少到畫面一半的高度。
- ≤ 768px：文字在上，色塊在下方堆疊。

### Pattern: Shape Pile（物理堆疊）

主視覺的色塊不排在固定位置，而是用物理引擎讓它們掉下來、互相碰撞、堆起來，每次載入的結果都不同。

- **用在哪裡**：進入頁的結尾、強度 2 橫幅、強度 1 Hero。表單、清單、後台這類工作畫面不用。
- **同一層**：所有色塊互相碰撞，不分前後層，也不和文字重疊。文字區的邊界放一道看不見的牆，色塊只會堆在牆的另一側。
- **色塊**：形狀取自主視覺形狀庫，同一個構圖最多混用兩個家族，以堆疊系為主；顏色只用 `shape-*`；代表形狀用代表色，而且是最大的那一個。尺寸以 1200px 寬的舞台為基準，依舞台寬度等比縮小，最小 0.5 倍。
- **數量**：

| 位置 | 舞台高度 | 色塊數（桌面 / 平板 / 手機） |
|---|---|---|
| 進入頁的結尾 | 380px（手機 220px） | 14 / 11 / 9 |
| 強度 2 橫幅 | 跟著橫幅（手機 128px） | 6 / 6 / 5 |
| 強度 1 Hero | 跟著 Hero | 15 / 12 / 9 |

- **掉落**：色塊從舞台上方依序掉進來，每 170ms 一個，落地時略微回彈。進入頁的結尾捲到 35% 可見時才開始，橫幅與 Hero 載入時就開始。
- **物理參數**（Matter.js 0.19.0）：重力 1.1、彈性 0.12、摩擦 0.7、靜摩擦 1、空氣阻力 0.012、密度 0.0016。碰撞形狀用凸多邊形，凹的形狀（例如四角星）用它的凸包。全部靜止後停止運算，不持續耗電。
- **互動**：滑鼠可以拖動、拋出色塊；手指點一下色塊，色塊會往上彈。畫布設 `touch-action: pan-y`，手指滑過色塊時頁面照常捲動。
- **減少動態**：使用者開啟 `prefers-reduced-motion` 時，在背景算完物理後直接畫出堆好的結果，沒有掉落動畫，也不能拖動。
- 視窗寬度改變超過 40px 時重新堆一次，直接顯示結果，不再播放掉落。
- 用 canvas 繪製，裝置像素比最多算到 2。

### Pattern: Form Page（表單頁）

多數人用手機填表，所以表單頁先照手機設計，再放寬成桌面版。欄位與元件的規格見 Components › Form。

```
桌面（> 992px）
┌───────────────────────────────────────────────┐
│ 頁首點綴（強度 3）：代表形狀＋標題＋說明＋儲存狀態  │
├──────────────┬────────────────────────────────┤
│ 步驟清單       │ 目前這一步的欄位                  │
│ 280px，sticky │ 最大寬 680px                     │
│              │ ─────────────────────────────── │
│              │ 上一步                     下一步 │
└──────────────┴────────────────────────────────┘

手機（≤ 992px）
┌───────────────────────┐
│ 導覽列（sticky）         │
│ 步驟名稱          2 / 4 │ ← 進度列，sticky 在導覽列下方
│ ▬▬▬ ▬▬▬ ▭▭▭ ▭▭▭        │
├───────────────────────┤
│ 目前這一步的欄位          │
│ （單欄、撐滿寬度）        │
├───────────────────────┤
│ [‹] [      下一步     ]  │ ← 固定在畫面底部
└───────────────────────┘
```

- **步驟清單**：每一步是一列「28px 圓形編號＋步驟名稱＋一句說明」。目前這一步的編號用 `primary` 底白字、名稱字重 600；完成的步驟換成勾號，可以點回去修改；還沒到的步驟不能點。
- **手機進度列**：sticky 在導覽列正下方。左邊是步驟名稱，右邊是等寬數字的「2 / 4」，下面是 4px 高的分段進度條（已完成與目前用 `primary`，其餘用 `surface-active`）。
- **按鈕列**：
  - 桌面放在欄位下方，上方一條 `border`、間距 36px；「上一步」（secondary）在左、「下一步」（primary）在右，都用 44px 的大按鈕。
  - 手機改成 sticky 在畫面底部、撐滿全寬的按鈕列（`form-action-bar`）：`surface` 底、上方一條 `border`。左邊是 44×44 的返回圖示按鈕，右邊是撐滿剩餘寬度的 44px primary 按鈕；底部內距加上 `safe-area-inset-bottom`。
  - 第一步不顯示「上一步」。最後一步的主要按鈕寫出動作本身，例如「送出申訴」。
- 表單頁不放完整頁尾，只在最底下放一行版權與隱私權連結（手機版也省略）。

### Pattern: Footer（頁尾）

- 頁尾用深色底 `footer-bg`（暗色模式用 `footer-bg-dark`，上方再加一條 1px `border-dark`），讓頁面的結尾一眼可辨。
- 只出現在進入頁與內容頁。表單頁只放一行版權；工具頁不放頁尾。
- 頁尾裡的文字用暗色模式的文字階：欄標題 `text-primary-dark`、說明與連結 `text-tertiary-dark`，連結 hover 時變成 `text-primary-dark`。focus 外框也改用 `text-primary-dark`。
- 上下內距 64 / 48px，欄距 64px（手機 48 / 36px，欄距 40 × 24px）。
- 左側品牌區：`wordmark`、一句描述，以及系統狀態徽章（32px 高、8% 透明白底、8px 狀態燈）。
- 右側 3 欄連結：欄標題 `label-md`、連結 `body-md`。手機改成兩欄，品牌區獨佔第一列。
- 最底一列：上方一條 10% 透明白的分隔線，版權宣告和法律連結左右對齊，底部內距加上 `safe-area-inset-bottom`。
- 進入頁的頁尾上緣就是物理堆疊的地面，色塊直接停在頁尾上。

## Elevation & Depth

- **預設沒有陰影。** 頁面上的區塊與卡片只用 1px `border` 區分層級。
- **陰影只用在浮層**，而且要非常淡：

| 層級 | 元素 | 亮色模式陰影 |
|---|---|---|
| 1 | Tooltip | `0 0 12px rgb(0 0 0 / 6%)` |
| 2 | 下拉選單、Popover | `0 4px 12px rgb(0 0 0 / 10%)` |
| 3 | 大型選單、可搜尋的下拉 | `0 8px 16px rgb(0 0 0 / 12%)` |
| — | 分段控制的選中項目 | 三層疊加：`0 3px 2px /6%`、`0 3px 8px /15%`、`0 0 1px /4%` |

- **暗色模式**：陰影在暗底上看不見，所以要加深（例如 `0 12px 24px rgb(0 0 0 / 50%)`），並加一圈 `0 0 0 1px rgb(255 255 255 / 8%)` 的描邊。
- **對話框遮罩**：用 `background` 色加 90% 不透明度，做出「霧面」效果，不要用黑色半透明。

### 圖層順序（z-index）

只用於掛在 body 最外層的元素。元件內部的堆疊一律只用 1、2、3。

`一般 fixed 元素 100` < `導覽 200` < `遮罩 300` < `對話框 400` < `Popover / 下拉 500` < `Toast 600` < `Tooltip 700` < `手機全螢幕選單 800` < `sticky 頁首 900` < `頁首內的下拉 1000`

## Shapes

| Token | 用途 |
|---|---|
| `sm` 4px | 小按鈕、Badge、Tooltip、畫布色塊、骨架屏 |
| `md` 6px | 預設按鈕、輸入框、Select、選單內的項目 |
| `lg` 8px | 大按鈕、卡片、對話框、下拉選單、面板 |
| `full` | 分段控制、開關、狀態燈、「NEW」小膠囊 |

- **原則**：越小、越可互動的元素，圓角越小；越大的容器，圓角越大；膠囊類的切換元件用全圓。
- **線寬**：
  - 外框與分隔線：1px。
  - focus 外框：2px，與元素保持 2px 間距。
  - 選取指示線：2px。
- **分類色條**：卡片左側可以加一條 8px 寬的分類色條，用來標示它屬於哪個類別。

### 主視覺形狀庫

主視覺色塊從 19 種形狀中挑選，分成三個家族。**同一個構圖最多混用兩個家族**，畫面才不會散。

| 家族 | 特徵 | 形狀 |
|---|---|---|
| 海報系 | 尖角與直線 | 三角形、四角星、八角形、缺角方形、平行四邊形、圓環 |
| 堆疊系 | 圓弧與平底，適合往上堆 | 圓形、半圓、拱門、膠囊、圓角方形、D 形、四分之一圓 |
| 柔軟系 | 有機的波浪邊 | 扇貝圓、四葉形、花形、圓角三角形、圓角六邊形、十字 |

- 平塗填色，不加外框、陰影或漸層。色塊上不放文字。
- 物理堆疊以堆疊系為主，再混入另一個家族的 1～3 種形狀。

### 代表形狀

每個系統有一個代表形狀與代表色，讓共用同一套形狀庫的系統不會長得一樣。代表形狀在每種 Hero 強度裡都是最大的那一個；強度 3 與進入頁的大標只放它。

| 系統 | 代表形狀 | 家族 | 代表色 |
|---|---|---|---|
| 申訴 | 四角星 | 海報系 | `shape-coral` |
| 空間借用 | 拱門 | 堆疊系 | `shape-green` |
| 投票 | 扇貝圓 | 柔軟系 | `shape-lavender` |
| 資訊 | 膠囊 | 堆疊系 | `shape-mint` |

- 代表色目前對應現有的 `shape-*`，主視覺色票定案時一起調整。
- 每個系統的大標只講它唯一的工作，例如「遇到校園問題」「找到合適的空間」「你的一票」「校園大小事」。

## Components

### 共通狀態

| 狀態 | 規則 |
|---|---|
| hover | 背景或文字顏色以 100ms ease-in-out 過渡 |
| active | 比 hover 再深一階 |
| focus-visible | 2px `primary` 外框，間距 2px。**輸入類元件例外**：只把邊框改成 `primary`，不加光暈 |
| disabled | 透明度 50%，不可點擊。外框型按鈕例外：改成 `surface-hover` 底加 `text-muted` 字 |
| loading | 用 16px 的旋轉指示器取代圖示，或用骨架屏佔位 |

### Button

| 變體 | 外觀 | 用途 |
|---|---|---|
| `primary` | 主色底、白字 | 每個區域最多一個的主要動作 |
| `secondary` | 透明底、1px `border`、`text-secondary` 字 | 一般的次要動作 |
| `tertiary` | 透明底、1px `border`、`primary` 字 | 想強調但不搶過 primary 的動作 |
| `danger` | 把以上任一變體的主色換成 `danger-text` | 刪除、移除等破壞性動作 |
| `ghost` | 沒有外框也沒有底色 | 工具列、密集清單內 |

三種尺寸，圓角隨尺寸變大：

| 尺寸 | 高度 | 左右內距 | 圓角 | 文字 | 用途 |
|---|---|---|---|---|---|
| `sm` | 28px | 10px | `sm` 4px | `control-sm` 13px | 表格裡的小按鈕、篩選標籤 |
| `md`（預設） | 36px | 14px | `md` 6px | `control` 14px | 導覽列、對話框、一般操作 |
| `lg` | 44px | 18px | `lg` 8px | `control-lg` 15px | Hero 主要行動、表單送出、手機版 |

- 圖示與文字間距 8px。
- 同一列的按鈕使用同一個尺寸。
- 只有圖示的按鈕用 `icon-button`，尺寸與同列按鈕相同（預設 36×36），外框樣式同 `secondary`。

### Input / Select

- **Input**：36px 高（與預設按鈕同高）、1px `border`、圓角 `md`、內距 0 12px、文字 `text-primary`、placeholder 用 `text-muted`。
- **觸控裝置**（≤ 768px 或 `pointer: coarse`）：Input 與 Select 改用 `input-touch`，44px 高、16px 字，避免 iOS 聚焦時自動放大畫面。
- **選項 6 個以內不用 Select**，改用選項卡（見 Form）。Select 只用在選項多、而且使用者知道自己要找哪一個的時候，例如系級。
- **Select 觸發器**：外觀與 Input 相同。值未選時文字用 `text-muted`，選了之後用 `text-primary`。多選時可以換行長高，選項以 Badge 呈現。
- **Select 選單**
  - 規格同 `menu`，最大高度 300px，項目之間間距 4px。
  - 分組標題用 `overline` + `text-muted`。
  - 可搜尋的版本：頂部放搜尋列（圖示 + 無邊框輸入框，下方一條 `border`），搜尋不到時顯示置中的 `text-muted` 提示文字。

### Card

- 規格：1px `border`、圓角 `lg`、內距 16px、**沒有陰影**。
- 可點擊的卡片：hover 時底色改為 `surface-hover`，選取時外框改為 `primary`。
- 內部結構：
  - 標題：`title-sm`，下方間距 4px。
  - 描述：`text-secondary`。
  - 底部 meta 列：上方間距 12px，項目間距 12px，文字 `text-tertiary`。
  - 右上角放動作圖示。
- 停用的卡片整張轉成灰階。

### Badge

- 規格：內距 2px 8px、圓角 `sm`、文字 `body-sm`。
- 顏色：底色用「淡底」階，文字用「文字」階（亮色模式），見 Colors › 色階。暗色模式文字直接用原色。
- 只有一種樣式，不加同色外框。
- 用途：使用者標籤、收藏夾分類、篩選條件。表格與卡片裡的狀態不用 Badge，改用 Feedback 的「行內狀態」。

### Navigation Item / Tabs

- 規格同 `nav-item`。hover 時用偽元素鋪一層 `surface-hover` 底色並淡入，這樣不會影響排版。
- 選取時文字改成 `text-primary`，並在下方顯示 2px 的 `primary` 指示線。
- 頁內的分頁 tab 用一條獨立的指示線，切換時以動畫滑動到新的 tab。

### Menu / Dropdown

- **容器**：`surface` 底、1px `border`、圓角 `lg`、內距 4px、最小寬 150px、最大高 300px，陰影用層級 2。
- **項目**：30px 高、圓角 `md`，四周留 2px 空隙，讓 hover 時的底色看起來是內縮的。
- **危險項目**：文字用 `danger-text`（暗色模式用 `danger` 原色）。
- **出場動畫**：依彈出方向位移 2px，同時淡入。

### Dialog / Drawer

- **Dialog**
  - 寬 512px、圓角 `lg`、1px `border`，置於畫面正中，遮罩用霧面效果。
  - 頁首：放 `title-lg` 標題與 `label-md` + `text-tertiary` 副標，下方一條 `border`。
  - 頁尾：放動作按鈕，靠右對齊，上方一條 `border`。
- **Drawer**：從左或右側滑入，高度撐滿整個視窗。

### Tooltip

- 最大寬 256px、圓角 `sm`、1px `border`，陰影用層級 1。
- 有標題的版本：標題列用 `label-md`，下方一條 `border`；內文用 `body-md`、行高 1.5、`text-secondary`。
- 顯示延遲約 50ms，要感覺像是立刻出現。

### Segmented Control

- 外層：`surface-hover` 底的膠囊，內距 3px。
- 選中的項目：變成 `surface` 底，加上分段控制專用的三層柔和陰影，看起來像一顆浮起的藥丸。
- 變體：
  - **撐滿寬度**：所有項目等寬。
  - **只有圖示**：每個項目 28×28，外框圓角 `lg`。

### Switch / Checkbox

- **Switch**：27×16 的全圓軌道，關閉時用 `border` 色，開啟時用 `primary`；白色圓鈕 12px，位移動畫 100ms。表單裡的開關列改用 40×24 的軌道、18px 圓鈕，關閉時用 `surface-active`。
- **Checkbox**：16×16、圓角 `sm`。未勾選時是 2px `text-tertiary` 外框；勾選時是 `primary` 底加白色勾。表單裡用 18×18。

### Accordion

- 項目之間用 1px `border` 分隔，最後一項不加。
- 觸發列：上下內距 16px，文字 `title-md`，hover 時透明度降到 80%。
- 右側放 20px 的箭頭圖示，展開時旋轉 180°。
- 內容：`body-lg`、行高 1.6，連結用 `primary`。

### Form（表單）

版面見 Layout › Pattern: Form Page。以下規則以手機為準，桌面版只放寬欄寬、不改規則。

#### 欄位

- 標籤在欄位上方：`body-md`、字重 500、`text-primary`，和欄位間距 6px。欄位之間 28px（手機 24px）。
- **必填不加星號。** 選填欄位在標籤後面加一個 `text-tertiary` 的「選填」。多數欄位都是必填，這樣標示最少。
- 說明文字（`body-sm`、`text-tertiary`）放在標籤下方或欄位下方。說明是格式提示時，出錯就用錯誤訊息取代它，不要兩行同時出現。
- 有字數上限的欄位，在標籤右側放等寬數字的「0 / 40」；超過上限時變成危險色的文字階。
- 多行文字欄位隨內容自動長高，最小 132px（短答 96px）。
- 依內容給正確的鍵盤與自動填入：信箱用 `type="email"`＋`autocomplete="email"`、學號用 `inputmode="numeric"`、日期用 `type="date"`；單行欄位加 `enterkeyhint="next"`。

#### 選擇

- **選項卡**（`option-card`）：選項 6 個以內一律用選項卡，不用下拉選單。整張卡都可以點，最小高度 52px；選取時外框改成 `primary`，再加一圈 1px 的內陰影（共 2px 粗），手機上一眼看得出來。
  - 有說明的單選（例如協助方式）：單欄排列，左側 18px 圓形選取鈕，右側標題＋一句說明。
  - 分類（例如申訴類別）：方塊排列，桌面 3 欄、手機 2 欄（≤ 360px 單欄）。標題下面一行舉例，選取標記放在右上角。
- **開關列**：開／關型的設定用整列都可以點的開關列：左側標題（`body-md`、500）＋一句說明，右側 40×24 的開關。多個開關列之間用 `border` 分隔。
- **勾選**：同意條款這類單一勾選，用 18px 勾選框＋完整的一句話，整句都可以點。

#### 檔案

- 一個整列可以點的加入區：左側 40px 的圖示方塊，右側「加入照片或檔案」與限制（格式、數量、大小）。設 `accept="image/*,application/pdf"`，手機會直接提供拍照。
- 已加入的檔案列在下方，每列是檔名（單行省略）、等寬數字的大小、移除按鈕。

#### 驗證時機

- 按「下一步」或「送出」時，檢查這一步的所有欄位；畫面捲到第一個錯誤（扣掉 sticky 頁首與進度列的高度），並把焦點移過去。
- 有格式的欄位（信箱、主旨）在離開欄位、而且已經有內容時檢查格式。**使用者還在打字時不跳錯。**
- 欄位一旦顯示錯誤，之後每次輸入都重新檢查，改對了錯誤就立刻消失。
- 錯誤訊息的寫法見 Feedback › 表單驗證：說清楚哪裡錯、怎麼修，例如「再多寫一點，至少 20 個字，目前 12 個字」。

#### 分步驟

- 超過 6 個欄位的表單拆成 3～5 步，每步一個主題，例如「你的聯絡方式 → 發生了什麼事 → 希望怎麼處理 → 確認送出」。
- 換步驟時捲回表單頂端、把焦點移到步驟標題，並用 `aria-live` 朗讀「第 2 步，共 4 步：發生了什麼事」。
- 最後一步是**檢查頁**：依步驟分段列出填過的內容（標籤＋值；沒填的顯示 `text-muted` 的「未填」），每段右上角有「修改」可以跳回那一步。同意勾選放在檢查頁最後。
- 按 Enter 時跳到下一個欄位；在這一步最後一個欄位按 Enter，等於按「下一步」。多行文字欄位的 Enter 照常換行；輸入法選字時的 Enter 不處理。

#### 草稿

- 停止輸入 500ms 後自動存草稿，頁首右側顯示「草稿已自動儲存 · 14:32」，前面加一個成功色的勾號。重新打開時還原內容，並顯示「已還原上次的草稿」。附加的檔案不存。
- 草稿只存在使用者自己的裝置上，送出後清除。

#### 送出之後

- 原地換成完成畫面，不跳到別頁：眉標寫送出時間，`headline-md` 標題（例如「申訴已送出」），一句話說明確認信寄到哪裡。
- 編號放在有外框的區塊裡，用 28px 等寬字，旁邊一顆「複製」按鈕；複製後用 Toast 確認。
- 接著列出「接下來」會發生的 2～3 件事，最後是兩顆大按鈕（例如「查看案件」「回到首頁」；手機並排撐滿）。

### Feedback：狀態該怎麼出現

一般的工具與網站很少用「淡色底加同色外框」的提示框。狀態依情境用下面五種方式呈現，彩色只出現在圖示、圓點和短文字上，表面一律維持中性。

以下的「文字階」在亮色模式指 `*-text`（例如 `danger-text`），在暗色模式指原色（例如 `danger`）。

#### 1. 行內狀態（表格、卡片、清單）

```
● 快滿   78/80
```

- 8px 圓點用狀態**原色**，後面接 `body-sm`、字重 500 的狀態文字，文字用**文字階**。
- 旁邊的數字用 `text-tertiary` 和等寬數字，例如 `78/80`。
- 成績、分數這類數值本身可以上色：文字階、字重 600，例如 `B+` 用警告色。
- 範例：開放（成功）、快滿（警告）、額滿（危險）、候補 12 人（資訊）。

#### 2. Toast

```
┌──────────────────────────────────────────┐
│ ✓  已儲存收藏夾「想修的課」          復原 │
└──────────────────────────────────────────┘
```

- 規格同 `toast` 元件：`surface` 底、1px `border`、圓角 `lg`、內距 10px 12px，陰影用 Elevation 層級 2。
- 左側 16px 狀態圖示用文字階；中間是 `text-primary` 的訊息；右側可以放一個文字按鈕（`primary` 色，暗色模式用 `primary-text-dark`），例如「復原」。
- 訊息寫「完成了什麼」，例如「已儲存收藏夾「想修的課」」，不寫「操作成功」。
- 出現在畫面角落，幾秒後自動消失；滑鼠停在上面時暫停計時。

#### 3. 表單驗證

```
學校信箱
┌──────────────────────────────┐   ← 外框改成危險色的文字階
│ student@school               │
└──────────────────────────────┘
⊗ 缺少網域結尾，例如 .edu.tw       ← body-sm，危險色的文字階
```

- 錯誤時，輸入框的 1px 外框改成危險色的文字階。
- 下方放 `body-sm` 說明文字，同樣用危險色的文字階，前面加一個 16px 的 ✕ 圖示。
- 說明要講清楚「哪裡錯、怎麼修」，例如「缺少網域結尾，例如 .edu.tw」，不要只寫「格式錯誤」。
- 輸入正確時通常不顯示任何提示。
- 什麼時候檢查、出錯時捲到哪裡，見 Form › 驗證時機。

#### 4. 中性公告列

```
┌────────────────────────────────────────────────────┐
│ ⓘ  系統將於 9/18（三）02:00–04:00 維護，期間無法加退選。 │   ← surface-sunken 底，沒有外框
└────────────────────────────────────────────────────┘
```

- 規格同 `notice` 元件：`surface-sunken` 底、**沒有外框**、圓角 `lg`、內距 10px 12px。
- 左側 16px 圖示用對應狀態的文字階；文字維持 `body-sm`、`text-secondary`，不上色。
- 用在頁面或區塊頂部的一般通知，例如維護時間、截止日期：「加選截止：9/20（五）23:59。額滿的班別可以登記候補。」

#### 5. 系統狀態列表

```
● 選課系統正常
● 成績查詢回應較慢
● 課程評價排定維護
```

- 每一列：8px 圓點用狀態原色，後面接 `body-sm`、`text-secondary` 文字。**文字不上色**，只有圓點有顏色。
- 成功＝正常，警告＝部分異常或變慢，資訊＝排定維護。

#### ✕ 避免：淡色底加同色外框的提示框

例如淡藍色底、藍色外框、藍色圖示的「提示框」。即使顏色調得很舒服，這種組合在一般工具與網站裡很少見，是常見的 AI 生成痕跡。需要提示時，改用上面的「中性公告列」或「Toast」。

#### 載入與空狀態

- **骨架屏**：用 `border` 色、圓角 `sm`，2 秒一次的呼吸動畫（透明度 1 → 0.6 → 1）。
- **旋轉指示器**：2px 外框缺一角的圓圈，1 秒轉一圈，有 16px 與 32px 兩種尺寸。
- **空狀態**：置中顯示，文字最大寬 448px，由一個圖示、一行標題、一段 `text-tertiary` 說明、一個按鈕組成（按鈕可省略）。

### Data Visualization

所有圖表與色塊都使用 `data-1` → `data-8`，並依用途選擇色階（見 Colors › 色階）。

- **堆疊進度條**
  - 高 10px，色段之間留 2px 空隙，每段圓角 2px。
  - 色段用原色；還沒完成的部分用 `surface-sunken`。
  - 數字放在圖例裡，不放在色段上。
- **折線圖**
  - 線寬 2px，用「細線」階；在最後一個資料點畫一個半徑 3px 的圓點。
  - 格線用 `border`；座標標籤用 10～11px 等寬字、`text-tertiary`。
- **圖例**：10px 方形色塊，後面接 12px 文字，數值靠右並用等寬數字。
- **課表色塊**
  - 規格同 `calendar-event` 元件：原色填色、圓角 `sm`、內距 4px 6px。
  - 標題 12px、字重 600；時間用 11px 等寬數字、80% 不透明度。
  - 文字一律用 `on-data`，不用白字。
- **使用者標籤**：用 Badge（淡底＋文字階）。

### Icons

- 使用**線性**圖示集，例如 Iconoir 或 Lucide：圓頭、筆畫 2px、預設尺寸 16px。
- 圖示顏色跟隨文字色：預設 `text-tertiary`，hover 時變成 `text-primary`。
- 同一個產品只用一套圖示集，不要混用填色圖示和線性圖示。

## Motion

| 情境 | 時長與曲線 |
|---|---|
| hover 時顏色、背景、邊框的變化（**預設值**） | 100ms ease-in-out |
| 遮罩淡入淡出、Tooltip 出現 | 100～150ms ease |
| 對話框進場 | 150ms，由 `scale(0.9)` 放大到原尺寸並淡入 |
| 抽屜滑入 | 300ms `cubic-bezier(0.16, 1, 0.3, 1)` |
| 抽屜滑出 | 250ms `cubic-bezier(0.4, 0, 1, 1)` |
| 下拉選單出現 | 約 400ms `cubic-bezier(0.16, 1, 0.3, 1)`，只位移 2px |
| 手風琴展開或收合 | 200ms ease-out |
| 主題切換圖示 | 200ms，從 -90° 旋轉回 0° 並淡入 |
| 表單換步驟、捲到第一個錯誤 | 平滑捲動（`behavior: smooth`） |
| 主視覺物理堆疊 | 每 170ms 掉一個色塊，見 Layout › Pattern: Shape Pile |

- 介面動畫只用來表達「元素從哪裡來、往哪裡去」，不做裝飾性動畫。唯一的例外是主視覺的物理堆疊，只出現在進入頁的結尾區、強度 2 橫幅與強度 1 Hero。
- hover 樣式只給有滑鼠的裝置（`@media (hover: hover)`），避免手機點擊後 hover 的底色殘留。
- 必須尊重 `prefers-reduced-motion`：使用者開啟時，關閉位移與縮放，只保留淡入淡出；平滑捲動改成直接跳轉；物理堆疊直接顯示堆好的結果。

## Accessibility

- 所有可以閱讀的文字，與背景的對比都要 ≥ 4.5:1。`text-muted` 不能用來承載必要的資訊。
- 所有互動元素都要有清楚可見的 `focus-visible` 樣式。不要只拿掉 outline 而不提供替代。
- 觸控裝置上，點擊範圍至少 44×44px。可以靠增加內距或擴大偽元素範圍達成，不一定要放大元件外觀。
- 只有圖示的按鈕必須加上 `aria-label`，例如手機按鈕列的返回鍵「上一步」。
- 28px 的小按鈕在觸控裝置上，用偽元素把點擊範圍往外擴 8px。
- 表單欄位都要有看得見的 `<label>`。出錯時設 `aria-invalid="true"`，錯誤訊息用 `aria-describedby` 連到欄位。選項卡群組用 `role="radiogroup"` 並連到群組標籤。
- 表單換步驟時，把焦點移到步驟標題並用 `aria-live` 朗讀目前是第幾步。
- 物理堆疊的畫布加 `aria-hidden`；它只是裝飾，不承載資訊。
- 狀態不能只靠顏色傳達。分數、容量這類資料要同時顯示文字或數值。

## Do's and Don'ts

### Do

- 讓每個區域最多只有一個 `primary` 按鈕。
- 用 `border` 和四階文字色建立層級。
- 讓同一列的控制項使用同一個尺寸（預設 36px）。
- 進入頁、內容頁的文字與元件都對齊內容容器的同一條左緣。
- 讓工具頁保持安靜：紫色只出現在可互動與選取的地方，品牌表現留給進入頁的代表形狀與堆疊色塊。
- 預設不用 Hero；進入頁的第一屏就是任務入口。
- 表單先照手機設計：一次一步、底部固定按鈕、44px 控制項、16px 輸入字。
- 主視覺色塊用物理堆疊，全部在同一層。
- 工具頁鎖定整頁捲動，讓每欄各自捲動。
- 側欄使用固定寬度（360 或 384px），主區自適應。
- 所有顏色變化都加上 100ms 過渡。
- 長字串用省略號截斷，並用 Tooltip 顯示完整內容。
- 狀態用圓點、圖示和短文字表達，而且一定搭配文字。
- 分類色依 `data-1` → `data-8` 的順序分配，讓相鄰項目一冷一暖。

### Don't

- 不要引入第二個強調色，也不要把主色用在大面積背景。
- 不要在 UI 元件、圖表或強度 4 的工作畫面裡使用 `shape-*` 主視覺色；強度 3 只放一個代表形狀。
- 不要在主視覺色塊上放文字。
- 不要讓色塊和文字重疊，也不要把色塊分成文字前後兩層。
- 選項 6 個以內不要用下拉選單，改用選項卡。
- 不要在使用者還在輸入時就顯示錯誤。
- 不要在表單頁與工具頁放完整頁尾或堆疊色塊。
- 不要在 8 個分類色之外再加顏色；超過 8 項時歸為「其他」或改用文字分組。
- 亮色模式下不要把狀態色或分類色的原色直接當文字，改用文字階。
- 不要在資料色色塊上放白字，改用 `on-data`。
- 不要給卡片或靜態區塊加陰影。
- 不要用「淡色底加同色外框」的提示框，這是常見的 AI 生成痕跡。改用中性底加彩色圖示，或直接用行內文字。
- 不要使用不透明的灰色邊框，或為不同底色挑不同的邊框灰。
- 不要在元件裡直接寫死色值，一律引用 token。
- 不要使用 token 以外的圓角、字級或間距。
- 不要用黑色半透明遮罩。
- 不要使用超過 2px 的位移，或時間超過 400ms 的介面動畫（主視覺的物理堆疊除外）。
- 不要在同一個產品裡混用不同風格的圖示集。
