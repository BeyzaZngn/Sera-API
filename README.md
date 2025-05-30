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
   cd sera-api   
   cd src
   nodemon server.js

## API Dokümantasyonu

<img src="sera-api/images/Health-Check.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Register.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Login.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Create Greenhouse.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/List Greenhouses.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Get Greenhouse by ID.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Update Greenhouse.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Create Sensor Data.png" alt="Health-Check" width="200"/>

<img src="sera-api/images/Get Sensor Data.png" alt="Health-Check" width="200"/>











