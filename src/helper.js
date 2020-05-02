function mergeSort(orders, start, end){
    let mid = Math.trunc((start + end) / 2);
    // console.log("orders start - ", orders);
    if(start < end){
        mergeSort(orders, start, mid);
        mergeSort(orders, mid + 1, end);
        merge(orders, start, mid, end);
    }
}

function merge(orders, start, mid, end){
    // console.log("orders - ", orders);
    let temp = [],
        i = start,
        j = mid + 1,
        k = 0;
    while(i <= mid && j <= end){
        if(isSmaller(orders[i], orders[j]))
        temp[k++] = orders[i++];
        else
        temp[k++] = orders[j++]
    }

    while(i <= mid)
    temp[k++] = orders[i++];

    while(j <= end)
    temp[k++] = orders[j++];

    j = 0;
    for(i = start;i <= end; i++)
    orders[i] = temp[j++];
}

function isSmaller(first, second){
    let firstDay = new Date(first.created.split("T")[0]),
        secondDay = new Date(second.created.split("T")[0]);

    if(firstDay.getTime() < secondDay.getTime())
    return true;
    return false;
}

function createGroups(orders){
    let groupNumber = 0,
        groups = [];
        groups[0] = {
            created: orders[0].created,
            count: 1,
            price: Number(orders[0].price)
        };

    function isEqual(first, second){
        if((new Date(first.split("T")[0]).getTime()) === (new Date(second.split("T")[0]).getTime()))
        return true;
        return false;
    }

    for(let i = 1;i < orders.length; i++){
        if( isEqual(orders[i].created, groups[groupNumber].created)){
            groups[groupNumber].count++;
            groups[groupNumber].price = groups[groupNumber].price + Number(orders[i].price)
        } else{
            groupNumber ++;
            groups[groupNumber] = {
                created: orders[i].created,
                count: 1,
                price: Number(orders[i].price)
            }
        }
    }
    return groups;
}

export {
    mergeSort, createGroups
}

