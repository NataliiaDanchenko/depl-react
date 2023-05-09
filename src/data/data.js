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
    ]
}
export default state;