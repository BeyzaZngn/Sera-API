# Sera Yönetim Sistemi API

## Kurulum

1. `.env` dosyasını oluşturun:
MONGO_URI=mongodb://.......
JWT_SECRET=......
PORT=3000

2. Paketleri yükleyin:
```bash
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken express-async-handler
sudo npm install -g --force nodemon

2. Veritabanı İşlemleri:
MongoDB ve MongoDB Compass indirin ve connect diyerek Compass üzerinden bağlanın. 
Create database diyerek bir veritabanı oluşturulup, MONGO_URI .env dosyasına yapıştırılacak.

3.Başlatmak için:
cd src
nodemon server.js



