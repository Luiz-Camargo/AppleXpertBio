import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-64"
        style={{
          backgroundImage:
            "url(/iphone-14-model-unselect-gallery-1-202209.jpg)",
        }}
      >
      </div>

      <div className="relative">
        <Image
          src="/Foto_nossa-removebg-preview.png"
          width={5000}
          height={5000}
          quality={100}
          alt="Picture of the author"
          className="rounded-full shadow-2xl h-44 w-44 border-4 border-[#d9d9d9] absolute -top-16 left-1/2 transform -translate-x-1/2"
        />
      </div>

      {/* Resto do conteúdo do seu site */}
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center">

          {/* Botão com link */}

          <div className="space-y-12 mx-8 py-24">

            <h1 className="text-lg font-bold text-white pt-10 flex justify-center text-center">@AppleXpert_ </h1>

            <a className="text-lg text-white flex justify-center text-center items-center">Eleve sua experiência Apple conosco!</a>


            <a href="https://api.whatsapp.com/send?phone=5515997998597&text=Olá.%20Gostaria%20de%20saber%20mais%20sobre%20os%20aparelhos!" className="relative inline-flex w-full h-full items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#0e3836] bg-[#d9d9d9] transition duration-300 ease-out border-2 rounded-xl shadow-md group">
              <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"

                fill="#0e3836"
                version="1.1"
                viewBox="0 0 308 308"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 011.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z"></path>
                  <path d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 004.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 00-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 00-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z"></path>
                </g>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-[#0e3836] group-hover:translate-x-0 ease">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728">
                  <path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#d9d9d9" />
                </svg>
              </span>
              <span className="font-bold absolute flex items-center justify-center w-full h-full text-[#0e3836] transition-all duration-300 transform group-hover:translate-x-full ease">ATENDIMENTO NO WHATSAPP</span>
              <span className="relative invisible">ATENDIMENTO PELO WHATSAPP</span>
            </a>



            <a href="https://www.instagram.com/applexpert_/" className="relative inline-flex w-full h-full items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#0e3836] bg-[#d9d9d9] transition duration-300 ease-out border-2 rounded-xl shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-[#0e3836] group-hover:translate-x-0 ease">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728">
                  <path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#d9d9d9" />
                </svg>
              </span>
              <span className="font-bold absolute flex items-center justify-center w-full h-full text-[#0e3836] transition-all duration-300 transform group-hover:translate-x-full ease">SIGA NOSSO INSTAGRAM</span>
              <span className="relative invisible">SIGA NOSSO INSTAGRAM</span>
            </a>

            <a href="#_" className="relative inline-flex w-full h-full items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#0e3836] bg-[#d9d9d9] transition duration-300 ease-out border-2 rounded-xl shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-[#0e3836] group-hover:translate-x-0 ease">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728">
                  <path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#d9d9d9" />
                </svg>
              </span>
              <span className="font-bold absolute flex items-center justify-center w-full h-full text-[#0e3836] transition-all duration-300 transform group-hover:translate-x-full ease">LISTA DE IPHONES LACRADOS</span>
              <span className="relative invisible">LISTA DE IPHONES LACRADOS</span>
            </a>

            <a href="#_" className="relative inline-flex w-full h-full items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#0e3836] bg-[#d9d9d9] transition duration-300 ease-out border-2 rounded-xl shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-[#0e3836] group-hover:translate-x-0 ease">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728">
                  <path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#d9d9d9" />
                </svg>
              </span>
              <span className="font-bold absolute flex items-center justify-center w-full h-full text-[#0e3836] transition-all duration-300 transform group-hover:translate-x-full ease">LISTA DE IPHONES SEMINOVOS</span>
              <span className="relative invisible">LISTA DE IPHONES SEMINOVOS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
