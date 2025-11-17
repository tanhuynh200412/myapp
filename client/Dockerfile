# Stage 1: Build - Dùng Node.js để tạo ra các file tĩnh
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files để cài đặt dependencies
COPY client/package*.json ./
RUN npm install

# Copy source code và build
COPY client/. .
# Giả sử lệnh build của bạn tạo ra thư mục 'dist' hoặc 'build'
# Thay thế lệnh 'npm run build' bằng lệnh build thực tế của framework bạn
RUN npm run build 

# Stage 2: Serve - Dùng Nginx để phục vụ các file đã build
FROM nginx:alpine AS production
# Copy cấu hình Nginx tùy chỉnh nếu cần (ví dụ: client/nginx.conf)
# Nếu không có cấu hình tùy chỉnh, Nginx sẽ phục vụ mặc định từ /usr/share/nginx/html

# Copy các file tĩnh đã build từ Stage 1 vào thư mục phục vụ của Nginx
COPY --from=build /app/dist /usr/share/nginx/html 
# Thay '/app/dist' bằng thư mục output build thực tế (ví dụ: /app/build)

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]