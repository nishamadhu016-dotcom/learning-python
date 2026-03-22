function addStudent() {
  let name = document.getElementById("name").value;
  let mark = document.getElementById("mark").value;

  let li = document.createElement("li");
  li.innerText = name + " - " + mark;

  document.getElementById("list").appendChild(li);
}
