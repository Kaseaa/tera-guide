﻿// 火神
//made by michengs
let guidecounter = 0 ;//
let guidetimer;//
   function guid_voice(handlers) {   
	  clearTimeout(guidetimer);
      guidecounter++;
    if(guidecounter >= 2) {	
handlers['text']({
"sub_type": "message",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help 获取更多使用信息!"
});

handlers['text']({
"sub_type": "notification",
"delay": 2000,
"message_TW": "proxy频道输入:補助 help <br>获取更多使用信息!"
});
    }
    guidetimer = setTimeout(()=>{
        guidecounter = 0;
    }, 3000);
}	

module.exports = {

 "h-444-1000-100": [{"type": "func","func": guid_voice}],
 "h-444-2000-100": [{"type": "func","func": guid_voice}],


  "s-444-1000-1101": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "锤地 270 重击" }], 
 "s-444-1000-1103": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "前砸 闪避" }], 
 "s-444-1000-1108": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "丢锤 (晕眩)" }], 
 "s-444-1000-1111": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "后砸 (慢慢慢慢)" }],  
 "s-444-1000-1112": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-1000-1113": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "点名 (闪避)" }],  
 "s-444-1000-1114": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "捶地 (秒杀)" }],  
 "s-444-1000-1115": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 蓄力(击飞)" }],  
 "s-444-1000-1116": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "甜甜圈" }],   
 "s-444-1000-1117": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "随仇->跳劈 (击倒)" }],  
 "s-444-1000-1118": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "主仇->跳劈 (击倒)" }],  
 "s-444-1000-1119": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 安全→ (坦左移)" }],  
 "s-444-1000-1120": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 安全← (坦右移)" }],  
 "s-444-1000-1121": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  (4连半月)" }],  
 "s-444-1000-1122": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第3下加速'" }],  
 "s-444-1000-1123": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第2下加速" }],  
 "s-444-1000-1125": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 前砸(闪) | 后拉" }],  
 "s-444-1000-1131": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 范围(挡) | 后拉" }],  
 "s-444-1000-1135": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-1000-1138": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 蓄力(击飞)" }],  
 "s-444-1000-1139": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "转圈 (击倒)" }],  
 "s-444-1000-1140": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  (4连半月)" }],  
 "s-444-1000-1141": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第3下加速" }],  
 "s-444-1000-1142": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第2下加速" }],  
 "s-444-1000-1308": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第1次晕" }],  
 "s-444-1000-1309": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第2次晕" }],  
 "s-444-1000-1310": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第3次晕" }],  
 "s-444-1000-1311": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (右手放锤)" }],  
 "s-444-1000-1312": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (左右放锤)" }],  
 "s-444-2000-1101": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "锤地 270 重击" }], 
 "s-444-2000-1103": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "前砸 闪避" }], 
 "s-444-2000-1108": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "丢锤 (晕眩)" }], 
 "s-444-2000-1111": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "后砸 (慢慢慢慢)" }],  
 "s-444-2000-1112": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-2000-1113": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "点名 (闪避)" }],  
 "s-444-2000-1114": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "捶地 (秒杀)" }],  
 "s-444-2000-1115": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 蓄力(击飞)" }],  
 "s-444-2000-1116": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "甜甜圈" }],   
 "s-444-2000-1117": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "随仇->跳劈 (击倒)" }],  
 "s-444-2000-1118": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "主仇->跳劈 (击倒)" }],  
 "s-444-2000-1119": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 安全→ (坦左移)" }],  
 "s-444-2000-1120": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 安全← (坦右移)" }],  
 "s-444-2000-1121": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  (4连半月)" }],  
 "s-444-2000-1122": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第3下加速'" }],  
 "s-444-2000-1123": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第2下加速" }],  
 "s-444-2000-1125": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 前砸(闪) | 后拉" }],  
 "s-444-2000-1131": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 范围(挡) | 后拉" }],  
 "s-444-2000-1135": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-2000-1138": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 蓄力(击飞)" }],  
 "s-444-2000-1139": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "转圈 (击倒)" }],  
 "s-444-2000-1140": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  (4连半月)" }],  
 "s-444-2000-1141": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第3下加速" }],  
 "s-444-2000-1142": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第2下加速" }],  
 "s-444-2000-1308": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第1次晕" }],  
 "s-444-2000-1309": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第2次晕" }],  
 "s-444-2000-1310": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第3次晕" }],  
 "s-444-2000-1311": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (右手放锤)" }],  
 "s-444-2000-1312": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (左右放锤)" }],  
