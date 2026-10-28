const foods = [
  {
    name: "ข้าวมันไก่",
    desc: "ข้าวมันหอมนุ่ม เสิร์ฟพร้อมไก่ต้มและน้ำจิ้มรสเด็ด",
    price: "50 - 60 บาท",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500"
  },
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นจันท์เหนียวนุ่ม ผัดพร้อมกุ้งสดและเครื่องปรุงกลมกล่อม",
    price: "60 - 80 บาท",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500"
  },
  {
    name: "ส้มตำไทย",
    desc: "มะละกอกรอบ รสแซ่บ เปรี้ยวหวานเผ็ดลงตัว",
    price: "40 - 50 บาท",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500"
  },
  {
    name: "ข้าวผัดกะเพราหมูกรอบ",
    desc: "กะเพราเผ็ดร้อน หมูกรอบแท้ผัดเข้าเนื้อ",
    price: "55 - 70 บาท",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500"
  },
  {
    name: "ก๋วยเตี๋ยวต้มยำ",
    desc: "น้ำซุปต้มยำเข้มข้น หอมเครื่องต้มยำสด",
    price: "50 - 65 บาท",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500"
  }
];

function randomFood() {
  const randomIndex = Math.floor(Math.random() * foods.length);
  const selected = foods[randomIndex];

  document.getElementById('food-name').innerText = selected.name;
  document.getElementById('food-desc').innerText = selected.desc;
  document.getElementById('food-price').innerText = selected.price;
  document.getElementById('food-img').src = selected.image;
}