let form = document.querySelector("#JobData");
let table = document.querySelector("#makeTable");
let appdata = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {};
    data["displayed"] = false;
    const D = new FormData(form);
    D.forEach((val, key) => {
        data[key] = val;
        console.log(key);
    });
    appdata.push(data);
    console.log("Submitted: ", appdata);
    form.reset();    
});

table.addEventListener("click", () => {
    let letsMakeTable = document.querySelector("#hidentable");
    if (letsMakeTable) {
        letsMakeTable.removeAttribute("hidden");
    }
    let dynamicChange = ""; // Reset dynamicChange variable
    if (appdata.length !== 0) {
        for (let i = 0; i < appdata.length; i++) {
            dynamicChange = dynamicChange.concat("<tr>");
            if (appdata[i].displayed === false) {
                for (const key in appdata[i]) {
                    if (key !== "file" && key !== "cover" && key !== "A1" && key !== "A2" && key !== "displayed") {
                        dynamicChange = dynamicChange.concat(`<td>${appdata[i][key]}</td>`);
                    }
                }
                dynamicChange = dynamicChange.concat("</tr>");
                appdata[i].displayed = true;
            }
        }
    }
    letsMakeTable.innerHTML=letsMakeTable.innerHTML.concat(dynamicChange); // Set innerHTML directly
});
