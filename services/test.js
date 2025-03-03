console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

const a = 5
const myFunc = ()=>{
    console.log('func');
}
module.exports = {
    a,
    myFunc
}