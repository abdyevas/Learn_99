const data = [
    {
        "en": "AR-RAHMAAN",
        "aze": "Ər-Rəhman",
        "ar": "ٱلْرَّحْمَـانُ",
        "meaning": "The All-Compassionate",
        "meaning_aze": "Çox Mərhəmətli"
    },
    {
        "en": "AR-RAHEEM",
        "aze": "Ər-Rəhim",
        "ar": "ٱلْرَّحِيْمُ",
        "meaning": "The All-Merciful",
        "meaning_aze": "Həmişə Mərhəmətli. Rəhimli"
    },
    {
        "en": "AL-MALIK",
        "aze": "Əl-Məlik",
        "ar": "ٱلْمَلِكُ",
        "meaning": "The King and Owner of Dominion",
        "meaning_aze": "Ali Hökmdar"
    },
    {
        "en": "AL-QUDDUS",
        "aze": "Əl-Qüddus",
        "ar": "ٱلْقُدُّوسُ",
        "meaning": "The Absolutely Pure",
        "meaning_aze": "Müqəddəs"
    },
    {
        "en": "AS-SALAM",
        "aze": "Əs-Salam",
        "ar": "ٱلْسَّلَامُ",
        "meaning": "The Source of Peace",
        "meaning_aze": "Pak. Əmin-amanlıq verən"
    },
    {
        "en": "AL-MU'MIN",
        "aze": "Əl-Mömin",
        "ar": "لْمُؤْمِنُ",
        "meaning": "The Inspirer of Faith",
        "meaning_aze": "İman bəxş edən (İman bəslənilən)"
    },
    {
        "en": "AL-MUHAYMIN",
        "aze": "Əl-Mühəymin",
        "ar": "ٱلْمُهَيْمِنُ",
        "meaning": "The Guardian, The Witness",
        "meaning_aze": "Mühafizəçi. Himayə edən"
    },
    {
        "en": "AL-AZEEZ",
        "aze": "Əl-Əziz",
        "ar": "ٱلْعَزِيزُ",
        "meaning": "The All Mighty",
        "meaning_aze": "Əzəmətli. Çox İzzətli"
    },
    {
        "en": "AL-JABBAR",
        "aze": "Əl-Cabbar",
        "ar": "ٱلْجَبَّارُ",
        "meaning": "The Compeller, The Restorer",
        "meaning_aze": "Qüdrətli. Zalımlara əziyyət verən"
    },
    {
        "en": "AL-MUTAKABBIR",
        "aze": "Əl-Mütəkəbbir",
        "ar": "ٱلْمُتَكَبِّرُ",
        "meaning": "The Supreme, The Majestic",
        "meaning_aze": "Məqamı uca tutulan, böyüdülən"
    },
    {
        "en": "AL-KHAALIQ",
        "aze": "Əl-Xaliq",
        "ar": "ٱلْخَالِقُ",
        "meaning": "The Creator, The Maker",
        "meaning_aze": "Yaradıcı"
    },
    {
        "en": "AL-BAARI'",
        "aze": "Əl-Bari",
        "ar": "ٱلْبَارِئُ",
        "meaning": "The Originator",
        "meaning_aze": "Heçdən yaradan"
    },
    {
        "en": "AL-MUSAWWIR",
        "aze": "Əl-Müsavvir",
        "ar": "ٱلْمُصَوِّرُ",
        "meaning": "The Fashioner",
        "meaning_aze": "Surət verən"
    },
    {
        "en": "AL-GHAFFAR",
        "aze": "Əl-Ğaffar",
        "ar": "ٱلْغَفَّارُ",
        "meaning": "The All- and Oft-Forgiving",
        "meaning_aze": "Hər şeyi bağışlayan"
    },
    {
        "en": "AL-QAHHAR",
        "aze": "Əl-Qəhhar",
        "ar": "ٱلْقَهَّارُ",
        "meaning": "The Subduer, The Ever-Dominating",
        "meaning_aze": "Hakimi-mütləq"
    },
    {
        "en": "AL-WAHHAAB",
        "aze": "Əl-Vəhhab",
        "ar": "ٱلْوَهَّابُ",
        "meaning": "The Giver of Gifts",
        "meaning_aze": "Səxavətli"
    },
    {
        "en": "AR-RAZZAAQ",
        "aze": "Ər-Razzaq",
        "ar": "ٱلْرَّزَّاقُ",
        "meaning": "The Provider",
        "meaning_aze": "Ruzi verən"
    },
    {
        "en": "AL-FATTAAH",
        "aze": "Əl-Fəttah",
        "ar": "ٱلْفَتَّاحُ",
        "meaning": "The Opener, The Judge",
        "meaning_aze": "Açıcı. Çətinlikləri həll edən"
    },
    {
        "en": "AL-'ALEEM",
        "aze": "Əl-Aliim",
        "ar": "ٱلْعَلِيمُ",
        "meaning": "The All-Knowing, The Omniscient",
        "meaning_aze": "Hər şeyi bilən. Çox Elmli"
    },
    {
        "en": "AL-QAABID",
        "aze": "Əl-Qabid",
        "ar": "ٱلْقَابِضُ",
        "meaning": "The Withholder. The Constructor",
        "meaning_aze": "Daraldan"
    },
    {
        "en": "AL-BAASIT",
        "aze": "Əl-Basit",
        "ar": "ٱلْبَاسِطُ",
        "meaning": "The Extender. The Reliever",
        "meaning_aze": "Böyüdücü"
    },
    {
        "en": "AL-KHAAFIDH",
        "aze": "Əl-Hafid",
        "ar": "ٱلْخَافِضُ",
        "meaning": "The Reducer, The Abaser",
        "meaning_aze": "Kafirləri və fasiqləri zəlil edən"
    },
    {
        "en": "AR-RAAFI'",
        "aze": "Ər-Rafi",
        "ar": "ٱلْرَّافِعُ",
        "meaning": "The Exalter, The Elevator",
        "meaning_aze": "Şərəf verib yüksəldən"
    },
    {
        "en": "AL-MU'IZZ",
        "aze": "Əl-Muiz",
        "ar": "ٱلْمُعِزُّ",
        "meaning": "The Honourer, The Bestower",
        "meaning_aze": "İstədiyini əzizləyən"
    },
    {
        "en": "AL-MUZIL",
        "aze": "Əl-Muzil",
        "ar": "ٱلْمُذِلُّ",
        "meaning": "The Dishonourer, The Humiliator",
        "meaning_aze": "İstıdiyini zəlil edən"
    },
    {
        "en": "AS-SAMEE'",
        "aze": "Əs-Səmi",
        "ar": "ٱلْسَّمِيعُ",
        "meaning": "The All-Hearing",
        "meaning_aze": "Hər şeyi eşidən"
    },
    {
        "en": "AL-BASEER",
        "aze": "Əl-Bəsir",
        "ar": "ٱلْبَصِيرُ",
        "meaning": "The All-Seeing",
        "meaning_aze": "Hər şeyi görən (haqq-nahaqq)"
    },
    {
        "en": "AL-HAKAM",
        "aze": "Əl-Həkəm",
        "ar": "ٱلْحَكَمُ",
        "meaning": "The Judge, The Giver of Justice",
        "meaning_aze": "Hakim"
    },
    {
        "en": "AL-'ADL",
        "aze": "Əl-Ədl",
        "ar": "ٱلْعَدْلُ",
        "meaning": "The Utterly Just",
        "meaning_aze": "Ədalətli"
    },
    {
        "en": "AL-LATEEF",
        "aze": "Əl-Lətif",
        "ar": "ٱلْلَّطِيفُ",
        "meaning": "The Subtle One, The Most Gentle",
        "meaning_aze": "İşlərin incəliklərini bilən"
    },
    {
        "en": "AL-KHABEER",
        "aze": "Əl-Xəbir",
        "ar": "ٱلْخَبِيرُ",
        "meaning": "The Acquainted, The All-Aware",
        "meaning_aze": "Məlumatlı"
    },
    {
        "en": "AL-HALEEM",
        "aze": "Əl-Həlim",
        "ar": "ٱلْحَلِيمُ",
        "meaning": "The Most Forbearing",
        "meaning_aze": "Çox Mülayim"
    },
    {
        "en": "AL-'ATHEEM",
        "aze": "Əl-Əzim",
        "ar": "ٱلْعَظِيمُ",
        "meaning": "The Magnificent, The Supreme",
        "meaning_aze": "Böyüklükdə bənzəri olmayan. Çox Uca"
    },
    {
        "en": "AL-GHAFOOR",
        "aze": "Əl-Ğafur",
        "ar": "ٱلْغَفُورُ",
        "meaning": "The Exceedingly Forgiving",
        "meaning_aze": "Günahları Bağışlayan"
    },
    {
        "en": "ASH-SHAKOOR",
        "aze": "Əş-Şəkur",
        "ar": "ٱلْشَّكُورُ",
        "meaning": "The Most Appreciative",
        "meaning_aze": "Mükafatlandıran"
    },
    {
        "en": "AL-'ALEE",
        "aze": "Əl-Aliy",
        "ar": "ٱلْعَلِيُّ",
        "meaning": "The Most High, The Exalted",
        "meaning_aze": "Uca. Çox Yüksək"
    },
    {
        "en": "AL-KABEER",
        "aze": "Əl-Kəbir",
        "ar": "ٱلْكَبِيرُ",
        "meaning": "The Greatest, The Most Grand",
        "meaning_aze": "Ən Böyük"
    },
    {
        "en": "AL-HAFEEDH",
        "aze": "Əl-Hafiz",
        "ar": "ٱلْحَفِيظُ",
        "meaning": "The Preserver, The All-Protecting",
        "meaning_aze": "Qoruyan. Mühafizəçi"
    },
    {
        "en": "AL-MUQEET",
        "aze": "Əl-Muqit",
        "ar": "ٱلْمُقِيتُ",
        "meaning": "The Sustainer",
        "meaning_aze": "Ruzi verən. Təmin edən"
    },
    {
        "en": "AL-HASEEB",
        "aze": "Əl-Həsib",
        "ar": "ٱلْحَسِيبُ",
        "meaning": "The Accounter, The Sufficient",
        "meaning_aze": "Hər şeyi hesaba alan"
    },
    {
        "en": "AL-JALEEL",
        "aze": "Əl-Cəlil",
        "ar": "ٱلْجَلِيلُ",
        "meaning": "The Majestic, The Mighty",
        "meaning_aze": "Cəlal və Əzəmət Sahibi"
    },
    {
        "en": "AL-KAREEM",
        "aze": "Əl-Kərim",
        "ar": "ٱلْكَرِيمُ",
        "meaning": "The Most Generous",
        "meaning_aze": "Səxavətli"
    },
    {
        "en": "AR-RAQEEB",
        "aze": "Ər-Raqib",
        "ar": "ٱلْرَّقِيبُ",
        "meaning": "The Watchful One",
        "meaning_aze": "Nəzarətçi. Keşikçi"
    },
    {
        "en": "AL-MUJEEB",
        "aze": "Əl-Mucib",
        "ar": "ٱلْمُجِيبُ",
        "meaning": "The Responsive One",
        "meaning_aze": "Duaları qəbul edən. Cavab verən"
    },
    {
        "en": "AL-WAASI'",
        "aze": "Əl-Vasi",
        "ar": "ٱلْوَاسِعُ",
        "meaning": "The All-Comprehending",
        "meaning_aze": "Hərtərəfli"
    },
    {
        "en": "AL-HAKEEM",
        "aze": "Əl-Hakim",
        "ar": "ٱلْحَكِيمُ",
        "meaning": "The All-Wise",
        "meaning_aze": "Müdrik. Çox Hikmətli"
    },
    {
        "en": "AL-WADOOD",
        "aze": "Əl-Vədud",
        "ar": "ٱلْوَدُودُ",
        "meaning": "The Most Loving",
        "meaning_aze": "Ən Çox Sevən"
    },
    {
        "en": "AL-MAJEED",
        "aze": "Əl-Məcid",
        "ar": "ٱلْمَجِيدُ",
        "meaning": "The Glorious, The Most Honorable",
        "meaning_aze": "Şanlı"
    },
    {
        "en": "AL-BA'ITH",
        "aze": "Əl-Bais",
        "ar": "ٱلْبَاعِثُ",
        "meaning": "The Raiser of the Dead",
        "meaning_aze": "Axirətdə ölüləri dirildən"
    },
    {
        "en": "ASH-SHAHEED",
        "aze": "Əş-Şəhid",
        "ar": "ٱلْشَّهِيدُ",
        "meaning": "The All- and Ever Witnessing",
        "meaning_aze": "Hər şeyə şahid və nəzarətçi olan"
    },
    {
        "en": "AL-HAQQ",
        "aze": "Əl-Haqq",
        "ar": "ٱلْحَقُّ",
        "meaning": "The Absolute Truth",
        "meaning_aze": "Həqiqi"
    },
    {
        "en": "AL-WAKEEL",
        "aze": "Əl-Vəkil",
        "ar": "ٱلْوَكِيلُ",
        "meaning": "The Trustee, The Disposer of Affairs",
        "meaning_aze": "Himayəçi"
    },
    {
        "en": "AL-QAWIYY",
        "aze": "Əl-Qavi",
        "ar": "ٱلْقَوِيُّ",
        "meaning": "The All-Strong",
        "meaning_aze": "Güc sahibi"
    },
    {
        "en": "AL-MATEEN",
        "aze": "Əl-Mətin",
        "ar": "ٱلْمَتِينُ",
        "meaning": "The Forceful One, The Steadfast",
        "meaning_aze": "Sarsılmaz"
    },
    {
        "en": "AL-WALIYY",
        "aze": "Əl-Vəli",
        "ar": "ٱلْوَلِيُّ",
        "meaning": "The Protecting Associate",
        "meaning_aze": "Himayəçi"
    },
    {
        "en": "AL-HAMEED",
        "aze": "Əl-Həmid",
        "ar": "ٱلْحَمِيدُ",
        "meaning": "The Praiseworthy",
        "meaning_aze": "Təqdirəlayiq. Həmd edilən"
    },
    {
        "en": "AL-MUHSEE",
        "aze": "Əl-Muhsi",
        "ar": "ٱلْمُحْصِيُ",
        "meaning": "The Appraiser, The Counter",
        "meaning_aze": "Bütün varlıqların sayını bilən"
    },
    {
        "en": "AL-MUBDI",
        "aze": "Əl-Mübdi",
        "ar": "ٱلْمُبْدِئُ",
        "meaning": "The Originator, The Initiator",
        "meaning_aze": "Maddəsiz, nümunəsiz Yaradan"
    },
    {
        "en": "AL-MU'ID",
        "aze": "Əl-Muid",
        "ar": "ٱلْمُعِيدُ",
        "meaning": "The Restorer, The Reinstater",
        "meaning_aze": "Məxluqatları məhv edib sonra dirildən"
    },
    {
        "en": "AL-MUHYEE",
        "aze": "Əl-Muhyi",
        "ar": "ٱلْمُحْيِى",
        "meaning": "The Giver of Life",
        "meaning_aze": "Dirildən. Həyat verən"
    },
    {
        "en": "AL-MUMEET",
        "aze": "Əl-Mümit",
        "ar": "ٱلْمُمِيتُ",
        "meaning": "The Bringer of Death, the Destroyer",
        "meaning_aze": "Öldürən"
    },
    {
        "en": "AL-HAYY",
        "aze": "Əl-Hayy",
        "ar": "ٱلْحَىُّ",
        "meaning": "The Ever-Living One",
        "meaning_aze": "Daima diri olan"
    },
    {
        "en": "AL-QAYYOOM",
        "aze": "Əl-Qəyyum",
        "ar": "ٱلْقَيُّومُ",
        "meaning": "The Self-Existing One",
        "meaning_aze": "Müstəqil"
    },
    {
        "en": "AL-WAAJID",
        "aze": "Əl-Vacid",
        "ar": "ٱلْوَاجِدُ",
        "meaning": "The Perceiver. The Finder",
        "meaning_aze": "Ondan heç bir şey gizli qalmayan"
    },
    {
        "en": "AL-MAAJID",
        "aze": "Əl-Macid",
        "ar": "ٱلْمَاجِدُ",
        "meaning": "The Illustrious, the Magnificent",
        "meaning_aze": "Səxavəti çox olan"
    },
    {
        "en": "AL-WAAHID",
        "aze": "Əl-Vahid",
        "ar": "ٱلْوَاحِدُ",
        "meaning": "The One, The All Inclusive",
        "meaning_aze": "Tək olan. Yeganə"
    },
    {
        "en": "AL-AHAD",
        "aze": "Əl-Əhəd",
        "ar": "ٱلْأَحَد",
        "meaning": "The Unique, The Only One",
        "meaning_aze": "Bənzərsiz"
    },
    {
        "en": "AS-SAMAD",
        "aze": "Əs-Səməd",
        "ar": "ٱلْصَّمَدُ",
        "meaning": "The Eternal, Satisfier of Needs",
        "meaning_aze": "Heç kəsə və heç nəyə ehtiyacı olmayan"
    },
    {
        "en": "AL-QADIR",
        "aze": "Əl-Qədiir",
        "ar": "ٱلْقَادِرُ",
        "meaning": "The Capable, The Powerful",
        "meaning_aze": "Qüdrətli"
    },
    {
        "en": "AL-MUQTADIR",
        "aze": "Əl-Müqtədir",
        "ar": "ٱلْمُقْتَدِرُ",
        "meaning": "The Creator of All Power",
        "meaning_aze": "İqtidarlı"
    },
    {
        "en": "AL-MUQADDIM",
        "aze": "Əl-Müqəddim",
        "ar": "ٱلْمُقَدِّمُ",
        "meaning": "The Expediter, The Promoter",
        "meaning_aze": "Əvvələ çəkən"
    },
    {
        "en": "AL-MU'AKHKHIR",
        "aze": "Əl-Muəxxir",
        "ar": "ٱلْمُؤَخِّرُ",
        "meaning": "The Delayer, the Retarder",
        "meaning_aze": "Təxirə salan"
    },
    {
        "en": "AL-AWWAL",
        "aze": "Əl-Əvvəl",
        "ar": "ٱلأَوَّلُ",
        "meaning": "The First",
        "meaning_aze": "Hər şeydən əvvəl mövcud olmuş"
    },
    {
        "en": "AL-AAKHIR",
        "aze": "Əl-Axir",
        "ar": "ٱلْآخِرُ",
        "meaning": "The Last",
        "meaning_aze": "Hər şeydən sonda mövcud olan"
    },
    {
        "en": "AZ-DHAAHIR",
        "aze": "Əz-Zahir",
        "ar": "ٱلْظَّاهِرُ",
        "meaning": "The Manifest One",
        "meaning_aze": "Aşkarda olan (aşkardakıları bilən)"
    },
    {
        "en": "AL-BAATIN",
        "aze": "Əl-Batin",
        "ar": "ٱلْبَاطِنُ",
        "meaning": "The Hidden One, Knower of the Hidden",
        "meaning_aze": "Gizlində olan (gizlindəkiləri bilən)"
    },
    {
        "en": "AL-WAALI",
        "aze": "Əl-Vali",
        "ar": "ٱلْوَالِي",
        "meaning": "The Protecting Friend",
        "meaning_aze": "Bütün kainatı idarə edən"
    },
    {
        "en": "AL-MUTA'ALI",
        "aze": "Əl-Mütəali",
        "ar": "ٱلْمُتَعَالِي",
        "meaning": "The Self Exalted",
        "meaning_aze": "Ucaldılmış"
    },
    {
        "en": "AL-BARR",
        "aze": "Əl-Bərr",
        "ar": "ٱلْبَرُّ",
        "meaning": "The Source of Goodness",
        "meaning_aze": "Yaxşılığı və ehsanı bol olan"
    },
    {
        "en": "AT-TAWWAB",
        "aze": "Ət-Təvvab",
        "ar": "ٱلْتَّوَّابُ",
        "meaning": "The Ever-Pardoning, The Relenting",
        "meaning_aze": "Tövbələri qəbul edən. Bağışlayan"
    },
    {
        "en": "AL-MUNTAQIM",
        "aze": "Əl-Müntəkim",
        "ar": "ٱلْمُنْتَقِمُ",
        "meaning": "The Avenger",
        "meaning_aze": "Üsyançıları və zalımları cəzalandıran"
    },
    {
        "en": "AL-'AFUWW",
        "aze": "Əl-Əfüvv",
        "ar": "ٱلْعَفُوُّ",
        "meaning": "The Pardoner. The Forgiver",
        "meaning_aze": "Əfv edən. Bağışlayan"
    },
    {
        "en": "AR-RA'OOF",
        "aze": "Ər-Rauf",
        "ar": "ٱلْرَّؤُفُ",
        "meaning": "The Most Kind. The Clement",
        "meaning_aze": "Mehriban. Şəfqətli"
    },
    {
        "en": "MAALIK-UL-MULK",
        "aze": "Məlik-ül Mülk",
        "ar": "مَالِكُ ٱلْمُلْكُ",
        "meaning": "The Owner of All",
        "meaning_aze": "Bütün əmlakın sahibi"
    },
    {
        "en": "DHUL-JALAALI WAL-IKRAAM",
        "aze": "Zül-Cəlali vəl-İkram",
        "ar": "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ",
        "meaning": "The Lord of Majesty and Bounty",
        "meaning_aze": "Əzəmət, Ucalıq və Səxavət Sahibi"
    },
    {
        "en": "AL-MUQSIT",
        "aze": "Əl-Muksit",
        "ar": "ٱلْمُقْسِطُ",
        "meaning": "The Equitable, the Requiter",
        "meaning_aze": "Ədalətlə hökm edən"
    },
    {
        "en": "AL-JAAMI'",
        "aze": "Əl-Cami",
        "ar": "ٱلْجَامِعُ",
        "meaning": "The Gatherer, the Uniter",
        "meaning_aze": "İki əksin birləşməsi"
    },
    {
        "en": "AL-GHANIYY",
        "aze": "Əl-Qəniyy",
        "ar": "ٱلْغَنيُّ",
        "meaning": "The Self-Sufficient, The Wealthy",
        "meaning_aze": "Ehtiyacsız. Möhtac olmayan"
    },
    {
        "en": "AL-MUGHNI",
        "aze": "Əl-Muğni",
        "ar": "ٱلْمُغْنِيُّ",
        "meaning": "The Enricher",
        "meaning_aze": "Müstəqil edən"
    },
    {
        "en": "AL-MANI'",
        "aze": "Əl-Mani",
        "ar": "ٱلْمَانِعُ",
        "meaning": "The Preventer of Harm",
        "meaning_aze": "İstəmədiyi şeyin qarşısını alan"
    },
    {
        "en": "AD-DHARR",
        "aze": "Əd-Darr",
        "ar": "ٱلْضَّارُ",
        "meaning": "The Balancer, The Punisher",
        "meaning_aze": "Zərər verənlərin Yaradıcısı"
    },
    {
        "en": "AN-NAFI'",
        "aze": "Ən-Nafi",
        "ar": "ٱلْنَّافِعُ",
        "meaning": "The Creator of Good",
        "meaning_aze": "Faydalı şeylərin Yaradıcısı"
    },
    {
        "en": "AN-NUR",
        "aze": "Ən-Nur",
        "ar": "ٱلْنُّورُ",
        "meaning": "The Light, The Illuminator",
        "meaning_aze": "Aləmləri nurlandıran"
    },
    {
        "en": "AL-HAADI",
        "aze": "Əl-Hadi",
        "ar": "ٱلْهَادِي",
        "meaning": "The Guide",
        "meaning_aze": "Hidayət verən"
    },
    {
        "en": "AL-BADEE'",
        "aze": "Əl-Bədi",
        "ar": "ٱلْبَدِيعُ",
        "meaning": "The Incomparable Originator",
        "meaning_aze": "Həmişə ixtira edən"
    },
    {
        "en": "AL-BAAQI",
        "aze": "Əl-Baqi",
        "ar": "ٱلْبَاقِي",
        "meaning": "The Ever-Surviving, The Everlasting",
        "meaning_aze": "Əbədi. Daimi. Qaları"
    },
    {
        "en": "AL-WAARITH",
        "aze": "Əl-Varis",
        "ar": "ٱلْوَارِثُ",
        "meaning": "The Inheritor of All",
        "meaning_aze": "Hər şeyin Əsl Sahibi"
    },
    {
        "en": "AR-RASHEED",
        "aze": "Ər-Rəşid",
        "ar": "ٱلْرَّشِيدُ",
        "meaning": "The Guide, Infallible Teacher",
        "meaning_aze": "Doğru yolu göstərən"
    },
    {
        "en": "AS-SABOOR",
        "aze": "Əs-Sabur",
        "ar": "ٱلْصَّبُورُ",
        "meaning": "The Forbearing, The Patient",
        "meaning_aze": "Cəza verməyə tələsməyən"
    }
];

