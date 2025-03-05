const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(process.cwd(), 'db', 'users.json')

const read = async () => {
    try {
        const json = await fs.readFile(filePath, 'utf-8');
        return json ? JSON.parse(json) : []
    } catch (e) {
        console.log('Error', e.message);
    }
}

const write = async (users)=>{
    try {
        await fs.writeFile(filePath, JSON.stringify(users, null,2))
    }catch (e) {
        console.log('Error', e.message);
    }
}

module.exports = {
    read,
    write
}