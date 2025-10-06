# Sử dụng image Node.js chính thức
FROM node:16

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json nếu có
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 để truy cập app
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "server.js"]
