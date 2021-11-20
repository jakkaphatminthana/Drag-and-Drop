const plants = [
    { "id": 1, "name": "คล้ากระต่ายชมจันทร์ (Calathea-)", "cate_id": 1, "image": "image/1.png" },
    // 2.png หาข้อมูลไม่เจอ excel คล้าใบละพัน (Calathea vaginata Petersen) ประเภทไม่ตรง
    { "id": 2, "name": "คล้าใบละพัน", "cate_id": 5, "image": "image/2.png" },
    // 3.png คล้านกยูงแดง (Calathea Roseopicta) หาข้อมูลไม่เจอ ค้นทั้งชื่อเเล้วก็ชื่อทั้งวิทยาศาสตร์เเล้วก็ไม่เจอ ไทยเเล้วก็อังกฤษเเล้วก็ไม่เจอ โชคลาง การงาน?
    { "id": 3, "name": "คล้านกยูงแดง", "cate_id": 1, "image": "image/3.png" },
    // ยังไม่จัดหมวดหมู่
    { "id": 4, "name": "คล้าแววมยุรา Calathea Makoyana", "cate_id": 1, "image": "image/4.png" },
    // ยังไม่จัดหมวดหมู่
    { "id": 5, "name": "คล้าแตงโม Calathea Picturata", "cate_id": 1, "image": "image/5.png" },
    // ยังไม่จัดหมวดหมู่
    { "id": 6, "name": "คล้าม้าลายแคระ Calathea  Burke marx", "cate_id": 1, "image": "image/6.png" },
    // ยังไม่จัดหมวดหมู่
    { "id": 7, "name": "คล้านกยูงเขียว Calathea Roseopicta", "cate_id": 1, "image": "image/7.png" },
    // ยังไม่จัดหมวดหมู่
    { "id": 8, "name": "คล้าเงิน Calathea Argentea", "cate_id": 1, "image": "image/8.png" },
    // ได้เเล้วเเต่อาจจะมีชื่อไทยซ้ำกัน
    { "id": 9, "name": "เงินไหลมา", "cate_id": 1, "image": "image/9.png" },
    { "id": 10, "name": "นางกวักใบโพธิ์", "cate_id": 1, "image": "image/10.png" },
    { "id": 11, "name": "ออมเพชร", "cate_id": 5, "image": "image/11.png" },
    { "id": 12, "name": "ฟิโลเดนดรอน มรกตหยก", "cate_id": 5, "image": "image/12.png" },
    { "id": 13, "name": "เศรษฐีเรือนนอก", "cate_id": 1, "image": "image/13.png" },
    { "id": 14, "name": "เปเปอร์โรเมียด่าง", "cate_id": 4, "image": "image/14.png" },
    // เขียวหมื่นปี ตรงกับชื่ออื้น ตรงกำชื่อจริงหมวดสุขภาพ
    { "id": 15, "name": "เขียวหมื่นปี", "cate_id": 1, "image": "image/15.png" },
    { "id": 16, "name": "ลิ้นมังกรแคระขอบทอง", "cate_id": 4, "image": "image/16.png" },
    { "id": 17, "name": "เดหลี", "cate_id": 4, "image": "image/17.png" },
    { "id": 18, "name": "สับปะรดสี", "cate_id": 2, "image": "image/18.png" },
    { "id": 19, "name": "แก้วกาญจนา หลักทรัพย์", "cate_id": 3, "image": "image/19.png" },
    { "id": 20, "name": "แก้วกาญจนา อัญมณี", "cate_id": 3, "image": "image/20.png" },
    { "id": 21, "name": "เฟิร์นข้าหลวง", "cate_id": 1, "image": "image/21.png" },
    { "id": 22, "name": "เสน่ห์จันทร์ขาว", "cate_id": 1, "image": "image/22.png" },
    { "id": 23, "name": "เปปเปอร์โรเมียลายแตงโม", "cate_id": 3, "image": "image/23.png" },
    { "id": 24, "name": "พลูงาช้าง", "cate_id": 2, "image": "image/24.png" },
    { "id": 25, "name": "พลูฉลุ", "cate_id": 2, "image": "image/25.png" },
    { "id": 26, "name": "พลูทอง", "cate_id": 2, "image": "image/26.png" },
    { "id": 27, "name": "วาสนา", "cate_id": 1, "image": "image/27.png" },
    { "id": 28, "name": "ลิ้นมังกรแคระ", "cate_id": 2, "image": "image/28.png" },
    { "id": 29, "name": "พลูด่าง", "cate_id": 1, "image": "image/29.png" },
    // ชื่อไทยหาไม่เจอ ชื่ออังกฤษมีเเต่ชื่อร่วมกับ พลูต่าง
    { "id": 30, "name": "ไอวี่", "cate_id": 1, "image": "image/30.png" },
    // หาไม่เจอชื่อไทยเเละชื่ออังกฤษ
    { "id": 31, "name": "กาบหอยแครงแคระ", "cate_id": 1, "image": "image/31.png" },
    { "id": 32, "name": "รวยไม่เลิก", "cate_id": 1, "image": "image/32.png" },
    { "id": 33, "name": "เงินไหลมา", "cate_id": 1, "image": "image/33.png" },
    { "id": 34, "name": "ออมเงิน ออมทองแคระ", "cate_id": 1, "image": "image/34.png" },
    { "id": 35, "name": "แสงเงินแสงทอง", "cate_id": 1, "image": "image/35.png" },
    { "id": 36, "name": "สับปะรดสี", "cate_id": 2, "image": "image/36.png" },
    
    { "id": 37, "name": "นางกวักใบโพธิ์", "cate_id": 2, "image": "image/10.png" },
    { "id": 38, "name": "เขียวหมื่นปี", "cate_id": 2, "image": "image/15.png" },
    { "id": 39, "name": "วาสนา", "cate_id": 2, "image": "image/27.png" },
    { "id": 40, "name": "พลูด่าง", "cate_id": 2, "image": "image/29.png" },
    { "id": 41, "name": "ออมเงิน ออมทองแคระ", "cate_id": 2, "image": "image/34.png" },
    { "id": 42, "name": "วาสนา", "cate_id": 3, "image": "image/27.png" },
    { "id": 43, "name": "เขียวหมื่นปี", "cate_id": 3, "image": "image/15.png" },
    { "id": 44, "name": "สับปะรดสี", "cate_id": 3, "image": "image/18.png" },
    { "id": 45, "name": "เฟิร์นข้าหลวง", "cate_id": 3, "image": "image/21.png" },
    { "id": 46, "name": "เสน่ห์จันทร์ขาว", "cate_id": 3, "image": "image/22.png" },
    { "id": 47, "name": "พลูทอง", "cate_id": 3, "image": "image/26.png" },
    { "id": 48, "name": "สับปะรดสี", "cate_id": 3, "image": "image/36.png" },
    { "id": 49, "name": "เขียวหมื่นปี", "cate_id": 4, "image": "image/15.png" },
    { "id": 50, "name": "เศรษฐีเรือนนอก", "cate_id": 4, "image": "image/13.png" },
    { "id": 51, "name": "วาสนา", "cate_id": 4, "image": "image/27.png" },
    { "id": 52, "name": "ลิ้นมังกรแคระ", "cate_id": 4, "image": "image/28.png" },
    { "id": 53, "name": "พลูด่าง", "cate_id": 4, "image": "image/29.png" },
    { "id": 54, "name": "เศรษฐีเรือนนอก", "cate_id": 5, "image": "image/13.png" },
    { "id": 55, "name": "นางกวักใบโพธิ์", "cate_id": 5, "image": "image/10.png" },
    { "id": 56, "name": "เสน่ห์จันทร์ขาว", "cate_id": 5, "image": "image/22.png" },
    { "id": 57, "name": "พลูด่าง", "cate_id": 5, "image": "image/29.png" },
    { "id": 58, "name": "รวยไม่เลิก", "cate_id": 5, "image": "image/32.png" },
    { "id": 59, "name": "ออมเงิน ออมทองแคระ", "cate_id": 5, "image": "image/34.png" },
    { "id": 60, "name": "แสงเงินแสงทอง", "cate_id": 5, "image": "image/35.png" },
    
    
]