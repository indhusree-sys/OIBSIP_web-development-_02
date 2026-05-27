*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial;
}

body{
    background:#f4f4f4;
}

header{
    background:black;
    color:white;
    padding:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:15px;
}

.hero{
    text-align:center;
    padding:50px;
    background:linear-gradient(to right,#00c6ff,#0072ff);
    color:white;
}

.hero img{
    border-radius:50%;
    width:150px;
    height:150px;
    margin-bottom:20px;
}

button{
    padding:10px 20px;
    border:none;
    background:white;
    color:#0072ff;
    font-size:18px;
    border-radius:5px;
    margin-top:20px;
}

.about,
.projects,
.contact{
    padding:40px;
    text-align:center;
}

.card{
    background:white;
    margin:20px auto;
    padding:20px;
    width:80%;
    border-radius:10px;
    box-shadow:0 0 10px gray;
}