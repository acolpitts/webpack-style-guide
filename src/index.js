// Import Style Guide
import StyleGuide from './app/StyleGuide';
// Import Design System
import './styles/main.scss';

// Append StyleGuide to the DOM
const myStyleGuide = new StyleGuide()
myStyleGuide.render('#root')
