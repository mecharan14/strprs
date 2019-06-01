const strprs = (target, dest) =>{
    let arr = target.split('%');
    let arr2 = [];
    arr.forEach(alt =>{     /* Searches for template and deletes from the string */
        if(dest.indexOf(alt) != -1){
            dest = dest.replace(alt, ' ');
        }else{
            arr2.push(alt); /* Adding parameters to an array */
        }
    })
    dest = dest.split(' ');  /* Splits the remaining string into an array */
    let count = [];
    let results = [];
    dest.forEach((v,i)=>{
        if(v == '' || v == ' '){   /* Finding the indeces of empty elements or spaces */
            count.push(i);
        }
    })

    dest.forEach((v,i)=>{
        if(count.indexOf(i) == -1){   /* Adding only real values to an array leaving spaces and blanks */
            results.push(v);
        }
    })

    let object = {};

    arr2.forEach((v,i)=>{
        object[v] = results[i]         /* Transforming results to an object */
    })

    return object;                  /* returning final object */

}
