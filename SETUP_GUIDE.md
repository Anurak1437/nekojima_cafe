# Nekojima Cafe - เว็บสั่งอาหารออนไลน์

เว็บไซต์สั่งอาหารออนไลน์สำหรับ Nekojima Cafe ที่พัฒนาด้วย Vite + React

## 📁 โครงสร้างโปรเจค

```
src/
├── App.jsx                 # ส่วนหลักของแอปพลิเคชัน
├── App.css                 # สไตล์หลัก
├── Components/
│   ├── Navbar.jsx         # แถบนำทางด้านบน
│   ├── Navbar.css         # สไตล์ Navbar
│   ├── Header.jsx         # ส่วนหัวพร้อมbackground
│   ├── Header.css         # สไตล์ Header
│   ├── FoodList.jsx       # ทั้งหมดของรูปอาหาร
│   ├── FoodList.css       # สไตล์ FoodList
│   ├── FoodItem.jsx       # การ์ดอาหารแต่ละรายการ
│   └── FoodItem.css       # สไตล์ FoodItem
└── assets/                # ไฟล์รูปภาพและไฟล์อื่น
```

## 🖼️ วิธีเพิ่มรูปภาพ

### 1. รูปภาพ Header (พื้นหลัง)
วางรูปภาพที่ `public/bg-header.jpg`
- ขนาดแนะนำ: 1200px × 400px หรือมากกว่า
- รูปภาพนี้จะแสดงในส่วน Header

### 2. โลโก้ Navbar
วางรูปภาพที่ `public/logo.png`
- ขนาดแนะนำ: 50px × 50px
- จะแสดงเป็นวงกลมที่มุมซ้ายของ Navbar

### 3. รูปภาพอาหาร
วางรูปภาพไปที่ `public/` และให้ชื่อตาม format: `food1.jpg`, `food2.jpg`, เป็นต้น
- ขนาดแนะนำ: 300px × 250px
- จะแสดงในรูปแบบ Grid

## 🚀 วิธีใช้

### ติดตั้ง Dependencies
```bash
npm install
```

### เรียกใช้ Development Server
```bash
npm run dev
```

จากนั้นเปิด [http://localhost:5173](http://localhost:5173) ในเบราว์เซอร์

### Build สำหรับ Production
```bash
npm run build
```

## 📝 แก้ไขข้อมูลอาหาร

เปิดไฟล์ `src/Components/FoodList.jsx` และแก้ไข array `foodItems`:

```javascript
const foodItems = [
  {
    id: 1,
    name: 'ชื่ออาหารของคุณ',
    description: 'คำอธิบายอาหาร',
    price: 199,
    image: '/food1.jpg'
  },
  // เพิ่มรายการอาหารเพิ่มเติมได้ที่นี่
]
```

## 🎨 ปรับแต่งสี

### เปลี่ยนสีหลัก (Pink/แดง)
ค้นหา `#ff69b4` หรือ `#ff1493` ในไฟล์ `.css` และเปลี่ยนเป็นสีที่ต้องการ

### ไฟล์ที่เกี่ยวข้อง:
- `src/Components/Navbar.css` - สีของ Navbar
- `src/Components/FoodItem.css` - สีราคาและปุ่ม
- `src/index.css` - สีลิงค์และปุ่มทั่วไป

## ✨ ฟีเจอร์

- ✅ Navigation Bar กับเมนูดีดีดีด
- ✅ Hero Header พร้อมรูปพื้นหลัง
- ✅ Grid Layout แสดงรายการอาหาร
- ✅ Like/Wishlist ทั้งรายการอาหาร
- ✅ เพิ่มลงตะกร้า (เตรียมพร้อมสำหรับ Backend)
- ✅ Responsive Design - ใช้งานได้บน Mobile, Tablet, Desktop
- ✅ Hover Effects สำหรับ UX ที่ดีขึ้น

## 📱 Responsive
เว็บไซต์นี้ปรับขนาดได้บนอุปกรณ์ทั้งหมด:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)

## 🔧 เทคโนโลยีที่ใช้

- **React 18** - UI Library
- **Vite** - Build Tool
- **CSS3** - Styling
- **JavaScript ES6+** - Programming Language

## 📧 หากต้องการเพิ่ม Feature

สามารถเพิ่มได้:
- Shopping Cart Functionality
- User Authentication
- Payment Integration
- Order Tracking
- Admin Dashboard

---

สร้างด้วย ❤️ สำหรับ Nekojima Cafe
