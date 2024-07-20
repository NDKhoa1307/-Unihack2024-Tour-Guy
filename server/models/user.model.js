import { defaultFirestore } from "../config/db.config.js";
import { collection, getDocs } from "firebase/firestore";

const collectionName = "users";
const usersCollection = collection(defaultFirestore, collectionName);
const getAllUsers = async () => {
    try{
        const users = [];
        const usersSnapshot = await getDocs(usersCollection);
        if(usersSnapshot.empty){
            console.log("No users found");
        }
        usersSnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        return users;
    }
    catch(err){
        throw new Error(err);
    }
}

export { getAllUsers };