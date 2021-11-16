let obj = {
    "schools": []
}
fetch('./info.json')
    .then(response => response.json())
    .then(data => values = data)
    .catch(error => console.log(error));
$(".submit").click(function () {
    var list = document.getElementById("collegeList").value.split(", ");
    tb1 = document.createElement('table');
    tb1.style.width = '75%';
    tb1.style.margin = 'auto';
    tb1.style.border = '1px solid white';
    tb1.style.color = 'white';
    tb1.setAttribute('width', '100%');
    list.forEach(element => {
        for (var i = 0; i < values.length; i++) {
            for (var g = 0; g < values[i].length; g++) {
                if (values[i][g].includes(element)) {
                    const tr = tb1.insertRow();
                    for (var y = 1; y <= 3; y++) {
                        const td = tr.insertCell();
                        td.appendChild(document.createTextNode(values[i][y]));
                        td.style.border = '1px solid white';
                    }
                    obj["schools"].push(
                        {
                            "School": values[i][1],
                            "Deadline Type": values[i][2],
                            "Deadline Date": values[i][3]
                        }
                    )
                }
            }
        }

        console.log(obj);
    });
    document.getElementById('displaySection').appendChild(tb1);
});
