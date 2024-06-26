import { Link as RouterLink } from "react-router-dom"; // Importa Link si deseas usarlo para la navegación

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center text-center -mt-16 h-screen">
      <div className="text-center m-5">
        <svg
          className="h-[180px] w-[180px] animate-bounce mx-auto sm:h-[150px] sm:w-[150px]"
          enableBackground="new 0 0 226 249.135"
          height="249.135"
          id="Layer_1"
          overflow="visible"
          version="1.1"
          viewBox="0 0 226 249.135"
          width="226"
          xmlSpace="preserve"
        >
          <circle cx="113" cy="113" fill="#FFE585" r="109" />
          <line
            enableBackground="new"
            fill="none"
            opacity="0.29"
            stroke="#6E6E96"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            x1="88.866"
            x2="136.866"
            y1="245.135"
            y2="245.135"
          />
          <line
            enableBackground="new"
            fill="none"
            opacity="0.17"
            stroke="#6E6E96"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            x1="154.732"
            x2="168.732"
            y1="245.135"
            y2="245.135"
          />
          <line
            enableBackground="new"
            fill="none"
            opacity="0.17"
            stroke="#6E6E96"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            x1="69.732"
            x2="58.732"
            y1="245.135"
            y2="245.135"
          />
          <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
          <path
            d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
            enableBackground="new"
            fill="#FF9900"
            opacity="0.24"
          />
          <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
          <ellipse
            cx="67.732"
            cy="140.894"
            enableBackground="new"
            fill="#FF0000"
            opacity="0.18"
            rx="17.372"
            ry="8.106"
          />
          <ellipse
            cx="154.88"
            cy="140.894"
            enableBackground="new"
            fill="#FF0000"
            opacity="0.18"
            rx="17.371"
            ry="8.106"
          />
          <path
            d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
            fill="#FFEFB5"
          />
          <circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" strokeWidth="8" />
        </svg>
        <div className="mt-4">
          <span className="block text-6xl opacity-60 font-semibold mr-2 text-[#0075bf] dark:text-[#f0ffae]">
            <span>4 0 4</span>
          </span>
          <span className="text-2xl">¡Lo sentimos, la página que estás buscando no existe!</span>
        </div>
        <div className="mt-12">
          <RouterLink
            to={"/"}
            className="bg-[#0075bf] text-white px-5 py-3 rounded-2xl hover:bg-[#0075bf]/[0.7] dark:text-black dark:bg-[#e1ff5a] dark:hover:bg-[#f0ffae]"
          >
            Regresar al inicio
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
