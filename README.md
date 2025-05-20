# Sera Yönetim Sistemi API

## Kurulum

1. `.env` dosyasını oluşturun:

      ```
      MONGO_URI=…
      JWT_SECRET=…
      PORT=3000
      ```
2. Paketleri yükleyin:

      ```bash
      npm init -y
      npm install express mongoose dotenv bcryptjs jsonwebtoken express-async-handler
      sudo npm install -g --force nodemon
      ```
3. **Veritabanı İşlemleri:**

   MongoDB Compass’ı açın ve “Connect” diyerek bağlanın.  
   Yeni bir database oluşturup `.env` içindeki `MONGO_URI` değerini girin.

4. **Başlatmak için:**

   ```bash
   cd src
   nodemon server.js

## API Dokümantasyonu






