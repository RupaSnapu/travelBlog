'use client';
import InputField from './InputField';
import TextareaField from './TextareaField.jsx';



import { useState } from 'react';
import Windowstime from './windowstime';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [isTyping, setIsTyping] = useState(false);
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);

  const handleInput = () => {
    setIsTyping(true);
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => setIsTyping(false), 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setIsTyping(false);
    setTimeout(() => {
      const success = Math.random() > 0.1;
      setStatus(success ? 'success' : 'error');
    }, 2200);
  };

  return (
    <div className="min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-amber-200 p-4 sm:p-6">
      <div className="relative flex flex-col lg:flex-row max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden group">
        
        {/* Sidebar with bear */}
        <div className="w-full lg:w-48 bg-amber-300 flex justify-center items-center p-6">
          <CuteAnimatedTeddyBear 
            isTyping={isTyping} 
            status={status} 
            isHoveringSubmit={isHoveringSubmit}
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex-1 p-6 sm:p-10 transition-transform duration-300 
            ${status === 'error' ? 'animate-shake' : 'group-hover:scale-[1.02]'}`}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-10 text-amber-900 text-center select-none">
            Contact Us
          </h1>

          <InputField label="Your Name" type="text" onInput={handleInput} />
          <InputField label="Your Email" type="email" onInput={handleInput} />
          <TextareaField label="Your Message" onInput={handleInput} />

          <button
            type="submit"
            disabled={status === 'loading'}
            onMouseEnter={() => setIsHoveringSubmit(true)}
            onMouseLeave={() => setIsHoveringSubmit(false)}
            className="w-full bg-amber-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
            shadow-md hover:bg-amber-800 active:bg-amber-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="mt-4 sm:mt-6 text-center text-green-700 font-semibold animate-fade-in-bounce">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 sm:mt-6 text-center text-red-600 font-semibold animate-shake">
              Oops! Something went wrong.
            </p>
          )}
        </form>
      </div>

      <div className="mt-20 sm:mt-40 w-full">
        <Windowstime />
      </div>
    </div>
  );
}


// InputField and TextareaField components remain the same...

function CuteAnimatedTeddyBear({ isTyping, status, isHoveringSubmit }) {
  return (
    <svg
      viewBox="0 0 160 160"
      width="160"
      height="160"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      {/* Body with different animations based on state */}
      <ellipse
        cx="80"
        cy="125"
        rx="65"
        ry="43"
        fill="#D9A26B"
        className={
          status === 'loading' ? 'animate-body-pulse' : 
          isHoveringSubmit ? 'animate-body-excited' : 
          isTyping ? 'animate-body-breathing-fast' : 
          'animate-body-breathing'
        }
      />

      {/* Chest patch */}
      <ellipse cx="80" cy="130" rx="35" ry="18" fill="#F4C97F" />

      {/* Head group */}
      <g
        className={
          status === 'loading' ? 'animate-head-nod-fast' : 
          isHoveringSubmit ? 'animate-head-excited' : 
          isTyping ? 'animate-head-nod' : 
          'animate-head-slight-nod'
        }
        style={{ transformOrigin: '80px 80px' }}
      >
        {/* Head */}
        <circle cx="80" cy="70" r="52" fill="#D9A26B" />
        
        {/* Face overlay */}
        <circle cx="80" cy="70" r="42" fill="#F4C97F" />

        {/* Ears */}
        <g className={
          isHoveringSubmit ? 'animate-ears-excited' : 
          isTyping ? 'animate-ears-wiggle' : 
          'animate-ears-twitch'
        }>
          {/* Left Ear */}
          <circle cx="30" cy="30" r="22" fill="#D9A26B" />
          <circle cx="30" cy="30" r="11" fill="#F4C97F" />
          {/* Right Ear */}
          <circle cx="130" cy="30" r="22" fill="#D9A26B" />
          <circle cx="130" cy="30" r="11" fill="#F4C97F" />
        </g>

        {/* Eyes - different expressions */}
        <g className={
          status === 'loading' ? 'animate-eyes-focused' : 
          isHoveringSubmit ? 'animate-eyes-excited' : 
          isTyping ? 'animate-eyes-curious' : 
          'animate-eyes-slow-blink'
        }>
          {/* Left Eye */}
          <circle cx="55" cy="65" r="8" fill="#3B2E22" />
          <circle cx={status === 'loading' ? "57" : "53"} cy="63" r="3" fill="#F9F6EF" />
          {/* Right Eye */}
          <circle cx="105" cy="65" r="8" fill="#3B2E22" />
          <circle cx={status === 'loading' ? "103" : "107"} cy="63" r="3" fill="#F9F6EF" />
        </g>

        {/* Nose */}
        <ellipse cx="80" cy="95" rx="13" ry="10" fill="#3B2E22" />
        
        {/* Mouth - different expressions */}
        {status === 'loading' ? (
          <path
            d="M70 105 Q80 100 90 105"
            stroke="#5C4B38"
            strokeWidth="4"
            fill="none"
            className="animate-mouth-concentrated"
          />
        ) : isHoveringSubmit ? (
          <path
            d="M70 110 Q80 120 90 110"
            stroke="#5C4B38"
            strokeWidth="4"
            fill="none"
            className="animate-smile-excited"
          />
        ) : isTyping ? (
          <path
            d="M70 110 Q80 115 90 110"
            stroke="#5C4B38"
            strokeWidth="4"
            fill="none"
            className="animate-smile-curious"
          />
        ) : (
          <path
            d="M70 110 Q80 113 90 110"
            stroke="#5C4B38"
            strokeWidth="4"
            fill="none"
          />
        )}

        {/* Cheeks */}
        <circle cx="40" cy="90" r="10" fill="#FFA07A" opacity="0.5" />
        <circle cx="120" cy="90" r="10" fill="#FFA07A" opacity="0.5" />
      </g>

      {/* Arms - different animations */}
      <g className={isHoveringSubmit ? 'animate-arms-excited' : ''}>
        {/* Left Arm */}
        <rect
          x="10"
          y="95"
          width="35"
          height="18"
          rx="10"
          ry="10"
          fill="#D9A26B"
          className={
            isHoveringSubmit ? 'animate-arm-wave-left-excited' : 
            isTyping ? 'animate-arm-wave-left' : 
            'animate-arm-sway-left'
          }
          style={{ transformOrigin: '30px 105px' }}
        />
        {/* Right Arm */}
        <rect
          x="115"
          y="95"
          width="35"
          height="18"
          rx="10"
          ry="10"
          fill="#D9A26B"
          className={
            isHoveringSubmit ? 'animate-arm-wave-right-excited' : 
            isTyping ? 'animate-arm-wave-right' : 
            'animate-arm-sway-right'
          }
          style={{ transformOrigin: '130px 105px' }}
        />
      </g>

      {/* Paws */}
      <ellipse cx="40" cy="140" rx="18" ry="12" fill="#D9A26B" />
      <ellipse cx="120" cy="140" rx="18" ry="12" fill="#D9A26B" />

      {/* Tail */}
      <circle
        cx="150"
        cy="130"
        r="15"
        fill="#D9A26B"
        className={
          isHoveringSubmit ? 'animate-tail-wag-excited' : 
          isTyping ? 'animate-tail-wag' : 
          'animate-tail-sway'
        }
        style={{ transformOrigin: '150px 130px' }}
      />

      <style jsx>{`
        /* Body animations */
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-body-breathing {
          animation: breathing 6s ease-in-out infinite;
          transform-origin: 80px 125px;
        }

        @keyframes breathingFast {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-body-breathing-fast {
          animation: breathingFast 3s ease-in-out infinite;
          transform-origin: 80px 125px;
        }

        @keyframes bodyPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-body-pulse {
          animation: bodyPulse 1.5s ease-in-out infinite;
          transform-origin: 80px 125px;
        }

        @keyframes bodyExcited {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05) translateY(-3px); }
          50% { transform: scale(1.03) translateY(0); }
          75% { transform: scale(1.05) translateY(-3px); }
        }
        .animate-body-excited {
          animation: bodyExcited 0.8s ease-in-out infinite;
          transform-origin: 80px 125px;
        }

        /* Head animations */
        @keyframes headSlightNod {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-head-slight-nod {
          animation: headSlightNod 6s ease-in-out infinite;
        }

        @keyframes headNod {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        .animate-head-nod {
          animation: headNod 3s ease-in-out infinite;
        }

        @keyframes headNodFast {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(12deg); }
        }
        .animate-head-nod-fast {
          animation: headNodFast 1.5s ease-in-out infinite;
        }

        @keyframes headExcited {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
        }
        .animate-head-excited {
          animation: headExcited 0.8s ease-in-out infinite;
        }

        /* Ears animations */
        @keyframes earsTwitch {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-ears-twitch {
          animation: earsTwitch 4s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes earsWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
        }
        .animate-ears-wiggle {
          animation: earsWiggle 2s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes earsExcited {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
          75% { transform: rotate(20deg); }
        }
        .animate-ears-excited {
          animation: earsExcited 0.6s ease-in-out infinite;
          transform-origin: center;
        }

        /* Eyes animations */
        @keyframes eyesSlowBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-eyes-slow-blink {
          animation: eyesSlowBlink 6s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes eyesCurious {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-eyes-curious {
          animation: eyesCurious 4s ease-in-out infinite;
        }

        @keyframes eyesFocused {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2px); }
        }
        .animate-eyes-focused {
          animation: eyesFocused 1.5s ease-in-out infinite;
        }

        @keyframes eyesExcited {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .animate-eyes-excited {
          animation: eyesExcited 0.8s ease-in-out infinite;
          transform-origin: center;
        }

        /* Mouth animations */
        @keyframes mouthConcentrated {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 5; }
        }
        .animate-mouth-concentrated {
          stroke-dasharray: 10;
          animation: mouthConcentrated 1.5s ease-in-out infinite;
        }

        @keyframes smileExcited {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.1) translateY(-3px); }
        }
        .animate-smile-excited {
          animation: smileExcited 0.8s ease-in-out infinite;
          transform-origin: 80px 110px;
        }

        @keyframes smileCurious {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-1px); }
        }
        .animate-smile-curious {
          animation: smileCurious 3s ease-in-out infinite;
          transform-origin: 80px 110px;
        }

        /* Arms animations */
        @keyframes armSwayLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }
        .animate-arm-sway-left {
          animation: armSwayLeft 4s ease-in-out infinite;
        }

        @keyframes armSwayRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        .animate-arm-sway-right {
          animation: armSwayRight 4s ease-in-out infinite;
        }

        @keyframes armWaveLeft {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(-30deg); }
          50% { transform: rotate(-15deg); }
        }
        .animate-arm-wave-left {
          animation: armWaveLeft 2s ease-in-out infinite;
          transform-origin: 30px 105px;
        }

        @keyframes armWaveRight {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(30deg); }
          50% { transform: rotate(15deg); }
        }
        .animate-arm-wave-right {
          animation: armWaveRight 2s ease-in-out infinite;
          transform-origin: 130px 105px;
        }

        @keyframes armWaveLeftExcited {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(-40deg); }
          50% { transform: rotate(-25deg); }
        }
        .animate-arm-wave-left-excited {
          animation: armWaveLeftExcited 0.8s ease-in-out infinite;
          transform-origin: 30px 105px;
        }

        @keyframes armWaveRightExcited {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(40deg); }
          50% { transform: rotate(25deg); }
        }
        .animate-arm-wave-right-excited {
          animation: armWaveRightExcited 0.8s ease-in-out infinite;
          transform-origin: 130px 105px;
        }

        @keyframes armsExcited {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-arms-excited {
          animation: armsExcited 0.8s ease-in-out infinite;
        }

        /* Tail animations */
        @keyframes tailSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(7deg); }
        }
        .animate-tail-sway {
          animation: tailSway 5s ease-in-out infinite;
          transform-origin: 150px 130px;
        }

        @keyframes tailWag {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(15deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-tail-wag {
          animation: tailWag 3s ease-in-out infinite;
          transform-origin: 150px 130px;
        }

        @keyframes tailWagExcited {
          0%, 100% { transform: rotate(0deg); }
          25%, 75% { transform: rotate(30deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-tail-wag-excited {
          animation: tailWagExcited 0.8s ease-in-out infinite;
          transform-origin: 150px 130px;
        }

        /* Shake animation for error */
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-10px); }
          40%, 80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        /* Fade in bounce for success */
        @keyframes fadeInBounce {
          0% { opacity: 0; transform: translateY(10px); }
          50% { opacity: 1; transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-bounce {
          animation: fadeInBounce 1s ease forwards;
        }
      `}</style>
    </svg>
  );
}
