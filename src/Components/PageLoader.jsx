export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-slate-700 border-t-white rounded-full animate-spin" />

        {/* Text */}
        <p className="text-slate-400 tracking-widest text-sm">
          LOADING
        </p>

      </div>
    </div>
  );
}
