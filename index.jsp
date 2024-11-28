<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Interface</title>
    <link href="index.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> <!-- FontAwesome -->
    <script src="index.js"></script>
</head>
<body>
    <div id="chat-container">
        <!-- Messages Container -->
        <div id="messages">
            <div class="message bot-message">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Bot Avatar">
                <span>Hello! How can I assist you today?</span>
            </div>
        </div>

        <!-- Input Form -->
        <form id="chat-form">
            <input type="text" id="input-box" name="input_box" placeholder="Type your message..." required>
            <!-- Up Arrow Button (use fa-arrow-up for up arrow) -->
            <button type="submit" id="submit-btn">
                <i class="fas fa-arrow-up"></i> <!-- FontAwesome up arrow icon -->
            </button>
        </form>
    </div>


</body>
</html>