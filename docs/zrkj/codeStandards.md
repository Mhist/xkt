# 安全规范

## 对输出内容进行转义(防止 xss 攻击)

```
//html编码，字符串转为实体
function htmlEncodeByRegExp(str) {
        var temp = "";
        if (str.length == 0) return "";
        temp = str.replace(/&/g, "&amp;");
        temp = temp.replace(/</g, "&lt;");
        temp = temp.replace(/>/g, "&gt;");
        temp = temp.replace(/\s/g, "&nbsp;");
        temp = temp.replace(/\'/g, "&#39;");
        temp = temp.replace(/\"/g, "&quot;");
        return temp;
    }
//html实体解码，实体转为字符串。
function htmlDecodeByRegExp(str) {
        var temp = "";
        if (str.length == 0) return "";
        temp = str.replace(/&amp;/g, "&");
        temp = temp.replace(/&lt;/g, "<");
        temp = temp.replace(/&gt;/g, ">");
        temp = temp.replace(/&nbsp;/g, " ");
        temp = temp.replace(/&#39;/g, "\'");
        temp = temp.replace(/&quot;/g, "\"");
        return temp;
    }


```

## 2.请求携带 token+时间戳序列号

```
try{
	data.lgParam = JSON.parse(JSON.stringify(nativeInfo.lgParam));
	data.lgParam.seq = Number(new Date()) + seqIndex++;
  // 请求seq不能重复，避免毫秒级的重复，所以后面加了index++
}catch(e){
	console.log('从app获取session失败');
}


```
