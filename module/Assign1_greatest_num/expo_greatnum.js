
function greatnum(a,b,c){
    if(a>b&&a>c){
        console.log(`the greatest num is ${a}`);
    }
    else if(b>a&&b>c){
        return `the greatest num is ${b}`;
    }
    else{
        return `the greatest num is ${c}`;
    }
    }
export default greatnum;
