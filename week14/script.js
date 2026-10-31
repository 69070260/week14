const foodList = [
    {
        name: "ข้าวมันไก่สูตรไหหลำ",
        desc: "ข้าวมันหอมนุ่มเคี่ยวด้วยน้ำสต๊อกไก่ เสิร์ฟพร้อมเนื้อไก่ต้มฉ่ำๆ และน้ำจิ้มเต้าเจี้ยวพริกสดขิงหอมเข้มข้น",
        price: 50,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "ผัดไทยกุ้งแม่น้ำสด",
        desc: "เส้นจันทน์เหนียวนุ่มผัดซอสมะขามเปียกสูตรโบราณ เสิร์ฟคู่กุ้งแม่น้ำตัวโตและเครื่องเคียงครบครัน",
        price: 85,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "ส้มตำไทยไข่เค็ม",
        desc: "มะละกอกรอบสด ตำครบรสหวานเปรี้ยวเผ็ดกำลังดี เพิ่มความมันด้วยไข่เค็มไชยาอย่างดี",
        price: 60,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "ต้มยำกุ้งแม่น้ำน้ำข้น",
        desc: "น้ำซุปรสจัดจ้านหอมกลิ่นข่า ตะไคร้ ใบมะกรูด และมันกุ้งเคี่ยวเข้มข้น รสชาติไทยแท้",
        price: 150,
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "ข้าวผัดกะเพราหมูกรอบไข่ดาว",
        desc: "หมูกรอบหนังแก้วผัดซอสกะเพราแท้รสร้อนแรง เสิร์ฟพร้อมข้าวสวยร้อนๆ และไข่ดาวขอบกรอบ",
        price: 70,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    }
];

const foodImage = document.getElementById("food-image");
const foodName = document.getElementById("food-name");
const foodDesc = document.getElementById("food-desc");
const foodPrice = document.getElementById("food-price");
const randomBtn = document.getElementById("random-btn");
const foodCard = document.getElementById("food-card");

function getRandomFood() {
    // ใส่ Animation จางลงก่อนเปลี่ยนข้อมูล
    foodCard.classList.add("fade-out");

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * foodList.length);
        const selectedFood = foodList[randomIndex];

        foodImage.src = selectedFood.image;
        foodName.innerText = selectedFood.name;
        foodDesc.innerText = selectedFood.desc;
        foodPrice.innerText = selectedFood.price;

        // แสดงผลกลับมาด้วย Animation
        foodCard.classList.remove("fade-out");
        foodCard.classList.add("fade-in");
    }, 200);
}

randomBtn.addEventListener("click", getRandomFood);
