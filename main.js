function sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, millisecond)
        })
    }

for(var i=0; i<10000; i++) {	// 共进行多少次，可以获得次数*10的经验值。
    $("#txtDescription_bot").val(i);
    $("#btnInheritVersion").click();
    $("#frmCreateBot").submit();
    await sleep(5000);	// 时间间隔，一方面是为了防止自身网络问题卡死，一方面也是减小botzone服务器负担。
}