import icon1 from "../assets/img/Section2_Our_Super_Power/icons1.svg";
import icon2 from "../assets/img/Section2_Our_Super_Power/icons2.svg";
import icon3 from "../assets/img/Section2_Our_Super_Power/icons3.svg";
import icon4 from "../assets/img/Section2_Our_Super_Power/icons4.svg";

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
        backgroundVideo: {
            backgroundVideoTitle: "PROFESSIONAL VIDEO PRODUCTION",
            backgroundVideoSubTitle: "20 YEARS OF MEDICAL VIDEO MARKETING"
        },
        offers: [
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
    }
}
export default state;