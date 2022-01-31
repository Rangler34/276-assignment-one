let addBtn = document.querySelector(".add");
let table = document.querySelector("table");
let meanBtn = document.querySelector(".mean");
let weightBtn = document.querySelector(".weight");
var rowCount = 4;


function percentCalc(){
    
    for(var i=1;i<=rowCount;i++){
        var num = document.getElementById("a" + i + "-num").value;
        var div = document.getElementById("a" + i +"-div").value;
        
        if(num != "" && div != "" && div != null && div != 0){
            var percent = (num/div * 100);
            document.getElementById("a" + i + "-p").innerHTML = percent.toFixed(2)+ "%";
        }
     
        
    }
    
    
}

meanBtn.addEventListener("click", () => {
    var sum = 0;
    var activeRows = 0;

    for(var i=1;i<=rowCount;i++){
        
        var num = document.getElementById("a" + i + "-num").value;
        var div = document.getElementById("a" + i +"-div").value;
        
        if(num != "" && div != "" && div != null && div != 0){
            activeRows += 1;
            var percent = (num/div) * 100;
            sum += percent;
            
        }

        if(div == 0){
            alert("Denominator cannot be 0, this activity will not be counted towards the mean calculation, please correct it.");
            
        }

        if((num == "" && div != "") || (num != "" && div =="")){
            alert("Please fill in the empty blank");
        }

        if(num == "" && div == ""){
            alert("Activity " + i +" is empty and will not be counted towards mean calculation");
        }

        
        
    }
    
    var mean = sum/activeRows;
    document.getElementById("result").innerHTML = "Mean is " + mean.toFixed(2) + "%";

});

weightBtn.addEventListener("click", () => {
    var sum = 0;
    var totalWeight = 0;

    for(var i=1;i<=rowCount;i++){
        
        var num = document.getElementById("a" + i + "-num").value;
        var div = document.getElementById("a" + i +"-div").value;
        var weight = document.getElementById("a" + i + "-weight").value;

        if(num != "" && div != "" && div != null && weight != "" && div !=0){
            
            var percent = (num/div) * 100;
            var activitySum = (percent * weight);
            sum += activitySum;
            totalWeight += parseInt(weight);
            
        }

        if(div == 0){
            alert("Denominator cannot be 0, value will not be counted for weight, please correct it.");
        }

        if(weight == "" && num == "" && div == ""){
            alert("Activity " + i + " is empty and will not be counted for the weight calculation")
        }

        if ((weight != "" && num != "" && div == "") || (weight != "" && num == "" & div == "") || (weight == "" && num != "" && div != "")){
            alert("Enter the missing blank");
        }
        
    }

    var weighted = (sum/totalWeight);
    document.getElementById("result").innerHTML = "Final grade is " + weighted.toFixed(2) + "%";
});

addBtn.addEventListener("click", () => {
    
    rowCount++;
    
    let template = `<tr>
                        <td>Activity ${rowCount}</td>
                        <td>A${rowCount}</td>
                        <td><form>
                        <input type="number" id="a${rowCount}-weight">
                    </form></td>
                        <td><form>
                        <input type="number" id="a${rowCount}-num" onkeyup="percentCalc()">        
                    </form>
                    /
                    <form>
                        <input type="number" id="a${rowCount}-div" onkeyup="percentCalc()">
                    </form></td>
                        <td><h4 id="a${rowCount}-p"></h4></td>
                    </tr>`;    

    table.innerHTML += template;
});


