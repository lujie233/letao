/**
 * Created by Administrator on 2018/3/6.
 */
$(function(){
    //导航栏数据,一级菜单
    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(info){
            console.log(info);
            $(".first").html( template("tmp1", info) );
            //渲染2级分类
            renderSecond(info.rows[0].id);
        }
    });
    //点击一级菜单，重新渲染二级菜单
    $(".first").on("click","li",function(){
        $(this).addClass("now").siblings().removeClass("now");

        var id = $(this).data("id");
        renderSecond(id);

        //让区域滚动重新到0，0的位置
        mui('.mui-scroll-wrapper').scroll()[1].scrollTo(0,0,300);
    });
    //渲染二级分类的函数
    function renderSecond(id) {
        $.ajax({
            type:'get',
            url:'/category/querySecondCategory',
            data: {
                id:id
            },
            success:function (info) {
                console.log(info);
                $(".second").html( template("tmp2", info) );
            }
        })
    }
})