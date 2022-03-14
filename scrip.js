
 document.querySelector("button").onclick = function() {
     let message = document.querySelector(".message").value
     let url = "https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/sendMessage?chat_id=-666992676&text="
     let xhttp = new XMLHttpRequest();
 xhttp.open("GET", url + message, true);
 xhttp.send()
    }

    //curl -s -X POST https://api.telegram.org/bot{5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0}/sendMessage \
 //-F chat_id='-666992676' -F text='test message'
// https://api.telegram.org/bot5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0/sendMessage/chat_id=-666992676text=hi_i_am_a_bot
//https://api.telegram.org/bot<5290620612:AAGx9YMVYNXEISgorTwYIQ7-eYVtyMclzw0>/