//
  "s-444-1000-2101": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "锤地 270 重击" }], 
 "s-444-1000-2103": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "前砸 闪避" }], 
 "s-444-1000-2108": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "丢锤 (晕眩)" }], 
 "s-444-1000-2111": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "后砸 (慢慢慢慢)" }],  
 "s-444-1000-2112": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-1000-2113": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "点名 (闪避)" }],  
 "s-444-1000-2114": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "捶地 (秒杀)" }],  
 "s-444-1000-2115": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 蓄力(击飞)" }],  
 "s-444-1000-2116": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "甜甜圈" }],   
 "s-444-1000-2117": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "随仇->跳劈 (击倒)" }],  
 "s-444-1000-2118": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "主仇->跳劈 (击倒)" }],  
 "s-444-1000-2119": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 安全→ (坦左移)" }],  
 "s-444-1000-2120": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 安全← (坦右移)" }],  
 "s-444-1000-2121": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  (4连半月)" }],  
 "s-444-1000-2122": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第3下加速'" }],  
 "s-444-1000-2123": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第2下加速" }],  
 "s-444-1000-2125": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 前砸(闪) | 后拉" }],  
 "s-444-1000-2131": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 范围(挡) | 后拉" }],  
 "s-444-1000-2135": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-1000-2138": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 蓄力(击飞)" }],  
 "s-444-1000-2139": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "转圈 (击倒)" }],  
 "s-444-1000-2140": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  (4连半月)" }],  
 "s-444-1000-2141": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第3下加速" }],  
 "s-444-1000-2142": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第2下加速" }],  
 "s-444-1000-2308": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第1次晕" }],  
 "s-444-1000-2309": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第2次晕" }],  
 "s-444-1000-2310": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第3次晕" }],  
 "s-444-1000-2311": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (右手放锤)" }],  
 "s-444-1000-2312": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (左右放锤)" }],  
 "s-444-2000-2101": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "锤地 270 重击" }], 
 "s-444-2000-2103": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "前砸 闪避" }], 
 "s-444-2000-2108": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "丢锤 (晕眩)" }], 
 "s-444-2000-2111": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "后砸 (慢慢慢慢)" }],  
 "s-444-2000-2112": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-2000-2113": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "点名 (闪避)" }],  
 "s-444-2000-2114": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "捶地 (秒杀)" }],  
 "s-444-2000-2115": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 蓄力(击飞)" }],  
 "s-444-2000-2116": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "甜甜圈" }],   
 "s-444-2000-2117": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "随仇->跳劈 (击倒)" }],  
 "s-444-2000-2118": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "主仇->跳劈 (击倒)" }],  
 "s-444-2000-2119": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 安全→ (坦左移)" }],  
 "s-444-2000-2120": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 安全← (坦右移)" }],  
 "s-444-2000-2121": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  (4连半月)" }],  
 "s-444-2000-2122": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第3下加速'" }],  
 "s-444-2000-2123": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第2下加速" }],  
 "s-444-2000-2125": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 前砸(闪) | 后拉" }],  
 "s-444-2000-2131": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 范围(挡) | 后拉" }],  
 "s-444-2000-2135": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-2000-2138": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 蓄力(击飞)" }],  
 "s-444-2000-2139": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "转圈 (击倒)" }],  
 "s-444-2000-2140": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  (4连半月)" }],  
 "s-444-2000-2141": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第3下加速" }],  
 "s-444-2000-2142": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第2下加速" }],  
 "s-444-2000-2308": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第1次晕" }],  
 "s-444-2000-2309": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第2次晕" }],  
 "s-444-2000-2310": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第3次晕" }],  
 "s-444-2000-2311": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (右手放锤)" }],  
 "s-444-2000-2312": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (左右放锤)" }],
 //
 "s-444-1000-3101": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "锤地 270 重击" }], 
 "s-444-1000-3103": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "前砸 闪避" }], 
 "s-444-1000-3108": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "丢锤 (晕眩)" }], 
 "s-444-1000-3111": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "后砸 (慢慢慢慢)" }],  
 "s-444-1000-3112": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-1000-3113": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "点名 (闪避)" }],  
 "s-444-1000-3114": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "捶地 (秒杀)" }],  
 "s-444-1000-3115": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 蓄力(击飞)" }],  
 "s-444-1000-3116": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "甜甜圈" }],   
 "s-444-1000-3117": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "随仇->跳劈 (击倒)" }],  
 "s-444-1000-3118": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "主仇->跳劈 (击倒)" }],  
 "s-444-1000-3119": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 安全→ (坦左移)" }],  
 "s-444-1000-3120": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 安全← (坦右移)" }],  
 "s-444-1000-3121": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  (4连半月)" }],  
 "s-444-1000-3122": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第3下加速'" }],  
 "s-444-1000-3123": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第2下加速" }],  
 "s-444-1000-3125": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 前砸(闪) | 后拉" }],  
 "s-444-1000-3131": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 范围(挡) | 后拉" }],  
 "s-444-1000-3135": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-1000-3138": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 蓄力(击飞)" }],  
 "s-444-1000-3139": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "转圈 (击倒)" }],  
 "s-444-1000-3140": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  (4连半月)" }],  
 "s-444-1000-3141": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第3下加速" }],  
 "s-444-1000-3142": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第2下加速" }],  
 "s-444-1000-3308": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第1次晕" }],  
 "s-444-1000-3309": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第2次晕" }],  
 "s-444-1000-3310": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第3次晕" }],  
 "s-444-1000-3311": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (右手放锤)" }],  
 "s-444-1000-3312": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (左右放锤)" }],  
 "s-444-2000-3101": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "锤地 270 重击" }], 
 "s-444-2000-3103": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "前砸 闪避" }], 
 "s-444-2000-3108": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "丢锤 (晕眩)" }], 
 "s-444-2000-3111": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "后砸 (慢慢慢慢)" }],  
 "s-444-2000-3112": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-2000-3113": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "点名 (闪避)" }],  
 "s-444-2000-3114": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "捶地 (秒杀)" }],  
 "s-444-2000-3115": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 蓄力(击飞)" }],  
 "s-444-2000-3116": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "甜甜圈" }],   
 "s-444-2000-3117": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "随仇->跳劈 (击倒)" }],  
 "s-444-2000-3118": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "主仇->跳劈 (击倒)" }],  
 "s-444-2000-3119": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 安全→ (坦左移)" }],  
 "s-444-2000-3120": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 安全← (坦右移)" }],  
 "s-444-2000-3121": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  (4连半月)" }],  
 "s-444-2000-3122": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第3下加速'" }],  
 "s-444-2000-3123": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左  第2下加速" }],  
 "s-444-2000-3125": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右 前砸(闪) | 后拉" }],  
 "s-444-2000-3131": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 范围(挡) | 后拉" }],  
 "s-444-2000-3135": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "完美格挡" }],  
 "s-444-2000-3138": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "左 蓄力(击飞)" }],  
 "s-444-2000-3139": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "转圈 (击倒)" }],  
 "s-444-2000-3140": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  (4连半月)" }],  
 "s-444-2000-3141": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第3下加速" }],  
 "s-444-2000-3142": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "右  第2下加速" }],  
 "s-444-2000-3308": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第1次晕" }],  
 "s-444-2000-3309": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第2次晕" }],  
 "s-444-2000-3310": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "第3次晕" }],  
 "s-444-2000-3311": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (右手放锤)" }],  
 "s-444-2000-3312": [{"type": "text","sub_type": "message","message": "get out", "message_TW": "补师开盾 (左右放锤)" }]  

};