function snowFall(){
    var count = 200;
    var container = document.querySelector('.container');
    var i = 0;

    while(i < count){
        var snowflake = document.createElement('i');
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        var size = Math.random() * 10;
        snowflake.style.left = x+'px';
        snowflake.style.top = y+'px';
        snowflake.style.width = 1+size+'px';
        snowflake.style.height = 1+size+'px';

        var duration = Math.random() * 2;
        snowflake.style.animationDuration = 1+duration+'s';

        container.appendChild(snowflake);
        i++;
    }
}
snowFall();
