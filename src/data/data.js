import icon1 from "../assets/img/Section2_Our_Super_Power/icons1.svg";
import icon2 from "../assets/img/Section2_Our_Super_Power/icons2.svg";
import icon3 from "../assets/img/Section2_Our_Super_Power/icons3.svg";
import icon4 from "../assets/img/Section2_Our_Super_Power/icons4.svg";

import img1 from "../assets/img/SectonProcess/1.svg";
import img2 from "../assets/img/SectonProcess/2.svg";
import img3 from "../assets/img/SectonProcess/3.svg";
import img4 from "../assets/img/SectonProcess/4.svg";
import img5 from "../assets/img/SectonProcess/5.svg";
import img6 from "../assets/img/SectonProcess/6.svg";

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
            title: "ПРЕДЛААЕМ РЕШЕНИЕ",
            text: "Имиджевые видео, увеличивают лояльность клиентов, повышают узнаваемость бренда и продуктов."
        },
        {
            img: img2,
            title: "ПЛАНИРУЕМ БЮДЖЕТ",
            text: "Имиджевые видео, увеличивают лояльность клиентов, повышают узнаваемость бренда и продуктов."
        },
        {
            img: img3,
            title: "ПИШЕМ СЦЕНАРИЙ",
            text: "Имиджевые видео, увеличивают лояльность клиентов, повышают узнаваемость бренда и продуктов."
        },
        {
            img: img4,
            title: "СНИМАЕМ ВИДЕО",
            text: "Имиджевые видео, увеличивают лояльность клиентов, повышают узнаваемость бренда и продуктов."
        },
        {
            img: img5,
            title: "ДОБАВЛЯЕМ ГРАФИКУ",
            text: "Имиджевые видео, увеличивают лояльность клиентов, повышают узнаваемость бренда и продуктов."
        },
        {
            img: img6,
            title: "МОНТИРУЕМ РОЛИК",
            text: "Имиджевые видео, увеличивают лояльность клиентов, повышают узнаваемость бренда и продуктов."
        }
    ]
}
export default state;