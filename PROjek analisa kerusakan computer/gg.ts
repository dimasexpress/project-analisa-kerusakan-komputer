class login{
    public us : string;
    public ps : string;
    
    constructor(){
        this.us = 'admin';
        this.ps = 'express';
        
    }
    
    pro(form){
        if(form.userid.value == this.us && form.pswrd.value == this.ps)
        {
        alert("Anda Berhasi Login,Silahkan Tekan OK Untuk Ke menu Beranda");
      window.close('login.html');
      window.open('index/home.html');
       }else{
         alert("Lopot Bos Password E");
      window.close('login.html');
      window.open('login.html');
          
    }
      }

}
function check(){
    new login()
}