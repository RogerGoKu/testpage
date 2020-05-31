;(function () {
    window.EMAILS = {
        service: 'aasa@caasa.org.cn',
        cooperation: 'aasa@caasa.org.cn'
    };

    window.PAGE_CONFIG = {
        title: '楼澜',
        
        pages: [
            {
                type: 'blue',
                title: `专注办公，
                做最好的房源平台`,
                subTitle: '楼澜专注建立一个真实高效的办公房源平台，通过多种数字化营销工具，提升业主和经纪人的工作效率。',
                others: `<em class="u-icon icon-phone_bg g-pa"></em>
                <em class="u-icon icon-phone g-pa"></em>`
            },
            {
                type: 'white',
                title: `数字时代下的
                招商黑科技`,
                labels: [
                    { label: '房源曝光', texts: '发布房源，让所有经纪人能找到你和你的房源' },
                    { label: '智能海报', texts: '随时更新房源信息，自动生成推广海报' },
                    { label: '推广分析', texts: '追踪推广效果，找出市场推广盲点' },
                ],
                others: `<em class="u-icon u-arrow j-arrow g-pa"></em>`
            },
            {
                type: 'blue',
                title: `免费的房源库
                +业主通讯录`,
                labels: [
                    { label: '房源搜索', texts: '免费搜索全市场真实房源，直联业主招商' },
                    { label: '方案制作', texts: '快速生成房源方案，第一时间推给客户' },
                    { label: '客户管理', texts: '追踪客户看房动态，深入了解客户需求' },
                ],
                others: `<em class="u-icon u-arrow j-arrow g-pa"></em>`
            },
            {
                type: 'white',
                title: `不止房源，
                更多企业服务`,
                labels: [
                    { label: '了解市场', texts: '快速了解租赁市场，租约谈判心中有数' },
                    { label: '优质服务', texts: '发现优质服务商，设计装修不再踩坑' },
                    { label: '房源收藏', texts: '收藏心动房源，轻松对比选择' },
                ],
                others: `<em class="u-icon u-arrow j-arrow g-pa"></em>`
            },
            {
                type: 'blue',
                content: {
                    id: 'infos',
                    bg: 'p-demo.png',
                    infos: [
                        { key: 'build', name: '写字楼', value: 1999 },
                        { key: 'garden', name: '园区', value: 2999 },
                        { key: 'work', name: '共享办公', value: 3999 },
                        { key: 'business', name: '商务中心', value: 4999 },
                    ]
                }
            },
            {
                type: 'blue',
                title: '楼澜愿景',
                subTitle: '楼澜专注搭建一个开放透明、真实高效的办公房源平台，构建行业的数字化基础设施，通过科技和数据提升办公场景的效率、体验和价值，助推办公场景面向未来的变革。',
                otherTitles: `<p class="u-p2 g-fs28 g-mt60">Email：</p>
                <p class="u-p2 g-fs28 g-mt20">客服邮箱：<a s-cr_white href="mailto:${EMAILS.service}">${EMAILS.service}</a><br/>
                    商务合作：<a s-cr_white href="mailto:${EMAILS.cooperation}">${EMAILS.cooperation}</a></p>
                <p class="u-p2"><img src="./public/i-qrcode.png" class="qr-code g-mt60" alt="楼澜小程序二维码"/></p>`
            }
        ]
    }
} ());