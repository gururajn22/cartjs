var addItemId=0;
function addToCart(item){
    addItemId+=1;
    const selectedItem=document.createElement("div");
    selectedItem.classList.add("cartImg");
    selectedItem.setAttribute("id",addItemId);
    const img=document.createElement("img");
    img.setAttribute("src",item.children[0].currentSrc);
    const cartItems=document.getElementById("title");
    selectedItem.append(img);
    cartItems.append(selectedItem);
    const delete1=document.createElement("button");
    delete1.innerText='Delete';
    delete1.setAttribute("onClick","del("+addItemId+")");
    selectedItem.append(delete1);
}
function del(item){
    document.getElementById(item).remove();
} 