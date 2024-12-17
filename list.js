const sampleStudents = [
    {
        name: "Aarav Singh",
        roll_no: "20231001",
        branch: "Computer Science",
        image_url: "https://plus.unsplash.com/premium_photo-1681505220220-410658c008da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGJveXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Kavya Sharma",
        roll_no: "20231002",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1561153016-ac1242be8d9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Rohan Gupta",
        roll_no: "20231003",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1556817977-00e61f659427?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Anaya Verma",
        roll_no: "20231004",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Vihaan Patel",
        roll_no: "20231005",
        branch: "Electronics",
        image_url: "https://plus.unsplash.com/premium_photo-1664199486592-559b2efb0f09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Saanvi Mishra",
        roll_no: "20231006",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1514355315815-2b64b0216b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Arjun Kapoor",
        roll_no: "20231007",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1592164813419-25c81cc64ffd?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Navya Chauhan",
        roll_no: "20231008",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aarush Jain",
        roll_no: "20231009",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Ishika Malhotra",
        roll_no: "20231010",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Advait Reddy",
        roll_no: "20231011",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1578537434069-61a689064b4d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Meera Nair",
        roll_no: "20231012",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1464582920526-52639da1ce12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Dhruv Bansal",
        roll_no: "20231013",
        branch: "Electrical",
        image_url: "https://plus.unsplash.com/premium_photo-1682787495122-3469d63d22ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Zoya Singh",
        roll_no: "20231014",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1514369118554-e20d93546b30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Krishan Mehta",
        roll_no: "20231015",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Tanya Rai",
        roll_no: "20231016",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Rudra Shah",
        roll_no: "20231017",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1558899460-5bfd4c5f091a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Anika Dhawan",
        roll_no: "20231018",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1517487313006-d80558d7a5cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Reyansh Agarwal",
        roll_no: "20231019",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1590868700983-496afd504479?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Siya Basu",
        roll_no: "20231020",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1612214724848-2aca5f86cac7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Vedant Sinha",
        roll_no: "20231021",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1585690117756-adad8b64930d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Kiara Yadav",
        roll_no: "20231022",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1626478110681-ffae570d2d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aarav Singh",
        roll_no: "20231023",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1609402122820-9cb32081a555?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aarohi Goel",
        roll_no: "20231024",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1631492210747-6be6acde5dfa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Ridhima Saxena",
        roll_no: "20231025",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1593985887762-955dccf2b71e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Vivaan Khanna",
        roll_no: "20231026",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1611181355758-089959e2cfb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Esha Thakur",
        roll_no: "20231027",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/flagged/photo-1591066194694-9db88c1b56e1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Kian Joshi",
        roll_no: "20231028",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1652278860289-090c869605af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Sanvi Rathore",
        roll_no: "20231029",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Reya Kapoor",
        roll_no: "20231030",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Shaurya Vaidya",
        roll_no: "20231031",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1652278855898-6d3cd6e738b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Nitya Iyer",
        roll_no: "20231032",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aryan Seth",
        roll_no: "20231033",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Pari Bhardwaj",
        roll_no: "20231034",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1528980917907-8df7f48f6f2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Kunal Tiwari",
        roll_no: "20231035",
        branch: "Electronics",
        image_url: "https://plus.unsplash.com/premium_photo-1723802458571-d63675c5673b?q=80&w=2102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Anvi Goswami",
        roll_no: "20231036",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1628887590815-2860da1c2900?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Pranav Sharma",
        roll_no: "20231037",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1592046285097-6cdf4daf0d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Tanvi Naik",
        roll_no: "20231038",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Soham Patel",
        roll_no: "20231039",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Kashvi Shah",
        roll_no: "20231040",
        branch: "Electronics",
        image_url: "https://plus.unsplash.com/premium_photo-1661483164298-3d0a2d7d5b7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Yashvi Pandey",
        roll_no: "20231041",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1619425192860-bd4d99186366?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Raunak Rao",
        roll_no: "20231042",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1643297654399-5da3409e302a?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aadvik Malhotra",
        roll_no: "20231043",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1677594332295-affd04f83115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Shreya Kaushik",
        roll_no: "20231044",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1623945194105-cd36c4433390?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Laksh Khurana",
        roll_no: "20231045",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1564440769611-a105bcd81f1a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Vedika Chauhan",
        roll_no: "20231046",
        branch: "Computer Science",
        image_url: "https://images.unsplash.com/photo-1618355776464-8666794d2520?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Arnav Bajaj",
        roll_no: "20231047",
        branch: "Mechanical",
        image_url: "https://images.unsplash.com/photo-1629196753813-8b4827ddc7c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aayush Saxena",
        roll_no: "20231048",
        branch: "Electrical",
        image_url: "https://images.unsplash.com/photo-1571335734354-2b6148195f75?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Vanya Chatterjee",
        roll_no: "20231049",
        branch: "Civil",
        image_url: "https://images.unsplash.com/photo-1578297925104-a49c7828a20d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Parth Sharma",
        roll_no: "20231050",
        branch: "Electronics",
        image_url: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

module.exports = {data : sampleStudents };
