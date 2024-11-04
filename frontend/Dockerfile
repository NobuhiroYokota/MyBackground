# ベースイメージ
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポート番号を指定（Next.js のデフォルトは 3000）
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "dev"]
