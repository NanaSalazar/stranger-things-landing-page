import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export async function subscribeToHellFireClub(subscription) {
    //pegar banco de dados
    const db = getFirestore(app)
    //pegar a coleção criada no banco de dados
    const hellfireClubCollection = collection(db, 'hellfire-club-rpg')
    //adicionar objeto na coleção dentro do banco de dados
    const docRef = await addDoc(hellfireClubCollection, subscription)
    return docRef.id
}