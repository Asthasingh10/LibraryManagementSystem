const sample = [
    {
      title: "Let Us C",
      author:"Yashavant Kanetkar",
      category:"Reference Book",
      description:"It is widely used as a textbook for learning the C programming language, which is a foundational programming language often taught to beginners in the field of computer science and engineering.",
      image:{
        filename:"bookimage",
        url:"https://imgs.search.brave.com/0jE25Rurk_b0AUm9kaCG3ZGsfzzqVtmzCYyG6GLixxk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxNS16YWktUXRM/LmpwZw"
        }
  },
    {
      title: "Core Java",
      author:"Daniel Leuck",
      category:"Reference Book",
      description:"When looking for Core Java books, it's essential to check the publication date and ensure that the book aligns with the Java version you are working with, as Java evolves over time and new editions may be released to cover the latest features and improvements.",
      image:{
        filename:"bookimage",
        url:"https://imgs.search.brave.com/ibCoApEosVYPcfR51DkpdK62FJqYHVLpgnWbye1U3Wk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFyaEJTd2xvRkwu/anBn",
      }
    },
    {
      title: "Operating System",
      author:"Andrew S. Tanenbaum",
      category:"Reference Book",
      description:
        "This book provides a comprehensive introduction to the fundamental concepts of operating systems, covering topics such as process management, memory management, file systems, and more. It is used as a textbook in many universities and is known for its clarity and depth.",
        image:{
          filename:"bookimage",
          url:"https://imgs.search.brave.com/6CuwO5KpVU6zcbSiFwU0Q23fzD4MFnaMJOWBuC5SyE4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFhaVhsTkVLakwu/anBn",
        }
    },
    {
      title: "DataBase Management Sytem",
      author:"Ramakrishnan",
      category:"Reference Book",
      description:
        "The book is widely used in academic settings and industry for learning about database concepts, design, and implementation.",
        image:{
          filename:"bookimage",
          url:"https://imgs.search.brave.com/EE5a_vmYKwmGWH9Ke-Xgmi2CIrh3UAf8n7ykajTdh64/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ncy1i/bG9nLWltYWdlcy5n/cmRwLmNvL2dhdGUt/ZXhhbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8xMS8wNzEy/NTMxNi9EQk1TLTIu/anBn",
        }
      },
    {
      title: "Computer Network",
      author:"Andrew S TanenBaum",
      category:"Reference Book",
      description:
        "This book provides a comprehensive and accessible introduction to computer networking. It follows a top-down approach, starting with application-layer issues and progressing to lower layers. It's widely used in academic settings.",
        image:{
          filename:"bookimage",
          url:"https://imgs.search.brave.com/RW1kJOgD72uXCgLBVSRfFO99pZZRtB_QmIFn8Fci-oU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/dGhyaWZ0Ym9va3Mu/Y29tL2FwaS9pbWFn/ZXMvbS80ODRmMjQ1/YmI1YmVhNzU0ZDBi/MGVkZTc2ZDg2MzRi/MWExZWI4MWNlLmpw/Zw",
        }
        },
    {
      title: "Machine Learning and  Data Mining",
      author:"Samuel Hack",
      category:"Reference Book",
      description:
        "Machine Learning (ML) is a subfield of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computer systems to perform tasks without explicit programming.",
        image:{
          filename:"bookimage",
          url:"https://imgs.search.brave.com/YnduC1XZyShlgEx2PPFaiezyAw_eKgBph9mvwXt80wo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kYXRh/c2NpZW5jZWRvam8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9N/YWNoaW5lLWxlYXJu/aW5nLTQtYm9va3Mt/aW4tMS5qcGc",
        }
        },
    {
      title: "Software Engineering",
      author:"Titus winters",
      category:"Reference Book",
      description:
        "Software engineering is a systematic and disciplined approach to developing, designing, testing, and maintaining software applications and systems. ",
        image:{
          filename:"bookimage",
          url:"https://imgs.search.brave.com/OtNKQCHAWOEc8pfdPhVqOp1GTUmW2UIGEteSIRpHzmo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hYnNl/aWwuaW8vaW1nL3N3/ZV9hdF9nb29nbGUu/Mi5jb3Zlci5qcGc",
        }
        },
    {
      title: "Discrete Mathematics",
      author:"V.K. Balakrishnan",
      category:"Reference Book",
      description:
        " It provides the mathematical foundation for various computer science and information technology applications, particularly in algorithms, logic, combinatorics, and cryptography. The term discrete in this context refers to individual, separate, or distinct entities.",
        image:{
          filename:"bookimage",
          url:"https://imgs.search.brave.com/bM1maIIghZPVMY4tkcu3c7znt-Ymdga7BvN6KUfIAcc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxQy1mcnJxMi1M/LmpwZw",
        }
    },
    {
      title: "Communicative English",
      author:"Raymong Murphy",
      category:"Reference Book",
      description:
        "Communicative English refers to the use of the English language as a tool for communication, emphasizing the practical application of language skills in real-life situations.",
        image:{
          filename:"bookimage",
          url: "https://imgs.search.brave.com/V_Md--olCbyCspjH6ciSyr2aCkTHhzXaXoTNWBMUiwE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUdW53SUh6a0wu/anBn",
        },
  }
  ];
  
module.exports = { data: sample };