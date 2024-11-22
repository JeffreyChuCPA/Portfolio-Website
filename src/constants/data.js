import projImg1 from '../assets/img/project1.png'
import projImg2 from '../assets/img/project2.png'
import projImg3 from '../assets/img/project3.png'
import projImg4 from '../assets/img/project4.png'
import projImg5 from '../assets/img/project5.png'

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  smallTablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const projects = [
  {
    title: "Vibeboard",
    description: "A platform designed for creativity and inspiration, enabling users to design, share, and discover captivating RGB keyboard themes.",
    imgURL: projImg1,
    projectURL: 'https://github.com/JeffreyChuCPA/VibeBoard'
  },
  {
    title: "Maze It Yourself",
    description: "An interactive platform for visualizing and creating mazes, designed to explore and understand maze generation and solving algorithms intuitively",
    imgURL: projImg2,
    projectURL: 'https://maze-solver-visualizer.vercel.app/'
  },
  {
    title: "Risk of Rain 2 Multishop Terminal Simulator",
    description: "Interactive simulator replicating the Multishop Terminal feature from the game Risk of Rain 2",
    imgURL: projImg3,
    projectURL: 'https://risk-of-rain-2-multishop-simulator-sage.vercel.app/'
  },
  {
    title: "Weathergram",
    description: "Real-time weather app with dynamic weather animations",
    imgURL: projImg4,
    projectURL: 'https://jeffreychucpa.github.io/Weathergram/'
  },
  {
    title: "Tic-Tac-Toe",
    description: "An interactive Tic Tac Toe game featuring a sleek and modern UI design",
    imgURL: projImg5,
    projectURL: 'https://jeffreychucpa.github.io/Tic-Tac-Toe/'
  },
]