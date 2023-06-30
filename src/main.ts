import heavySyncTask from "./heavySyncTask";

console.log("Main script ran");
const changerButton = document.querySelector("#btn-changer")!;
const blockMainButton = document.querySelector("#btn-block-main")!;
const offloadWorkerButton = document.querySelector("#btn-offload-worker")!;
const changer = document.querySelector("#changer")!;

changerButton.addEventListener("click", function (e) {
  changer.classList.toggle("black");
});

blockMainButton.addEventListener("click", function (e) {
  console.log("Main thread blocked");
  console.log("Result = ", heavySyncTask());
  console.log("Main thread unblocked");
});

offloadWorkerButton.addEventListener("click", function () {
  worker1.postMessage("heavy-task1");
});

var worker1 = new Worker(new URL("./worker.ts", import.meta.url)); //webpack 5 special syntax to support workers
worker1.addEventListener("message", function f(e) {
  //message from web worker
  console.log("Message from worker", e);
  switch (e.data?.type) {
    case "heavytask1result":
      console.log("Result = ", e.data.result);
      break;
  }
});

// worker1.postMessage("Pinging worker from main");
