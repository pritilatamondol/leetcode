function bubbleSort(array){
    let len = array.length;
    let isSorted = true;
    for(let i=0;i<len; i++) {
        for(let j=0;j<len-i;j++){
            if(array[j]< array[j-1]) {
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
                isSorted=false;
            }
        }
        if(isSorted) {
            console.log("Already Sorted");
        return
        }
    }
    console.log("Sorted array:" + array);

}

let arr = [5,1,2,3,67,-98,34];

bubbleSort(arr);
