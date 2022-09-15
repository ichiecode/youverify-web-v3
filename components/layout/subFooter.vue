<template>
  <div class="">
    <div class="flex pb-16 sm:flex-nowrap flex-wrap">
      <section class="sm:w-4/12 w-full sm:mb-0 mb-12">
        <div class="">
          <p class="mb-8">
            <a href="/"
              ><LazyImage
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMTQyIDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTEyNC4yMDggNTAuNjQwMUwxMzkuMDUzIDQwLjc0MzZDMTQwLjg0NSAzOS41MjQ1IDE0MS45MjEgMzcuNTE2NSAxNDEuOTIxIDM1LjM2NTFWNi41MzYyNUMxNDEuOTIxIDIuOTUwNTcgMTM5LjA1MyAwLjA4MjAzMTIgMTM1LjQ2NyAwLjA4MjAzMTJINi40NTQyMkMyLjg2ODU0IDAuMDgyMDMxMiAwIDIuOTUwNTcgMCA2LjUzNjI1VjM1Ljg2NzFWMzguNzM1NlY0NS4xODk5QzAgNDguNzc1NSAyLjg2ODU0IDUxLjY0NDEgNi40NTQyMiA1MS42NDQxSDEyMC42MjJDMTIxLjkxMyA1MS43MTU4IDEyMy4yMDQgNTEuMzU3MiAxMjQuMjA4IDUwLjY0MDFaIiBmaWxsPSIjNDZCMkM4Ii8+CjxwYXRoIGQ9Ik0yNC4yMzkyIDEyLjk5MDdMMTkuMjkxIDI4Ljk4MjhWMzguODA3NkgxNi43ODFWMjguOTgyOEwxMi4xMTk2IDEyLjk5MDdIMTQuNzAxM0wxOC4wMDAxIDI0LjQ2NDlMMjEuNTg1OCAxMi45OTA3SDI0LjIzOTJaIiBmaWxsPSIjQzdFOEVGIi8+CjxwYXRoIGQ9Ik0zNy4zNjI4IDE2LjM2MDhWMzUuNDM2NkMzNy4zNjI4IDM3LjE1NzcgMzYuMDcyIDM4LjU5MiAzNC4zNTA4IDM4LjgwNzFDMzQuMjA3NCAzOC44MDcxIDM0LjEzNTcgMzguODA3MSAzMy45OTIzIDM4LjgwNzFIMjkuNTQ2QzI5LjQwMjYgMzguODA3MSAyOS4yNTkyIDM4LjgwNzEgMjkuMTg3NCAzOC44MDcxQzI3LjQ2NjMgMzguNTkyIDI2LjE3NTUgMzcuMTU3NyAyNi4xNzU1IDM1LjQzNjZWMTYuMzYwOEMyNi4xNzU1IDE0LjQ5NjIgMjcuNjgxNSAxMi45OTAyIDI5LjU0NiAxMi45OTAySDMzLjk5MjNDMzUuODU2OCAxMi45OTAyIDM3LjM2MjggMTQuNDk2MiAzNy4zNjI4IDE2LjM2MDhaTTM0Ljg1MjggMTYuMzYwOEMzNC44NTI4IDE1Ljg1ODggMzQuNDIyNSAxNS41MDAyIDMzLjk5MjMgMTUuNTAwMkgyOS41NDZDMjkuMDQ0IDE1LjUwMDIgMjguNjg1NSAxNS45MzA1IDI4LjY4NTUgMTYuMzYwOFYzNS40MzY2QzI4LjY4NTUgMzUuOTM4NiAyOS4xMTU3IDM2LjI5NzEgMjkuNTQ2IDM2LjI5NzFIMzMuOTkyM0MzNC40OTQzIDM2LjI5NzEgMzQuODUyOCAzNS44NjY5IDM0Ljg1MjggMzUuNDM2NlYxNi4zNjA4WiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNTEuMTMxOCAzNS43OTUxQzUxLjEzMTggMzcuMzAxMSA0OS45ODQ0IDM4LjU5MiA0OC40Nzg0IDM4LjgwNzFDNDguMzM0OSAzOC44MDcxIDQ4LjI2MzIgMzguODA3MSA0OC4xMTk4IDM4LjgwNzFINDIuODg0N0M0Mi43NDEzIDM4LjgwNzEgNDIuNjY5NiAzOC44MDcxIDQyLjUyNjEgMzguODA3MUM0MS4wMjAyIDM4LjU5MiAzOS44NzI3IDM3LjM3MjggMzkuODcyNyAzNS43OTUxVjEyLjk5MDJINDIuMzgyN1YzNS43OTUxQzQyLjM4MjcgMzYuMDgyIDQyLjU5NzkgMzYuMjk3MSA0Mi44ODQ3IDM2LjI5NzFINDguMTE5OEM0OC40MDY3IDM2LjI5NzEgNDguNjIxOCAzNi4wODIgNDguNjIxOCAzNS43OTUxVjEyLjk5MDJINTEuMTMxOFYzNS43OTUxWiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNjEuOTYwNSAzNi4yOTc2QzYxLjY3MzYgMzcuNzMxOSA2MC40NTQ1IDM4LjczNTkgNTkuMDIwMiAzOC43MzU5QzU3LjU4NiAzOC43MzU5IDU2LjM2NjggMzcuNzMxOSA1Ni4wOCAzNi4yOTc2VjM2LjIyNTlMNTMuMjgzMSAxMi45OTA3SDU1Ljc5MzFMNTguNTE4MiAzNS44Njc0QzU4LjU4OTkgMzYuMTU0MiA1OC44MDUxIDM2LjIyNTkgNTkuMDIwMiAzNi4yMjU5QzU5LjIzNTQgMzYuMjI1OSA1OS40NTA1IDM2LjE1NDIgNTkuNTIyMiAzNS44Njc0TDYyLjMxOTEgMTIuOTkwN0g2NC44MjlMNjEuOTYwNSAzNi4yOTc2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY5LjQ5MDQgMTUuNTAwMlYyNy41NDgxSDc0LjA4MDFWMzAuMDU4MUg2OS40OTA0VjM2LjI5NzFINzcuMDIwNFYzOC44MDcxSDY2Ljk4MDVWMTIuOTkwMkg3Ni45NDg3VjE1LjUwMDJINjkuNDkwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05MS45MzY4IDM4LjgwNzFIODguOTI0OEw4Mi45NzI2IDI5Ljg0MjlDODIuNjg1NyAyOS45MTQ2IDgyLjM5ODkgMjkuOTg2NCA4Mi4xMTIgMjkuOTg2NFYzOC44MDcxSDc5LjYwMjFWMTYuMzYwOEM3OS42MDIxIDE0LjQ5NjIgODEuMTA4IDEyLjk5MDIgODIuOTcyNiAxMi45OTAySDg3LjQxODhDODkuMjgzNCAxMi45OTAyIDkwLjc4OTQgMTQuNDk2MiA5MC43ODk0IDE2LjM2MDhWMjAuMDg5OUM5MC43ODk0IDIzLjk2MjQgODguNTY2MiAyNy4zMzI5IDg1LjMzOTEgMjguOTgyNEw5MS45MzY4IDM4LjgwNzFaTTgyLjExMiAyNy40NzY0Qzg1LjYyNiAyNi45MDI3IDg4LjM1MTEgMjMuODE5IDg4LjM1MTEgMjAuMDg5OVYxNi4zNjA4Qzg4LjM1MTEgMTUuODU4OCA4Ny45MjA4IDE1LjUwMDIgODcuNDkwNSAxNS41MDAySDgzLjA0NDNDODIuNTQyMyAxNS41MDAyIDgyLjE4MzcgMTUuOTMwNSA4Mi4xODM3IDE2LjM2MDhMODIuMTEyIDI3LjQ3NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTQuNDQ2OCAxMi45OTAySDk2Ljk1NjhWMzguODA3MUg5NC40NDY4VjEyLjk5MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAyLjQwNyAxNS41MDAyVjI3LjU0ODFIMTA2Ljk5N1YzMC4wNTgxSDEwMi40MDdWMzguODA3MUg5OS44OTcxVjEyLjk5MDJIMTA5Ljg2NVYxNS41MDAySDEwMi40MDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjM0NyAxMi45OTAyTDExOC4zOTkgMjguOTgyNFYzOC44MDcxSDExNS44ODlWMjguOTgyNEwxMTEuMjI4IDEyLjk5MDJIMTEzLjgwOUwxMTcuMTA4IDI0LjQ2NDRMMTIwLjY5NCAxMi45OTAySDEyMy4zNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0MS45OTMiIGhlaWdodD0iNTEuNjMzOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wODIwMzEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                alt="Youverify"
                class="sm:w-32 w-24"
            /></a>
          </p>
          <p>
            Simplifying trust—of Africans by businesses, and African businesses
            by people, through seamless and secure identity data access and
            verification.
          </p>
          <div class="flex sm:text-sm text-xs mt-8 relative">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="
                flex-shrink-0 flex-grow-0
                absolute
                sm:-left-6
                -left-5
                top-2
              "
            >
              <path
                d="M5.39802 9.63933L1.85075 13.9963L5.74504 16.7724L8.82963 12.0684L11.8757 16.811L15.7699 14.0349L12.2612 9.63933L17.6978 8.21271L16.1941 3.62439L10.9503 5.62937L11.2202 0H6.43907L6.70897 5.62937L1.50374 3.58583L0 8.17415L5.39802 9.63933Z"
                fill="#46B2C8"
              ></path>
              <path
                d="M9.47646 6.76968L9.60913 2.13672H8.08862L8.22128 6.76968H9.47646ZM8.84377 9.35149C9.41524 9.35149 9.81322 8.9535 9.81322 8.39224C9.81322 7.82077 9.41524 7.41258 8.84377 7.41258C8.28251 7.41258 7.88452 7.82077 7.88452 8.39224C7.88452 8.9535 8.28251 9.35149 8.84377 9.35149Z"
                fill="#EFF8F9"
              ></path>
            </svg>
            <p class="leading-loose">
              Youverify has been certified by PECB MS to ISO 27001 and ISO 27018
              under certificate No. C948-ISMS326-09-20 and C949-ITPII8-09-20
              respectively. Youverify is NITDA NDPR of 2019 compliant.
            </p>
          </div>
        </div>
      </section>
      <section class="sm:w-1/12"></section>
      <!-- <section class="sm:w-2/12 w-6/12">
        <h4 class="py-3 mb-4">Solutions</h4>
        <ul class="">
          <a class="mb-2 block w-full" href="/solution/individuals"
            ><li>Individual</li></a
          ><a class="mb-2 block w-full" href="/solution/businesses"
            ><li>Business</li></a
          ><a class="mb-2 block w-full" href="/solution/government"
            ><li>Government</li></a
          ><a class="mb-2 block w-full" href="/agent"><li>Agents</li></a>
        </ul>
      </section> -->
      <section class="sm:w-3/12 w-6/12">
        <h4 class="py-3 mb-4">Company</h4>
        <ul class="">
          <a aria-current="page" class="mb-2 block w-full" href="/about-us"
            ><li>About us</li></a
          ><a class="mb-2 block w-full" href="/blogs"><li>Blog</li></a
          ><a class="mb-2 block w-full" href="/about-us#careers"
            ><li>Careers</li></a
          ><a class="mb-2 block w-full" href="/gdpr"
            ><li>GDPR Compliance Statement</li></a
          ><a
            href="https://doc.youverify.co/"
            target="_blank"
            rel="noreferrer"
            class="mb-2 block w-full"
            ><li>API Documentation</li></a
          ><a aria-current="page" class="mb-2 block w-full" href="/about-us"
            ><li>Support</li></a
          >
          <!-- <a
            href="https://status.youverify.co/"
            target="_blank"
            rel="noreferrer"
            class="mb-2 block w-full"
            ><li>API Status</li></a
          > -->
        </ul>
      </section>
      <section class="sm:w-0/12"></section>
      <section class="sm:w-2/12 w-8/12 sm:mt-0 mt-8">
        <h4 class="py-3 mb-4">Contact us</h4>
        <div>
          <p class="text-blue font-bold">USA</p>
          <p>201 Spear Street Suite 1100, San Francisco, CA,</p>
          <p>94105 +1 (415) 669-5559</p>
        </div>
        <div class="mt-6">
          <p class="text-blue font-bold">Nigeria</p>
          <p>1st Floor, Sum House,</p>
          <p>350 Borno Way, Yaba,</p>
          <p>101212 Lagos</p>
          <p>+234 (814) 797 3350</p>
          <p class="sm:text-sm text-xs mt-8">
            **(Trading as Youcheck Online Services Limited in Nigeria)
          </p>
        </div>
      </section>
    </div>
    <hr class="border-grey sm:mb-0 mb-8">
  </div>
</template>

<script>
export default {};
</script>

<style></style>
