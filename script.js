const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.getElementById("clickToRecord").addEventListener('click', function() {
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    console.log(transcript);

    document.getElementById('disVoice').innerHTML = transcript;
  
    queryVoiced = transcript;
  });

  if (speech == true) {
    recognition.start();
  }
});


// const searchBtn = document.querySelector(".submitMessage");
// searchBtn.addEventListener("click", async () => {
  
//   const queryTyped = document.querySelector(".message").value;

//   const API_KEY = "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";
//   const API_URL = "https://api.openai.com/v1/chat/completions";

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${API_KEY}`
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: queryTyped || queryVoiced }],
//       max_tokens: 100
//     })
//   };

//   try {
//     const response = await fetch(API_URL, options);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// });

const submitButton = document.querySelector(".submitMessage");

async function getMessage() {
  const API_KEY = "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";
  console.log("clicked");
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": "Hello"
        }
      ],
      "max_tokens": 100
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

submitButton.addEventListener('click', getMessage);
