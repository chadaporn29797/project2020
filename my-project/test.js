} else if (context.event.text === 'เพิ่มสินค้า') {
  await context.sendFlex('This is an advanced flex', {
    type: 'bubble',
    direction: 'ltr',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'text',
              text: '+ เปลี่ยนรูปภาพ',
              color: '#9F9898FF',
              contents: []
            },
            {
              type: 'icon',
              size: 'lg',
              url:
                'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
            },
          ]
        },
        {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png',
          size: 'full',
          backgroundColor: '#FFFFFFFF'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ชื่อสินค้า',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่ชื่อของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
              ]
            },
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'รายละเอียด',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่รายละเอียดของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
              ]
            },
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ราคา',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่ราคาของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
              ]
            },
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'หมวดหมู่',
              contents: []
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '+ ใส่หมวดหมู่ของสินค้า',
                  color: '#9F9898FF',
                  contents: []
                },
                {
                  type: 'icon',
                  size: 'lg',
                  url:
                    'https://raw.githubusercontent.com/chadaporn29797/project2020/main/pencil%20(1).png',
                },
                
              ]
            },
          ]
        }
      ]
    }
  });