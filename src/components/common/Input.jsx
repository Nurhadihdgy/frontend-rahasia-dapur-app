const Input = ({ label, error, ...props }) => (
  <div className="w-full space-y-1.5">
    {label && <label className="text-sm font-semibold bg-white text-gray-700">{label}</label>}
    <input 
      className={`w-full px-4 py-3 bg-white rounded-xl border transition-all outline-none focus:ring-1 
        ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-dapur-orange focus:ring-dapur-orange'}`}
      {...props}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);
export default Input;