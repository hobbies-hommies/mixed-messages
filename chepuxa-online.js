const questions = ['Who?', 'Whith whom?', 'When?', 'Why?', 'What have they done?', 'What did the story end up with?'];

const otvetFactory = (who, withWhom, when, why, action, final) => {
    return {
        who,
        withWhom,
        when,
        why, 
        action, 
        final,
    }
};

function createArr(p){
    const arr = [];
    arr.push(p.who, p.withWhom, p.when, p.why, p.action, p.final)
    return arr;
}

let p1 = otvetFactory('Anya', 'with Jane', 'yesterday', 'for no reason', 'insulted their teacher', 'the teacher calmly asked them why had they done it.');
let p2 = otvetFactory('Juddy', 'with Tom', 'today', 'beacause they are head over hills about each other', 'kissed at their schooll', 'kids from 2nd grade saw it');
let p3 = otvetFactory('Tom', 'whith Jerry', 'in the 10th grade', 'because they had a lot in common', 'were working on a project together', 'everything worked out and they managed to get money out of thid project');

const mix = function() {
    const arr = [0, 1, 2, 3, 4, 5];

    for (i=arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()*i);
        let zamena = arr[i];
        arr[i] = arr[j];
        arr[j] = zamena;  
    }

    return arr;
}

const ultrachepuxa = (a, b, c) => {
    const arr = mix();
    const ar = [0, 1, 2, 3, 4, 5];
    const chepux = [];
    const sorted = [];
    const a1 = createArr(a);
    const a2 = createArr(b);
    const a3 = createArr(c);
    for (el of arr){
        if (chepux.length<2){
            chepux.push(a1[el] + el);
        } else if (chepux.length<4){
            chepux.push(a2[el] + el);
        } else {
            chepux.push(a3[el] + el);
        }
    } 

    for (i=0; i<6; i++){
        for (j=0; j<6; j++){
            if (ar[i]===arr[j]){
                sorted.push(chepux[j])
            }
        }
    }

    return chepux, sorted;
}





console.log(mix());

console.log(ultrachepuxa(p1,p2,p3));
