const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001; // Thay đổi port nếu cần

app.use(cors());
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/mDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Route API
    const CategorySchema = new mongoose.Schema({
        name: String,
    });
    const Category = mongoose.model('Category', CategorySchema);
    
    app.get('/api/categories', async (req, res) => {
        try {
            const categories = await Category.find();
            console.log("Retrieved categories:", categories);
            res.json(categories);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });


const LocationSchema = new mongoose.Schema({
    image: String,
});
const Location = mongoose.model('Location', LocationSchema);


app.get('/api/locations', async (req, res) => {
    try {
        const locations = await Location.find(); 
        console.log("Retrieved locations:", locations); 
        res.json(locations); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


const AccountSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
});

const Account = mongoose.model('Account', AccountSchema, 'Account');

// Route API để lấy danh sách accounts
app.get('/api/accounts', async (req, res) => {
    try {
        const accounts = await Account.find(); 
        console.log("Retrieved accounts:", accounts); 
        res.json(accounts); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Login
// app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const account = await Account.findOne({ username });
//         if (account && account.password === password) {
//             res.json({ success: true, message: 'Đăng nhập thành công!' });
//         } else {
//             res.status(401).json({ success: false, message: 'Username hoặc Password không đúng!' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });




// Route API để lấy danh sách categories
// app.get('/api/categories', async (req, res) => {
//     try {
//         const categories = await Category.find();
//         console.log(categories); 
//         res.json(categories);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Route API để lấy danh sách locations
// app.get('/api/locations', async (req, res) => {
//     try {
//         const locations = await Location.find();
//         console.log(locations); 
//         res.json(locations);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// //Login
// app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const account = await Account.findOne({ username });
//         if (account && account.password === password) { // Chưa mã hóa mật khẩu, hãy mã hóa trong thực tế
//             res.json({ success: true, message: 'Đăng nhập thành công!' });
//         } else {
//             res.status(401).json({ success: false, message: 'Username hoặc Password không đúng!' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Signup
// app.post('/api/register', async (req, res) => {
//     const { username, gmail, password } = req.body;

//     try {
//         const existingUser = await Account.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: 'Username đã tồn tại!' });
//         }

//         const newAccount = new Account({ username, gmail, password });
//         await newAccount.save();
//         res.status(201).json({ message: 'Thêm tài khoản thành công!' });
//     } catch (err) {
//         console.error("Lỗi:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// // Reset Password
// app.post('/api/reset-password', async (req, res) => {
//     const { username, newPassword } = req.body;

//     try {
//         const account = await Account.findOne({ username });
//         if (!account) {
//             return res.status(401).json({ success: false, message: 'Tài khoản không tồn tại' });
//         }

//         account.password = newPassword; // Cập nhật mật khẩu
//         await account.save();
//         res.status(201).json({ message: 'Reset password thành công!' });
//     } catch (err) {
//         console.error("Lỗi update password:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// Chạy server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
