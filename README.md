#### Задание Шри 2020 (Тулинг - lifehacker)
##### Network
###### Дублирование ресурсов
1. [Профиль загрузки ресурсов](https://raw.githubusercontent.com/RuslanGerasimov/dev-tools/master/source/lifehacker.ru.har)
2. Дублирование ресурсов искал по логу (har) средствами node.js 
([analyzer.js](https://raw.githubusercontent.com/RuslanGerasimov/dev-tools/master/analyzer.js))
    - https://static.criteo.net/js/ld/publishertag.js 2
    - https://ads.adfox.ru/200984/getCode?p1=bzwbj&p2=frfe&pfc=cgyxl&pfb=gseyc&puid1=&puid2=&puid3=&puid4=&puid5=&puid6=&puid7=&puid8=&pr=[RANDOM]&ptrc=b 2
    - https://lifehacker.ru/api/wp/v2/posts/1077477&_embed 2
    - https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js 7
    - https://adservice.google.ru/adsid/integrator.js?domain=lifehacker.ru 6
    - https://adservice.google.com/adsid/integrator.js?domain=lifehacker.ru 6
    - https://pagead2.googlesyndication.com/pagead/js/r20200316/r20190131/show_ads_impl_fy2019.js 6
    - https://partner.googleadservices.com/gampad/cookie.js?domain=lifehacker.ru&callback=_gfp_s_&client=ca-pub-1967979736935021&cookie=ID%3D596e37e5817a7fea%3AT%3D1584868949%3AS%3DALNI_MYwaE1416cIF67IPhicPkd4dIn
    - 3Cg&crv=1 5
    - https://googleads.g.doubleclick.net/pagead/html/r20200316/r20190131/zrt_lookup.html 3
    - https://www.googletagservices.com/activeview/js/current/osd.js?cb=%2Fr20100101 6
    - https://yastatic.net/pcode/adfox/adfox-adx-stub.html 5
    - https://yastatic.net/pcode/adfox/adfox-adx-stub.js 5
    - https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20200316&st=env 5
    - https://pagead2.googlesyndication.com/bg/ckq-BLGbg480ujf2K0UQ2zQDu-BvCo9Xhy5fyHAuIG0.js 2
    - https://s0.2mdn.net/3797665/1565120951239/txt_1.png 2
    - https://s0.2mdn.net/3797665/1565120951239/cta_1.png 2
    - https://s0.2mdn.net/3797665/1565120951239/ctaHover_1.png 2
    - https://s0.2mdn.net/3797665/1565120951239/hand.png 2
    - https://s0.2mdn.net/3797665/1565120951239/logo_vimeo.png 2
3. Ресурсы, блокирующие загрузку
    - https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:300,300i,400,400i,500,500i,700,900&subset=cyrillic
    - https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
    - https://lifehacker.ru/wp-content/plugins/lh-slider/static/public/all.min.css?ver=1.0.0
    - https://lifehacker.ru/wp-content/plugins/lh-spoilers/inc/bbspoiler.css?ver=5.1.4
    - https://lifehacker.ru/wp-content/themes/lifehacker/static/styles/vendors.min.css?ver=1.6.0
    - https://lifehacker.ru/wp-content/themes/lifehacker/static/styles/all.min.css?ver=1.6.0
    - https://cdn-images.mailchimp.com/embedcode/classic-10_7.css?ver=1.6.0
    - https://lifehacker.ru/wp-content/plugins/lh-widgets/css/widgets.css?ver=66
    - https://lifehacker.ru/wp-includes/js/jquery/jquery.js?ver=1.12.4
    - https://yastatic.net/pcode/adfox/loader.js



##### Performance
1. Файл профиля загурзки страницы
    - [performance.json](https://raw.githubusercontent.com/RuslanGerasimov/dev-tools/master/source/performance.json)
2. Время до событий
    - First Paint - 683.6 ms
    - First Meaningful Paint - 1733.9 ms
    - DOM Content Loaded - 2848.4 ms
    - Load - 4723.4 ms
3. Этапы обработки документа
    - Loading - 109 ms
    - Scripting - 2693 ms
    - Rendering - 1594 ms
    - Painting - 213 ms
#### Coverage
1. [Скриншот вкладки Coverage](https://raw.githubusercontent.com/RuslanGerasimov/dev-tools/master/source/coverage.png)
2. Неиспользованный CSS - 391 KB
3. Неиспользованный JS - 2.2 MB (2 252 KB)