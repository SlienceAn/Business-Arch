# Business-Arch

以 [Next.js](https://nextjs.org/) 打造的商業架構樹狀圖工具，讓使用者能夠透過表單快速建立階層式（樹狀）架構圖，並支援雲端儲存、讀取、修改、刪除與匯出成圖片，適合用於繪製組織架構、業務流程或任何具有上下層關係的資料結構。

## 功能特色

- **建立樹狀架構**：從一個起始節點（Head）開始，逐層新增子節點，快速堆疊出完整的階層架構圖
- **視覺化呈現**：以 `Tree` 元件即時渲染目前建立的樹狀結構
- **雲端存檔**：透過內建 API 將架構圖存入 MongoDB，並可依檔名查詢、瀏覽歷史紀錄
- **檔案管理**：於「檔案紀錄」頁面瀏覽所有已儲存的檔案，並可修改或刪除
- **匯出圖片**：使用 `html2canvas` 將架構圖匯出為 JPG / JPEG / PNG 圖片下載
- **新手導覽**：首頁提供輪播式使用教學（新增紀錄、添加方法、查看紀錄、修改紀錄）

## 技術棧

- [Next.js](https://nextjs.org/) 12 + React 18
- [Bootstrap 5](https://getbootstrap.com/) / Bootstrap Icons / React Icons 作為 UI 樣式
- [MongoDB](https://www.mongodb.com/) 作為後端資料儲存（透過 Next.js API Routes）
- [Firebase](https://firebase.google.com/)、[axios](https://axios-http.com/)、[dayjs](https://day.js.org/)
- [html2canvas](https://html2canvas.hertzen.com/) 圖片匯出
- [mammoth](https://github.com/mwilliamson/mammoth.js) / [word-extractor](https://www.npmjs.com/package/word-extractor) 文件內容解析

## 專案結構

```
.
├── components/        # UI 元件（Tree、ToolNav、Card、SaveFile、Carousel 等）
├── pages/
│   ├── index.jsx       # 首頁 / 使用教學輪播
│   ├── NewPage.jsx      # 建立與編輯架構圖
│   ├── FileRecord.jsx   # 檔案紀錄與管理
│   └── api/
│       └── DataPool.js  # 存取 MongoDB 的 API Route（GET / POST / DELETE）
├── public/             # 靜態資源與共用工具函式（lib.js）
└── styles/             # SCSS / CSS 樣式
```

## 開始使用

### 環境需求

- Node.js（建議 16 以上）
- npm 或 yarn
- 一組可用的 MongoDB 連線（本機或雲端，如 MongoDB Atlas）

### 安裝套件

```bash
npm install
# 或
yarn install
```

### 設定環境變數

在專案根目錄建立 `.env.local`，並填入以下變數：

```bash
MONGODB_URI=你的 MongoDB 連線字串
DB_NAME=資料庫名稱
COLLECTION=集合（collection）名稱
```

### 啟動開發伺服器

```bash
npm run dev
# 或
yarn dev
```

開啟瀏覽器並前往 [http://localhost:3000](http://localhost:3000) 即可看到結果。

## 可用指令

| 指令            | 說明                          |
| --------------- | ----------------------------- |
| `npm run dev`   | 啟動本機開發伺服器             |
| `npm run build` | 建置正式環境版本               |
| `npm run start` | 啟動已建置的正式環境伺服器       |
| `npm run prod`  | 匯出靜態網站（`next export`） |
| `npm run lint`  | 執行 ESLint 程式碼檢查         |

## 使用方式

1. 於首頁點選 **Get Started** 進入建立頁面
2. 輸入起始資料作為根節點，接著透過「添加項目」逐步建立子節點，形成完整的樹狀架構
3. 點選「儲存檔案」並輸入檔名，即可將架構圖存入資料庫
4. 於「檔案紀錄」頁面可查看已儲存的所有檔案，並可修改、刪除或將架構圖匯出成圖片

首頁的 **How to use** 按鈕提供圖文步驟教學，對應：新增紀錄、添加方法、查看紀錄、修改紀錄四個步驟。

## 部署

專案已內建 GitHub Actions 工作流程（`.github/workflows/main.yml`），於推送至 `main` 分支時自動建置並部署至 `gh-pages` 分支。若採用 Vercel 部署，可直接使用 [Vercel Platform](https://vercel.com/new) 匯入本專案，並記得於部署平台設定上述環境變數。
