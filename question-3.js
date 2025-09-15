/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n). เพราะใช้ Linear Search ซึ่งในกรณีที่แย่ที่สุด ต้องวนเช็คทุก element ใน array ถึงจะหาค่าเจอ
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log n). เพราะใช้ Binary Search ที่จะแบ่งครึ่ง array ทุกครั้งในการค้นหา 
ทำให้จำนวนการเปรียบเทียบลดลงแบบ logarithmic
*/

/* 
Which function is more efficient and why?
Answer:
findProductPrice มีประสิทธิภาพมากกว่า เพราะ O(log n) ช้ากว่า O(n) 
เมื่อข้อมูลมีขนาดใหญ่ Binary Search จะใช้เวลาน้อยกว่า Linear Search
*/

