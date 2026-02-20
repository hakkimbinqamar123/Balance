import logo from '../assets/Images/logo2.webp';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">

        {/* Image */}
        <img
          src={logo}  
          alt="Loading"
          className="w-20 h-20 object-contain"
        />

        {/* Text */}
        <p className="text-slate-400 tracking-widest text-sm">
          LOADING ...
        </p>

      </div>
    </div>
  );
}