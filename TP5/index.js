//Binômes : Heleili Belkacem Gr02 Boukherouba Dhiya Eddine Gr02

// import modules
const fs = require('fs');
const path = require('path');
// get the expression
const expression = process.argv[2];
var results = [], files = [];
// function return "true" if an expression 'expr' was found in a file 'filename'
function checkExpr(filename , expr) {
    const file = fs.readFileSync(filename, 'utf-8');
    const result = file.toLocaleLowerCase().includes(expr.toLocaleLowerCase());
    return result;
}
//--------------- Question a -----------------
// loop through arguments(files) and search for the expression

/* for (let i = 3; i < process.argv.length; i++) {
    if (checkExpr(process.argv[i], expression)) results.push(process.argv[i])
} */


//--------------- Question b -----------------
// loop through arguments(files,directories) and search for the expression

// function push all the files in directories and sub-directories into an array 'files'
function extractFiles(dir) {
    if (fs.statSync(dir).isFile()) return files.push(dir);
    else {
        fs.readdirSync(dir).forEach(f => {
            const fdir = path.join(dir,f);
            if (fs.statSync(fdir).isDirectory()) return extractFiles(fdir);
            else return files.push(fdir);
        })
    }
}

// read the arguments and search
for (let i = 3; i < process.argv.length; i++) {
    //search for the expression in the current directory if the argument was '*'
    if(process.argv[i] == "*") extractFiles("./");
    //else search for the expression in all the directories and the sub-directories
    else extractFiles(process.argv[i]);
}

//push all the files names that contains the expression into an array 'results'
files.forEach(val => { if (checkExpr(val, expression)) results.push(val)});

//display the search result
if (results.length == 0) console.log("\nNone \n");
else {
    console.log("\nfiles that containes the expression '",expression,"' : \n");
    results.forEach(value => {console.log(value,"\n")})
}

//tests :
//node index caw t0.txt * C:\CAW\test_tp5    --->  return results
//node index belkacemdhiya t0.txt * C:\CAW\test_tp5    --->  return None 
