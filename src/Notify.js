
function notice(msg){
    console.log('notice: ' + msg);
}
function alert(msg){
    console.log('alert: ' + msg);
}

export default {
    notice: notice,
    alert: alert,
}