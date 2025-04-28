import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 可选的DrawSVG和MorphSVG插件，需要GSAP商业许可
// 在实际开发中，您需要合法购买使用这些插件
// 或者使用其他开源替代方案

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
