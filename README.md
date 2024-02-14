# Password Generator - 密碼產生器

使用 Node.js + Express 製作的密碼產生器

## Features - 功能

- 產生長度為 4 ~ 16 的隨機密碼，使用者可在此範圍內指定密碼長度。
- 可選擇要包含的字元種類（小寫字母、大寫字母、數字、符號），密碼中將包含至少一個被指定的字元種類。
- 使用者可於「Exclude Characters」欄位輸入欲排除的字元，輸入於此欄位的字元將不會出現於密碼中。

## Environment SetUp - 環境建置

- Node.js v18.15.0
- Express @4.18.2
- Express-handlebars @7.1.2
- Bootstrap @5.1.3

## Installation and Execution - 安裝並執行專案

1.開啟終端機（Terminal）， clone 此專案至本機電腦。

```
https://github.com/h967160/password-generator.git
```

2.開啟終端機（Terminal），進入存放此專案的資料夾。

```
cd password_generator
```

3.安裝 npm 套件

```
npm install
```

4.安裝 nodemon 工具（開發環境使用，如已安裝可跳過此步驟）

```
npm install -g nodemon
```

5.啟動伺服器

```
npm run dev
```

6.當 Terminal 出現以下訊息，表示伺服器已啟動，打開瀏覽器進入到以下網址

```
Express server is running on http://localhost:3000
```

7.如欲停止伺服器

```
ctrl + c
```
