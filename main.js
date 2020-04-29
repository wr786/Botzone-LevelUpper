function sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, millisecond)
        })
    }

for(var i=0; i<10000; i++) {
    $("#txtDescription_bot").val(i);
    $("#btnInheritVersion").click();
    $("#frmCreateBot").submit();
    await sleep(3000);
}