
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");

let items = [];


function updateStorage() {
    localStorage.setItem("name_list", JSON.stringify(items));
}

function renderList() {
    todoList.innerHTML = "";

    items.forEach((text, index) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-rose-950/30 to-black/40 border border-rose-900/30 hover:border-rose-700/50 transition duration-200 group";

        const spanText = document.createElement("span");
        spanText.className = "text-sm text-rose-100 font-medium flex items-center gap-2.5";
        
        const dot = document.createElement("span");
        dot.className = "w-2 h-2 rounded-full bg-rose-500 group-hover:scale-125 transition duration-300";
        
        const textNode = document.createTextNode(text);

        spanText.appendChild(dot);
        spanText.appendChild(textNode);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-gradient text-xs px-3 py-1.5 rounded-lg transition duration-200 flex items-center gap-1 cursor-pointer";
        deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i> ลบ`;

        deleteBtn.addEventListener("click", () => {
            deleteItem(index);
        });

        li.appendChild(spanText);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    if (todoCount) {
        todoCount.textContent = `${items.length} รายการ`;
    }
}

function addItem() {
    const text = todoInput.value.trim();
    if (text === "") {
        alert("กรุณาใส่ข้อความสิ่งที่ต้องทำ");
        return;
    }
    items.push(text);
    updateStorage();
    renderList();
    todoInput.value = "";
}

function deleteItem(index) {
    items.splice(index, 1);
    updateStorage();
    renderList();
}

addBtn.addEventListener("click", addItem);

todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

window.onload = () => {
    const data = localStorage.getItem("name_list");

    if (data) {
        try {
            items = JSON.parse(data);
        } catch (e) {
            items = [];
        }
    } else {
        items = [
            "Talk with girlfriend",
            "date with girlfriend",
            "play valorant",
            "play with my pet"
        ];
        updateStorage();
    }

    renderList();
};
