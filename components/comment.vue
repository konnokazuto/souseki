<template>
    <div id="comment">
        <div class="comment-contents">
            <div class="comment-leftdiv">
                <h2>Comments</h2>
                <div class="container">
                    <p class="img-sircle woman"></p>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div class="container">
                    <p class="img-sircle men"></p>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
            <div class="comment-rightdiv">
                <img src="../assets/images/alex-blajan-159378-unsplash.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<<style lang="scss" scoped>
#comment{
    height:600px;
    background:linear-gradient(90deg,#3e3e3e 0%,#3e3e3e 80%,#f3f3f3 50%,#f3f3f3 100%);
}

h2{
    padding-top:50px;
    margin-bottom:50px;
    font-weight:bold;
}

.comment-contents{
        width:80%;
        margin:0 auto;
        height:500px;
        display:flex;

        

        .comment-leftdiv{
            background-color:#fff;
            height:auto;
            width:50%;
            padding:30px;

            .container{
                display:flex;
                margin-bottom:50px;
            }


            .img-sircle{
                width:100px;
                height:100px;
                border-radius:50%;
                background-size:cover;
            }

            .img-sircle.woman{
                background-image:url(../assets/images/masaoka.jpg);
                background-position:top;
            }

            .img-sircle.men{
                background-image:url(../assets/images/akutagawa.jpg)
            }

            p{
                width:70%;
                
            }
        }

        .comment-rightdiv{
           
            width:50%;
        }


}




</style>
