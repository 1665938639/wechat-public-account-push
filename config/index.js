export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx3b774b44e1442047",
    // 公众号appSecret
    appSecret: "640271276ddfa4b401ddd08423253f66",
    // 模板消息id
    templateId: "RUNQTk8Kv3HyGYdEnBbnJVLVQg535CdtS-KvqdhwVFI",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oa_rW6CQgpF5Lki8MidJioigSRbs", "oa_rW6CYjnIdRsqIAmI57QgzS3_4"],
     
    // 信息配置
    // 所在省份
    province: "天津",
    // 所在城市
    city: "天津",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r 
    birthdays: [
      {"name": "老婆", "year": "2001", "date": "12-09", "type": 'new'},
      {"name": "老公", "year": "2002", "date": "02-05", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-09-25",
    // 结婚纪念日
    marryDate: "2021-09-25"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
