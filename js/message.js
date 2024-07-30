const db = firebase.firestore();

// Send Message
document.getElementById('send-message-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const senderId = document.getElementById('sender-id').value;
    const receiverId = document.getElementById('receiver-id').value;
    const messageContent = document.getElementById('message-content').value;

    db.collection('messages').add({
        senderId,
        receiverId,
        messageContent,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log("Message sent successfully");
    }).catch((error) => {
        console.error("Error sending message: ", error);
    });
});

// View Messages
function loadMessages() {
    const messagesList = document.getElementById('messages-list');

    db.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
        messagesList.innerHTML = '';
        snapshot.forEach((doc) => {
            const message = doc.data();
            const messageItem = document.createElement('li');
            messageItem.textContent = `${message.timestamp.toDate().toLocaleString()}: ${message.messageContent}`;
            messagesList.appendChild(messageItem);
        });
    });
}

// Call loadMessages to fetch and display messages
loadMessages();

// Other message-related functions can be added here
