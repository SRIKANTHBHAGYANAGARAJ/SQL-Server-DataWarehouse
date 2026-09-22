app.factory('GlobalService', function () {
    return {
        prev: true,
        detailprev: true,
        tileIndex: 0,
        focus: false,
        Light: true,
        QR: true,  
        chanels: '',
        UDID:'',
        port: false,
        getvolume: '',
        remoteGuide: true,
        isBillOpen: false,
        isNotificationopen:false,
        isTvPlaying:false,
        servicerequest:true,
        GlobalSelectedTabIndex: 0,
        Currency:'GBP',
        ip:'',
        port:'',
        chnumber:'',
        chname:'',

        //currency:'',
        en_translations : {
            Hi: "Hi",
            AddToCart: 'Add to cart',
            ProgramName: "Hero ISL 2020- 21 Final - LIVE",
            ProgramFeed: "Live from Mumbai",
            ProgramDesc: "The Hero Indian Super League (Hero ISL) has always striven to make the experience of our fans a more pleasurable one over the last six seasons. After breaking records across all social media platforms (Facebook, Twitter, Instagram, YouTube) during the 2019-20 season, the Hero ISL team would like to ask fans for their opinion on how to improve their Hero ISL experience.",
            UpdateCart: 'Update Cart',
            AllChannels:'All Channels'
        },
        ar_translations: {
            Hi: "Hi",
            AddToCart: 'أضف إلى السلة',
            ProgramName: "بطل ISL 2020 - 21 نهائي - بث مباشر",
            ProgramFeed: "مباشر من مومباي",
            ProgramDesc: "لطالما سعى دوري Hero Indian Super League (Hero ISL) لجعل تجربة جماهيرنا أكثر متعة خلال المواسم الستة الماضية. بعد تحطيم الأرقام القياسية عبر جميع منصات التواصل الاجتماعي (Facebook و Twitter و Instagram و YouTube) خلال موسم 2019-20 ، يود فريق Hero ISL أن يسأل المعجبين عن آرائهم حول كيفية تحسين تجربة Hero ISL.",
            UpdateCart: 'تحديث عربة التسوق',
            AllChannels: 'جميع القنوات'
        },
       fr_translations: {
            
           AllChannels: 'Toutes les chaînes'
        },
        es_translations: {
         
            AllChannels: 'Todos los canales'
        }
    }
});