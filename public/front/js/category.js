/**
 * Created by Administrator on 2018/3/6.
 */
$(function(){
    //����������,һ���˵�
    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(info){
            console.log(info);
            $(".first").html( template("tmp1", info) );
            //��Ⱦ2������
            renderSecond(info.rows[0].id);
        }
    });
    //���һ���˵���������Ⱦ�����˵�
    $(".first").on("click","li",function(){
        $(this).addClass("now").siblings().removeClass("now");

        var id = $(this).data("id");
        renderSecond(id);

        //������������µ�0��0��λ��
        mui('.mui-scroll-wrapper').scroll()[1].scrollTo(0,0,300);
    });
    //��Ⱦ��������ĺ���
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