<template>
  <div>
    <span
      class="lg:block hidden max-h-screen h-auto lg:py-0 py-4"
      role="button"
      tabindex="0"
    >
      <nav class="bg-white">
        <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
          <div class="flex justify-between text-blue items-center">
            <div class="lg:w-auto w-6/12">
              <a aria-current="page" class="" href="/"
                >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMTQyIDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTEyNC4yMDggNTAuNjQwMUwxMzkuMDUzIDQwLjc0MzZDMTQwLjg0NSAzOS41MjQ1IDE0MS45MjEgMzcuNTE2NSAxNDEuOTIxIDM1LjM2NTFWNi41MzYyNUMxNDEuOTIxIDIuOTUwNTcgMTM5LjA1MyAwLjA4MjAzMTIgMTM1LjQ2NyAwLjA4MjAzMTJINi40NTQyMkMyLjg2ODU0IDAuMDgyMDMxMiAwIDIuOTUwNTcgMCA2LjUzNjI1VjM1Ljg2NzFWMzguNzM1NlY0NS4xODk5QzAgNDguNzc1NSAyLjg2ODU0IDUxLjY0NDEgNi40NTQyMiA1MS42NDQxSDEyMC42MjJDMTIxLjkxMyA1MS43MTU4IDEyMy4yMDQgNTEuMzU3MiAxMjQuMjA4IDUwLjY0MDFaIiBmaWxsPSIjNDZCMkM4Ii8+CjxwYXRoIGQ9Ik0yNC4yMzkyIDEyLjk5MDdMMTkuMjkxIDI4Ljk4MjhWMzguODA3NkgxNi43ODFWMjguOTgyOEwxMi4xMTk2IDEyLjk5MDdIMTQuNzAxM0wxOC4wMDAxIDI0LjQ2NDlMMjEuNTg1OCAxMi45OTA3SDI0LjIzOTJaIiBmaWxsPSIjQzdFOEVGIi8+CjxwYXRoIGQ9Ik0zNy4zNjI4IDE2LjM2MDhWMzUuNDM2NkMzNy4zNjI4IDM3LjE1NzcgMzYuMDcyIDM4LjU5MiAzNC4zNTA4IDM4LjgwNzFDMzQuMjA3NCAzOC44MDcxIDM0LjEzNTcgMzguODA3MSAzMy45OTIzIDM4LjgwNzFIMjkuNTQ2QzI5LjQwMjYgMzguODA3MSAyOS4yNTkyIDM4LjgwNzEgMjkuMTg3NCAzOC44MDcxQzI3LjQ2NjMgMzguNTkyIDI2LjE3NTUgMzcuMTU3NyAyNi4xNzU1IDM1LjQzNjZWMTYuMzYwOEMyNi4xNzU1IDE0LjQ5NjIgMjcuNjgxNSAxMi45OTAyIDI5LjU0NiAxMi45OTAySDMzLjk5MjNDMzUuODU2OCAxMi45OTAyIDM3LjM2MjggMTQuNDk2MiAzNy4zNjI4IDE2LjM2MDhaTTM0Ljg1MjggMTYuMzYwOEMzNC44NTI4IDE1Ljg1ODggMzQuNDIyNSAxNS41MDAyIDMzLjk5MjMgMTUuNTAwMkgyOS41NDZDMjkuMDQ0IDE1LjUwMDIgMjguNjg1NSAxNS45MzA1IDI4LjY4NTUgMTYuMzYwOFYzNS40MzY2QzI4LjY4NTUgMzUuOTM4NiAyOS4xMTU3IDM2LjI5NzEgMjkuNTQ2IDM2LjI5NzFIMzMuOTkyM0MzNC40OTQzIDM2LjI5NzEgMzQuODUyOCAzNS44NjY5IDM0Ljg1MjggMzUuNDM2NlYxNi4zNjA4WiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNTEuMTMxOCAzNS43OTUxQzUxLjEzMTggMzcuMzAxMSA0OS45ODQ0IDM4LjU5MiA0OC40Nzg0IDM4LjgwNzFDNDguMzM0OSAzOC44MDcxIDQ4LjI2MzIgMzguODA3MSA0OC4xMTk4IDM4LjgwNzFINDIuODg0N0M0Mi43NDEzIDM4LjgwNzEgNDIuNjY5NiAzOC44MDcxIDQyLjUyNjEgMzguODA3MUM0MS4wMjAyIDM4LjU5MiAzOS44NzI3IDM3LjM3MjggMzkuODcyNyAzNS43OTUxVjEyLjk5MDJINDIuMzgyN1YzNS43OTUxQzQyLjM4MjcgMzYuMDgyIDQyLjU5NzkgMzYuMjk3MSA0Mi44ODQ3IDM2LjI5NzFINDguMTE5OEM0OC40MDY3IDM2LjI5NzEgNDguNjIxOCAzNi4wODIgNDguNjIxOCAzNS43OTUxVjEyLjk5MDJINTEuMTMxOFYzNS43OTUxWiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNjEuOTYwNSAzNi4yOTc2QzYxLjY3MzYgMzcuNzMxOSA2MC40NTQ1IDM4LjczNTkgNTkuMDIwMiAzOC43MzU5QzU3LjU4NiAzOC43MzU5IDU2LjM2NjggMzcuNzMxOSA1Ni4wOCAzNi4yOTc2VjM2LjIyNTlMNTMuMjgzMSAxMi45OTA3SDU1Ljc5MzFMNTguNTE4MiAzNS44Njc0QzU4LjU4OTkgMzYuMTU0MiA1OC44MDUxIDM2LjIyNTkgNTkuMDIwMiAzNi4yMjU5QzU5LjIzNTQgMzYuMjI1OSA1OS40NTA1IDM2LjE1NDIgNTkuNTIyMiAzNS44Njc0TDYyLjMxOTEgMTIuOTkwN0g2NC44MjlMNjEuOTYwNSAzNi4yOTc2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY5LjQ5MDQgMTUuNTAwMlYyNy41NDgxSDc0LjA4MDFWMzAuMDU4MUg2OS40OTA0VjM2LjI5NzFINzcuMDIwNFYzOC44MDcxSDY2Ljk4MDVWMTIuOTkwMkg3Ni45NDg3VjE1LjUwMDJINjkuNDkwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05MS45MzY4IDM4LjgwNzFIODguOTI0OEw4Mi45NzI2IDI5Ljg0MjlDODIuNjg1NyAyOS45MTQ2IDgyLjM5ODkgMjkuOTg2NCA4Mi4xMTIgMjkuOTg2NFYzOC44MDcxSDc5LjYwMjFWMTYuMzYwOEM3OS42MDIxIDE0LjQ5NjIgODEuMTA4IDEyLjk5MDIgODIuOTcyNiAxMi45OTAySDg3LjQxODhDODkuMjgzNCAxMi45OTAyIDkwLjc4OTQgMTQuNDk2MiA5MC43ODk0IDE2LjM2MDhWMjAuMDg5OUM5MC43ODk0IDIzLjk2MjQgODguNTY2MiAyNy4zMzI5IDg1LjMzOTEgMjguOTgyNEw5MS45MzY4IDM4LjgwNzFaTTgyLjExMiAyNy40NzY0Qzg1LjYyNiAyNi45MDI3IDg4LjM1MTEgMjMuODE5IDg4LjM1MTEgMjAuMDg5OVYxNi4zNjA4Qzg4LjM1MTEgMTUuODU4OCA4Ny45MjA4IDE1LjUwMDIgODcuNDkwNSAxNS41MDAySDgzLjA0NDNDODIuNTQyMyAxNS41MDAyIDgyLjE4MzcgMTUuOTMwNSA4Mi4xODM3IDE2LjM2MDhMODIuMTEyIDI3LjQ3NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTQuNDQ2OCAxMi45OTAySDk2Ljk1NjhWMzguODA3MUg5NC40NDY4VjEyLjk5MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAyLjQwNyAxNS41MDAyVjI3LjU0ODFIMTA2Ljk5N1YzMC4wNTgxSDEwMi40MDdWMzguODA3MUg5OS44OTcxVjEyLjk5MDJIMTA5Ljg2NVYxNS41MDAySDEwMi40MDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjM0NyAxMi45OTAyTDExOC4zOTkgMjguOTgyNFYzOC44MDcxSDExNS44ODlWMjguOTgyNEwxMTEuMjI4IDEyLjk5MDJIMTEzLjgwOUwxMTcuMTA4IDI0LjQ2NDRMMTIwLjY5NCAxMi45OTAySDEyMy4zNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0MS45OTMiIGhlaWdodD0iNTEuNjMzOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wODIwMzEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                  alt="Youverify"
                  class="sm:w-32 w-24"
              /></a>
            </div>
            <ul class="flex">
              <li class="hoverable hover:bg-blue-800 hover:bg-blue-800">
                <a
                  href="#"
                  class="
                    inline-flex
                    cursor-pointer
                    items-center
                    mx-8
                    py-8
                    hover:text-blue-200
                    false
                  "
                  >Products
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 transform rotate rotate-180"
                  >
                    <path
                      d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                      fill="#46B2C8"
                    ></path>
                  </svg>
                </a>
                <div class="mega-menu sm:mb-0 shadow-xl">
                  <div
                    class="
                      container
                      mx-auto
                      w-full
                      flex flex-wrap
                      justify-between
                      mx-2
                      border-t-2
                    "
                  >
                    <div class="w-full text-white">
                      <div>
                        <div class="pt-10 pb-20">
                          <div class="flex">
                            <div class="w-9/12 grid grid-cols-3 gap-12 mt-8">
                              <a href="/product/vforms"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <svg
                                        width="39"
                                        height="28"
                                        viewBox="0 0 39 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.82935 28H36.041C37.4696 28 38.6277 26.8482 38.6277 25.4196V6.48347C38.6277 5.89387 38.4263 5.32293 38.0568 4.86346L34.9224 0.965702C34.4314 0.355126 33.6927 0 32.9092 0H9.82358C8.395 0 7.24268 1.1581 7.24268 2.58668V25.4133C7.24268 26.8419 8.40077 28 9.82935 28Z"
                                          fill="#115766"
                                        ></path>
                                        <path
                                          d="M25.7897 7.8623C25.606 7.8623 25.457 8.00797 25.457 8.18757C25.457 8.36716 25.606 8.51283 25.7897 8.51283H34.1448C34.3285 8.51283 34.4775 8.36716 34.4775 8.18757C34.4775 8.00797 34.3285 7.8623 34.1448 7.8623L25.7897 7.8623Z"
                                          fill="#46B2C8"
                                        ></path>
                                        <path
                                          d="M25.7897 13.2993C25.606 13.2993 25.457 13.445 25.457 13.6246C25.457 13.8042 25.606 13.9498 25.7897 13.9498H34.1448C34.3285 13.9498 34.4775 13.8042 34.4775 13.6246C34.4775 13.445 34.3285 13.2993 34.1448 13.2993L25.7897 13.2993Z"
                                          fill="#46B2C8"
                                        ></path>
                                        <path
                                          d="M25.7897 19.748C25.606 19.748 25.457 19.8937 25.457 20.0733C25.457 20.2529 25.606 20.3986 25.7897 20.3986H34.1448C34.3285 20.3986 34.4775 20.2529 34.4775 20.0733C34.4775 19.8937 34.3285 19.748 34.1448 19.748L25.7897 19.748Z"
                                          fill="#46B2C8"
                                        ></path>
                                        <path
                                          d="M20.8267 9.30024C20.8924 9.36404 20.9794 9.39657 21.0667 9.39657C21.1408 9.39657 21.2152 9.37315 21.2772 9.32566L23.5848 7.55478C23.7307 7.44283 23.7547 7.23819 23.6385 7.09767C23.5223 6.95722 23.3098 6.93401 23.1638 7.04601L21.0932 8.63497L20.4864 8.04516C20.3551 7.91755 20.1412 7.91663 20.0087 8.04305C19.8762 8.16952 19.8752 8.37541 20.0065 8.50302L20.8267 9.30024Z"
                                          fill="#C2E2E9"
                                        ></path>
                                        <path
                                          d="M23.6377 12.5894C23.5216 12.4489 23.3091 12.4257 23.1631 12.5377L21.0924 14.1267L20.4856 13.5369C20.3543 13.4093 20.1405 13.4084 20.008 13.5348C19.8755 13.6613 19.8745 13.8672 20.0058 13.9948L20.826 14.7919C20.8917 14.8557 20.9786 14.8882 21.066 14.8882C21.1401 14.8882 21.2145 14.8648 21.2764 14.8173L23.5841 13.0465C23.7299 12.9345 23.754 12.7299 23.6377 12.5894Z"
                                          fill="#C2E2E9"
                                        ></path>
                                        <path
                                          d="M23.1633 18.9345L21.0926 20.5209L20.4856 19.931C20.3543 19.8034 20.1405 19.8025 20.008 19.9289C19.8755 20.0553 19.8745 20.2612 20.0058 20.3888L20.826 21.1859C20.8917 21.2498 20.9786 21.2822 21.066 21.2822C21.14 21.2822 21.2143 21.2589 21.2762 21.2115L23.5839 19.4435C23.7298 19.3317 23.754 19.1271 23.6379 18.9865C23.5217 18.8459 23.3093 18.8227 23.1633 18.9345Z"
                                          fill="#C2E2E9"
                                        ></path>
                                        <path
                                          d="M14.3063 21.4964H1.29329C0.578995 21.4964 -5.34058e-05 20.9198 -5.34058e-05 20.2055V9.83365C-5.34058e-05 9.55624 0.0891418 9.28653 0.254365 9.06369L1.83981 6.92538C2.08376 6.59636 2.46765 6.40234 2.87724 6.40234H14.3089C15.0232 6.40234 15.5996 6.98139 15.5996 7.69568V20.2031C15.5996 20.9174 15.0206 21.4964 14.3063 21.4964Z"
                                          fill="#46B2C8"
                                        ></path>
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M12.0158 11.0904C12.2776 11.3425 12.2776 11.7512 12.0158 12.0033L7.02626 16.8083C6.76448 17.0604 6.34007 17.0604 6.0783 16.8083L3.58354 14.4058C3.32176 14.1538 3.32176 13.745 3.58354 13.4929C3.84531 13.2409 4.26972 13.2409 4.53149 13.4929L6.55228 15.439L11.0678 11.0904C11.3296 10.8383 11.754 10.8383 12.0158 11.0904Z"
                                          fill="#C2E2E9"
                                        ></path>
                                      </svg>
                                    </span>
                                  </header>
                                  <div>
                                    <h4>vForms</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Discover the no-code tool to manage and
                                      verify data
                                    </p>
                                  </div>
                                </section></a
                              >
                              <a href="/product/youid"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <svg
                                        width="29"
                                        height="28"
                                        viewBox="0 0 29 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M28.0892 18.1119V2.36365C28.0892 1.05874 27.0505 0 25.7703 0H18.2645H2.31886C1.03868 0 0 1.05874 0 2.36365V25.6363C0 26.9413 1.03868 28 2.31886 28H17.5699C18.1427 28 18.6962 27.7843 19.1215 27.3922L27.3219 19.8677C27.8092 19.4211 28.0892 18.7829 28.0892 18.1119Z"
                                          fill="#46B2C8"
                                        ></path>
                                        <path
                                          d="M14.394 6.01025H12.7676C11.9769 6.01025 11.3357 6.64949 11.3357 7.43788V20.4506C11.3357 21.1729 11.8764 21.7716 12.5774 21.8611C12.6372 21.8697 12.7035 21.8761 12.7655 21.8761H14.3919C14.4966 21.8761 14.5992 21.8718 14.7018 21.8611C16.6894 21.7035 18.2623 20.0393 18.2623 18.0172V9.8691C18.2645 7.74258 16.5269 6.01025 14.394 6.01025ZM16.7257 18.0172C16.7257 19.2978 15.6806 20.3419 14.394 20.3419H12.8745V7.54442H14.394C15.6806 7.54442 16.7257 8.5885 16.7257 9.8691V18.0172Z"
                                          fill="#C2E2E9"
                                        ></path>
                                        <path
                                          d="M9.24123 6.20215H7.70459V22.053H9.24123V6.20215Z"
                                          fill="#C2E2E9"
                                        ></path>
                                      </svg>
                                    </span>
                                  </header>
                                  <div>
                                    <h4>YOUID</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Read more about storing and managing your
                                      personal data
                                    </p>
                                  </div>
                                </section></a
                              >
                              <a href="/product/youid-for-business"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <svg
                                        width="29"
                                        height="28"
                                        viewBox="0 0 29 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M28.0892 9.88812V25.6363C28.0892 26.9413 27.0505 28 25.7703 28H18.2645H2.31886C1.03868 28 0 26.9413 0 25.6363V2.36365C0 1.05874 1.03868 2.82319e-07 2.31886 2.82319e-07H17.5699C18.1427 2.82319e-07 18.6962 0.21567 19.1215 0.607796L27.3219 8.13227C27.8092 8.57885 28.0892 9.21715 28.0892 9.88812Z"
                                          fill="#115766"
                                        ></path>
                                        <path
                                          d="M14.0448 14C9.77041 14 6.14484 16.7779 4.87497 20.6269C4.34236 22.2412 5.76892 23.6539 7.46882 23.6539H20.6208C22.3207 23.6539 23.7472 22.2412 23.2146 20.6269C21.9448 16.7779 18.3192 14 14.0448 14Z"
                                          fill="#46B2C8"
                                        ></path>
                                        <path
                                          d="M11.4464 12.621H16.6433C17.4932 12.621 18.1823 11.932 18.1823 11.082V7.04205C18.1823 6.6348 18.0208 6.24414 17.7334 5.95568L16.5804 4.7988C16.2916 4.50905 15.8994 4.34619 15.4903 4.34619H11.4464C10.5965 4.34619 9.90747 5.03522 9.90747 5.88517V11.082C9.90747 11.932 10.5965 12.621 11.4464 12.621Z"
                                          fill="#C2E2E9"
                                        ></path>
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M14.0448 5.53271C14.178 5.53271 14.2861 5.64077 14.2861 5.77406V6.3602H15.6997C15.833 6.3602 15.9411 6.46825 15.9411 6.60155C15.9411 6.73484 15.833 6.84289 15.6997 6.84289H14.2861V8.29099H14.7343C15.4008 8.29099 15.9411 8.83127 15.9411 9.49774C15.9411 10.1642 15.4008 10.7045 14.7343 10.7045H14.2861V11.2906C14.2861 11.4239 14.178 11.532 14.0448 11.532C13.9115 11.532 13.8034 11.4239 13.8034 11.2906V10.7045H12.3898C12.2565 10.7045 12.1484 10.5964 12.1484 10.4631C12.1484 10.3298 12.2565 10.2218 12.3898 10.2218H13.8034V8.77369H13.3552C12.6887 8.77369 12.1484 8.23341 12.1484 7.56694C12.1484 6.90047 12.6887 6.3602 13.3552 6.3602H13.8034V5.77406C13.8034 5.64077 13.9115 5.53271 14.0448 5.53271ZM13.8034 6.84289H13.3552C12.9553 6.84289 12.6311 7.16706 12.6311 7.56694C12.6311 7.96682 12.9553 8.29099 13.3552 8.29099H13.8034V6.84289ZM14.2861 8.77369V10.2218H14.7343C15.1342 10.2218 15.4584 9.89762 15.4584 9.49774C15.4584 9.09785 15.1342 8.77369 14.7343 8.77369H14.2861Z"
                                          fill="#46B2C8"
                                        ></path>
                                      </svg>
                                    </span>
                                  </header>
                                  <div>
                                    <h4>YOUID for Business</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Find out how to sell your products online
                                      in a secure way
                                    </p>
                                  </div>
                                </section></a
                              >
                              <a href="/product/data-sources"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <span>
                                        <LazyImage
                                          src="~/assets/images/developer/data-source.png"
                                          alt="data-source-image"
                                          class="h-8 w-10"
                                        />
                                      </span>
                                    </span>
                                  </header>
                                  <div>
                                    <h4>Data Sources</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Discover our over 300+ data sources
                                    </p>
                                  </div>
                                </section></a
                              >
                            </div>
                            <div class="w-3/12 text-right flex justify-end">
                              <div>
                                <img
                                  width="171"
                                  height="206"
                                  src="~/assets/images/illustrations/submenu-products.png"
                                  alt="Solutions"
                                /><noscript></noscript>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="hoverable hover:bg-blue-800 hover:bg-blue-800">
                <a
                  href="#"
                  class="
                    inline-flex
                    cursor-pointer
                    items-center
                    mx-8
                    py-8
                    hover:text-blue-200
                    false
                  "
                  >Use Cases<svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 transform rotate rotate-180"
                  >
                    <path
                      d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                      fill="#46B2C8"
                    ></path>
                  </svg>
                </a>
                <div class="mega-menu sm:mb-0 shadow-xl">
                  <div
                    class="
                      container
                      mx-auto
                      w-full
                      flex flex-wrap
                      justify-between
                      mx-2
                      border-t-2
                    "
                  >
                    <div class="w-full text-white">
                      <div>
                        <div class="pt-10 pb-20">
                          <div class="flex">
                            <div class="w-9/12 grid grid-cols-3 gap-12 mt-8">
                              <NuxtLink
                                class="link-header"
                                v-for="industry in industries"
                                :key="industry.name"
                                v-show="industry.visible === true"
                                :to="`/use-case/${industry.slug}`"
                              >
                                <section class="flex text-left">
                                  <header class="w-14 mr-3">
                                    <span>
                                      <img
                                        :src="industry.icons.url"
                                        class="h-7 w-7"
                                        alt=""
                                      />
                                    </span>
                                  </header>
                                  <div>
                                    <h4>{{ industry.name }}</h4>
                                    <h4
                                      v-show="industry.visible === false"
                                      class="
                                        coming-soon
                                        text-xs
                                        mt-2
                                        text-red-500
                                      "
                                    >
                                      Coming Soon
                                    </h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      {{ industry.teaser }}
                                    </p>
                                  </div>
                                </section>
                              </NuxtLink>
                              <NuxtLink
                                class="link-header"
                                v-for="industry in industries"
                                :key="industry.id"
                                v-show="industry.visible === false"
                                to="#"
                              >
                                <section class="flex text-left">
                                  <header class="w-14 mr-3">
                                    <span>
                                      <img
                                        :src="industry.icons.url"
                                        class="h-7 w-7"
                                        alt=""
                                      />
                                    </span>
                                  </header>
                                  <div>
                                    <h4>{{ industry.name }}</h4>
                                    <h4
                                      class="
                                        coming-soon
                                        text-xs
                                        mt-2
                                        text-red-500
                                      "
                                    >
                                      Coming Soon
                                    </h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      {{ industry.teaser }}
                                    </p>
                                  </div>
                                </section>
                              </NuxtLink>
                            </div>
                            <div class="w-3/12 text-right flex justify-end">
                              <div>
                                <img
                                  width="171"
                                  height="206"
                                  src="~/assets/images/illustrations/lady-hugging-sim-smiling.png"
                                  alt="Solutions"
                                /><noscript></noscript>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="hoverable hover:bg-blue-800 hover:bg-blue-800">
                <a
                  href="#"
                  class="
                    inline-flex
                    cursor-pointer
                    items-center
                    mx-8
                    py-8
                    hover:text-blue-200
                    false
                  "
                  >Developer<svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 transform rotate rotate-180"
                  >
                    <path
                      d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                      fill="#46B2C8"
                    ></path>
                  </svg>
                </a>
                <div class="mega-menu sm:mb-0 shadow-xl">
                  <div
                    class="
                      container
                      mx-auto
                      w-full
                      flex flex-wrap
                      justify-between
                      mx-2
                      border-t-2
                    "
                  >
                    <div class="w-full text-white">
                      <div>
                        <div class="pt-10 pb-20">
                          <div class="flex">
                            <div class="w-9/12 grid grid-cols-3 gap-12 mt-8">
                              <a href="https://doc.youverify.co/"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <LazyImage
                                        src="~/assets/images/developer/api-doc.png"
                                        alt="api-doc-image"
                                      />
                                    </span>
                                  </header>
                                  <div>
                                    <h4>API Doc</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Meet the superefficient verification tool
                                      your team needs
                                    </p>
                                  </div>
                                </section></a
                              >
                              <a
                                href="https://www.npmjs.com/package/youverify-web-sdk"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <LazyImage
                                        src="~/assets/images/developer/tools.png"
                                        alt="tools-image"
                                      />
                                    </span>
                                  </header>
                                  <div>
                                    <h4>SDKs</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Discover the no-code tool to manage and
                                      verify data
                                    </p>
                                  </div>
                                </section></a
                              >
                              <!-- <a href="https://status.youverify.co/"
                                ><section class="flex text-left">
                                  <header class="w-14 mr-5">
                                    <span>
                                      <LazyImage
                                        src="~/assets/images/developer/api-status.png"
                                        alt="api-status-image"
                                      />
                                    </span>
                                  </header>
                                  <div>
                                    <h4>API Status</h4>
                                    <p
                                      class="
                                        text-sm
                                        mt-3
                                        text-grey
                                        leading-loose
                                      "
                                    >
                                      Read more about storing and managing your
                                      personal data
                                    </p>
                                  </div>
                                </section></a
                              > -->
                            </div>
                            <div class="w-3/12 text-right flex justify-end">
                              <div>
                                <img
                                  width="171"
                                  height="206"
                                  src="../../assets/images/illustrations/bridging-gap.png"
                                  alt="Solutions"
                                /><noscript></noscript>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <a href="/about-us">
                <li
                  class="
                    inline-flex
                    cursor-pointer
                    items-center
                    mx-8
                    py-8
                    hover:text-blue-200
                    falsefalse
                  "
                >
                  About us
                </li>
              </a>
              <a href="/blogs">
                <li
                  class="
                    inline-flex
                    cursor-pointer
                    items-center
                    mx-8
                    py-8
                    hover:text-blue-200
                    falsefalse
                  "
                >
                  Blog
                </li>
              </a>
            </ul>
            <div class="lg:block hidden">
              <AppButton
                buttonText="Sign in"
                buttoncolor="bluebutton"
                href="https://os.youverify.co/auth/login"
              />
            </div>
          </div>
        </section>
      </nav>
      <div class="react-reveal" style="opacity: 0">
        <nav class="bg-white absolute w-full hidden"></nav>
        <span
          aria-label="button"
          class="h-screen w-full bg-opacity-70 bg-black hidden"
          role="button"
          tabindex="0"
        ></span></div
    ></span>
    <nav
      class="
        transform
        w-full
        lg:hidden
        overflow-scroll
        duration-700
        right-0
        min-h-auto
      "
    >
      <section class="bg-white max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="flex justify-between text-blue py-6 items-center false">
          <div class="lg:w-auto w-6/12">
            <a aria-current="page" class="" href="/"
              ><img
                src="~/assets/images/logos/youverify.svg"
                alt="Youverify"
                class="sm:w-32 w-24"
            /></a>
          </div>
          <div class="lg:hidden block w-6/12 text-right">
            <button @click="toggleMobileMenu" class="inline-block">
              <svg
                v-if="!showmobileMenu"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.25 8H2"
                  stroke="#46B2C8"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.25 2H2"
                  stroke="#46B2C8"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.25 14H2"
                  stroke="#46B2C8"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                v-else
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3189 1.68109L2 16"
                  stroke="#46B2C8"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.3189 16.3189L2 2"
                  stroke="#46B2C8"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div
            :class="{ hidden: !showmobileMenu }"
            class="
              border-black border-t
              flex
              justify-between
              h-screen
              flex-wrap
              pt-4
            "
          >
            <ul class="block w-full">
              <a
                @click="toggleSubMenuShow('solution')"
                class="w-full text-left text-blue"
                href="#"
                ><li class="text-base leading-loose mb-4 flex items-center">
                  Use Cases<svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 transform rotate rotate-180"
                  >
                    <path
                      d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                      fill="#46B2C8"
                    ></path>
                  </svg></li
              ></a>
              <div style="" v-if="subMenuShowSolution">
                <ul class="react-reveal pb-4">
                  <div v-for="useCase in industries || []" :key="useCase.name">
                    <NuxtLink :to="`/use-case/${useCase.slug}`">
                      <li class="px-6 w-full mb-4">
                        <p class="text-sm my-2 text-blue font-medium">
                          {{ useCase.name }}
                        </p>
                      </li>
                    </NuxtLink>
                  </div>
                </ul>
              </div>
              <a
                @click="toggleSubMenuShow('product')"
                class="w-full text-left text-blue"
                href="#"
                ><li class="text-base leading-loose mb-4 flex items-center">
                  Products<svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 transform rotate rotate-180"
                  >
                    <path
                      d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                      fill="#46B2C8"
                    ></path>
                  </svg></li
              ></a>

              <div style="" v-if="subMenuShowProduct">
                <ul class="react-reveal pb-4" style="">
                  <a href="/product/vforms"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">vForms</p>
                      <p class="text-grey text-xs leading-loose">
                        Discover the no-code tool to manage and verify data
                      </p>
                    </li></a
                  ><a href="/product/youid"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">YOUID</p>
                      <p class="text-grey text-xs leading-loose">
                        Read more about storing and managing your personal data
                      </p>
                    </li></a
                  ><a href="/product/youid-for-business"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">
                        YOUID for Business
                      </p>
                      <p class="text-grey text-xs leading-loose">
                        Find out how to sell your products online in a secure
                        way
                      </p>
                    </li></a
                  >
                  <a href="/product/data-sources"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">
                        Data Sources
                      </p>
                      <p class="text-grey text-xs leading-loose">
                        Discover our over 300+ data sources
                      </p>
                    </li></a
                  >
                </ul>
              </div>
              <a
                @click="toggleSubMenuShow('developer')"
                class="w-full text-left text-blue"
                href="#"
                ><li class="text-base leading-loose mb-4 flex items-center">
                  Developer<svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 transform rotate rotate-180"
                  >
                    <path
                      d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                      fill="#46B2C8"
                    ></path>
                  </svg></li
              ></a>

              <div style="" v-if="subMenuShowDeveloper">
                <ul class="react-reveal pb-4" style="">
                  <a href="https://doc.youverify.co/"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">API Docs</p>
                      <p class="text-grey text-xs leading-loose">
                        Discover the no-code tool to manage and verify data
                      </p>
                    </li></a
                  ><a href="https://doc.youverify.co/"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">SDKs</p>
                      <p class="text-grey text-xs leading-loose">
                        Read more about storing and managing your personal data
                      </p>
                    </li></a
                  >
                  <!-- <a href="https://status.youverify.co/"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">
                        API Status
                      </p>
                      <p class="text-grey text-xs leading-loose">
                        Find out how to sell your products online in a secure
                        way
                      </p>
                    </li></a
                  > -->
                </ul>
              </div>
              <a href="/about-us">
                <li
                  class="
                    text-base text-blue
                    leading-loose
                    mb-4
                    flex
                    items-center
                  "
                >
                  About us
                </li></a
              ><a href="/blogs">
                <li
                  class="
                    text-base text-blue
                    leading-loose
                    mb-4
                    flex
                    items-center
                  "
                >
                  Blog
                </li></a
              >
            </ul>
            <div class="block w-full">
              <a
                href="https://os.youverify.co/auth/login"
                target="_blank"
                rel="noreferrer"
                ><button
                  class="
                    bg-blue
                    text-white
                    rounded
                    py-2
                    sm:mb-0
                    mb-4
                    px-8
                    w-full
                  "
                >
                  Sign in
                </button></a
              >
            </div>
          </div>
        </div>
      </section>
    </nav>
  </div>
