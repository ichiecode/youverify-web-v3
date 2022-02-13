<template>
  <div>
    <span
      class="lg:block hidden max-h-screen h-auto fixed w-full z-40 lg:py-0 py-4"
      role="button"
      tabindex="0"
    >
      <nav class="bg-white">
        <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
          <div class="flex justify-between text-blue items-center">
            <div class="lg:w-auto w-6/12">
              <a aria-current="page" class="" href="/"
                ><img
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
                  >Products<svg
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
                                      <svg
                                        width="29"
                                        height="28"
                                        viewBox="0 0 29 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <mask
                                          id="mask0"
                                          mask-type="alpha"
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="29"
                                          height="28"
                                        >
                                          <path
                                            d="M3.6849 28H24.3949C26.43 28 28.0798 26.3555 28.0798 24.3203V6.75837C28.0798 5.98605 27.8372 5.23613 27.3861 4.6092L25.1728 1.53286C24.4804 0.570458 23.368 0 22.1824 0H3.68473C1.64961 0 0 1.64979 0 3.6849V24.3151C0 26.3502 1.64978 28 3.6849 28Z"
                                            fill="#115766"
                                          ></path>
                                        </mask>
                                        <g mask="url(#mask0)">
                                          <path
                                            d="M18.4416 4.3811L19.4565 -2.64794L15.7866 -3.17938L-6.5308 -6.40723L-8.01392 3.86014L14.3767 7.09848L18.4416 4.3811Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M33.9124 2.82522L32.237 -4.07397L28.6326 -3.19864L17.0417 -0.383789L19.4901 9.69789L31.1521 6.86575L33.9124 2.82522Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M49.2341 7.21626L48.0622 0.213379L44.4055 0.825974L25.771 3.94913L27.4843 14.1799L46.1894 11.0462L49.2341 7.21626Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M41.4601 18.9262L41.6197 11.8265L37.9132 11.7427L15.7396 11.2427L15.5068 21.6148L37.7536 22.1174L41.4601 18.9262Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M17.7774 9.98879L16.2132 3.06445L12.5983 3.88124L-13.8677 9.86836L-11.5841 19.9865L14.9524 13.9837L17.7774 9.98879Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M13.7101 21.2142V14.1118H10.001H-1.92676V24.4865H10.0742L13.7101 21.2142Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M15.313 29.3169L13.7488 22.3926L10.1312 23.2094L-16.3347 29.1965L-14.0486 39.3146L12.488 33.3118L15.313 29.3169Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M40.8872 32.983L41.9021 25.9566L38.2349 25.4251L15.9175 22.1973L14.4343 32.4647L36.8224 35.703L40.8872 32.983Z"
                                            fill="#46B2C8"
                                          ></path>
                                        </g>
                                      </svg>
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
                              <a href="https://docs.youverify.co/"
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
                                        <mask
                                          id="mask0"
                                          mask-type="alpha"
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="29"
                                          height="28"
                                        >
                                          <path
                                            d="M3.6849 28H24.3949C26.43 28 28.0798 26.3555 28.0798 24.3203V6.75837C28.0798 5.98605 27.8372 5.23613 27.3861 4.6092L25.1728 1.53286C24.4804 0.570458 23.368 0 22.1824 0H3.68473C1.64961 0 0 1.64979 0 3.6849V24.3151C0 26.3502 1.64978 28 3.6849 28Z"
                                            fill="#115766"
                                          ></path>
                                        </mask>
                                        <g mask="url(#mask0)">
                                          <path
                                            d="M18.4416 4.3811L19.4565 -2.64794L15.7866 -3.17938L-6.5308 -6.40723L-8.01392 3.86014L14.3767 7.09848L18.4416 4.3811Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M33.9124 2.82522L32.237 -4.07397L28.6326 -3.19864L17.0417 -0.383789L19.4901 9.69789L31.1521 6.86575L33.9124 2.82522Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M49.2341 7.21626L48.0622 0.213379L44.4055 0.825974L25.771 3.94913L27.4843 14.1799L46.1894 11.0462L49.2341 7.21626Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M41.4601 18.9262L41.6197 11.8265L37.9132 11.7427L15.7396 11.2427L15.5068 21.6148L37.7536 22.1174L41.4601 18.9262Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M17.7774 9.98879L16.2132 3.06445L12.5983 3.88124L-13.8677 9.86836L-11.5841 19.9865L14.9524 13.9837L17.7774 9.98879Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M13.7101 21.2142V14.1118H10.001H-1.92676V24.4865H10.0742L13.7101 21.2142Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M15.313 29.3169L13.7488 22.3926L10.1312 23.2094L-16.3347 29.1965L-14.0486 39.3146L12.488 33.3118L15.313 29.3169Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M40.8872 32.983L41.9021 25.9566L38.2349 25.4251L15.9175 22.1973L14.4343 32.4647L36.8224 35.703L40.8872 32.983Z"
                                            fill="#46B2C8"
                                          ></path>
                                        </g>
                                      </svg>
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
                              <a href="https://doc.youverify.co/"
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
                              <a href="https://status.youverify.co/"
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
                                        <mask
                                          id="mask0"
                                          mask-type="alpha"
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="29"
                                          height="28"
                                        >
                                          <path
                                            d="M3.6849 28H24.3949C26.43 28 28.0798 26.3555 28.0798 24.3203V6.75837C28.0798 5.98605 27.8372 5.23613 27.3861 4.6092L25.1728 1.53286C24.4804 0.570458 23.368 0 22.1824 0H3.68473C1.64961 0 0 1.64979 0 3.6849V24.3151C0 26.3502 1.64978 28 3.6849 28Z"
                                            fill="#115766"
                                          ></path>
                                        </mask>
                                        <g mask="url(#mask0)">
                                          <path
                                            d="M18.4416 4.3811L19.4565 -2.64794L15.7866 -3.17938L-6.5308 -6.40723L-8.01392 3.86014L14.3767 7.09848L18.4416 4.3811Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M33.9124 2.82522L32.237 -4.07397L28.6326 -3.19864L17.0417 -0.383789L19.4901 9.69789L31.1521 6.86575L33.9124 2.82522Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M49.2341 7.21626L48.0622 0.213379L44.4055 0.825974L25.771 3.94913L27.4843 14.1799L46.1894 11.0462L49.2341 7.21626Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M41.4601 18.9262L41.6197 11.8265L37.9132 11.7427L15.7396 11.2427L15.5068 21.6148L37.7536 22.1174L41.4601 18.9262Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M17.7774 9.98879L16.2132 3.06445L12.5983 3.88124L-13.8677 9.86836L-11.5841 19.9865L14.9524 13.9837L17.7774 9.98879Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M13.7101 21.2142V14.1118H10.001H-1.92676V24.4865H10.0742L13.7101 21.2142Z"
                                            fill="#46B2C8"
                                          ></path>
                                          <path
                                            d="M15.313 29.3169L13.7488 22.3926L10.1312 23.2094L-16.3347 29.1965L-14.0486 39.3146L12.488 33.3118L15.313 29.3169Z"
                                            fill="#115766"
                                          ></path>
                                          <path
                                            d="M40.8872 32.983L41.9021 25.9566L38.2349 25.4251L15.9175 22.1973L14.4343 32.4647L36.8224 35.703L40.8872 32.983Z"
                                            fill="#46B2C8"
                                          ></path>
                                        </g>
                                      </svg>
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
                              >
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
              <!-- <a
                href="https://app.youverify.co/#/auth/login"
                target="_blank"
                rel="noreferrer"
                ><button
                  class="bg-blue text-white rounded py-2 sm:mb-0 mb-4 px-8"
                >
                  Sign in
                </button></a
              > -->
			  <AppButton buttonText="Sign in" buttoncolor="bluebutton" href="https://app.youverify.co/#/auth/login" />
			  
            </div>
          </div>
        </section>
      </nav>
      <div class="react-reveal" style="opacity: 0">
        <nav class="bg-white absolute w-full hidden">
          <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
            <hr />
            <div class="pt-10 pb-20">
              <div class="flex">
                <div class="w-9/12 grid grid-cols-3 gap-12 mt-8">
                  <a href="/solution/individuals"
                    ><section class="flex text-left">
                      <header class="w-14 mr-5">
                        <span
                          ><svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5124 14.5122C7.03391 14.5122 0.876657 20.1689 0.0858471 27.4369C-0.00914831 28.31 0.71194 29.0246 1.59016 29.0246H27.4345C28.3128 29.0246 29.0339 28.31 28.9389 27.4369C28.1481 20.1689 21.9908 14.5122 14.5124 14.5122Z"
                              fill="#115766"
                            ></path>
                            <path
                              d="M10.4699 9.6749H18.5546C18.9937 9.6749 19.3497 9.31893 19.3497 8.87982V2.73701C19.3497 2.52661 19.2663 2.32479 19.1178 2.17576L17.1824 0.233829C17.0333 0.0841382 16.8306 0 16.6193 0H10.4699C10.0308 0 9.6748 0.35597 9.6748 0.795081V8.87982C9.6748 9.31893 10.0308 9.6749 10.4699 9.6749Z"
                              fill="#46B2C8"
                            ></path>
                          </svg>
                        </span>
                      </header>
                      <div>
                        <h4>Individual</h4>
                        <p class="text-sm mt-3 leading-loose">
                          Find out how Youverify helps you take charge of your
                          identity
                        </p>
                      </div>
                    </section></a
                  ><a href="/solution/businesses"
                    ><section class="flex text-left">
                      <header class="w-14 mr-5">
                        <span
                          ><svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5123 14.5122C7.14659 14.5122 1.0625 19.9997 0.125233 27.1095C-0.0133207 28.1605 0.859398 29.0246 1.91952 29.0246H27.1052C28.1653 29.0246 29.038 28.1605 28.8995 27.1095C27.9622 19.9997 21.8781 14.5122 14.5123 14.5122Z"
                              fill="#46B2C8"
                            ></path>
                            <path
                              d="M9.25248 12.4392H19.7721C20.3022 12.4392 20.7319 12.0095 20.7319 11.4794V3.49319C20.7319 3.23921 20.6312 2.99559 20.4519 2.81569L17.9271 0.28226C17.747 0.101565 17.5024 0 17.2473 0H9.25248C8.72242 0 8.29272 0.429699 8.29272 0.95976V11.4794C8.29272 12.0095 8.72242 12.4392 9.25248 12.4392Z"
                              fill="#115766"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5123 1.7832C14.7126 1.7832 14.8751 1.94564 14.8751 2.14601V3.02712H17.0001C17.2005 3.02712 17.3629 3.18956 17.3629 3.38993C17.3629 3.59031 17.2005 3.75274 17.0001 3.75274H14.8751V5.9296H15.5489C16.5507 5.9296 17.3629 6.74178 17.3629 7.74365C17.3629 8.74552 16.5507 9.5577 15.5489 9.5577H14.8751V10.4388C14.8751 10.6392 14.7126 10.8016 14.5123 10.8016C14.3119 10.8016 14.1495 10.6392 14.1495 10.4388V9.5577H12.0244C11.8241 9.5577 11.6616 9.39526 11.6616 9.19489C11.6616 8.99452 11.8241 8.83208 12.0244 8.83208H14.1495V6.65522H13.4757C12.4738 6.65522 11.6616 5.84304 11.6616 4.84117C11.6616 3.8393 12.4738 3.02712 13.4757 3.02712H14.1495V2.14601C14.1495 1.94564 14.3119 1.7832 14.5123 1.7832ZM14.1495 3.75274H13.4757C12.8745 3.75274 12.3872 4.24005 12.3872 4.84117C12.3872 5.4423 12.8745 5.9296 13.4757 5.9296H14.1495V3.75274ZM14.8751 6.65522V8.83208H15.5489C16.15 8.83208 16.6373 8.34478 16.6373 7.74365C16.6373 7.14253 16.15 6.65522 15.5489 6.65522H14.8751Z"
                              fill="#C2E2E9"
                            ></path>
                          </svg>
                        </span>
                      </header>
                      <div>
                        <h4>Business</h4>
                        <p class="text-sm mt-3 leading-loose">
                          Check out our verification tools for businesses like
                          yours
                        </p>
                      </div>
                    </section></a
                  ><a href="/solution/government"
                    ><section class="flex text-left">
                      <header class="w-14 mr-5">
                        <span
                          ><svg
                            width="28"
                            height="30"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.513 0L27.0261 9.72038H0L13.513 0Z"
                              fill="#46B2C8"
                            ></path>
                            <rect
                              x="3.86084"
                              y="11.6509"
                              width="3.86086"
                              height="12.605"
                              fill="#115766"
                            ></rect>
                            <path
                              d="M19.3044 24.2558H23.1653V14.6593C23.1653 14.0756 22.9461 13.5132 22.5512 13.0834L21.927 12.4041C21.4859 11.9241 20.8639 11.6509 20.2119 11.6509H19.3044V24.2558Z"
                              fill="#115766"
                            ></path>
                            <rect
                              x="11.5825"
                              y="11.6509"
                              width="3.86086"
                              height="12.605"
                              fill="#115766"
                            ></rect>
                            <path
                              d="M0 24.2559H27.0261V25.8455V29.0248H0V24.2559Z"
                              fill="#115766"
                            ></path>
                          </svg>
                        </span>
                      </header>
                      <div>
                        <h4>Government</h4>
                        <p class="text-sm mt-3 leading-loose">
                          Discover how governments use our tools to optimize
                          social programs
                        </p>
                      </div>
                    </section></a
                  ><a href="/agent"
                    ><section class="flex text-left">
                      <header class="w-14 mr-5">
                        <span
                          ><svg
                            width="28"
                            height="30"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.8213 15.2031C6.7567 15.2031 0.930068 20.5034 0.101081 27.3443C-0.0107517 28.2672 0.753598 29.0244 1.68321 29.0244H25.9594C26.889 29.0244 27.6533 28.2672 27.5415 27.3443C26.7125 20.5034 20.8859 15.2031 13.8213 15.2031Z"
                              fill="#115766"
                            ></path>
                            <path
                              d="M7.75225 12.4388H15.2832C15.748 12.4388 16.1248 12.062 16.1248 11.5972V5.86615C16.1248 5.64344 16.0366 5.42981 15.8793 5.27206L14.0855 3.47212C13.9276 3.31367 13.7131 3.22461 13.4894 3.22461H7.75225C7.28744 3.22461 6.91064 3.60141 6.91064 4.06621V11.5972C6.91064 12.062 7.28744 12.4388 7.75225 12.4388Z"
                              fill="#46B2C8"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.5178 2.09757H14.0575C14.2812 2.09757 14.4957 2.18663 14.6536 2.34508L17.0069 4.70636C17.1641 4.8641 17.2523 5.07774 17.2523 5.30045V9.21419H19.8904C20.3552 9.21419 20.732 8.83739 20.732 8.37259V2.64155C20.732 2.41883 20.6437 2.2052 20.4865 2.04745L18.6927 0.247511C18.5348 0.0890614 18.3203 0 18.0966 0H12.3594C11.8946 0 11.5178 0.376798 11.5178 0.841603V2.09757Z"
                              fill="#C2E2E9"
                            ></path>
                          </svg>
                        </span>
                      </header>
                      <div>
                        <h4>Agents</h4>
                        <p class="text-sm mt-3 leading-loose">
                          Learn how we enrol, pay &amp; equip you as a part of
                          our mission
                        </p>
                      </div>
                    </section></a
                  >
                </div>
                <div class="w-3/12 text-right">
                  <div
                  >
                  
                    <img
                      width="171"
                      height="206"
                      src="~/assets/images/illustrations/lady-hugging-sim-smiling.png"
                      alt="Solutions"
                      style="object-fit: cover; opacity: 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </nav>
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
        z-40
        w-full
        lg:hidden
        block
        top-0
        overflow-scroll
        duration-700
        fixed
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
            v-show="showmobileMenu"
            class="
              react-reveal
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
                  <div v-for="useCase in industries" :key="useCase.name">
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
                  ><a href="https://status.youverify.co/"
                    ><li class="px-6 w-full mb-4">
                      <p class="text-sm my-2 text-blue font-medium">
                        API Status
                      </p>
                      <p class="text-grey text-xs leading-loose">
                        Find out how to sell your products online in a secure
                        way
                      </p>
                    </li></a
                  >
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
                href="https://app.youverify.co/#/auth/login"
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
      subMenuShowDeveloper: false
    };
  },
  methods: {
    async getAllIndustries() {
      const allIndustries = await this.$store.dispatch(
        "industries/getIndustries"
      );
    },
    toggleMobileMenu() {
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
        this.subMenuShowDeveloper = !this.subMenuShowProduct;
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
