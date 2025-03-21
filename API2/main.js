
import { getUsers } from './getUsers.js';  
import { showUsers } from './showUsers.js';  
async function loadData() {
    const users = await getUsers(); 
    showUsers(users); 
}

loadData();
