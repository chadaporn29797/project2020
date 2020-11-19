/* eslint-disable prettier/prettier */
module.exports = dict;

var dict = [];

dict.push({
    type: 'bubble',
    size: 'mega',
    direction: 'ltr',
    header: {
      type: 'box',
      layout: 'vertical',
      backgroundColor: '#47E291FF',
      contents: [
        {
          type: 'text',
          text: 'ดูรายการ',
          weight: 'bold',
          size: 'lg',
          color: '#FFFFFFFF',
          align: 'center',
          contents: [],
        },
      ],
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          //box1
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              //box2
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              cornerRadius: '100px',
              width: '72px',
              height: '72px',
            },
            {
              //box3
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  //text1
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ปลานิล',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'lg',
                  wrap: true,
                },
                {
                  //text2
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ปลานิลสดร้านเจ๊แดง ราคาถูก',
                      color: '#928585FF',
                    },
                  ],
                  size: 'sm',
                  wrap: true,
                },
                {
                  //text3
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '70 บาท',
                      weight: 'bold',
                      size: 'lg',
                      color: '#2C8921FF',
                    },
                  ],
                  // spacing: 'sm',
                  // margin: 'md',
                },
              ],
              
            },
            
          ],
          spacing: 'xl',
          paddingAll: '20px',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              margin: 'md',
              contents: [
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
                
              ],
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'แก้ไข',
                text: 'แก้ไข'
              }
            },
            {
              type: 'box',
              layout: 'baseline',
              margin: 'md',
              contents: [
                {
                  type: 'icon',
                  size: 'lg',
                  aspectRatio: '1:1',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/garbage.png',
                },
              ],
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: 'ลบ',
                text: 'ลบ'
              }
            },
          ],
          // spacing: 'xl',
          // paddingAll: '5px',
        },
        {
          type: 'separator',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url:
                    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              cornerRadius: '100px',
              width: '72px',
              height: '72px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ปลานิล',
                      weight: 'bold',
                      color: '#000000',
                    },
                  ],
                  size: 'lg',
                  wrap: true,
                },
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'ปลานิลสดร้านเจ๊แดง ราคาถูก',
                      color: '#928585FF',
                    },
                  ],
                  size: 'sm',
                  wrap: true,
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '70 บาท',
                      weight: 'bold',
                      size: 'lg',
                      color: '#2C8921FF',
                    },
                  ],
                  spacing: 'sm',
                  margin: 'md',
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '20px',
        },
        
      ],
      paddingAll: '0px',
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      backgroundColor: '#47E291FF',
      contents: [
        {
          type: 'button',
          action: {
            type: 'message',
            label: 'เพิ่มสินค้า',
            text: 'เพิ่มสินค้า',
          },
          color: '#FFFFFFFF',
          gravity: 'center',
        },
      ],
    },
    styles: {
      header: {
        backgroundColor: '#47E291FF',
        separatorColor: '#161313FF',
      },
    },
  }
)