// client/src/index.js

// Đảm bảo không có 'export' trong Auth.js và bỏ lệnh 'import' tại đây
// Chỉ cần đảm bảo logic Auth.js được chạy

// Nếu bạn dùng code mẫu, Auth.js phải được import và hàm handleAuth phải được gắn vào window.
import { handleAuth } from './components/Auth.js';

// Gắn hàm handleAuth vào cửa sổ (window)
window.handleAuth = handleAuth; 

console.log('My App Frontend Loaded.');