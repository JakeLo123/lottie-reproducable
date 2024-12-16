import './App.css'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const App = () => {
  return (
    <div className="container">
      <DotLottieReact
        dotLottieRefCallback={(dotLottie) => {
          dotLottie?.setLayout({
            fit: 'cover',
            'align': [0, 0]
          })
          return dotLottie
        }}
        src="./asteroid-field.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default App
