$().ready(function(){
    //������ �������� ����
    resize = new Resize();
    resize.start();
    
    //����� ����
    game=new Init();
    game.start();
})
