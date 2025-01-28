const nameList = [
    "Aarav Sharma", "Vivaan Khanna", "Aditya Gupta", "Vihaan Agarwal", "Arjun Singh",
    "Ananya Mehta", "Diya Kapoor", "Ishita Bansal", "Aanya Jain", "Riya Nair",
    "Krishna Iyer", "Aryan Malhotra", "Rohan Chatterjee", "Kabir Menon", "Samarth Patil",
    "Nisha Bose", "Kavya Reddy", "Tanvi Desai", "Meera Ghosh", "Ira Pillai",
    "Yash Joshi", "Saanvi Shah", "Dev Mishra", "Reyansh Roy", "Pranav Shetty",
    "Aditi Bhatt", "Priya Sinha", "Avni Verma", "Maya Rao", "Nandini Kulkarni",
    "Rahul Goel", "Karthik Murthy", "Omkar Srivastava", "Neha Das", "Siddharth Dubey",
    "Harsh Mahajan", "Isha Malviya", "Sakshi Chauhan", "Tanya Yadav", "Sneha Naik",
    "Pooja Rathi", "Anjali Pandey", "Lakshya Sengupta", "Kunal Thakur", "Arya Joshi",
    "Raghav Bhat", "Manav Chaudhary", "Dhruv Jindal", "Ishan Tiwari", "Varun Mathur",
    "Sanya Sharma", "Ridhima Mittal", "Simran Bedi", "Avika Kohli", "Tara Chawla",
    "Anushka Anand", "Ahana Vyas", "Nitya Pathak", "Mohan Borkar", "Akash Salgaonkar",
    "Rajesh Gaikwad", "Vikram Dutta", "Naveen Joshi", "Harshit Saxena", "Aryaman Solanki",
    "Shruti Kaur", "Riya Sahni", "Esha Rathi", "Anmol Dey", "Ishaan Dasgupta",
    "Ankita Basu", "Payal Mondal", "Sourav Sen", "Gautam Pradhan", "Kiran Bhosale",
    "Bhavya Chhabra", "Niharika Malhotra", "Anika Rawat", "Ritika Bhatia", "Tanisha Singh",
    "Prithvi Tomar", "Sahil Chauhan", "Ashwin Kulkarni", "Madhav Iyer", "Chaitanya Pandit",
    "Ujjwal Nanda", "Nilesh More", "Rakesh Shukla", "Ajay Goswami", "Keshav Rathi",
    "Hemant Nayar", "Satish Pillai", "Amrita Bhargava", "Prerna Tripathi", "Archana Rana",
    "Divya Tyagi", "Radhika Seth", "Meghna Bhattacharya", "Swati Acharya", "Kanika Kohli"
  ];
  

export function generateRandomName() {
    return nameList[Math.floor( Math.random() * nameList.length )];
  };

  const messageList = [
    "I hope you are doing well and staying happy always.",
    "It is always a pleasure to see you achieve your goals.",
    "Today is a beautiful day to learn something entirely new and exciting.",
    "I love how you always find creative solutions to complex problems.",
    "Can you believe how fast time flies when we are busy working?",
    "Every challenge you face makes you stronger and more resilient in life.",
    "Please remember to take breaks and take care of yourself as well.",
    "Thank you for being such a kind and understanding friend to everyone.",
    "I am so proud of all the hard work you have put in.",
    "You never fail to inspire me with your dedication and determination.",
    "Sometimes we need to pause and reflect on the blessings we have.",
    "Life is a journey filled with ups and downs, but keep going strong.",
    "Success comes to those who are patient and persevere through difficulties.",
    "I am really grateful for all the support you have given me.",
    "Dream big, work hard, and never stop believing in yourself and others.",
    "Each day brings a new opportunity to learn and grow as a person.",
    "Your positive attitude always lights up the room and spreads happiness around.",
    "Challenges are temporary, but the lessons you learn from them are forever.",
    "Don't let small setbacks stop you from achieving your larger goals in life.",
    "It's amazing to see how far you have come in such little time.",
    "I love how passionate you are about the things that matter to you.",
    "Take it one step at a time, and you will achieve great things.",
    "Remember, every small effort adds up to create something truly extraordinary.",
    "The journey to success is not always easy, but it's worth it.",
    "I believe in you and know you can overcome any obstacle in your way.",
    "Be kind to yourself because you are doing the best that you can.",
    "'😒😒😒", "🙄🙄🙄🙄🙄", "Nice👏👏👏👏", "😵‍💫🥴😵‍💫🥴", "😡😡😡😡😡", "Long live India🧡🤍💚",
    "Learning something new every day is a habit that leads to personal growth.",
    "Great achievements come from consistent effort and a never-give-up attitude in life.",
    "It's okay to take a break when you feel tired and need to recharge.",
    "This is the live class of Namaste React. This is my first class I am so much excited",
    "Illegal is illegal no consideration.. same should be implemented in India for Bangladeshis 🇮🇳 d. Trump is a very good visionary bold tre leader❤❤❤",
    "Hii ❤️❤️❤️❤️❤️", "Hello jii, Kaise ho😊", "👌👌👌👌👌", "Good Morning", "😍😍😍", "Approved ✅",
    "This is how to deal with small opportunist nations. On the other hand we talk about peace' and neighbourhood. Force is only way for peace.",
    "As a Indian really admire Chinese hard work and creativity. But don't know why are government is not supporting our young talent we have so much talent in our country itself",
    "Indian education system needs complete reform. it must be purely based on Merit, innovations and make students aware of modern technologies. We are still studying 40 years old syllabus.",
    "Today, I've submitted Temporal variations in air temperature over Guwahati city from 2015-24 project to my physics professor. And, i feel that why studying of Atmospheric physics is important for environmental awareness."
  ];

  export function generateRandomMessage() {
    return messageList[Math.floor( Math.random() * messageList.length )];
  };