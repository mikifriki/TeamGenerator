function mapArray() {
    let	allnames = document.getElementById('textarea').value.split('\n');
    let namespergroup = document.getElementById('perGroup').value;
    let	allnameslen = allnames.length;
    let grouping = document.querySelector('.groups');
    let	numgroups = Math.ceil(allnameslen / namespergroup);
    j = 1;

    if ( numgroups !== "undefined") {
        numgroups = document.getElementById('numGroups').value;
        namespergroup = allnameslen / numgroups;
    }
    
    while (grouping.firstChild) {
        grouping.removeChild(grouping.firstChild);
    }
    
    for (i = 0; i < numgroups; i++) {
        let first = document.createElement('div');
        first.innerHTML = `<div class="group col-md-4"><h2 class="group-header">Group ${j++}</h2></div>`;
        grouping.appendChild(first);
    }
    
    $('.group').each(function() {
        for (j = 0; j < namespergroup; j++) {
        let randname = Math.floor(Math.random() * allnames.length);
        if(allnames[randname]){
            let innerNames = document.createElement('p');
            innerNames.innerHTML = ` <h3 class="group-names">${allnames[randname]}</h3>`
            this.appendChild(innerNames);
        }
        allnames.splice(randname, 1);
        }
    });
}

