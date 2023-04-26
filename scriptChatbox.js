(function() {
  
    const submit = document.querySelector(".btnsubmit");
    const chatBox = document.querySelector(".message-container");
    const chatInput = document.querySelector(".message"); //get textbox value

    //return function result in HTML format inside Chatbox
    function chatTemplate(Person) {
      return (
        `
          <div class="message-card user-message">
            <div class="${Person.class}">
              ${Person.text}
            </div>
          </div>
          <div class="clear"></div>
        `
      );
    }
  
    // Click Submit button
    submit.addEventListener("click", function(e) {
      appendChatBox(true);
    });
  
    // Press Enter key
    document.addEventListener("keypress", function(e) {
      if (e.keyCode == "13") {
        appendChatBox(true);
      }
    })
  
    // create or construct chat message and placing it into chatTemplate function
    function appendChatBox(fromPerson) {
      const newChatDiv = chatTemplate({
        class: "person",
        text: chatInput.value.trim()
      });

    //display new chat message
        chatBox.innerHTML += newChatDiv;
    //scroll up to display last chat message
        chatBox.scrollTop = chatBox.scrollHeight;

    }
  }())
