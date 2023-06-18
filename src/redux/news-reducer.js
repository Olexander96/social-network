import { newsAPI } from "../api/api";

const GET_NEWS = "users/GET_NEWS";


//https://newsapi.org/ (сайт апішки новин, але закриті CORS тому захардкодив, на локальному хості все працює)
const initialState = {
    newsList: [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "Meta says it's totally fine for 10 year olds to wear its VR headset, probably",
            "description": "Meta will soon officially permit users as young at 10 to use its Meta Quest 2 and 3 VR headsets — if their parents say it's OK, anyway.",
            "url": "https://techcrunch.com/2023/06/16/meta-says-its-totally-fine-for-10-year-olds-to-wear-its-vr-headset-probably/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/Quest-v50-update-MZ_Header.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T22:19:25Z",
            "content": "Meta will soon officially permit users as young at 10 to use its Meta Quest 2 and 3 VR headsets if their parents say it’s OK, anyway. In a blog post, the tech giant says that there’s “a vast array of… [+2424 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "Electric truck maker Nikola to cut 23% of workforce",
            "description": "Nikola Motors is laying off 270 employees and restricting its electric truck efforts to North America as it seeks to preserve cash.",
            "url": "https://techcrunch.com/2023/06/16/electric-truck-maker-nikola-to-cut-23-of-workforce/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/02/NIKOLA_TRE_BEV-5.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T21:33:28Z",
            "content": "Nikola Corp. is laying off 270 employees, or about 23% of its workforce, and restricting its electric truck efforts to North America as it seeks to preserve cash.\r\nThe company said Friday it will lay… [+2373 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Reddit's CEO lashes out, Twitter gets evicted, and NYC delivery workers get a pay raise",
            "description": "In this edition of Week in Review, we cover Reddit's CEO lashing out at subreddit moderators, Twitter getting evicted and more.",
            "url": "https://techcrunch.com/2023/06/17/reddits-ceo-lashes-out-twitter-gets-evicted-and-nyc-delivery-workers-get-a-pay-raise/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/reddit-glitch-2.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T20:36:05Z",
            "content": "Hi, lovely people, and welcome to Week in Review (WiR), TechCrunch’s regular newsletter that highlights the top news in tech over the past week (or so). If you haven’t already, sign up here to get Wi… [+4819 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Deal Dive: Maybe venture debt works for asset managers after all",
            "description": "While many venture debt lenders were skeptical the strategy would work for asset managers, BlackRock decided to take the plunge.",
            "url": "https://techcrunch.com/2023/06/17/blackrock-venture-debt-asset-managers/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1072366090-e1686934845739.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T20:31:19Z",
            "content": "Blackstone last August was looking to put $2 billion toward lending to startups and tech companies, according to The Information. But venture debt lenders remain skeptical that the asset class’s smal… [+1149 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anna Heim and Alex Wilhelm",
            "title": "Revolut sees its valuation reconsidered as public markets stir the fintech pot",
            "description": "U.K.-based Revolut saw its valuation being reduced earlier this year, and the company is once again in the headlines for reasons it won’t like.",
            "url": "https://techcrunch.com/2023/06/16/revolut-sees-its-valuation-reconsidered-as-public-markets-stir-the-fintech-pot/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/venture-debt-survey.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T20:25:46Z",
            "content": "What are neobanks worth? That’s a question on many people’s minds, especially the investors and employees of the richly valued fintechs that have been waiting for IPOs to make a comeback.\r\nOverall, n… [+1612 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "NASA hits up 7 space companies to take on orbital squad goals",
            "description": "From space stations to human transport and robotics, NASA is tapping 7 space companies to look into the next decade of space tech.",
            "url": "https://techcrunch.com/2023/06/16/nasa-hits-up-7-space-companies-to-take-on-orbital-squad-goals/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/sierra_space_ccsc2.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T18:59:52Z",
            "content": "NASA has announced Space Act agreements with seven private space companies in the hopes of spurring tech developments the government may invest in down the line, from space stations to human transpor… [+2168 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "BuzzCutt steers the sober curious toward booze-free bar and restaurant options",
            "description": "BuzzCutt aims to shepherd non-drinkers, mindful drinkers and the sober-curious toward their best local options.",
            "url": "https://techcrunch.com/2023/06/16/buzzcutt-app-sober-alcohol-free-local-options/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/BUZZCUTT-logo.png?resize=1200,300",
            "publishedAt": "2023-06-16T18:48:49Z",
            "content": "If you dont drink, navigating nightlife, bars and even eating out can be an exercise in frustration. Non-alcoholic options are popping up everywhere, but for every neighborhood haunt with a booze-fre… [+5569 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Haje Jan Kamps",
            "title": "Here’s why it’s scary that investors believe they can monetize the climate crisis",
            "description": "Welcome to Startups Weekly. Sign up here to get it in your inbox every Friday afternoon. The event horizon for when we can expect to end up in (literal) hot water when it comes to climate has come a lot closer. You wanna know how close? The climate deadline i…",
            "url": "https://techcrunch.com/2023/06/16/heres-why-its-scary-that-investors-believe-they-can-monetize-the-climate-crisis/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/08/climate-change-emoji.jpg?resize=1200,675",
            "publishedAt": "2023-06-16T16:00:08Z",
            "content": "Welcome to Startups Weekly. Sign up here to get it in your inbox every Friday afternoon.\r\nThe event horizon for when we can expect to end up in (literal) hot water when it comes to climate has come a… [+5031 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anna Heim",
            "title": "The UK hasn't lost its appeal for venture capital",
            "description": "Not dead yet: This is true both of the U.K's capacity to attract venture capital dollars, and of the promise of autonomous cars.",
            "url": "https://techcrunch.com/2023/06/17/uk-venture-capital-leader/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1258632005.jpg?resize=1200,785",
            "publishedAt": "2023-06-16T15:49:33Z",
            "content": "Welcome to the TechCrunch Exchange, a weekly startups-and-markets newsletter. Its inspired by the daily TechCrunch+ column where it gets its name. Want it in your inbox every Saturday? Sign up here.\r… [+779 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Carly Page",
            "title": "US confirms federal agencies hit by MOVEit breach, as hackers list more victims",
            "description": "Multiple federal agencies have fallen victim to cyberattacks exploiting a security vulnerability in a popular file transfer tool",
            "url": "https://techcrunch.com/2023/06/16/us-confirms-federal-agencies-hit-by-moveit-breach-as-hackers-list-more-victims/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/ransomware-bryce.jpg?resize=1200,799",
            "publishedAt": "2023-06-16T15:34:52Z",
            "content": "The U.S. government has confirmed that multiple federal agencies have fallen victim to cyberattacks exploiting a security vulnerability in a popular file transfer tool.\r\nIn a statement shared with Te… [+3363 chars]"
        }

    ],
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                newsList: action.articles
            }
        default: return state
    }
}

const getNews = (articles) => ({ type: GET_NEWS, articles: articles });

export const getNewsThunkCreator = () => async (dispatch) => {
    const response = await newsAPI.getCurrentNews();
    if (response.status === 'ok') {
        dispatch(getNews(response.articles))
    }
};

export default newsReducer;