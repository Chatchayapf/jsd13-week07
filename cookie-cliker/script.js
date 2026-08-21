// --- 1. รายชื่อศิลปิน SM สำหรับสุ่มปลดล็อกทางฝั่งขวา ---
const smArtists = [
    'Taeyeon','Johnny','Jaehyun','Yuta','Doyoung','Jungwoo',
    'Mark','Haechan','Jeno','Jaemin','Renjun','Chenle','Jisung','Ten',  
    'Karina','Winter','Ningning','Giselle',
    'Chanyeol','Baekhyun','Kai','Do Kyung Soo','Suho','Xiumin','Chen','Sehun','Lay',
    'Sungchan','Anton','Eunseok','Wonbin','Shotaro','Sohee'
];

// --- 2. รูปการ์ตูน/ไอคอนสำหรับ Pop-up เวลาคลิก ---
const artistCartoons = [
    
    'https://www.pngarts.com/files/3/Sparkles-PNG-Transparent-Image.png', 
    'https://www.pngarts.com/files/11/Star-Vector-PNG-Transparent-Image.png', 
    'https://www.pngarts.com/files/3/Crown-PNG-High-Quality-Image.png'  
];

// --- 3. ข้อมูลการปลดล็อก (Milestones) ---
const milestones = {
    10: { rank: "Baby Star" },
    50: { rank: "Rising Star" },
    100: { rank: "Super Star" },
    150: { rank: "Legendary Pink Blood" },
    200:  { rank: "KWANGYA Explorer" },
    300:  { rank: "KWANGYA Citizen" },      
    500:  { rank: "SM Universe Master" },
    750:  { rank: "Pink Blood Royalty" },
    1000: { rank: "GOD OF KWANGYA" }
};

const milestoneKeys = Object.keys(milestones).map(Number); // [10, 50, 100, 150]

// --- State (ตัวแปรเก็บสถานะเกม) ---
let clicks = 0;
// เก็บรายชื่อศิลปินที่สุ่มได้แล้วเพื่อไม่ให้สุ่มได้คนซ้ำใน Hej! Artists
const unlockedArtists = []; 

// --- DOM Elements ---
const totalClicksEl = document.getElementById('total-clicks');
const mainObjectWrapper = document.getElementById('main-object');
const currentRankEl = document.getElementById('current-rank');
const nextUnlockEl = document.getElementById('next-unlock');
const unlockedListEl = document.getElementById('unlocked-list');

// --- Functions ---

// 1. ฟังก์ชันนับคลิก
function doClick(event) {
    clicks++;
    if (totalClicksEl) totalClicksEl.textContent = clicks;

    createClickAnimation(event);
    checkMilestones();
}

// 2. ฟังก์ชันสร้าง Pop-up Animation (+1 และรูปหัวใจตรงจุดที่คลิก)
function createClickAnimation(event) {
    const popup = document.createElement('div');
    popup.className = 'click-popup';

    const rect = mainObjectWrapper.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    popup.style.left = `${x - 25}px`; 
    popup.style.top = `${y - 25}px`;

    // ตัวเลข +1
    const text = document.createElement('span');
    text.className = 'popup-text';
    text.textContent = '+1';

    // เลข +1 ขึ้นเวลาที่คลิก
    const randomArtistUrl = artistCartoons[Math.floor(Math.random() * artistCartoons.length)];
    const img = document.createElement('img');
    // img.className = 'popup-artist';
    // img.src = randomArtistUrl;

    const randomIndex = Math.floor(Math.random() * smArtists.length);
    const randomName = smArtists[randomIndex];
    const nameSpan = document.createElement('span');
    nameSpan.className = 'popup-artist-name';
    nameSpan.textContent = randomName;

    popup.appendChild(text);
    popup.appendChild(img);

    mainObjectWrapper.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 800); 
}

// 3. ฟังก์ชันสุ่มดึงชื่อศิลปินที่ยังไม่เคยปลดล็อก
function getRandomNewArtist() {
    // กรองเอาเฉพาะชื่อที่ยังไม่เคยอยู่ใน unlockedArtists
    const availableArtists = smArtists.filter(artist => !unlockedArtists.includes(artist));
    
    if (availableArtists.length === 0) return "SM Family"; // กรณีปลดล็อกครบทุกคนแล้ว
    
    const randomIndex = Math.floor(Math.random() * availableArtists.length);
    return availableArtists[randomIndex];
}

// 4. ฟังก์ชัน ตรวจสอบการปลดล็อก (10, 50, 100, 150) แล้วสุ่มชื่อมาโชว์ฝั่งขวา
function checkMilestones() {
    let nextLevel = milestoneKeys[0];
    let currentRankName = "New Fan";

    milestoneKeys.forEach(key => {
        if (clicks >= key) {
            currentRankName = milestones[key].rank;
            
            // ตรวจสอบว่า Milestone นี้ถูกปลดล็อกไปแล้วหรือยัง (เช็กจากจำนวนใน unlockedArtists)
            const milestoneIndex = milestoneKeys.indexOf(key);
            if (unlockedArtists.length <= milestoneIndex) {
                // สุ่มชื่อศิลปินใหม่ขึ้นมา 1 คนใส่ในฝั่งขวา
                const newArtist = getRandomNewArtist();
                unlockedArtists.push(newArtist);
            }

            // คำนวณหา Milestone ถัดไป
            if (milestoneIndex < milestoneKeys.length - 1) {
                nextLevel = milestoneKeys[milestoneIndex + 1];
            } else {
                nextLevel = "Maxed Out!";
            }
        }
    });

    // อัปเดตข้อมูลฝั่งขวาบน UI
    if (currentRankEl) currentRankEl.textContent = currentRankName;
    if (nextUnlockEl) nextUnlockEl.textContent = typeof nextLevel === 'number' ? `${nextLevel}` : nextLevel;

    // แสดงผลรายชื่อศิลปินที่สุ่มปลดล็อกได้ใน Unlocked Artists (ฝั่งขวา)
    if (unlockedListEl && unlockedArtists.length > 0) {
        unlockedListEl.innerHTML = ''; // ล้างค่าเก่าก่อนวาดใหม่
        unlockedArtists.forEach(artist => {
            const li = document.createElement('li');
            li.textContent = `🎉 : ${artist}`;
            unlockedListEl.appendChild(li);
        });
    }
}

// --- Event Listener ---
if (mainObjectWrapper) {
    mainObjectWrapper.addEventListener('click', doClick);
}