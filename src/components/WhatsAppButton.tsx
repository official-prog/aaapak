const WhatsAppButton = () => (
  <a
    href="https://wa.me/16477788860"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
  >
    {/* Tooltip */}
    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
      Chat on WhatsApp
    </span>

    {/* Button */}
    <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20b858] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.687 5.098 1.886 7.244L1 31l7.978-1.862A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.333a12.29 12.29 0 01-6.27-1.716l-.449-.267-4.736 1.107 1.13-4.617-.293-.474A12.26 12.26 0 013.667 16C3.667 9.189 9.189 3.667 16 3.667S28.333 9.189 28.333 16 22.811 28.333 16 28.333zm6.73-9.188c-.369-.184-2.184-1.078-2.522-1.201-.338-.123-.584-.184-.83.184-.245.369-.952 1.201-1.167 1.447-.215.245-.43.276-.799.092-.369-.184-1.558-.574-2.968-1.83-1.097-.978-1.838-2.185-2.053-2.554-.215-.369-.023-.568.162-.752.166-.165.369-.43.553-.645.184-.215.245-.369.369-.614.123-.245.061-.46-.031-.644-.092-.184-.83-2.001-1.137-2.739-.299-.719-.604-.621-.83-.633l-.706-.012c-.245 0-.645.092-.983.46-.338.369-1.29 1.262-1.29 3.078s1.321 3.571 1.505 3.816c.184.245 2.6 3.969 6.302 5.565.881.38 1.568.607 2.104.777.884.281 1.689.241 2.326.146.709-.105 2.184-.893 2.492-1.756.307-.862.307-1.601.215-1.756-.092-.153-.338-.245-.706-.43z"/>
      </svg>
    </div>
  </a>
);

export default WhatsAppButton;
