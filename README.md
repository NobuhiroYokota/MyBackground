# MyBackground

https://create-background.vercel.app/  
任意の情報を入力したのち、入力された情報を元に、バーチャル背景を作成するサービスです  
現在、大学内のコミュニティ内での使用に限定しているため、大学名は省略しています

以前開発していたリポジトリをリプレイス(フロントエンドのみ→フルスタック)  
https://github.com/NobuhiroYokota/create-background

## 使用技術
*Frontend*
- Next.js

*Backend*
- Nest.js

*DB*
- Supabase(Baas)

*ORM*
- Prisma

## Home 画面

![HomeImg](https://github.com/NobuhiroYokota/create-background/assets/162434159/c06eed5c-5257-4cd6-9e2e-6f596cafb0ec)

## 描画画面

![OutputImg](https://github.com/NobuhiroYokota/create-background/assets/162434159/3a165567-92ae-4eb8-ba54-9fd998510d31)

## 生成された背景画像

### 16:9

生成された画像の QR コードは QR CODE API を使用して、X の id から QR コードへ変換しています  
QR コードを読み取ることで X へアクセスすることが可能です

![template](https://github.com/NobuhiroYokota/create-background/assets/162434159/88a1ba52-fb6a-4922-ba5d-6bd515119c5e)
