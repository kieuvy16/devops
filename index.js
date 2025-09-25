const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Trang login với design hiện đại
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Đăng Nhập - Modern Login</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Background Animation */
        body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="4"/></g></svg>') repeat;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .login-form {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.2);
          width: 400px;
          max-width: 90vw;
          animation: slideUp 0.8s ease-out;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 15px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .logo-icon::after {
          content: '🔐';
          font-size: 24px;
        }

        h2 {
          text-align: center;
          color: #333;
          font-weight: 700;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
          font-size: 14px;
        }

        .input-group {
          position: relative;
          margin-bottom: 25px;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          z-index: 1;
          font-size: 18px;
        }

        input[type="text"], input[type="password"] {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #f8f9fa;
          outline: none;
        }

        input[type="text"]:focus, input[type="password"]:focus {
          border-color: #667eea;
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
        }

        .login-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          position: relative;
          overflow: hidden;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
        }

        .login-btn:active {
          transform: translateY(0);
        }

        .login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .login-btn:hover::before {
          left: 100%;
        }

        .forgot-password {
          text-align: center;
          margin-top: 20px;
        }

        .forgot-password a {
          color: #667eea;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .forgot-password a:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        .divider {
          text-align: center;
          margin: 25px 0;
          position: relative;
          color: #999;
          font-size: 14px;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e1e5e9;
        }

        .divider span {
          background: rgba(255, 255, 255, 0.95);
          padding: 0 15px;
        }

        .social-login {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-btn {
          flex: 1;
          padding: 12px;
          border: 2px solid #e1e5e9;
          background: white;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 18px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* Responsive */
        @media (max-width: 480px) {
          .login-form {
            padding: 30px 25px;
          }
          
          h2 {
            font-size: 24px;
          }
        }

        /* Loading animation */
        .loading {
          display: none;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top: 2px solid white;
          animation: spin 1s linear infinite;
          margin-right: 10px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatParticle 15s linear infinite;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="particles"></div>
      
      <div class="container">
        <form class="login-form" method="POST" action="/login" id="loginForm">
          <div class="logo">
            <div class="logo-icon"></div>
            <h2>Chào mừng trở lại</h2>
            <p class="subtitle">Đăng nhập để tiếp tục</p>
          </div>

          <div class="input-group">
            <span class="input-icon">👤</span>
            <input type="text" name="username" placeholder="Tên đăng nhập" required />
          </div>

          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input type="password" name="password" placeholder="Mật khẩu" required />
          </div>

          <button type="submit" class="login-btn">
            <div class="loading" id="loading"></div>
            <span id="btnText">Đăng nhập</span>
          </button>

          <div class="forgot-password">
            <a href="#" onclick="alert('Tính năng này chưa được triển khai'); return false;">Quên mật khẩu?</a>
          </div>

          <div class="divider">
            <span>hoặc</span>
          </div>

          <div class="social-login">
            <a href="#" class="social-btn" onclick="alert('Demo - Google Login'); return false;">🌟</a>
            <a href="#" class="social-btn" onclick="alert('Demo - Facebook Login'); return false;">📘</a>
            <a href="#" class="social-btn" onclick="alert('Demo - GitHub Login'); return false;">⚡</a>
          </div>
        </form>
      </div>

      <script>
        // Tạo particles động
        function createParticles() {
          const particlesContainer = document.querySelector('.particles');
          for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
          }
        }

        // Animation khi submit form
        document.getElementById('loginForm').addEventListener('submit', function(e) {
          const loading = document.getElementById('loading');
          const btnText = document.getElementById('btnText');
          const btn = e.target.querySelector('.login-btn');
          
          loading.style.display = 'inline-block';
          btnText.textContent = 'Đang xử lý...';
          btn.style.pointerEvents = 'none';
          
          // Reset sau 3 giây nếu có lỗi
          setTimeout(() => {
            loading.style.display = 'none';
            btnText.textContent = 'Đăng nhập';
            btn.style.pointerEvents = 'auto';
          }, 3000);
        });

        // Khởi tạo particles khi trang load
        window.addEventListener('load', createParticles);

        // Hiệu ứng typing cho placeholder
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
          input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
          });
          
          input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
          });
        });

        // Thêm hiệu ứng ripple cho button
        document.querySelector('.login-btn').addEventListener('click', function(e) {
          const ripple = document.createElement('span');
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.classList.add('ripple');
          
          this.appendChild(ripple);
          
          setTimeout(() => {
            ripple.remove();
          }, 600);
        });
      </script>

      <style>
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      </style>
    </body>
    </html>
  `);
});

// Trang thành công sau khi đăng nhập
const successPage = (username) => `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập thành công</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .success-container {
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        padding: 50px;
        border-radius: 20px;
        animation: celebrate 0.8s ease-out;
      }
      @keyframes celebrate {
        0% { transform: scale(0.8); opacity: 0; }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); opacity: 1; }
      }
      .success-icon {
        font-size: 80px;
        margin-bottom: 20px;
        animation: bounce 1s ease-in-out infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      h1 { font-size: 36px; margin-bottom: 15px; }
      p { font-size: 18px; margin-bottom: 30px; opacity: 0.9; }
      .logout-btn {
        padding: 15px 30px;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        color: white;
        border-radius: 10px;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
      }
      .logout-btn:hover {
        background: white;
        color: #667eea;
        transform: translateY(-2px);
      }
    </style>
  </head>
  <body>
    <div class="success-container">
      <div class="success-icon">🎉</div>
      <h1>Chào mừng, ${username}!</h1>
      <p>Bạn đã đăng nhập thành công vào hệ thống</p>
      <a href="/" class="logout-btn">Quay lại trang đăng nhập</a>
    </div>
  </body>
  </html>
`;

// Trang lỗi khi đăng nhập sai
const errorPage = `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập thất bại</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .error-container {
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        padding: 50px;
        border-radius: 20px;
        animation: shake 0.5s ease-in-out;
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
      }
      .error-icon {
        font-size: 80px;
        margin-bottom: 20px;
        animation: pulse 1s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      h1 { font-size: 36px; margin-bottom: 15px; }
      p { font-size: 18px; margin-bottom: 30px; opacity: 0.9; }
      .back-btn {
        padding: 15px 30px;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        color: white;
        border-radius: 10px;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
      }
      .back-btn:hover {
        background: white;
        color: #ff6b6b;
        transform: translateY(-2px);
      }
    </style>
  </head>
  <body>
    <div class="error-container">
      <div class="error-icon">❌</div>
      <h1>Đăng nhập thất bại!</h1>
      <p>Tên đăng nhập hoặc mật khẩu không chính xác</p>
      <a href="/" class="back-btn">Thử lại</a>
    </div>
  </body>
  </html>
`;

// Xử lý login với trang đẹp
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    res.send(successPage(username));
  } else {
    res.send(errorPage);
  }
});

app.listen(port, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
  console.log(`📝 Thông tin đăng nhập: admin/123`);
});