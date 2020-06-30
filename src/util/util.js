import Taro  from '@tarojs/taro';

export function taroShowToast({title='',icon='none',cb,deleta=1,navigateBack=false}){
    Taro.showToast({
        title:title,
        icon:icon,
        success(){
            if(cb && navigateBack){
                Taro.navigateBack({
                    delta:deleta
                })
            }
        }
    })
}

export function taroShowModal({title='提示',content='',cb=null}){
    Taro.showModal({
        title: title,
        content: content,
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
            if (result.confirm) {
                if(cb){
                    cb();
                }
            }
        },
        fail: () => {},
        complete: () => {}
    });
      
}

//正则处理手机号间隔问题

export function handleSpancePhone(number){
    var test=/^(\d{1,3})(\d{1,4})(\d{1,4})$/ig;
    console.log(number.replace(test,'$1-$2-$3'))
    return number.replace(test,'$1-$2-$3');

}

