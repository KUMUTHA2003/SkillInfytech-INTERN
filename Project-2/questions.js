// questions.js

const questions = [

  /* =========================
  1. PROGRAMMING (30)
  ========================= */
  {
    category: "programming",
    questions: [
      { 
        question: "What does HTML stand for?", 
        options: ["Hyper Text Markup Language", "High Text Language", "Home Tool Markup", "Hyper Tool Multi"], 
        correctAnswer: 0 
      },
      { 
        question: "What does CSS stand for?", 
        options: ["Cascading Style Sheets", "Color Style Sheet", "Creative Sheet Style", "Computer Style Sheet"], 
        correctAnswer: 0 
      },
      { 
        question: "Which language is used for interactivity?", 
        options: ["C", "JavaScript", "Python", "Java"], 
        correctAnswer: 1 
      },
      { 
        question: "Which symbol is single line comment in JS?", 
        options: ["//", "#", "<!--", "**"], 
        correctAnswer: 0 
      },
      { 
        question: "Which keyword creates variable?", 
        options: ["var", "int", "num", "char"], 
        correctAnswer: 0 
      },
      {
        question: "Which tag creates paragraph?", 
        options: ["<p>", "<h1>", "<div>", "<span>"], 
        correctAnswer: 0 
      },
      { 
        question: "Which tag inserts image?", 
        options: ["<img>", "<pic>", "<image>", "<src>"], 
        correctAnswer: 0 
      },
      { 
        question: "Which CSS property changes text color?", 
        options: ["font", "color", "text", "style"], 
        correctAnswer: 1 
      },
      { 
        question: "Which method prints console?", 
        options: ["print()", "console.log()", "echo()", "show()"], 
        correctAnswer: 1 
      },
      { 
        question: "Which company developed JavaScript?", 
        options: ["Google", "Netscape", "Apple", "IBM"], 
        correctAnswer: 1 
      },
      { 
        question: "Which bracket is used in array?", 
        options: ["()", "[]", "{}", "<>"], 
        correctAnswer: 1 
      },
      { 
        question: "Which is backend language?", 
        options: ["HTML", "CSS", "Python", "Bootstrap"], 
        correctAnswer: 2 
      },
      { 
        question: "Which symbol ends JS statement?", 
        options: [":", ";", "?", "!"], 
        correctAnswer: 1 
      },
      { 
        question: "Which tag creates link?", 
        options: ["<a>", "<link>", "<href>", "<url>"], 
        correctAnswer: 0 
      },
      { 
        question: "Which property changes background color?", 
        options: ["bg", "background-color", "color-bg", "fill"], 
        correctAnswer: 1 
      },
      { 
        question: "Which loop repeats code?", 
        options: ["if", "for", "else", "switch"], 
        correctAnswer: 1 
      },
      { 
        question: "Which keyword creates function?", 
        options: ["method", "function", "fun", "define"], 
        correctAnswer: 1 
      },
      { 
        question: "Which HTML tag creates button?", 
        options: ["<btn>", "<button>", "<input>", "<press>"], 
        correctAnswer: 1 
      },
      { 
        question: "Which CSS property aligns text?", 
        options: ["text-align", "align-text", "font-align", "center"], 
        correctAnswer: 0 
      },
      { 
        question: "Which value makes bold text?", 
        options: ["thin", "bold", "dark", "heavy"], 
        correctAnswer: 1 
      },
      { 
        question: "Which is framework?",
        options: ["React", "HTML", "CSS", "SQL"], 
        correctAnswer: 0 
      },
      { 
        question: "Which operator adds values?", 
        options: ["-", "+", "*", "/"], 
        correctAnswer: 1 
      },
      { 
        question: "Which stores many values?", 
        options: ["String", "Array", "Number", "Bool"], 
        correctAnswer: 1 
      },
      { 
        question: "Which JS popup shows message?", 
        options: ["alert()", "show()", "msg()", "warn()"], 
        correctAnswer: 0 
      },
      { 
        question: "Which is database?", 
        options: ["MongoDB", "HTML", "React", "CSS"], 
        correctAnswer: 0 
      },
      { 
        question: "Which HTML tag creates table row?",
        options: ["<td>", "<tr>", "<th>", "<row>"], 
        correctAnswer: 1 
      },
      { 
        question: "Which CSS unit is relative?", 
        options: ["px", "cm", "em", "mm"], 
        correctAnswer: 2 
      },
      { 
        question: "Which means true/false?", 
        options: ["String", "Boolean", "Array", "Float"], 
        correctAnswer: 1 
      },
      { 
        question: "Which keyword compares strictly?", 
        options: ["=", "==", "===", "<>"], 
        correctAnswer: 2 
      },
      { 
        question: "Which event on click?", 
        options: ["onhover", "onclick", "onpress", "onrun"], 
        correctAnswer: 1 
      }
    ]
  },

  /* =========================
  2. MATHEMATICS (30)
  ========================= */
  {
    category: "mathematics",
    questions: [
      { question: "12 + 8 = ?", 
        options: ["18", "20", "22", "24"], 
        correctAnswer: 1 

      },
      { question: "15 x 5 = ?", 
        options: ["70", "75", "80", "65"], 
        correctAnswer: 1 

      },
      { question: "144 / 12 = ?", 
        options: ["10", "11", "12", "13"], 
        correctAnswer: 2 

      },
      { question: "Square root of 81?", 
        options: ["7", "8", "9", "10"], 
        correctAnswer: 2 

      },
      { question: "25 x 4 = ?", 
        options: ["100", "90", "95", "80"], 
        correctAnswer: 0 

      },
      { question: "100 - 45 = ?", 
        options: ["55", "65", "45", "75"], 
        correctAnswer: 0 

      },
      { question: "Cube of 3?", 
        options: ["9", "18", "27", "36"], 
        correctAnswer: 2 

      },
      { question: "9 x 9 = ?", 
        options: ["72", "81", "90", "99"], 
        correctAnswer: 1 

      },
      { question: "18 / 2 = ?", 
        options: ["8", "9", "10", "7"], 
        correctAnswer: 1 

      },
      { question: "7 + 6 = ?", 
        options: ["12", "13", "14", "15"], 
        correctAnswer: 1 
      },
      { question: "50 / 5 = ?", 
        options: ["5", "10", "15", "20"], 
        correctAnswer: 1 
      },
      { question: "11 x 11 = ?", 
        options: ["111", "121", "131", "141"], 
        correctAnswer: 1 
      },
      { question: "30 + 20 = ?", 
        options: ["40", "45", "50", "55"], 
        correctAnswer: 2 
      },
      { question: "5² = ?", 
        options: ["10", "20", "25", "30"],
        correctAnswer: 2
      },
      { 
        question: "10³ = ?", 
        options: ["100", "1000", "10", "500"], 
        correctAnswer: 1 
      },
      { 
        question: "60 - 25 = ?", 
        options: ["35", "30", "25", "40"], 
        correctAnswer: 0 
      },
      { 
        question: "8 x 7 = ?", 
        options: ["54", "56", "58", "64"], 
        correctAnswer: 1 
      },
      { 
        question: "72 / 8 = ?", 
        options: ["8", "9", "7", "6"], 
        correctAnswer: 1 
      },
      { 
        question: "13 + 19 = ?", 
        options: ["30", "31", "32", "33"], 
        correctAnswer: 2 
      },
      { 
        question: "90 / 10 = ?", 
        options: ["8", "9", "10", "11"], 
        correctAnswer: 1 
      },
      { 
        question: "6 x 6 = ?", 
        options: ["30", "36", "42", "48"], 
        correctAnswer: 1 
      },
      { 
        question: "49 root = ?", 
        options: ["6", "7", "8", "9"], 
        correctAnswer: 1 
      },
      { 
        question: "15 + 15 = ?", 
        options: ["25", "30", "35", "40"], 
        correctAnswer: 1 
      },
      { 
        question: "100 / 4 = ?", 
        options: ["20", "25", "30", "35"], 
        correctAnswer: 1 
      },
      { 
        question: "22 - 7 = ?", 
        options: ["14", "15", "16", "17"], 
        correctAnswer: 1 
      },
      { 
        
        question: "14 x 2 = ?", 
        options: ["24", "26", "28", "30"], 
        correctAnswer: 2 
      },
      { 
        question: "5 + 9 = ?", 
        options: ["12", "13", "14", "15"], 
        correctAnswer: 2 
      },
      { 
        question: "3³ = ?", 
        options: ["9", "18", "27", "81"], 
        correctAnswer: 2 
      },
      { 
        question: "200 - 100 = ?", 
        options: ["50", "100", "150", "200"], 
        correctAnswer: 1 
      },
      { 
        question: "1/2 of 20 = ?", 
        options: ["5", "10", "15", "20"], 
        correctAnswer: 1 
      }
    ]
  },

  /* =========================
  3. GEOGRAPHY (30)
  ========================= */
  {
    category: "geography",
    questions: [
      {
        question: "Largest ocean?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctAnswer: 2
      },
      { question: "Capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"], 
        correctAnswer: 0
      },
      { 
        question: "Mount Everest is in?", 
        options: ["India", "Nepal", "China", "Bhutan"], 
        correctAnswer: 1 
      },
      { 
        question: "Longest river?", 
        options: ["Nile", "Amazon", "Ganga", "Yangtze"], 
        correctAnswer: 0 
      },
      { 
        question: "Smallest continent?", 
        options: ["Europe", "Australia", "Africa", "Asia"], 
        correctAnswer: 1 
      },
      { 
        question: "Land of Rising Sun?", 
        options: ["China", "Japan", "Korea", "Thailand"], 
        correctAnswer: 1 
      },
      { 
        question: "Largest desert?", 
        options: ["Sahara", "Thar", "Gobi", "Arabian"], 
        correctAnswer: 0 
      },
      { 
        question: "Capital of Australia?", 
        options: ["Sydney", "Canberra", "Perth", "Melbourne"], 
        correctAnswer: 1 
      },
      { 
        question: "Dark Continent?", 
        options: ["Asia", "Africa", "Europe", "America"], 
        correctAnswer: 1 
      },
      { 
        question: "East of Africa ocean?", 
        options: ["Indian", "Pacific", "Atlantic", "Arctic"], 
        correctAnswer: 0 
      },
      { 
        question: "Capital of USA?", 
        options: ["New York", "Washington DC", "Texas", "Chicago"], 
        correctAnswer: 1 
      },
      { 
        question: "Capital of Japan?", 
        options: ["Tokyo", "Osaka", "Kyoto", "Nara"], 
        correctAnswer: 0 
      },
      { 
        question: "Which is a continent?", 
        options: ["India", "Africa", "Paris", "Tokyo"], 
        correctAnswer: 1 
      },
      { 
        question: "Largest country?", 
        options: ["India", "Russia", "China", "USA"], 
        correctAnswer: 1 },
      { 
        question: "Which planet called Blue Planet?", 
        options: ["Mars", "Earth", "Venus", "Mercury"], 
        correctAnswer: 1 
      },
      { 
        question: "River in Egypt?", 
        options: ["Nile", "Amazon", "Cauvery", "Mississippi"], 
        correctAnswer: 0 
      },
      { 
        question: "Capital of Tamil Nadu?", 
        options: ["Madurai", "Chennai", "Salem", "Coimbatore"], 
        correctAnswer: 1 
      },
      { 
        question: "Which is island nation?", 
        options: ["Japan", "Nepal", "Bhutan", "Mongolia"], 
        correctAnswer: 0 
      },
      { 
        question: "Which is not ocean?", 
        options: ["Indian", "Pacific", "Arctic", "Nile"], 
        correctAnswer: 3 
      },
      { 
        question: "Which continent has most countries?", 
        options: ["Africa", "Europe", "Asia", "Australia"], 
        correctAnswer: 0 
      },
      { 
        question: "Capital of France?", 
        options: ["Rome", "Paris", "Berlin", "Madrid"], 
        correctAnswer: 1 
      },
      { 
        question: "Capital of Germany?", 
        options: ["Berlin", "Paris", "Rome", "Oslo"], 
        correctAnswer: 0 
      },
      { 
        question: "Capital of China?", 
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"], 
        correctAnswer: 2 
      },
      { 
        question: "Which is coldest continent?", 
        options: ["Asia", "Antarctica", "Europe", "Africa"], 
        correctAnswer: 1 
      },
      { 
        question: "Which sea near India?", 
        options: ["Arabian Sea", "Black Sea", "Dead Sea", "Red Sea"], 
        correctAnswer: 0 
      },
      { 
        question: "Which state has Chennai?", 
        options: ["Kerala", "Tamil Nadu", "Karnataka", "Goa"], 
        correctAnswer: 1 
      },
      { 
        question: "Which country has pyramids?", 
        options: ["Egypt", "India", "China", "Brazil"], 
        correctAnswer: 0 
      },
      { 
        question: "Which is not continent?", 
        options: ["Asia", "Europe", "Russia", "Africa"], 
        correctAnswer: 2 
      },
      { 
        question: "Which direction sun rises?", 
        options: ["West", "North", "East", "South"], 
        correctAnswer: 2 
      },
      { 
        question: "Which is mountain range?", 
        options: ["Himalayas", "Pacific", "Nile", "Sahara"], 
        correctAnswer: 0 
      }
    ]
  },

  /* =========================
  4. ENTERTAINMENT (30)
  ========================= */
  {
    category: "entertainment",
    questions: [
      {
        question: "Which film industry is based in Hollywood?",
        options: ["India", "USA", "Japan", "France"],
        correctAnswer: 1
      },
      {
        question: "Which actor is known as King Khan?",
        options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Saif Ali Khan"],
        correctAnswer: 2
      },
      {
        question: "Which movie features the character Jack Sparrow?",
        options: ["Titanic", "Pirates of the Caribbean", "Avatar", "Frozen"],
        correctAnswer: 1
      },
      {
        question: "Who is called Thala in Tamil cinema?",
        options: ["Vijay", "Ajith Kumar", "Rajinikanth", "Suriya"],
        correctAnswer: 1
      },
      {
        question: "Which singer is known as the Nightingale of India?",
        options: ["Shreya Ghoshal", "Lata Mangeshkar", "Sunidhi Chauhan", "Asha Bhosle"],
        correctAnswer: 1
      },
      {
        question: "Which movie won Oscar for Best Picture in 1998?",
        options: ["Titanic", "Avatar", "Gladiator", "Joker"],
        correctAnswer: 0
      },
      {
        question: "Who played Iron Man in Marvel movies?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Tom Holland"],
        correctAnswer: 2
      },
      {
        question: "Which Indian actor is known as Superstar?",
        options: ["Rajinikanth", "Vijay", "Ajith", "Kamal Haasan"],
        correctAnswer: 0
      },
      {
        question: "Which animated movie has Elsa character?",
        options: ["Moana", "Frozen", "Tangled", "Coco"],
        correctAnswer: 1
      },
      {
        question: "Who directed the movie Titanic?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Ridley Scott"],
        correctAnswer: 0
      },
      {
        question: "Which actor played Spider-Man in MCU?",
        options: ["Tom Holland", "Andrew Garfield", "Tobey Maguire", "Chris Pratt"],
        correctAnswer: 0
      },
      {
        question: "Which Indian singer sang 'Why This Kolaveri Di'?",
        options: ["Anirudh", "Dhanush", "Yuvan", "Sid Sriram"],
        correctAnswer: 1
      },
      {
        question: "Which platform is famous for streaming movies?",
        options: ["Netflix", "WhatsApp", "Zoom", "Telegram"],
        correctAnswer: 0
      },
      {
        question: "Which actor is called Universal Hero?",
        options: ["Rajinikanth", "Kamal Haasan", "Ajith", "Vikram"],
        correctAnswer: 1
      },
      {
        question: "Which movie series features Harry Potter?",
        options: ["Marvel", "DC", "Harry Potter", "Star Wars"],
        correctAnswer: 2
      },
      {
        question: "Which actress starred in Queen movie?",
        options: ["Deepika Padukone", "Kangana Ranaut", "Alia Bhatt", "Katrina Kaif"],
        correctAnswer: 1
      },
      {
        question: "Which musician was known as King of Pop?",
        options: ["Elvis Presley", "Michael Jackson", "Justin Bieber", "Bruno Mars"],
        correctAnswer: 1
      },
      {
        question: "Which movie has the song 'Naatu Naatu'?",
        options: ["Pushpa", "RRR", "KGF", "Bahubali"],
        correctAnswer: 1
      },
      {
        question: "Who is known as Ilaya Thalapathy?",
        options: ["Ajith", "Vijay", "Suriya", "Dhanush"],
        correctAnswer: 1
      },
      {
        question: "Which actress played Hermione in Harry Potter?",
        options: ["Emma Watson", "Jennifer Lawrence", "Scarlett Johansson", "Natalie Portman"],
        correctAnswer: 0
      },
      {
        question: "Which OTT platform made Stranger Things?",
        options: ["Amazon Prime", "Netflix", "Disney+", "Sony Liv"],
        correctAnswer: 1
      },
      {
        question: "Which actor played Batman in The Dark Knight?",
        options: ["Ben Affleck", "Christian Bale", "Robert Pattinson", "George Clooney"],
        correctAnswer: 1
      },
      {
        question: "Which Tamil actor starred in Ghilli?",
        options: ["Ajith", "Vijay", "Suriya", "Karthi"],
        correctAnswer: 1
      },
      {
        question: "Which singer is known for Shape of You?",
        options: ["Ed Sheeran", "Justin Bieber", "Drake", "Shawn Mendes"],
        correctAnswer: 0
      },
      {
        question: "Which Indian movie won Oscar for Best Original Song in 2023?",
        options: ["Pathaan", "RRR", "KGF 2", "Jawan"],
        correctAnswer: 1
      },
      {
        question: "Which actor played Captain America?",
        options: ["Chris Evans", "Chris Pratt", "Tom Hardy", "Mark Ruffalo"],
        correctAnswer: 0
      },
      {
        question: "Which actress is called Lady Superstar in Tamil cinema?",
        options: ["Trisha", "Nayanthara", "Jyothika", "Keerthy Suresh"],
        correctAnswer: 1
      },
      {
        question: "Which movie features Simba?",
        options: ["Frozen", "The Lion King", "Cars", "Toy Story"],
        correctAnswer: 1
      },
      {
        question: "Which actor starred in Pushpa?",
        options: ["Prabhas", "Allu Arjun", "Ram Charan", "Jr NTR"],
        correctAnswer: 1
      },
      {
        question: "Which Indian composer won Oscar for Slumdog Millionaire?",
        options: ["Anirudh", "AR Rahman", "Ilaiyaraaja", "Harris Jayaraj"],
        correctAnswer: 1
      }
    ]
  }

];