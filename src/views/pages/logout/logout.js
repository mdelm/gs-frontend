const { default: userController } = require("src/project/services/Controllers/userController");

const  logout=()=>{
    
    let data={
      refreshToken:localStorage.getItem('refreshToken')
    }
   
    console.log('dataa',data);
  
   userController.Logout(data).then((res)=>{
    console.log('logoutRes',res);
    localStorage.clear()
     window.location.href='/#/login' 
  }).catch(error => {
    console.log(error);
  })
  }