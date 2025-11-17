// client/src/components/Auth.js

// Địa chỉ API Backend đã triển khai trên EC2
const API_BASE_URL = 'http://13.222.10.231:5005/api/auth';

/**
 * Hiển thị thông báo lên giao diện
 * @param {string} type - 'register' hoặc 'login'
 * @param {string} msg - Nội dung thông báo
 * @param {boolean} isSuccess - Trạng thái thành công/thất bại
 */
function showMessage(type, msg, isSuccess) {
    const element = document.getElementById(`${type}-message`);
    element.textContent = msg;
    element.className = `message ${isSuccess ? 'success' : 'error'}`;
}

/**
 * Xử lý hành động Đăng ký hoặc Đăng nhập
 * @param {string} action - 'register' hoặc 'login'
 */
async function handleAuth(action) {
    const usernameInput = document.getElementById(`${action.charAt(0)}og-username`) || document.getElementById(`${action.charAt(0)}eg-username`);
    const passwordInput = document.getElementById(`${action.charAt(0)}og-password`) || document.getElementById(`${action.charAt(0)}eg-password`);

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        showMessage(action, 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.', false);
        return;
    }

    try {
        const url = `${API_BASE_URL}/${action}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            showMessage(action, `${action === 'register' ? 'Đăng ký' : 'Đăng nhập'} thành công!`, true);
            console.log('API Success:', data);
            // Thêm logic chuyển hướng hoặc lưu token tại đây
        } else {
            const errorMsg = data.message || `Lỗi ${action === 'register' ? 'đăng ký' : 'đăng nhập'}: ${response.status}`;
            showMessage(action, errorMsg, false);
            console.error('API Error:', data);
        }
    } catch (error) {
        showMessage(action, `Lỗi kết nối Server: ${error.message}`, false);
        console.error('Fetch Error:', error);
    }
}

// Export hàm handleAuth để nó có thể được gọi từ index.js hoặc HTML
// (Trong trường hợp này, chúng ta sẽ gắn nó vào window trong index.js)
// export { handleAuth };