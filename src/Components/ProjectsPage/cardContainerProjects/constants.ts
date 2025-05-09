import './CardContainerProjects.css';
import '../../../customHooks/ProgressBarScroll/useProgressBarScroll.css';
import websiteChat2 from './CardTemplate/projectsImagesCards/leafletWebImg/websiteChat2.png';
import androidChat from './CardTemplate/projectsImagesCards/leafletAndroidImg/androidChat.png';
import rumorScreen1Start from './CardTemplate/projectsImagesCards/rumorGame/rumorScreen2Start.png';
import geneticNNGui from './CardTemplate/projectsImagesCards/geneticNN/geneticNNGui_V1.jpeg';
import geneticAlgoCalssicRes from './CardTemplate/projectsImagesCards/geneticAlgo/geneticAlgoCalssicRes.png';
import knnCPP from './CardTemplate/projectsImagesCards/knnCPP/knnCPP.jpg'
import EPFlowChat from './CardTemplate/projectsImagesCards/projectEP/EPFlowChart.jpg'
import producerConsumerProblemImg from './CardTemplate/projectsImagesCards/producerConsumerProblem/producerConsumerProblemImg.jpg'
import numpyIcon from './CardTemplate/CardSkillsIcons/iconsImg/numpyIcons/numpylogoicon.svg'
import pygIcon from './CardTemplate/CardSkillsIcons/iconsImg/pygIcons/pyg_logo.png'

export const projectsData = [
    {
        projectImage: websiteChat2,
        title: 'Leaflet Chat: Web Platform',
        description: 'Explore Leaflet’s demo of a WhatsApp-like application. Register to send messages to friends through our website or mobile app. Our Server will be responsible for clean comunication cross platfrom.',
        iconsArr: ['ci-js-light ci-2x', 'ci-reactjs ci-2x', 'ci-nodejs ci-2x', 'ci-mongodb ci-2x', 'ci-npm ci-2x', 'ci-bootstrap ci-2x', 'ci-css ci-2x', 'ci-html ci-2x'],
        projectURL: 'https://github.com/Brettler/Leaflet_Server-Support_Android_and_Website',
    },
    {
        projectImage: androidChat,
        title: 'Leaflet Chat: Android App',
        description: 'Explore Leaflet’s Android app for quick, WhatsApp-like messaging. Clone and Run the app for smooth cross-device communication.',
        iconsArr: ['ci-java ci-2x', 'ci-firebase ci-2x', 'ci-nodejs ci-2x', 'ci-mongodb ci-2x', 'ci-npm ci-2x'],
        projectURL: 'https://github.com/Brettler/Leaflet_Android',
        isVerticalImage: true
    },
    {
        projectImage: EPFlowChat,
        title: 'Elucidating Drug Mechanisms',
        description: 'Developed a ML model that can classify drugs by their mechanisms through Graph Neural Networks employing a Large Language Model. This project won an award of Certificate of Excellence.',
        iconsArr: ['ci-python ci-2x', 'ci-pytorch ci-2x', pygIcon, numpyIcon],
        projectURL: null,
    },
    {
        projectImage: rumorScreen1Start,
        title: 'Rumor Spreading Game',
        description: 'Rumor Spreading game is a varient of "Game Of Life" that was devised by the mathematician John Horton Conway.',
        iconsArr: ['ci-python ci-2x', numpyIcon],
        projectURL: 'https://github.com/Brettler/Rumor_Spreading_Model',
    },
    {
        projectImage: geneticNNGui,
        title: 'Neural Network Utilize Genetic Algorithm',
        description: 'This project domnstrate the effectivness of training nueural network for binary classification using genetic algorithm instead of the mainsteam training methods.',
        iconsArr: ['ci-python ci-2x', numpyIcon],
        projectURL: 'https://github.com/Brettler/Leaflet_Server-Support_Android_and_Website',
    },
    {
        projectImage: geneticAlgoCalssicRes,
        title: 'Genetic Algorithm (mono-alphabetic cipher)',
        description: 'This project shows differents approches for genetic algorithms that will decipher mono-alphabetic cipher.',
        iconsArr: ['ci-python ci-2x', numpyIcon],
        projectURL: 'https://github.com/Brettler/Neural_Network_Genetic_Algorithm',
    },
    {
        projectImage: knnCPP,
        title: 'KNN Classifier: Server-Client',
        description: 'A C++ server-client system leveraging the Command design pattern and CLI over TCP. Simultaneous multi-client handling with socket-based communication.',
        iconsArr: ['ci-cpp ci-2x'],
        projectURL: 'https://github.com/Brettler/KNN---Client_Server-TCP',
    },
    {
        projectImage: producerConsumerProblemImg,
        title: 'Producer-Consumer Problem (Bounded Buffer)',
        description: 'A C program simulating the producer-consumer problem, as described by Edsger Dijkstra.',
        iconsArr: ['ci-c ci-2x'],
        projectURL: 'https://github.com/Brettler/Consumer_Producer_Problem',
    }
]