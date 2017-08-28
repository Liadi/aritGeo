const aritGeo = (progression)=>{
    let len = progression.length
    //empty array
    if (len == 0){
        return 0;
    }

    //array less than 3 and is trivially not ap nor gp
    if (len < 3){
        return -1
    }

    //array with anything other than numbers is not a progression
    if (typeof progression[1] !== "number" || typeof progression[0] !== "number"){
        return -1
    }
    let d = progression[1] - progression[0]
    let r = progression[1] / progression[0];
    let isArith = true;
    let isGeo = true;
    for (let index = 2; index < len; index++){
        //array with anything other than numbers is not a progression
        if (typeof progression[1] !== "number" || typeof progression[0] !== "number"){
            return -1
        }
        if (progression[index] - progression[index - 1] !== d){
            isArith = false;
        }
        if (progression[index] / progression[index - 1] !== r){
            isGeo = false;
        }
    }

    if (isArith){
        return "Arithmetic";
    }
    else if(isGeo){
        return "Geometric";
    }
    else{
        return -1;
    }

}


//console.log(aritGeo([1,2,3]));

export default aritGeo;