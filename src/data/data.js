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

import image_1 from "../assets/img/Team/1.png";
import image_2 from "../assets/img/Team/2.png";
import image_3 from "../assets/img/Team/3.png";
import image_4 from "../assets/img/Team/4.png";

import img_portfolio_one from "../assets/img/Portfolio/1.png";
import img_portfolio_two from "../assets/img/Portfolio/2.png";
import img_portfolio_three from "../assets/img/Portfolio/3.png";
import img_portfolio_four from "../assets/img/Portfolio/4.png";


let state = {
    header:
        {
            links: [
                {
                    name: "Portfolio",
                    address: "/portfolio"
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
                title1: "MEDFORD",
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
            title: "SOUND",
            text: "Good sound is a defining feature of a video. That is why there is a separate profession of a sound engineer and special attention is paid to sound. Professional microphones allow you to record sound in high quality, without extraneous noise, artifacts and make it clean in post-processing.",
            img: img_1
        },
        {
            title: "LIGHT",
            text: "Lighting is the foundation of any good video. Everything depends on it, the mood, the quality of the image. The light is more important than the camera! With good light, you can achieve excellent results even with an iPhone, but with an expensive camera and without it, it can turn out very badly.",
            img: img_2
        },
        {
            title: "CAMERA",
            text: "There is no universal device suitable for all situations. But different optics allow you to implement any task. But the cameras are different and differ in the quality and color reproduction, and resolution. We shoot in 4K with Fujifilm and Sony cameras.",
            img: img_3
        },
        {
            title: "COPTER",
            text: "For some tasks, this is an indispensable tool. It allows you to make flights and shoot a general plan. Previously, this problem was solved by equipment worth millions. Today we have the opportunity to take professional shots in 4K quality using a copter.",
            img: img_4
        }
    ],
    price:
        {
           title1: "IMAGE VIDEO",
            subTitle: "PRICE REQUEST",
            button1: "Send"
        },
    pricePrice: [
        {
            title: "BLOG VIDEO",
            text: "We create image and training videos about business products and services",
            price: "150$",
            button: "Заказать просчет"
        },
        {
            title: "BLOG VIDEO",
            text: "We create image and training videos about business products and services",
            price: "150$",
            button: "Заказать просчет"
        },
        {
            title: "BLOG VIDEO",
            text: "We create image and training videos about business products and services",
            price: "150$",
            button: "Заказать просчет"
        }
    ],
    teamImg:
        {
            tytleImg: "TEAM"
        },
    team:
        [
        {
            img: image_1,
            tytle: "Kate Eliseeff",
            text: "Creative director. Comes up with ideas and includes communication in the game."
        },
        {
            img: image_2,
            tytle: "Piter Smirnoff",
            text: "Creative director. Comes up with ideas and includes communication in the game."
        },
        {
            img: image_3,
            tytle: "Igor Corneeff",
            text: "Creative director. Comes up with ideas and includes communication in the game."
        },
        {
            img: image_4,
            tytle: "David Okopan",
            text: "Creative director. Comes up with ideas and includes communication in the game."
        }
    ],
    footer: {
        logoTytle: "MEDFORD",
        logoSubTytle: "MEDIA"
    },
    portfolio: [
        {img: img_portfolio_one},
        {img: img_portfolio_two},
        {img: img_portfolio_three},
        {img: img_portfolio_four}
    ]
}
export default state;