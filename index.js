const numArray = [1,2,3];
const numbersArray = [1,2,[2.1,2.2,2.3],3];
function generateList(array) {
    const list = document.createElement('ul');
    array.forEach( (value) =>{
        if (!Array.isArray(value)) {
            const item = document.createElement('li');
            item.innerText = `${value}`;
            list.append(item);
        } else {
            const item = document.createElement('li');
            const miniList = document.createElement('ul');
            list.append(item);
            item.append(miniList);
            value.forEach((value) => {
                const miniListItem = document.createElement('li');
                miniListItem.innerText = `${value}`;
                miniList.append(miniListItem);
            });
        };
    });
    document.body.append(list);
};
generateList(numArray);