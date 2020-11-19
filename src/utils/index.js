export function getRedirectPath(type, header){
    let path =''

    path += type === 'laoban' ? '/laoban' : '/dashen'

    //如果没有头像添加info
    if(!header){
        path += 'info'

    }
    return path
}