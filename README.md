
# ERP Central 專案

歡迎使用 ERP Central！這是一個基於 Next.js、React、ShadCN UI、Tailwind CSS 和 Genkit AI 技術棧打造的現代化企業資源規劃 (ERP) 系統原型。

## 專案目標

ERP Central 旨在提供一個可擴展、易於維護且功能豐富的 ERP 解決方案，協助中小型企業更有效地管理其核心業務流程。

## 主要技術棧

*   **前端框架**: [Next.js](https://nextjs.org/) (使用 App Router)
*   **UI 元件庫**: [React](https://react.dev/) 搭配 [ShadCN UI](https://ui.shadcn.com/)
*   **樣式**: [Tailwind CSS](https://tailwindcss.com/)
*   **AI 功能**: [Genkit](https://firebase.google.com/docs/genkit)
*   **語言**: TypeScript

## 檔案架構概覽

以下是專案主要的檔案和資料夾結構：

```
.
├── public/                     # 靜態資源 (圖片、字型等)
│   └── qr_code_login.png       # 範例：登入頁 QR Code
├── src/
│   ├── ai/                     # Genkit AI 相關程式碼
│   │   ├── flows/              # AI 流程定義
│   │   │   └── suggest-updates.ts # 範例 AI 流程
│   │   ├── dev.ts              # Genkit 開發環境設定
│   │   └── genkit.ts           # Genkit 主要設定檔
│   ├── app/                    # Next.js App Router 路由和頁面
│   │   ├── (main)/             # 主要應用程式路由群組 (範例)
│   │   │   └── dashboard/      # 儀表板頁面及相關元件
│   │   │       ├── DashboardClientContent.tsx
│   │   │       ├── DashboardLayout.tsx
│   │   │       └── page.tsx
│   │   ├── login/              # 登入頁面
│   │   │   └── page.tsx
│   │   ├── HomePageClientContent.tsx # (此專案未使用，為範例保留)
│   │   ├── actions.ts          # Server Actions
│   │   ├── file-constants.ts   # (此專案未使用，為範例保留)
│   │   ├── file-utils.ts       # (此專案未使用，為範例保留)
│   │   ├── globals.css         # 全域 CSS 樣式 (Tailwind 和 ShadCN 主題變數)
│   │   ├── layout.tsx          # 根佈局
│   │   └── page.tsx            # 專案首頁 (目前重新導向至登入頁)
│   ├── components/             # 共用 React 元件
│   │   ├── ui/                 # ShadCN UI 元件 (例如 Button, Card, Input)
│   │   └── FileEditorCard.tsx  # (此專案未使用，為範例保留)
│   ├── hooks/                  # 自訂 React Hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/                    # 工具函式
│       └── utils.ts            # ShadCN UI 輔助函式 (cn)
├── .env                        # 環境變數 (通常用於 API 金鑰等)
├── .eslintrc.json              # ESLint 設定檔
├── next.config.ts              # Next.js 設定檔
├── package.json                # 專案依賴和腳本
├── tailwind.config.ts          # Tailwind CSS 設定檔
├── tsconfig.json               # TypeScript 設定檔
├── README.md                   # 專案說明文件 (就是您現在閱讀的檔案)
├── spec.md                     # 專案規格文件 (範例)
└── todolist.md                 # 專案待辦事項 (範例)
```

### 主要資料夾說明

*   **`public/`**: 存放所有靜態檔案，例如圖片、圖示等。此資料夾中的檔案會從網站的根目錄 (`/`) 提供服務。
*   **`src/app/`**: 包含應用程式的所有路由、頁面和佈局 (使用 Next.js App Router)。
    *   每個資料夾通常代表一個路由區段。
    *   `page.tsx` 檔案定義該路由區段的 UI。
    *   `layout.tsx` 檔案定義共享的 UI 佈局。
*   **`src/components/`**: 存放可重用的 UI 元件。
    *   **`src/components/ui/`**: 由 ShadCN UI CLI 自動產生的基礎 UI 元件。
*   **`src/ai/`**: 存放所有與 Genkit AI 相關的程式碼，包括 AI 流程 (flows) 和設定。
*   **`src/lib/`**: 包含輔助函式和工具。
*   **`src/hooks/`**: 存放自訂的 React Hooks。

## 使用說明

### 環境設定

1.  **安裝依賴**:
    ```bash
    npm install
    # 或
    yarn install
    ```
2.  **環境變數**:
    *   複製 `.env.example` (如果有的話) 為 `.env`。
    *   填寫必要的環境變數，例如 Genkit 所需的 API 金鑰等。

### 開發模式

啟動本地開發伺服器：

```bash
npm run dev
# 或
yarn dev
```

應用程式通常會在 `http://localhost:9002` (或 `package.json` 中指定的其他埠號) 上運行。

### Genkit AI 開發

若要同時運行 Genkit 開發伺服器 (用於測試 AI 流程)：

```bash
npm run genkit:dev
# 或
npm run genkit:watch # 啟用檔案監看和自動重載
```

Genkit UI 通常會在 `http://localhost:4000` 上運行。

### 建置專案

為生產環境建置應用程式：

```bash
npm run build
# 或
yarn build
```

建置後的檔案會輸出到 `.next` 資料夾。

### 啟動生產模式伺服器

在本地執行已建置的生產版本：

```bash
npm run start
# 或
yarn start
```

### Linting 和型別檢查

執行程式碼風格檢查：

```bash
npm run lint
```

執行 TypeScript 型別檢查：

```bash
npm run typecheck
```

## 貢獻

歡迎對 ERP Central 專案做出貢獻！請參考 `CONTRIBUTING.md` (如果有的話) 或直接提交 Pull Request。

## 授權

此專案採用 [ISC](LICENSE.md) 授權 (請根據您的實際授權情況修改)。
