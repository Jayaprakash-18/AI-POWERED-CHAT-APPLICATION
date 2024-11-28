
        // Get references to elements
        const chatForm = document.getElementById('chat-form');
        const inputBox = document.getElementById('input-box');
        const messagesDiv = document.getElementById('messages');

        // Add event listener to the form
        chatForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const userMessage = inputBox.value.trim();
            if (!userMessage) return;

            // Display user's message
            displayMessage(userMessage, 'user-message');

            // Send the message to the server
            fetch('chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ input_box: userMessage })
            })
            .then(response => response.text())
            .then(data => {
                // Display bot's response
                displayMessage(data, 'bot-message');
            })
            .catch(error => {
                console.error('Error:', error);
                displayMessage('Error: Unable to process your request.', 'bot-message');
            });

            // Clear the input box
            inputBox.value = '';
        });

        // Function to display a message
        function displayMessage(text, className) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', className);

            const avatar = document.createElement('img');
            avatar.classList.add('avatar');
            avatar.src = className === 'user-message'
                ? 'https://randomuser.me/api/portraits/women/1.jpg'
                : 'https://randomuser.me/api/portraits/men/1.jpg';

            const messageText = document.createElement('span');
            messageText.textContent = text;

            messageDiv.appendChild(avatar);
            messageDiv.appendChild(messageText);
            messagesDiv.appendChild(messageDiv);

            // Scroll to the bottom of the messages
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
