# 📚 GraphQL Reading List

一個使用 GraphQL、React 和 MongoDB 建立的書籍管理系統，可以瀏覽書籍清單、查看書籍詳情，以及新增書籍和作者。

## ✨ 功能特色

- 📖 **書籍管理**: 瀏覽所有書籍清單
- 🔍 **書籍詳情**: 點擊書籍查看詳細資訊，包括作者和相關書籍
- ➕ **新增書籍**: 動態新增書籍到系統
- 👤 **作者管理**: 查看作者資訊和其著作
- 🚀 **即時更新**: 使用 Apollo Client 實現即時資料同步

## 🛠️ 技術架構

### 後端 (Server)

- **Node.js** + **Express.js**
- **GraphQL** API 端點
- **MongoDB** 資料庫
- **Mongoose** ODM
- **CORS** 跨域支援

### 前端 (Client)

- **React 19** 函數式組件
- **Apollo Client** GraphQL 客戶端
- **Vite** 建置工具
- **ESLint** 程式碼檢查

## 🚀 快速開始

### 環境需求

- Node.js (v14 或更高版本)
- MongoDB 資料庫
- npm 或 yarn

### 安裝步驟

1. **複製專案**

```bash
git clone <your-repository-url>
cd graphql-playlist
```

2. **設定環境變數**

```bash
# 複製環境變數範例檔案
cp server/.env.example server/.env

# 編輯 .env 檔案，設定您的 MongoDB 連接字串
# MONGODB_URI=your_mongodb_connection_string_here
# PORT=4000
```

3. **安裝後端依賴**

```bash
cd server
npm install
```

4. **安裝前端依賴**

```bash
cd ../client
npm install
```

5. **啟動後端伺服器**

```bash
cd ../server
npm start
# 或使用 nodemon 進行開發
# npx nodemon app.js
```

6. **啟動前端開發伺服器**

```bash
cd ../client
npm run dev
```

7. **開啟瀏覽器**

- 前端應用: http://localhost:5173
- GraphQL Playground: http://localhost:4000/graphql

## 📁 專案結構

```
graphql-playlist/
├── client/                 # React 前端應用
│   ├── src/
│   │   ├── components/     # React 組件
│   │   │   ├── BookList.jsx
│   │   │   ├── BookDetails.jsx
│   │   │   └── AddBook.jsx
│   │   ├── queries/        # GraphQL 查詢
│   │   │   └── queries.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js 後端應用
│   ├── models/            # Mongoose 模型
│   │   ├── book.js
│   │   └── author.js
│   ├── schema/            # GraphQL Schema
│   │   └── schema.js
│   ├── app.js             # 主應用程式
│   ├── package.json
│   └── .env               # 環境變數 (不包含在 Git 中)
└── README.md
```

## 🔧 API 文件

### GraphQL Schema

#### 查詢 (Queries)

**取得所有書籍**

```graphql
query {
  books {
    id
    name
    genre
    author {
      name
      age
    }
  }
}
```

**取得單一書籍**

```graphql
query {
  book(id: "BOOK_ID") {
    id
    name
    genre
    author {
      name
      age
      books {
        name
        id
      }
    }
  }
}
```

**取得所有作者**

```graphql
query {
  authors {
    id
    name
    age
    books {
      name
      id
    }
  }
}
```

#### 變更 (Mutations)

**新增書籍**

```graphql
mutation {
  addBook(name: "書名", genre: "類型", authorId: "作者ID") {
    id
    name
    genre
  }
}
```

**新增作者**

```graphql
mutation {
  addAuthor(name: "作者姓名", age: 年齡) {
    id
    name
    age
  }
}
```

## 🎯 使用說明

1. **瀏覽書籍**: 在左側面板查看所有書籍清單
2. **查看詳情**: 點擊任一書籍查看詳細資訊
3. **新增書籍**: 使用右側表單新增新書籍
4. **探索關聯**: 查看作者的其他著作

## 🔒 安全設定

- ✅ 環境變數已正確設定
- ✅ 機密資料不會上傳到 Git
- ✅ CORS 已啟用跨域請求
- ✅ 使用 .gitignore 排除敏感檔案

## 🛠️ 開發工具

### 後端開發

```bash
cd server
# 使用 nodemon 自動重啟
npx nodemon app.js
```

### 前端開發

```bash
cd client
# 啟動開發伺服器
npm run dev
# 程式碼檢查
npm run lint
```

## 📦 部署

### 環境變數設定

確保在生產環境中設定以下環境變數：

- `MONGODB_URI`: MongoDB 連接字串
- `PORT`: 伺服器埠號 (預設: 4000)

### 建置前端

```bash
cd client
npm run build
```

## 📄 授權

此專案採用 MIT 授權條款。

---
