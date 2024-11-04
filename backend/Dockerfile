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

# ポート番号を指定（Nest.js のデフォルトは 3000、変更した場合は合わせて設定）
EXPOSE 3001

# アプリケーションを起動
CMD ["npm", "run", "start"]