let optionDisabled = false;
let correctOption = null;
let started = false;
let currentIndex = 0;
var correctCount = 0;

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    const buttonElement = document.getElementById('btn');
    const counterElement = document.getElementById('counter');
    const languageSelection = document.getElementById('language-selection');

    buttonElement.addEventListener('click', () => {
        languageSelection.style.display = 'none';
        const selectedLanguage = document.querySelector('input[name="language"]:checked');

        if (started) {
            buttonElement.textContent = 'Next';
        }

        if (currentIndex === data.length) {
            summaryMessage = document.getElementById('final-result');
            summaryMessage.textContent = `${correctCount}/${data.length} correct!`;
            document.getElementById('btn').textContent = 'The End';
            document.getElementById('btn').disabled = true;
            disableOptions();

            return;
        }
        currentIndex++;
        counterElement.textContent = `Question ${currentIndex}/${data.length}`;
    });

}

function showNextCard() {
    optionDisabled = false;
    correctOption = null;
    started = true;
    const selectedLanguage = document.querySelector('input[name="language"]:checked');

    if (currentIndex === data.length) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];

    if (randomItem.displayed) {
        showNextCard();
        return;
    }

    randomItem.displayed = true;

    const currentCard = data[randomIndex];

    const frontText = document.getElementById('front-text');
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    if (selectedLanguage.value === 'eng') {
        frontText.textContent = currentCard.en;
        frontText.setAttribute('data-name', currentCard.en);
    } else {
        frontText.textContent = currentCard.aze;
        frontText.setAttribute('data-name', currentCard.aze);
    }

    frontText.setAttribute('data-translation', currentCard.ar);

    const incorrectOptions = [...data];
    incorrectOptions.splice(randomIndex, 1);
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);

    const allOptions = [currentCard].concat(randomIncorrectOptions);
    allOptions.forEach(option => {
        const optionElement = document.createElement('div');

        if (selectedLanguage.value === 'eng') {
            frontText.setAttribute('data-meaning', currentCard.meaning);
            optionElement.textContent = option.meaning;
        } else {
            frontText.setAttribute('data-meaning', currentCard.meaning_aze);
            optionElement.textContent = option.meaning_aze;
        }

        optionElement.classList.add('option');
        optionElement.setAttribute('data-correct', option === randomItem ? 'true' : 'false');
        if (option === randomItem) {
            correctOption = optionElement;
        }
        optionElement.onclick = checkOption;
        optionsContainer.appendChild(optionElement);
    });

    shuffleOptions(optionsContainer);
}

