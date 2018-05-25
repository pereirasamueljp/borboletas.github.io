body{
    background-color: rgb(245, 245, 245);
}
#logo{
    display: inline;
    position: relative;
    margin-left: 15%;
    margin-bottom: 1%;
    width: 150px;
    height: 105px;
    overflow: hidden;
    margin-top: 2.5%;
    vertical-align: top;
}
#menu{
    margin-right: 50px;
}
#menu ul{
    float: right;
    position: unset;
    list-style-type: none;
    display: block;
    background-color: transparent;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
 
}
#menu li{
    float: left;
    padding-top: 50px;
    margin-left: 12px;
    margin-bottom: 12px;
    margin-right: 12px;;
    text-align: center;
    border-top: 4px solid transparent;
    
}
#menu li a{
    display: block;
    
    
    
}
#menu li a:hover{
    background-color: transparent;
    border-top: 4px solid rgb(153, 0, 54);
    color: rgb(153, 0, 54);
    padding-top: 50px;
    margin-top: -54px;
}
#home a{
    background-color: transparent;
    border-top: 4px solid rgb(153, 0, 54);
    padding-top: 50px;
    margin-top: -54px;
}
#menu{
    margin-top: -24px;
}

#slideshow{
    position: relative;
    width: 102%;
    height: 5%;
    margin-left: -8px;
    background-image: url("paisagem.png");
    overflow: hidden;
}


.button{
    width: 17px;
    height: 15.5px;
}
#boxinformation{
    position: absolute;
    margin-top: 5%;
    margin-left: 20%;
    max-width: 25.9%;
    width: auto;
    height: auto;
    border: 0.2em solid rgb(73, 111, 140); 
    overflow: hidden;
}


#slideshow ul{
    margin-top: 18%;
    margin-left: 40%;
    margin-right: auto;
    overflow: hidden;
    list-style-type: none;
    display: block;
    white-space: nowrap;

}
#slideshow li{
   
    display: inline;
    
}
#svg{
    width: 20px;
    height: 20px;
    
}
#svg circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
#svg circle:hover{
    cursor:pointer;
}
#svg circle:active{
    transition: 0.5s ease-in-out;
    fill: rgba(0, 0, 0, 0.26);
}
#menusvg{
    display: none;
}

@media screen and (max-width: 800px){
    #logo{
        margin-right: auto;
        margin-left: 20%;
        margin-top: 20px;
        
    }
    #menusvg{
        position: absolute;
        display: inline;
        float: right;
        position: relative;
        margin-top: 4%;
        margin-right: 5%;
        fill:  rgb(73, 111, 140);
    }
    #menusvg:hover{
        cursor: pointer;
    }
    #menu ul{
        float: right;
        display: block;
        background-color: blue;
        overflow: hidden;
        margin-left: 50%;
        margin-right: -10%;
        margin-top: -10%;
        height: 100%;
        
        
    }
    #menu li{
        float: left;
        padding-top: 50px;
        margin-left: 12px;
        margin-bottom: 12px;
        margin-right: 12px;;
        text-align: center;
        border-top: 4px solid transparent;
        
    }
    #menu li a{
        display: block;
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-family: Trebuchet MS, sans-serif;
    }
    #menu li a:hover{
        background-color: transparent;
        border-top: 4px solid rgb(153, 0, 54);
        color: rgb(153, 0, 54);
        padding-top: 50px;
        margin-top: -54px;
    }
    #home a{
        background-color: transparent;
        border-top: 4px solid rgb(153, 0, 54);
        padding-top: 50px;
        margin-top: -54px;
    }

    #slideshow{
        width: 105%;
        height: 5%;
    }
    

}
@media screen and (max-width: 500px){
    #menusvg{
        margin-top: 10%;

    }
    #slideshow ul{
        margin-top: 18%;
        margin-left: 5%;
        margin-right: auto;
        overflow: hidden;
        list-style-type: none;
        display: block;
        white-space: nowrap;
    
    }

}