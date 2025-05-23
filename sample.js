const numbers = [40, 100, 1, 5, 25];
const container = document.getElementById("container");

function drawBars(arr, activeIndices = []) {
  container.innerHTML = "";
  arr.forEach((num, idx) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    if (activeIndices.includes(idx)) {
      bar.classList.add("active");
    }
    bar.style.height = `${num * 2}px`;
    bar.textContent = num;
    container.appendChild(bar);
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSort() {
  let arr = [...numbers];
  drawBars(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      drawBars(arr, [j, j + 1]);
      await sleep(500);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        drawBars(arr, [j, j + 1]);
        await sleep(500);
      }
    }
  }

  drawBars(arr);
}
