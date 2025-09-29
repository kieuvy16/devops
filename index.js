// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Trang login
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Login Page</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(120deg, #00b09b, #96c93d);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-box {
          background: #fff;
          padding: 30px 40px;
          border-radius: 12px;
          width: 350px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          text-align: center;
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        h2 {
          margin-bottom: 20px;
          color: #333;
        }
        .input-group {
          position: relative;
          margin-bottom: 20px;
        }
        .input-group input {
          width: 100%;
          padding: 12px 40px 12px 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.3s;
        }
        .input-group input:focus {
          border-color: #00b09b;
        }
        .toggle-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 14px;
          color: #666;
        }
        button {
          width: 100%;
          padding: 12px;
          background: #00b09b;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background: #019879;
        }
        .small {
          margin-top: 15px;
          font-size: 14px;
        }
        .small a {
          color: #00b09b;
          text-decoration: none;
        }
        .small a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="login-box">
        <h2>Đăng nhập</h2>
        <form action="/login" method="POST" id="loginForm">
          <div class="input-group">
            <input type="text" name="username" placeholder="Tên đăng nhập" required />
          </div>
          <div class="input-group">
            <input type="password" name="password" id="password" placeholder="Mật khẩu" required />
            <span class="toggle-btn" id="togglePwd">👁</span>
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <div class="small">
          <a href="#">Quên mật khẩu?</a>
        </div>
      </div>

      <script>
        const toggleBtn = document.getElementById("togglePwd");
        const pwdInput = document.getElementById("password");
        toggleBtn.addEventListener("click", () => {
          if (pwdInput.type === "password") {
            pwdInput.type = "text";
            toggleBtn.textContent = "🙈";
          } else {
            pwdInput.type = "password";
            toggleBtn.textContent = "👁";
          }
        });
      </script>
    </body>
    </html>
  `);
});

// Trang success
function successPage(user) {
  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Thành công</title>
    <style>
      body {
        background: #00b09b;
        color: white;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .box {
        text-align: center;
        background: rgba(255,255,255,0.1);
        padding: 40px;
        border-radius: 12px;
      }
      h1 { margin-bottom: 20px; }
      a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background: white;
        color: #00b09b;
        border-radius: 8px;
        text-decoration: none;
      }
      a:hover {
        background: #eee;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <h1>Xin chào ${user} 🎉</h1>
      <p>Đăng nhập thành công!</p>
      <a href="/">Đăng xuất</a>
    </div>
  </body>
  </html>`;
}

// Trang error
const errorPage = `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Thất bại</title>
    <style>
      body {
        background: #e53935;
        color: white;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .box {
        text-align: center;
        padding: 40px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
      }
      h1 { margin-bottom: 20px; }
      a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background: white;
        color: #e53935;
        border-radius: 8px;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <h1>❌ Sai tài khoản hoặc mật khẩu</h1>
      <a href="/">Thử lại</a>
    </div>
  </body>
  </html>
`;

// Xử lý login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "12345") {
    res.send(successPage(username));
  } else {
    res.send(errorPage);
  }
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
  console.log("Tài khoản demo: user / 12345");
});
