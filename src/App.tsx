import { useEffect, useState } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingAnimation from './components/LoadingAnimation';
import './components/LoadingAnimation.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('App mounted');
    gsap.registerPlugin(ScrollTrigger);
    
    // 设置水墨风格的动画
    gsap.from(".ink-drop", {
      scale: 0,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(".title-char", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"
    });

    // 模拟加载完成
    const timer = setTimeout(() => {
      console.log('Loading completed');
      setIsLoading(false);
    }, 1000);

    return () => {
      console.log('App unmounted');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(timer);
    };
  }, []);

  console.log('App rendered, isLoading:', isLoading);

  return (
    <div className="app-container">
      {isLoading && <LoadingAnimation />}
      
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        {/* 水墨背景 */}
        <div className="ink-background">
          <div className="ink-drop ink-drop-1"></div>
          <div className="ink-drop ink-drop-2"></div>
          <div className="ink-drop ink-drop-3"></div>
        </div>

        {/* 主要内容 */}
        <main className="main-content">
          <div className="title-container">
            <h1 className="title">
              <span className="title-char">灵</span>
              <span className="title-char">钥</span>
              <span className="title-char">通</span>
              <span className="title-char">枢</span>
            </h1>
            <p className="subtitle">传承千年智慧，探索命运奥秘</p>
          </div>

          <div className="features-container">
            <div className="features">
              <div className="feature-card">
                <h3>六爻占卜</h3>
                <p>以六爻变化，洞察天机</p>
              </div>
              <div className="feature-card">
                <h3>奇门遁甲</h3>
                <p>奇门遁甲，运筹帷幄</p>
              </div>
              <div className="feature-card">
                <h3>大六壬</h3>
                <p>六壬神课，预测吉凶</p>
              </div>
              <div className="feature-card">
                <h3>八字命理</h3>
                <p>八字推命，知命改运</p>
              </div>
              <div className="feature-card">
                <h3>紫微斗数</h3>
                <p>紫微星盘，命理精微</p>
              </div>
              <div className="feature-card">
                <h3>风水堪舆</h3>
                <p>风水布局，趋吉避凶</p>
              </div>
            </div>
            <div className="scroll-hint">← 滑动查看更多 →</div>
          </div>

          <div className="coming-soon-section">
            <h2>敬请期待</h2>
            <p className="coming-soon-text">我们正在精心打造，将为您带来最专业的传统术数体验</p>
            <button className="subscribe-btn" onClick={() => {
              window.location.href = 'https://qm.qq.com/q/IstH9sLMAw';
            }}>预约</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
