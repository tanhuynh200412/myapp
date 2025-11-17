// client/src/index.js

// Nhập hàm handleAuth từ Auth.js
import { handleAuth } from './components/Auth.js';

// Gắn hàm handleAuth vào cửa sổ (window) để nó có thể được gọi từ onclick trong index.html
window.handleAuth = handleAuth;

console.log('My App Frontend Loaded.');