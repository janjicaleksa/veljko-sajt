fetch("apartments.json")
.then(res=>res.json())
.then(data=>{
  data.forEach(name=>{
    const div=document.createElement("div");
    div.className="apartment";

    const display = name.replace("-", " ");

    div.innerHTML=`
      <img src="apartmani/${name}/1.jpg">
      <h3>${name}</h3>
    `;

    div.onclick=()=>location.href=`apartment.html?name=${name}`;

    document.getElementById("list").appendChild(div);
  });
});