function flipCard() {
    var card = document.getElementById('card');
    var frontCard = document.getElementById('front-card');
    var rotation = getComputedStyle(card).getPropertyValue('transform');
    var frontText = document.getElementById('front-text');

    if (rotation === 'none' || rotation === 'matrix(1, 0, 0, 1, 0, 0)') {
        card.style.transform = 'rotateX(180deg)';
    } else {
        card.style.transform = 'rotateX(0deg)';
    }

    setTimeout(function () {
        if (rotation === 'none' || rotation === 'matrix(1, 0, 0, 1, 0, 0)') {
            if (currentIndex === 0) {
                frontText.textContent = '99 Names';
                frontText.style.transform = 'scaleY(-1)';
                return;
            }
            frontText.textContent = frontText.getAttribute('data-translation');
            frontText.style.transform = 'scaleY(-1)';
            frontText.style.fontSize = '40px';
            frontCard.classList.add('flipped');
        } else {
            if (currentIndex === 0) {
                frontText.textContent = 'Welcome!';
                frontText.style.transform = 'none';
                return;
            }
            frontText.textContent = frontText.getAttribute('data-name');
            frontText.style.transform = 'none';
            frontText.style.fontSize = '25px';
            frontCard.classList.remove('flipped');
        }
    }, 100);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleOptions(container) {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

function checkOption(event) {
    if (optionDisabled) return;

    const selectedOption = event.target;
    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    if (isCorrect) {
        correctOption.style.backgroundColor = '#9edba2';
        correctCount++;
    } else {
        selectedOption.style.backgroundColor = '#e69393';
        correctOption.style.backgroundColor = '#9edba2';
    }
    disableOptions();
}

function disableOptions() {
    optionDisabled = true;
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = null;
        option.classList.add('disabled');
    });
}