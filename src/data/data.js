import icon1 from "../assets/img/Section2_Our_Super_Power/icons1.svg";
import icon2 from "../assets/img/Section2_Our_Super_Power/icons2.svg";
import icon3 from "../assets/img/Section2_Our_Super_Power/icons3.svg";
import icon4 from "../assets/img/Section2_Our_Super_Power/icons4.svg";

import img1 from "../assets/img/SectonProcess/numbers/1.svg";
import img2 from "../assets/img/SectonProcess/numbers/2.svg";
import img3 from "../assets/img/SectonProcess/numbers/3.svg";
import img4 from "../assets/img/SectonProcess/numbers/4.svg";
import img5 from "../assets/img/SectonProcess/numbers/5.svg";
import img6 from "../assets/img/SectonProcess/numbers/6.svg";

import images1 from "../assets/img/SectonProcess/images/1.png";
import images2 from "../assets/img/SectonProcess/images/2.png";
import images3 from "../assets/img/SectonProcess/images/3.png";
import images4 from "../assets/img/SectonProcess/images/4.png";
import images5 from "../assets/img/SectonProcess/images/5.png";
import images6 from "../assets/img/SectonProcess/images/6.png";

import img_1 from "../assets/img/WhatImportantVideo/1.png";
import img_2 from "../assets/img/WhatImportantVideo/2.png";
import img_3 from "../assets/img/WhatImportantVideo/3.png";
import img_4 from "../assets/img/WhatImportantVideo/4.png";

let state = {
    header:
        {
            links: [
                {
                    name: "Portfolio",
                    address: "/"
                },
                {
                    name: "Our works",
                    address: "/works"
                },
                {
                    name: "About us",
                    address: "/about-us"
                },
                {
                    name: "Price",
                    address: "/price"
                }
        ],
            contacts: ["Contacts"],
            logosTitle: {
                title1: "MEDFORTD",
                title2: "MEDIA"
            },
            h1: {
                titleH1: "CREATING VIDEOS AND PODCASTS FOR BISNESS",
                brifButton: "Send a brief",
                brifSubTitle: "The brief gives an understanding of what type of video your business needs"
            }
        },

    main: {
        section1: {
            backgroundVideoTitle: "PROFESSIONAL VIDEO PRODUCTION",
            backgroundVideoSubTitle: "20 YEARS OF MEDICAL VIDEO MARKETING"
        },
        section2: [
            {
                icon: icon1,
                text: "Creating image and training videos"
            },
            {
                icon: icon2,
                text: "Providing production and technical support for corporate video blogs"
            },
            {
                icon: icon3,
                text: "Organizing and conducting thematic webinars"
            },
            {
                icon: icon4,
                text: "Recording podcasts in all business-friendly formats"
            }

        ]
    },

    sectionProcess: [
        {
            img: img1,
            title: "OFFER",
            subtitle: "SOLUTION",
            text: "Image videos, increase customer loyalty, increase brand and product awareness.",
            images: images1
        },
        {
            img: img2,
            title: "PLANNING",
            subtitle: "BUDGET",
            text: "Image videos, increase customer loyalty, increase brand and product awareness.",
            images: images2
        },
        {
            img: img3,
            title: "WRITING",
            subtitle: "SCRIPT",
            text: "Image videos, increase customer loyalty, increase brand and product awareness.",
            images: images3
        },
        {
            img: img4,
            title: "RECORDING",
            subtitle: "VIDEO",
            text: "Image videos, increase customer loyalty, increase brand and product awareness.",
            images: images4
        },
        {
            img: img5,
            title: "ADDING",
            subtitle: "GRAPHICS",
            text: "Image videos, increase customer loyalty, increase brand and product awareness.",
            images: images5
        },
        {
            img: img6,
            title: "MAKE",
            subtitle: "VIDEO",
            text: "Image videos, increase customer loyalty, increase brand and product awareness.",
            images: images6
        }
    ],
    whatImportantVideo: [
        {
            title: "ЗВУК",
            text: "Хороший звук является  определяющим в видео. Именно поэтому существует отдельная профессия звукорежиссёр и звуку уделяется особое внимание. Профессиональные микрофоны позволяют записывать звук в высоком качестве, без посторонних шумов, артефактов и сделать его чистым на постобработке.",
            img: img_1
        },
        {
            title: "СВЕТ",
            text: "Освещение это основа основ любого хорошого видео. От него зависит все, настроение, качество изображение. Свет важнее камеры! С хорошим светом можно добиться отличного результата даже с iPhone, а вот с дорогой камерой и без может получится очень плохо.",
            img: img_2
        },
        {
            title: "КАМЕРА",
            text: "Не существует универсального устройства, подходящего для любых ситуаций. Но различная оптика позволяет реализовывать любые задачи. А вот камеры бывают разные и отличаюся качествои цветопередачи, и разрешением. Мы снимаем в 4K на камеры Fujifilm и Sony.",
            img: img_3
        },
        {
            title: "КОПТЕР",
            text: "Для некоторых задач это незаменимый инструмент. Он позволяет делать пролеты и снимать общий план.  Раньше эту задачу решало оборудование стоимостью миллионы. На сегодня мы имеем возможность делать профессиональные кадры в качестве 4K используя коптер.",
            img: img_4
        }
    ]
}
export default state;