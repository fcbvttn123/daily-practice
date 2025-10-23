export function Button1() {
  return (
    <button className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden">
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="inset-0 absolute pointer-events-none select-none">
          <span className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"></span>
        </span>
      </span>
      <span className="inset-0 absolute pointer-events-none select-none">
        <span className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,_rgb(122,105,249),_rgb(242,99,120),_rgb(245,131,63))]"></span>
      </span>
      <span className="ml-1.5 bg-clip-text text-xs text-transparent bg-linear-to-b from-white to-white/50 transform-gpu">
        Star itsKrish01 on Github
      </span>
    </button>
  );
}
