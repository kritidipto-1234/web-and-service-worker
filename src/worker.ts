import heavySyncTask from "./heavySyncTask";

console.log("Web Worker ran");

self.addEventListener("message", function (e) {
  //message from  main
  console.log("Message from main thread", e);
  switch (e.data) {
    case "heavy-task1":
      const result = heavySyncTask();
      this.self.postMessage({ type: "heavytask1result", result });
      break;
  }
});

// self.postMessage("Message from worker- worker registered");
