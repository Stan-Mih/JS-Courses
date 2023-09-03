function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const resetL = document.querySelectorAll("table tbody tr").length;
    for (let i = 0; i < resetL; i++) {
      document.querySelectorAll("table tbody tr")[i].className = "";
    }
    const infoAr = Array.from(document.querySelectorAll("table tbody td"));
    const infoArL = infoAr.length;
    const search = document.getElementById("searchField").value.toLowerCase();
    let counter = 0;

    for (let i = 0; i < infoArL; i++) {
      const currCell = infoAr[i].textContent.toLocaleLowerCase();
      if (currCell.includes(search)) {
        document.querySelectorAll("table tbody tr")[counter].className =
          "select";
      }
      if ((i + 1) % 3 === 0) counter++;
    }
  }
}
