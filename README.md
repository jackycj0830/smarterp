
# Smart ERP iSM 專案

歡迎使用 Smart ERP iSM！這是一個基於 Next.js、React、ShadCN UI、Tailwind CSS 和 Genkit AI 技術棧打造的現代化企業資源規劃 (ERP) 系統原型。

## 專案目標

Smart ERP iSM 旨在提供一個可擴展、易於維護且功能豐富的 ERP 解決方案，協助中小型企業更有效地管理其核心業務流程。此原型致力於探索現代 Web 技術在企業級應用中的潛力，並整合 AI 功能以提升使用者體驗和業務效率。

## 主要技術棧

*   **前端框架**: [Next.js](https://nextjs.org/) (使用 App Router) - 提供伺服器端渲染、靜態站點生成以及優化的開發體驗。
*   **UI 元件庫**: [React](https://react.dev/) 搭配 [ShadCN UI](https://ui.shadcn.com/) - 實現高效能、可組合的現代化使用者介面。
*   **樣式**: [Tailwind CSS](https://tailwindcss.com/) - 一個實用優先的 CSS 框架，用於快速建構自訂設計。
*   **AI 功能**: [Genkit](https://firebase.google.com/docs/genkit) (整合 Google AI) - 用於實現智慧化功能，例如內容建議、資料分析等。
*   **語言**: TypeScript - 提供靜態型別檢查，提升程式碼品質和可維護性。
*   **圖示庫**: Lucide React - 提供一系列清晰一致的 SVG 圖示。

## 技術架構

Smart ERP iSM 採用了現代化的 Web 技術棧，以實現高效能、可維護和可擴展的應用程式：

*   **Next.js App Router**: 利用最新的 Next.js 路由機制，支援巢狀路由、佈局 (Layouts) 和伺服器元件 (Server Components)，以優化載入時間和減少客戶端 JavaScript。
*   **React Server Components (RSC)**: 預設使用伺服器元件來處理大部分的渲染邏輯，從而減少傳輸到客戶端的 JavaScript 數量，提升初始頁面載入速度。
*   **ShadCN UI**: 基於 Radix UI 和 Tailwind CSS 的元件集合，提供了一系列可高度自訂且易於使用的 UI 元件。這些元件並非傳統的元件庫，而是可以直接整合到專案中的程式碼片段。
*   **Tailwind CSS**: 以其原子化的 CSS 類別，讓開發者能夠快速建構出具有一致性和專業外觀的介面，同時保持樣式程式碼的簡潔。
*   **Genkit**: 透過 Genkit 與 Google AI (例如 Gemini 模型) 整合，為 ERP 系統賦予智慧化能力，例如自動化建議、資料分析或內容生成。相關 AI 流程定義於 `src/ai/flows/` 目錄下。
*   **TypeScript**: 貫穿整個專案使用，從前端元件到後端邏輯，確保型別安全，減少執行階段錯誤。

## 檔案架構概覽

以下是專案主要的檔案和資料夾結構：

```
.
├── public/                     # 靜態資源 (圖片、字型等)
│   └── qr_code_login.png       # 登入頁 QR Code
├── src/
│   ├── ai/                     # Genkit AI 相關程式碼
│   │   ├── flows/              # AI 流程定義
│   │   │   └── suggest-updates.ts # AI 建議流程範例
│   │   ├── dev.ts              # Genkit 開發環境設定
│   │   └── genkit.ts           # Genkit 主要設定檔 (Google AI)
│   ├── app/                    # Next.js App Router 路由和頁面
│   │   ├── (main)/             # 主要應用程式路由群組 (已移除，直接使用 dashboard)
│   │   ├── dashboard/          # 儀表板頁面及相關元件
│   │   │   ├── DashboardClientContent.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── page.tsx
│   │   ├── login/              # 登入頁面
│   │   │   └── page.tsx
│   │   ├── actions.ts          # Server Actions (目前用於範例檔案操作)
│   │   ├── file-constants.ts   # 檔案常數 (目前用於範例)
│   │   ├── file-utils.ts       # 檔案操作工具 (目前用於範例)
│   │   ├── globals.css         # 全域 CSS 樣式 (Tailwind 和 ShadCN 主題變數)
│   │   ├── layout.tsx          # 根佈局
│   │   └── page.tsx            # 專案首頁 (目前重新導向至登入頁)
│   ├── components/             # 共用 React 元件
│   │   ├── ui/                 # ShadCN UI 元件 (例如 Button, Card, Input)
│   │   └── FileEditorCard.tsx  # 檔案編輯器卡片範例 (目前未使用)
│   ├── hooks/                  # 自訂 React Hooks
│   │   ├── use-mobile.tsx      # 判斷是否為行動裝置
│   │   └── use-toast.ts        # 訊息提示 Hook
│   └── lib/                    # 工具函式
│       └── utils.ts            # ShadCN UI 輔助函式 (cn)
├── .env                        # 環境變數 (例如 API 金鑰)
├── .eslintrc.json              # ESLint 設定檔
├── next.config.ts              # Next.js 設定檔
├── package.json                # 專案依賴和腳本
├── tailwind.config.ts          # Tailwind CSS 設定檔
├── tsconfig.json               # TypeScript 設定檔
├── README.md                   # 專案說明文件 (本檔案)
├── spec.md                     # 專案規格文件
└── todolist.md                 # 專案待辦事項
```

### 主要資料夾說明

*   **`public/`**: 存放所有靜態檔案，例如圖片 (`qr_code_login.png`)。此資料夾中的檔案會從網站的根目錄 (`/`) 提供服務。
*   **`src/app/`**: 包含應用程式的所有路由、頁面和佈局 (使用 Next.js App Router)。
    *   `login/page.tsx`: 登入頁面。
    *   `dashboard/`: 包含儀表板相關的頁面、佈局和客戶端元件。
    *   `layout.tsx`: 應用程式的根佈局。
    *   `globals.css`: 全域樣式，包括 Tailwind CSS 基礎樣式和 ShadCN UI 的 CSS 變數定義。
*   **`src/components/`**: 存放可重用的 UI 元件。
    *   **`src/components/ui/`**: 由 ShadCN UI CLI 自動產生的基礎 UI 元件，可直接在專案中使用和修改。
*   **`src/ai/`**: 存放所有與 Genkit AI 相關的程式碼，包括 AI 流程 (flows) 和 Genkit 設定。
*   **`src/lib/`**: 包含輔助函式，例如 `cn` 用於合併 Tailwind CSS 類別。
*   **`src/hooks/`**: 存放自訂的 React Hooks，例如 `useToast` 用於顯示通知。

## 安裝與執行

### 環境設定

1.  **安裝依賴**:
    ```bash
    npm install
    # 或
    yarn install
    ```
2.  **環境變數**:
    *   複製專案根目錄下的 `.env.example` (如果有的話) 為 `.env`。
    *   填寫必要的環境變數，例如 Genkit 所需的 Google AI API 金鑰 (`GOOGLE_API_KEY`)。
    ```env
    GOOGLE_API_KEY=您的Google_AI_API金鑰
    ```

### 開發模式

1.  **啟動 Next.js 開發伺服器**:
    ```bash
    npm run dev
    # 或
    yarn dev
    ```
    應用程式通常會在 `http://localhost:9002` (或 `package.json` 中指定的其他埠號) 上運行。

2.  **(可選) 啟動 Genkit AI 開發伺服器**:
    若要測試或開發 AI 相關流程，可以另外啟動 Genkit 開發伺服器：
    ```bash
    npm run genkit:dev
    # 或，若要啟用檔案監看和自動重載：
    npm run genkit:watch
    ```
    Genkit UI 通常會在 `http://localhost:4000` 上運行，您可以在此介面測試和調試 AI 流程。

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

## 本地化 (Localization)

Smart ERP iSM 目前在登入頁面 (`src/app/login/page.tsx`) 中實作了基本的中文(繁體)和英文的本地化切換功能。這是透過在元件內部維護一個 `translations` 物件來實現的。

未來可以考慮擴展此功能：
*   將翻譯內容抽取到獨立的 JSON 或 JS 檔案中，方便管理。
*   整合如 `next-intl` 或 `i18next` 等更專業的國際化函式庫，以支援更複雜的本地化需求，例如日期格式化、數字格式化和多元語系支援。
*   擴展本地化支持到應用程式的其他頁面和元件。

## 開發規範

開發過程中，請遵循以下基本規範：

1.  **規格優先**: 在進行任何主要功能開發或修改前，請先查閱 `spec.md` 檔案，確保充分理解需求和設計細節。
2.  **任務追蹤**: 使用 `todolist.md` 檔案來追蹤個人的開發任務和整體專案進度。完成任務後及時更新。
3.  **程式碼風格**: 遵循專案配置的 ESLint 和 Prettier (若有) 規則，保持程式碼風格一致。
4.  **提交訊息**: Git commit messages 應遵循一定的規範 (例如 Conventional Commits)，清晰描述該次提交的變更內容。
5.  **分支管理**: 建議使用功能分支 (feature branches) 進行開發，完成後透過 Pull Request (PR) 合併到主要分支 (例如 `main` 或 `develop`)。PR 需要經過審查。
6.  **UI 一致性**: 開發新介面或修改現有介面時，應盡可能保持與 ShadCN UI 元件的設計風格一致，並優先使用現有元件。

## 貢獻指南

我們歡迎各種形式的貢獻，包括但不限於：
*   回報 Bug
*   提出新功能建議
*   提交 Pull Requests 以改進程式碼或文件

目前詳細的貢獻指南仍在制定中。在 `CONTRIBUTING.md` (待建立) 文件完成之前，如果您希望做出貢獻，請先建立一個 Issue 來討論您的想法。

## 授權

此專案採用 [ISC](LICENSE.md) 授權 (請根據您的實際授權情況修改)。

    