const data = [
    {
        "word": "合図",
        "hirakana": "あいず",
        "chinese": "信号,发信号",
        "sample": "交差口で左折するとき、手を挙げて合図します。"
    },
    {
        "word": "愛想",
        "hirakana": "あいそ",
        "chinese": "待人和蔼",
        "sample": "彼女はいつも愛想がいいです。"
    },
    {
        "word": "アウトライン",
        "hirakana": "アウトライン",
        "chinese": "轮廓, 概况, 纲要",
        "sample": "イラストレーターでアウトラインを作成する方法を学びました。"
    },
    {
        "word": "当たり",
        "hirakana": "あたり",
        "chinese": "命中, 中奖",
        "sample": "彼の的はいつも当たります。"
    },
    {
        "word": "新た",
        "hirakana": "あらた",
        "chinese": "重新",
        "sample": "新たな挑戦に向けて準備を始めましょう。"
    },
    {
        "word": "ありあり",
        "hirakana": "ありあり",
        "chinese": "清清楚楚",
        "sample": "彼の喜びはありありと表れていました。"
    },
    {
        "word": "安静",
        "hirakana": "あんせい",
        "chinese": "静养, 安静",
        "sample": "病室で安静にしてください。"
    },
    {
        "word": "いい加減",
        "hirakana": "いいかげん",
        "chinese": "适当, 含糊, 相当",
        "sample": "いい加減にしなさい！"
    },
    {
        "word": "行き違い",
        "hirakana": "いきちがい",
        "chinese": "弄错, 走岔开",
        "sample": "会議で行き違いがありました。"
    },
    {
        "word": "一変",
        "hirakana": "いっぺん",
        "chinese": "完全改变",
        "sample": "状況は一変しました。"
    },
    {
        "word": "偽り",
        "hirakana": "いつわり",
        "chinese": "欺骗，谎言",
        "sample": "彼の言葉は偽りだった。"
    },
    {
        "word": "居眠り",
        "hirakana": "いねむり",
        "chinese": "打瞌睡",
        "sample": "電車で居眠りをしていたら、目的地を通り過ぎてしまった。"
    },
    {
        "word": "戒める",
        "hirakana": "いさめる",
        "chinese": "劝告，警告",
        "sample": "先輩は私たちに注意を戒めてくれました。"
    },
    {
        "word": "引用",
        "hirakana": "いんよう",
        "chinese": "引用，引证",
        "sample": "この論文は多くの研究を引用しています。"
    },
    {
        "word": "受け止める",
        "hirakana": "うけとめる",
        "chinese": "接受，承受",
        "sample": "彼の意見を受け止めて考えてみよう。"
    },
    {
        "word": "渦",
        "hirakana": "うず",
        "chinese": "漩涡，涡流",
        "sample": "川の中心に渦ができていた。"
    },
    {
        "word": "うずうず",
        "hirakana": "うずうず",
        "chinese": "焦躁不安",
        "sample": "彼は試験の結果を待つうずうずした気持ちでいた。"
    },
    {
        "word": "うっとうしい",
        "hirakana": "うっとうしい",
        "chinese": "令人讨厌的，烦人的",
        "sample": "この暑さはうっとうしい。"
    },
    {
        "word": "栄華",
        "hirakana": "えいが",
        "chinese": "荣华，昌盛",
        "sample": "彼は若いころ栄華を極めた。"
    },
    {
        "word": "エキスパート",
        "hirakana": "えきすぱーと",
        "chinese": "专家",
        "sample": "彼はその分野のエキスパートだ。"
    },
    {
        "word": "大げさ",
        "hirakana": "おおげさ",
        "chinese": "夸张的",
        "sample": "彼はいつも大げさに話す。"
    },
    {
        "word": "おどおど",
        "hirakana": "おどおど",
        "chinese": "拘谨，紧张",
        "sample": "彼はおどおどしているようだった。"
    },
    {
        "word": "脅かす",
        "hirakana": "おどかす",
        "chinese": "威胁，恐吓",
        "sample": "彼は私たちを脅かしてお金を要求した。"
    },
    {
        "word": "回顧",
        "hirakana": "かいこ",
        "chinese": "回顾，追溯",
        "sample": "彼は自分の人生を回顧していた。"
    },
    {
        "word": "街頭",
        "hirakana": "がいとう",
        "chinese": "街头，街道",
        "sample": "街頭で音楽を演奏している人たちを見かけることがあります。"
    },
    {
        "word": "解剖",
        "hirakana": "かいぼう",
        "chinese": "解剖，剖析",
        "sample": "科学者たちはその動物の体を解剖した。"
    },
    {
        "word": "駆け付ける",
        "hirakana": "かけつける",
        "chinese": "赶到，赶去",
        "sample": "火事が起きたので、消防隊が駆け付けました。"
    },
    {
        "word": "嵩張る",
        "hirakana": "かさばる",
        "chinese": "笨重，臃肿",
        "sample": "この荷物は嵩張って持ちにくいです。"
    },
    {
        "word": "畏まる",
        "hirakana": "かしこまる",
        "chinese": "恭敬，尊敬",
        "sample": "皇居で天皇陛下に畏まる。"
    },
    {
        "word": "過疎",
        "hirakana": "かそ",
        "chinese": "荒凉，人烟稀少",
        "sample": "この地域は過疎化が進んでいます。"
    },
    {
        "word": "庇う",
        "hirakana": "かばう",
        "chinese": "庇护，庇荫",
        "sample": "彼は友人を庇って警察に逮捕されました。"
    },
    {
        "word": "がらり",
        "hirakana": "がらり",
        "chinese": "哗啦一声，哗然而变",
        "sample": "彼の態度はがらりと変わりました。"
    },
    {
        "word": "かろうじて",
        "hirakana": "かろうじて",
        "chinese": "勉强，勉勉强强",
        "sample": "彼はかろうじて試験に合格しました。"
    },
    {
        "word": "歓声",
        "hirakana": "かんせい",
        "chinese": "欢呼，喝彩",
        "sample": "スタジアムに歓声が響き渡った。"
    },
    {
        "word": "気掛かり",
        "hirakana": "きがかり",
        "chinese": "担忧，牵挂",
        "sample": "彼の健康が気掛かりです。"
    },
    {
        "word": "兆し",
        "hirakana": "きざし",
        "chinese": "预兆，征兆",
        "sample": "経済の兆しは好転している。"
    },
    {
        "word": "気性",
        "hirakana": "きしょう",
        "chinese": "气质，性情",
        "sample": "彼は気性が荒いです。"
    },
    {
        "word": "基調",
        "hirakana": "きちょう",
        "chinese": "基调，主旋律",
        "sample": "この会議の基調は協力と連携です。"
    },
    {
        "word": "脚本",
        "hirakana": "きゃくほん",
        "chinese": "剧本，脚本",
        "sample": "この映画の脚本は有名な作家が書いた。"
    },
    {
        "word": "起用",
        "hirakana": "きよう",
        "chinese": "任用，启用",
        "sample": "彼は新しいプロジェクトのリーダーに起用されました。"
    },
    {
        "word": "凝視",
        "hirakana": "ぎょうし",
        "chinese": "凝视，注视",
        "sample": "彼は私をじっと凝視していました。"
    },
    {
        "word": "驚嘆",
        "hirakana": "きょうたん",
        "chinese": "惊叹，惊奇",
        "sample": "彼の技術には驚嘆しました。"
    },
    {
        "word": "食い違う",
        "hirakana": "くいちがう",
        "chinese": "不一致，矛盾",
        "sample": "私たちの意見は食い違っている。"
    },
    {
        "word": "崩れる",
        "hirakana": "くずれる",
        "chinese": "崩溃，倒塌",
        "sample": "彼の計画は崩れてしまった。"
    },
    {
        "word": "砕ける",
        "hirakana": "くだける",
        "chinese": "破碎，粉碎",
        "sample": "ガラスが砕けてしまった。"
    },
    {
        "word": "凹む",
        "hirakana": "くぼむ",
        "chinese": "凹陷，凹下",
        "sample": "彼は試験の結果で凹んでいる。"
    },
    {
        "word": "組み合わせる",
        "hirakana": "くみあわせる",
        "chinese": "组合，搭配",
        "sample": "これらの色を組み合わせて新しいデザインを作りましょう。"
    },
    {
        "word": "経緯",
        "hirakana": "けいい",
        "chinese": "经过，来历",
        "sample": "事件の経緯を調査しています。"
    },
    {
        "word": "汚らわしい",
        "hirakana": "けがらわしい",
        "chinese": "肮脏",
        "sample": "その場所は汚らわしい匂いがした。"
    },
    {
        "word": "嫌悪",
        "hirakana": "けんお",
        "chinese": "厌恶",
        "sample": "彼はその人の態度に嫌悪感を抱いている。"
    }
]