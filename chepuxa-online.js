const questions = ['When?', 'Who?', 'Whith whom?', 'How?', 'What have they done?', 'What did the story end up with?'];

const otvetFactory = ( when, who, withWhom, how, action, final) => {
    return {
        when,
        who,
        withWhom,
        how, 
        action, 
        final,
    }
};

function createArr(p){
    const arr = [];
    arr.push(p.when, p.who, p.withWhom, p.how, p.action, p.final)
    return arr;
}

let p1 = otvetFactory('Yesterday', 'Anya', 'with Jane', 'insulted their teacher', 'angrily', 'the teacher calmly asked them why had they done it.');
let p2 = otvetFactory('Today', 'Juddy', 'with Tom', 'kissed at their schooll', 'passionately', 'kids from 2nd grade saw it...');
let p3 = otvetFactory('When we were in the 10th grade', 'Tom', 'whith Jerry', 'were working on a project together', 'very diligently', 'everything worked out and they managed to get money out of this project!');

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
            chepux.push(a1[el]);
        } else if (chepux.length<4){
            chepux.push(a2[el]);
        } else {
            chepux.push(a3[el]);
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

console.log(ultrachepuxa(p1,p2,p3).join(' '));
