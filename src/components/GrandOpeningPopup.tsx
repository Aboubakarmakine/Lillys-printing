import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GrandOpeningPopup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("grandOpeningPopupSeen");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("grandOpeningPopupSeen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Dark semi-transparent overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={handleClose}
      />
      
      {/* Main Popup Container based on the yellow/red example */}
      <div className="relative w-full max-w-3xl aspect-[16/9] sm:aspect-auto sm:h-[450px] bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* Background decorative elements (dots, crosses) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Top left dots */}
          <div className="absolute top-6 left-6 grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={`tl-${i}`} className="w-1.5 h-1.5 bg-black rounded-full"></div>
            ))}
          </div>
          {/* Bottom right dots */}
          <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={`br-${i}`} className="w-1.5 h-1.5 bg-black rounded-full"></div>
            ))}
          </div>
          {/* Subtle geometric lines and crosses */}
          <div className="absolute top-12 left-1/3 text-black text-2xl font-bold">×</div>
          <div className="absolute bottom-1/4 left-12 text-black text-2xl font-bold">×</div>
          <div className="absolute top-1/4 right-16 text-black text-2xl font-bold">×</div>
          <div className="absolute bottom-12 right-1/4 text-black text-2xl font-bold">×</div>
          <div className="absolute top-8 right-1/3 w-4 h-4 border-2 border-black rounded-full"></div>
          <div className="absolute bottom-8 left-1/4 w-4 h-4 border-2 border-black rounded-full"></div>
          <div className="absolute top-1/2 left-4 w-4 h-4 border-2 border-black rounded-full"></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-black hover:text-white bg-white/30 hover:bg-black/50 rounded-full p-2 transition-colors z-50 focus:outline-none"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Centered Content Wrapper */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center z-10">
          
          {/* Central Red Banner Element */}
          <div className="relative w-[110%] md:w-full max-w-2xl transform -skew-x-[15deg] bg-primary shadow-xl p-4 md:p-8 flex flex-col items-center justify-center shrink-0 border-b-8 border-red-800">
            {/* Inner text container skewed back so text is normal */}
            <div className="transform skew-x-[15deg] flex flex-col items-center z-20">
              <span className="text-white font-bold tracking-[0.3em] text-sm md:text-xl mb-1 md:mb-3 drop-shadow-md uppercase">
                {t("grand_opening_subtitle", "NOW IN RIVERDALE")}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase drop-shadow-md leading-none">
                <span className="text-yellow-400 block mb-1 md:mb-2">{t("grand_opening_title_part1", "GRAND")}</span>
                <span className="text-white block">{t("grand_opening_title_part2", "OPENING")}</span>
              </h2>
            </div>
            
            {/* Left Circular Badge overlaying the red banner */}
            <div className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 transform skew-x-[15deg] z-30">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-full border-4 sm:border-8 border-white shadow-lg flex flex-col items-center justify-center shadow-black/30 p-2">
                <span className="text-white font-black uppercase text-center leading-tight text-sm sm:text-xl drop-shadow-md">
                  {t("grand_opening_badge1", "BIG")}
                </span>
                <span className="text-yellow-400 font-black uppercase text-center leading-tight text-sm sm:text-xl drop-shadow-md">
                  {t("grand_opening_badge2", "SALE!")}
                </span>
              </div>
            </div>
            
            {/* Tail elements / racing stripes on right */}
            <div className="absolute top-0 -right-8 w-16 h-[40%] bg-primary rounded-r-full"></div>
            <div className="absolute bottom-0 -right-16 w-32 h-[40%] bg-primary rounded-r-full"></div>
          </div>
          
          {/* Small white box below banner: "STAY TUNED!" or CTA text */}
          <div className="mt-8 z-20">
            <Link 
              to="/catalog" 
              onClick={handleClose}
              className="px-6 py-2 sm:px-10 sm:py-3 bg-white text-primary uppercase font-black tracking-widest text-sm sm:text-xl rounded shadow-lg hover:scale-105 active:scale-95 transition-transform inline-block box-border border-b-4 border-gray-300"
            >
              {t("grand_opening_cta", "SHOP NOW!")}
            </Link>
          </div>
          
          {/* Optional subtext below the CTA */}
          <p className="mt-4 text-black font-bold text-base sm:text-lg max-w-sm drop-shadow-sm z-20 px-8 bg-white/50 py-1 rounded-full backdrop-blur-sm shadow-sm border border-white/40">
            {t("grand_opening_desc", "Grand opening now in Riverdale Md!")}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default GrandOpeningPopup;
