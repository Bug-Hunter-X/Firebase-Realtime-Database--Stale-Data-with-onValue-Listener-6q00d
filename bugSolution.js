The solution was simple: upgrade the Firebase JavaScript SDK to the latest version.  After updating the package using npm or yarn, the data updates correctly in real-time. Here's how the corrected code looks:

```javascript
// Correct code using updated Firebase SDK
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref('path/to/data');

ref.on('value', (snapshot) => {
  const data = snapshot.val();
  // Update UI with data
  updateUI(data);
});

function updateUI(data) {
  // Update the UI elements with the received data
}
```
By upgrading the Firebase SDK, the inconsistencies that were causing the data update issue were resolved, resulting in real-time updates.