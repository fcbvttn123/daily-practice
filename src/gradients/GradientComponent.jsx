export function GradientComponent() {
  return (
    <div>
      {/* Tip 1 */}
      <div className="bg-linear-to-r from-blue-500 to-purple-600 w-[200px] aspect-square mb-[10px]"></div>
      {/* Tip 2 */}
      <div className="bg-linear-to-br from-indigo-500/80 via-purple-500/70 to-pink-500/80 w-[200px] aspect-square mb-[10px]"></div>
      {/* Tip 3 */}
      <div className="bg-linear-to-r from-[#ff7e5f] to-[#feb47b] w-[200px] aspect-square"></div>
    </div>
  );
}
