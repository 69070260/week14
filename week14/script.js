const input_name = document.getElementById("todo-input");
const btn_add = document.getElementById("add-btn");
const container = document.getElementById("todo-list");

let currentId = 0;
let name_list = [];

function createList(text) {
    let li = document.createElement("li");
    let idNumber = ++currentId;
    li.id = "list-" + idNumber;

    let spanc = document.createElement("span");
    spanc.textContent = text + " ";

    let button = document.createElement("button");
    button.textContent = "ลบ";
    button.addEventListener("click", () => {
        deleteList(idNumber, text);
    });

    li.appendChild(spanc);
    li.appendChild(button);

    return li;
}

function deleteList(id, text) {
    let itemToDelete = document.getElementById("list-" + id);
    if (itemToDelete) {
        container.removeChild(itemToDelete);
    }

    let index = name_list.indexOf(text);
    if (index > -1) {
        name_list.splice(index, 1);
    }

    updateStorage();
}

function updateStorage() {
    let arr_to_text = JSON.stringify(name_list);
    localStorage.setItem("name_list", arr_to_text);
}

btn_add.addEventListener("click", () => {
    let text = input_name.value.trim();
    if (text === "") {
        alert("กรุณาใส่ข้อความ");
    } else {
        let new_li = createList(text);
        container.appendChild(new_li);
        name_list.push(text);
        updateStorage();
        input_name.value = "";
    }
});

input_name.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btn_add.click();
    }
});

window.onload = () => {
    let data = localStorage.getItem("name_list");
    
    if (data && JSON.parse(data).length > 0) {
        let arr = JSON.parse(data);
        arr.forEach(i => {
            let new_li = createList(i);
            container.appendChild(new_li);
            name_list.push(i);
        });
    } else {
        let defaultItems = [
            "Talk with my babe",
            "date with my babe",
            "play with my pet",
            "play valorant"
        ];
        defaultItems.forEach(i => {
            let new_li = createList(i);
            container.appendChild(new_li);
            name_list.push(i);
        });
        updateStorage();
    }
};
