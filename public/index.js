const { Firestore } = require("firebase/database");


// Initialize Firestore
const db = getFirestore(Firestore);

const taskForm = document.getElementById('login');

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const gmail = taskForm['task-title'].value;
    const pass = taskForm['task-description'].value;

    try {
        await setDoc(doc(db, 'Usuarios', 'id_usuarios'), {
            gmail,
            pass
        });
        console.log('Document successfully written!');
        console.log(gmail, pass);
    } catch (error) {
        console.error("Error writing document: ", error);
    }
});
