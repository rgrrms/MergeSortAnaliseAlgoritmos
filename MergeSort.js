let alteracoes = 0;
let alteracoesJuncao = 0;
let alteracoesDivisao = 0;

function merge() {
    //@autor: Róger Ramos
    // let list = [1, 6, 4, 7, 5, 3, 8, 2];
    let list = [];
    
    for (let i = 0 ; i < 10 ; i++){
        list.push(getRandom(1,100));
    }

    console.log("*************************************************************************************");
    console.log("*************************************************************************************");
    console.log("*************************************Merge Sort:*************************************");
    console.log("*************************************************************************************");
    console.log("*************************************************************************************");
    console.log("[ListaInicial]",list);
    console.time("Time");

    mergeSort(list, list.length)

    console.timeEnd("Time") 
    console.log("[Alterações]",alteracoes) 
    console.log("[AlteraçõesDivisão]",alteracoesDivisao) 
    console.log("[AlteraçõesJunção]",alteracoesJuncao) 
}

function handleMerge(arrayLeft, arrayRight, arr, sizeLeft, sizeRight) {
    let i = 0;
    let l = 0;
    let r = 0;

    while (l < Math.floor(sizeLeft) && r < Math.floor(sizeRight)) {
        if (arrayLeft[l] < arrayRight[r]) {
            arr[i++] = arrayLeft[l++]
            alteracoes++
            alteracoesJuncao++
            // console.log("[arrIf]",arr)
        } else {
            arr[i++] = arrayRight[r++];
            alteracoes++
            alteracoesJuncao++
            // console.log("[arrElse]",arr)
        }
    }

    while (l < Math.floor(sizeLeft)) {
        arr[i++] = arrayLeft[l++]
        alteracoes++
        alteracoesJuncao++
        // console.log("[arrEsquerda]",arr)
    }

    while (r < Math.floor(sizeRight)) {
        arr[i++] = arrayRight[r++]
        alteracoes++
        alteracoesJuncao++
        // console.log("[arrDireita]",arr)
    }
    console.log("[MERGE]",arr)
}

function mergeSort(arr, len){
    
    if (len < 2) {
        return;
    }
    // console.log("[arr]",arr)
    // console.log("[len]",len)

    let mid = Math.ceil(len / 2);
    let arrayLeft = [mid]
    let arrayRight = [len - mid]


    let k = 0;
    for (let i = 0; i < len; i++) {
        if (i < mid) {
            arrayLeft[i] = arr[i]
            alteracoes++
            alteracoesDivisao++
            // console.log("esquerda",arrayLeft)
        } else {
            arrayRight[k] = arr[i]
            k = k + 1
            alteracoes++
            alteracoesDivisao++
            // console.log("direita",arrayRight)
        }
    }
    console.log("1---arrayLeft",arrayLeft)
    // console.log("2---mid",mid)
    console.log("3---arrayRight",arrayRight)
    // console.log("4---len - mid",len - mid)
    // console.log("5---arr",arr)
    // console.log("6---Handle",arrayLeft, arrayRight, arr, mid, len - mid)
    mergeSort(arrayLeft, mid)
    mergeSort(arrayRight, len - mid)

    handleMerge(arrayLeft, arrayRight, arr, mid, len - mid)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

merge()