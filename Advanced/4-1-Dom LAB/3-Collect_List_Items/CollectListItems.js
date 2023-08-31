function extractText() {
    const items = [];
    const list = document.getElementsByTagName("li");
    for (const el of list) {
        items.push(el.textContent);
    }
   const field = document.getElementById("result");
   field.value = items.join("\n")
}