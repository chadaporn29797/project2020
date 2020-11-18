/* eslint-disable prettier/prettier */
// module.exports = require('./src');
// eslint-disable-next-line no-unused-vars
// const test = require('./test2.js')

module.exports = async function App(context) {
  if (context.event.text === 'ลงขายสินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_2_ID);
  } else if (context.event.text === 'รายการสินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_3_ID);
  } else if (context.event.text === 'ค้นหาสินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_4_ID);
  } else if (context.event.text === 'หมวดหมู่สินค้า') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_5_ID);
  // } else if (context.event.text === 'หมวดหมู่สินค้า') {
  //   await context.sendFlex('This is an advanced flex', test.dict2);
    
  } else if (context.event.text === 'บริจาค') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_6_ID);

  } else if (context.event.text === 'สินค้าของฉัน') {
    await context.sendFlex('This is an advanced flex', {
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
            text: 'รายการสินค้าของคุณ',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/fish.jpg',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/fish.jpg',
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
                        text: 'ปลาทับทิม',
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
                        text: 'ปลาทับทิมสดร้านเจ๊แดง ราคาถูก ลูกสาวสวยมากกกกก',
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
                        text: '80 บาท',
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
    });
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
                type: 'text',
                text: '+ ใส่ชื่อของสินค้า',
                color: '#9F9898FF',
                contents: []
              }
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
                type: 'text',
                text: '+ ใส่รายละเอียดของสินค้า',
                color: '#9F9898FF',
                contents: []
              }
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
                type: 'text',
                text: '+ ใส่ราคาของสินค้า',
                color: '#9F9898FF',
                contents: []
              }
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
                type: 'text',
                text: '+ ใส่หมวดหมู่ของสินค้า',
                color: '#9F9898FF',
                contents: []
              }
            ]
          }
        ]
      }
    });
  } else if (context.event.text === 'รายการสินค้าแนะนำ') {
    await context.sendFlex('This is an advanced flex', {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            flex: 0,
            backgroundColor: '#47E291FF',
            contents: [
              {
                type: 'text',
                text: 'ติ๊กช้อป',
                size: 'lg',
                color: '#FFFBFBFF',
                align: 'center',
                contents: [],
              },
            ],
          },
          hero: {
            type: 'image',
            url:
              'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'เก้าอี้สีขาว',
                weight: 'bold',
                size: 'xl',
                wrap: true,
                contents: [],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                    color: '#636363FF',
                    contents: [],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '265',
                    weight: 'bold',
                    size: 'xl',
                    flex: 0,
                    wrap: true,
                    contents: [],
                  },
                  {
                    type: 'text',
                    text: 'บาท',
                    weight: 'bold',
                    size: 'sm',
                    flex: 0,
                    align: 'end',
                    wrap: true,
                    contents: [],
                  },
                ],
              },
            ],
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า',
                },
                style: 'primary',
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน',
                },
              },
            ],
          },
        },
        {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            flex: 0,
            backgroundColor: '#47E291FF',
            contents: [
              {
                type: 'text',
                text: 'ติ๊กช้อป',
                size: 'lg',
                color: '#FFFBFBFF',
                align: 'center',
                contents: [],
              },
            ],
          },
          hero: {
            type: 'image',
            url:
              'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'เก้าอี้สีขาว',
                weight: 'bold',
                size: 'xl',
                wrap: true,
                contents: [],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                    color: '#636363FF',
                    contents: [],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '265',
                    weight: 'bold',
                    size: 'xl',
                    flex: 0,
                    wrap: true,
                    contents: [],
                  },
                  {
                    type: 'text',
                    text: 'บาท',
                    weight: 'bold',
                    size: 'sm',
                    flex: 0,
                    align: 'end',
                    wrap: true,
                    contents: [],
                  },
                ],
              },
            ],
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า',
                },
                style: 'primary',
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน',
                },
              },
            ],
          },
        },
        {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            flex: 0,
            backgroundColor: '#47E291FF',
            contents: [
              {
                type: 'text',
                text: 'ติ๊กช้อป',
                size: 'lg',
                color: '#FFFBFBFF',
                align: 'center',
                contents: [],
              },
            ],
          },
          hero: {
            type: 'image',
            url:
              'https://raw.githubusercontent.com/chadaporn29797/project2020/main/fish.jpg',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'เก้าอี้สีขาว',
                weight: 'bold',
                size: 'xl',
                wrap: true,
                contents: [],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                    color: '#636363FF',
                    contents: [],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '265',
                    weight: 'bold',
                    size: 'xl',
                    flex: 0,
                    wrap: true,
                    contents: [],
                  },
                  {
                    type: 'text',
                    text: 'บาท',
                    weight: 'bold',
                    size: 'sm',
                    flex: 0,
                    align: 'end',
                    wrap: true,
                    contents: [],
                  },
                ],
              },
            ],
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า',
                },
                style: 'primary',
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน',
                },
              },
            ],
          },
        },
        {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            flex: 0,
            backgroundColor: '#47E291FF',
            contents: [
              {
                type: 'text',
                text: 'ติ๊กช้อป',
                size: 'lg',
                color: '#FFFBFBFF',
                align: 'center',
                contents: [],
              },
            ],
          },
          hero: {
            type: 'image',
            url:
              'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'เก้าอี้สีขาว',
                weight: 'bold',
                size: 'xl',
                wrap: true,
                contents: [],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'เก้าอี้วิเศษ นั่งแล้วจะล่องหนได้',
                    color: '#636363FF',
                    contents: [],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '265',
                    weight: 'bold',
                    size: 'xl',
                    flex: 0,
                    wrap: true,
                    contents: [],
                  },
                  {
                    type: 'text',
                    text: 'บาท',
                    weight: 'bold',
                    size: 'sm',
                    flex: 0,
                    align: 'end',
                    wrap: true,
                    contents: [],
                  },
                ],
              },
            ],
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ติดต่อร้านค้า',
                  text: 'ติดต่อร้านค้า',
                },
                style: 'primary',
              },
              {
                type: 'button',
                action: {
                  type: 'message',
                  label: 'ดูสินค้าอื่นในร้าน',
                  text: 'ดูสินค้าอื่นในร้าน',
                },
              },
            ],
          },
        },
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'See more',
                  uri: 'https://linecorp.com',
                },
                flex: 1,
                gravity: 'center',
              },
            ],
          },
        },
      ],
    });
    
  } else if (context.event.text === 'ตั้งค่าร้านค้า') {
    await context.sendFlex('This is an advanced flex', {
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
            text: 'ข้อมูลร้านค้า',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/id-card.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
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
                        text: 'ชื่อร้านค้า',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'เจ๊แดงปลานิลสด',
                        color: '#928585FF',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/google-maps.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
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
                        text: 'ที่ตั้งร้านค้า',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'ศรีสะเกษ',
                        color: '#928585FF',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/telephone.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
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
                        text: 'เบอร์โทรศัพท์',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: '0848346449',
                        color: '#928585FF',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/line.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
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
                        text: 'LINE',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: 'plasodbyjedang',
                        color: '#928585FF',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
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
                      'https://raw.githubusercontent.com/chadaporn29797/project2020/main/facebook.png',
                    aspectMode: 'cover',
                    size: 'full',
                  },
                ],
                // cornerRadius: '100px',
                width: '40px',
                height: '40px',
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
                        text: 'Facebook',
                        weight: 'bold',
                        color: '#000000',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                  {
                    type: 'text',
                    contents: [
                      {
                        type: 'span',
                        text: '/เจ๊แดงปลานิลสด',
                        color: '#928585FF',
                      },
                    ],
                    size: 'md',
                    wrap: true,
                  },
                ],
              },
            ],
            spacing: 'xl',
            paddingAll: '15px',
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
    });

  } else if (context.event.text === 'ดูรายการ') {
    await context.sendFlex('This is an advanced flex', {
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
    });
  } else if (context.event.text === 'วิธีลงขายสินค้า') {
    await context.sendText(
      '1. กดปุ่ม "ตั้งค่าร้านค้า" ก่อนนะครับ จะมีการ์ดขึ้นมา พร้อมกับข้อความระบุว่าให้ใส่ข้อมูลอะไรเป็นลำดับ หากข้อมูลเพียงพอก็จะสามารถ เพิ่มสินค้าได้ '
    );
    await context.sendText(
      '2. กดปุ่ม "เพิ่มสินค้า" จะมีการ์ดขึ้นมา พร้อมกับข้อความระบุว่าให้ใส่ข้อมูลอะไรเป็นลำดับ'
    );
    await context.sendText(
      '3. สามารถดูรายการสินค้า และแก้ไขหรือลบสินค้าได้ โดยกดปุ่ม "สินค้าของฉัน" คาบบบ'
    );
    await context.sendText(
      '** หากพบเจอการโพสต์สินค้าที่ไม่สมควร จะขออนุญาตลบสินค้า และตัดสิทธิ์การใช้งาน บายมั้ย นะงับ'
    );
  } else if (context.event.text === 'กลับ') {
    await context.linkRichMenu(process.env.MAIN_RICH_MENU_ID);
  } else {
    await context.sendText(
      ` ${context.event.text} -> ยังใช้งานไม่ได้นะเตง ${String.fromCodePoint(
        0x100084
      )} `
    );
  }
};
