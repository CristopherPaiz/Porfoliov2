const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col inset-0 items-center mb-10 justify-center m-auto">
        <div className="flex gap-6">
          <a href="https://www.facebook.com/choper.paiz" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Facebook_icon_%28black%29.svg"
              alt=""
              className="w-10 h-10 object-cover dark:invert"
            />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=50238639275" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/ios-glyphs/512/whatsapp.png"
              alt=""
              className="w-12 h-12 -mt-1 object-cover dark:invert"
            />
          </a>
          <a href="https://github.com/CristopherPaiz" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.svgporn.com/logos/github-icon.svg"
              alt=""
              className="w-10 h-10 object-cover dark:invert"
            />
          </a>
        </div>
        <div className="mt-4 font-thin text-lg">
          <p>Cristopher Paiz - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