</template>

<script>
import MegaMenu from "./menu/MegaMenu.vue";
import { mapState } from "vuex";
export default {
  name: "headerComponent",
  components: {
    MegaMenu,
  },
  data() {
    return {
      showmobileMenu: false,
      subMenuShowSolution: false,
      subMenuShowProduct: false,
      subMenuShowDeveloper: false,
    };
  },
  methods: {
    async getAllIndustries() {
      await this.$store.dispatch("industries/getIndustries");
    },
    toggleMobileMenu(e) {
      this.showmobileMenu = !this.showmobileMenu;
    },
    toggleSubMenuShow(param) {
      if (param === "solution") {
        this.subMenuShowSolution = !this.subMenuShowSolution;
        this.subMenuShowProduct = false;
        this.subMenuShowDeveloper = false;
      } else if (param === "product") {
        this.subMenuShowProduct = !this.subMenuShowProduct;
        this.subMenuShowSolution = false;
        this.subMenuShowDeveloper = false;
      } else if (param === "developer") {
        this.subMenuShowDeveloper = !this.subMenuShowDeveloper;
        this.subMenuShowSolution = false;
        this.subMenuShowProduct = false;
      } else {
        return;
      }
    },
  },
  mounted() {
    this.getAllIndustries();
  },
  computed: {
    ...mapState({
      industries: (state) => state.industries.industries,
    }),
  },
};
</script>

<style scoped>
.mega-menu {
  display: none;
  left: 0;
  background: white;
  position: absolute;
  text-align: left;
  width: 100%;
}
.hoverable {
  position: static;
}

.hoverable:hover .mega-menu {
  display: block;
}

.coming-soon {
  display: none;
  transition: all 0.5s;
}

.link-header:hover .coming-soon {
  display: block;
}
</style>
