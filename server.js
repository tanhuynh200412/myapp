const express = require('express');
const cors = require('cors'); // Import thư viện CORS
const app = express();
const PORT = 3000; // Cổng chạy trong container

// 1. Cấu hình CORS Middleware (KHẮC PHỤC LỖI KẾT NỐI TỪ FRONTEND)
// Cho phép tất cả các nguồn truy cập (để dễ dàng phát triển)
app.use(cors()); 
// Hoặc sử dụng cấu hình chặt chẽ hơn:
/*
app.use(cors({
    origin: ['http://13.222.10.231:8080', 'http://localhost:8080'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
*/

// 2. Middleware xử lý JSON (Bắt buộc để nhận dữ liệu từ Form Frontend)
app.use(express.json());

// 3. Route API Đăng ký và Đăng nhập (Demo)
app.post('/api/auth/register', (req, res) => {
    const { username, password } = req.body;
    // Thêm logic kiểm tra username, hash mật khẩu, lưu vào DB tại đây
    
    // Giả lập thành công
    console.log(`User registered: ${username}`);
    return res.status(201).json({ 
        message: 'Đăng ký thành công! Vui lòng đăng nhập.', 
        user: { username } 
    });
});

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    // Thêm logic kiểm tra user trong DB và xác thực mật khẩu tại đây

    if (username === 'testuser' && password === 'testpass') {
        return res.status(200).json({ 
            message: 'Đăng nhập thành công!', 
            token: 'fake-jwt-token' 
        });
    } else {
        return res.status(401).json({ 
            message: 'Sai tên đăng nhập hoặc mật khẩu.' 
        });
    }
});

// Route gốc (Giữ nguyên)
app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});