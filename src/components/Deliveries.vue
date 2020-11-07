<template>
  <div>
    <section class="deliveries">
      <div class="deliveries_inner">
        <v-container>
          <div class="delivery_cards">
            <div
              class="single_card"
              v-for="(delivery, i) in deliveries"
              :key="i"
            >
              <span class="d_icon" v-html="delivery.svg">
                {{ delivery.svg }}
              </span>
              <h3>{{ delivery.title }}</h3>
              <p v-html="delivery.detail">
                {{ delivery.detail }}
              </p>
              <span v-html="delivery.svg1" class="d_arraow">
                {{ delivery.svg1 }}
              </span>
            </div>
          </div>
        </v-container>
      </div>
    </section>
    <section class="deliveries">
      <div class="deliveries_inner">
        <v-container>
          <div class="delivery_cards">
            <div
              class="single_card"
              v-for="(delivery, i) in deliveries2"
              :key="i"
            >
              <span class="d_icon" v-html="delivery.svg">
                {{ delivery.svg }}
              </span>
              <h3>{{ delivery.title }}</h3>
              <p v-html="delivery.detail">
                {{ delivery.detail }}
              </p>
              <span v-html="delivery.svg1" class="d_arraow">
                {{ delivery.svg1 }}
              </span>
            </div>
          </div>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deliveries: [
        {
          svg: `  <svg
                  width="94"
                  height="90"
                  viewBox="0 0 94 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M73.616 19.571C70.578 19.305 68.331 16.627 68.597 13.59C68.863 10.552 71.541 8.306 74.578 8.572C77.615 8.838 79.863 11.515 79.597 14.552C79.331 17.59 76.653 19.837 73.616 19.571ZM89.317 30.497L86.225 11.477C84.839 5.324 79.097 1.159 72.819 1.752L53.778 4.715C50.192 5.054 46.925 6.918 44.811 9.834L11.442 55.834C9.888 57.976 10.365 60.971 12.506 62.524L47.175 87.675C49.317 89.228 52.312 88.751 53.866 86.61L87.235 40.61C89.35 37.695 90.109 34.01 89.317 30.497Z"
                      fill="#F27F0B"
                    />
                    <path
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M68.813 11.538C69.13 14.56 67.057 17.254 64.183 17.556C61.308 17.859 58.721 15.654 58.403 12.632C58.085 9.61 60.158 6.915 63.033 6.613C65.907 6.311 68.495 8.516 68.813 11.538ZM73.141 52.984L79.746 37.943C79.712 37.554 79.678 37.166 79.616 36.779L77.471 16.991C76.265 9.748 70.164 4.549 63.267 4.809C63.239 4.81 44.349 6.728 44.349 6.728C43.518 6.762 42.704 6.892 41.906 7.079C39.12 8.239 36.849 10.474 35.582 13.358L18.76 58.611C17.714 60.995 18.714 63.838 20.994 64.963L47.258 87.639L73.141 52.984Z"
                      fill="#1C1F34"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M73.616 19.571C70.578 19.305 68.331 16.627 68.597 13.59C68.863 10.552 71.541 8.306 74.578 8.572C77.615 8.838 79.863 11.515 79.597 14.552C79.331 17.59 76.653 19.837 73.616 19.571ZM89.317 30.497L86.225 11.477C84.839 5.324 79.097 1.159 72.819 1.752L53.778 4.715C50.192 5.054 46.925 6.918 44.811 9.834L11.442 55.834C9.888 57.976 10.365 60.971 12.506 62.524L47.175 87.675C49.317 89.228 52.312 88.751 53.866 86.61L87.235 40.61C89.35 37.695 90.109 34.01 89.317 30.497Z"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M78.293 18.011C80.449 15.855 80.449 12.36 78.293 10.204C76.137 8.048 72.642 8.048 70.486 10.204C68.33 12.36 68.33 15.855 70.486 18.011C72.642 20.167 76.137 20.167 78.293 18.011Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M78.293 18.011C80.449 15.855 80.449 12.36 78.293 10.204C76.137 8.048 72.642 8.048 70.486 10.204C68.33 12.36 68.33 15.855 70.486 18.011C72.642 20.167 76.137 20.167 78.293 18.011Z"
                      stroke="#3A427C"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M78.293 18.011C76.137 20.167 72.642 20.167 70.486 18.011C68.33 15.855 68.33 12.36 70.486 10.204C72.642 8.048 76.137 8.048 78.293 10.204C80.449 12.36 80.449 15.855 78.293 18.011ZM86.97 33.771L86.903 13.757C86.486 7.22 81.277 2.01 74.74 1.593L54.726 1.526C50.993 1.288 47.337 2.668 44.692 5.313L2.95701 47.048C1.01401 48.991 1.01401 52.141 2.95701 54.084L34.413 85.539C36.356 87.482 39.506 87.482 41.449 85.539L83.184 43.804C85.829 41.159 87.208 37.504 86.97 33.771Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M78.293 18.011C76.137 20.167 72.642 20.167 70.486 18.011C68.33 15.855 68.33 12.36 70.486 10.204C72.642 8.048 76.137 8.048 78.293 10.204C80.449 12.36 80.449 15.855 78.293 18.011ZM86.97 33.771L86.903 13.757C86.486 7.22 81.277 2.01 74.74 1.593L54.726 1.526C50.993 1.288 47.337 2.668 44.692 5.313L2.95701 47.048C1.01401 48.991 1.01401 52.141 2.95701 54.084L34.413 85.539C36.356 87.482 39.506 87.482 41.449 85.539L83.184 43.804C85.829 41.159 87.208 37.504 86.97 33.771Z"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M51.581 8.587L79.91 36.916"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M42.102 72.03L38.923 68.851C34.23 72.416 29.269 71.376 26.477 69.119L29.269 64.545C31.319 66.237 34.289 66.713 37.022 63.979C38.953 62.049 39.161 60 37.853 58.692C36.845 57.683 35.329 57.653 33.518 58.812L30.191 60.951C26.269 63.445 22.259 63.416 19.408 60.564C16.259 57.416 16.379 52.664 19.052 48.98L15.873 45.801L18.903 42.772L22.171 46.04C26.21 43.247 30.072 44.138 32.477 45.712L29.864 50.405C28.645 49.544 26.15 48.593 23.714 51.029C21.813 52.929 21.873 55.069 23.091 56.287C24.012 57.208 25.438 57.327 27.131 56.227L30.458 54.148C35.032 51.237 38.954 51.772 41.626 54.445C44.36 57.178 44.924 61.664 41.924 65.793L45.132 69.001L42.102 72.03Z"
                      fill="#AB651E"
                    />
                    <path
                      d="M44.388 49.224L63.496 30.116"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M54.62 59.457L73.728 40.349"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M49.504 54.34L68.612 35.233"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.272 44.108L58.38 25"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.156 38.992L53.264 19.884"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.04 33.876L48.148 14.768"
                      stroke="#1C1F34"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="94" height="90" fill="white" />
                    </clipPath>
                  </defs>
                </svg>`,
          title: "Store Delivery",
          detail: "Delivered in as little as <br/> 30 minutes.",
          svg1: ` <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.031 20H26.111L20.439 25.743C20.136 26.017 20.437 26.478 20.721 26.771C20.869 26.923 21.068 27 21.268 27C21.452 27 21.637 26.935 21.781 26.803L29.766 19.53C29.826 19.47 29.836 19.436 29.857 19.407C29.899 19.344 29.926 19.318 29.94 19.287C29.964 19.224 29.967 19.179 29.975 19.135C29.983 19.093 29.999 19.053 30 19.01C29.999 18.946 29.983 18.906 29.975 18.864C29.966 18.819 29.964 18.775 29.947 18.733C29.926 18.681 29.899 18.656 29.881 18.626C29.836 18.562 29.826 18.529 29.8 18.502C29.77 18.476 21.782 11.197 21.782 11.197C21.481 10.923 21.007 10.936 20.722 11.229C20.438 11.521 20.137 11.982 20.439 12.257L26.111 18H7.031C6.617 18 6 18.598 6 19C6 19.401 6.617 20 7.031 20Z"
                      fill="#283060"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="16"
                        fill="white"
                        transform="translate(6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>`,
        },
        {
          svg: `<svg width="103" height="89" viewBox="0 0 103 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.582 42.29L51.294 9.558L90.498 42.29V86.921H12.582V42.29Z" fill="#AB651E"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M73.55 29.797L52.286 12.351C52.285 12.35 52.284 12.35 52.284 12.35C52.124 12.219 51.944 12.124 51.753 12.068C51.729 12.061 51.704 12.06 51.68 12.054C51.609 12.036 51.537 12.019 51.464 12.012C51.443 12.01 51.422 12.013 51.401 12.012C51.324 12.008 51.247 12.005 51.17 12.013C51.168 12.013 51.165 12.014 51.163 12.014C50.953 12.036 50.747 12.105 50.557 12.216C50.488 12.256 50.42 12.297 50.357 12.348C50.356 12.349 50.355 12.35 50.353 12.351L13.832 42.323C13.862 43.619 13.878 44.917 13.884 46.22L51.319 15.498L71.178 31.791C71.712 30.871 72.549 30.127 73.55 29.797Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.879 52.9L64.686 27.391L95.884 52.9V87.683H33.879V52.9Z" fill="#E8EBF7"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M65.757 31.231C65.755 31.231 65.755 31.23 65.754 31.23C65.611 31.111 65.448 31.026 65.275 30.975C65.252 30.968 65.231 30.967 65.209 30.962C65.144 30.946 65.079 30.931 65.013 30.924C64.993 30.923 64.975 30.925 64.956 30.924C64.886 30.921 64.816 30.918 64.748 30.925C64.745 30.925 64.743 30.926 64.74 30.926C64.55 30.946 64.364 31.008 64.191 31.109C64.13 31.145 64.067 31.182 64.011 31.229C64.01 31.23 64.008 31.23 64.007 31.231L33.843 55.979C33.871 57.152 33.886 58.327 33.892 59.506L64.882 34.08L96.275 59.837C96.284 58.66 96.3 57.483 96.32 56.306L65.757 31.231Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.395 87.421H85.818V69.252H71.395V87.421Z" fill="#AB651E"/>
<path d="M5.278 87.5H101.247" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 43.5V87.5H93.5" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.5 53.5V87.5H96.505V53.5" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.274 48.52V56.756L64.882 28.54L30.49 56.756V48.52L64.882 20.303" fill="#3A427C"/>
<path d="M99.274 48.52V56.756L64.882 28.54L30.49 56.756V48.52L64.882 20.303" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.769 13.459V10.32H25.689V21.729" fill="#AEB8E0"/>
<path d="M35.5 13.526V10.5H25.5V21.5" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 87.5H85.5V69.5H71.5V87.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 65.41L78.5 60.5L85.5 65.41V68.5H71.5V65.41Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M61.892 76.367V77.246H43.108V76.747C42.102 77.152 40.977 77.232 40 76.849V78.622C40 79.384 40.696 80 41.554 80H63.446C64.304 80 65 79.384 65 78.622V76C64.068 76.432 62.943 76.554 61.892 76.367Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 75H62V56H41V75Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5 76.5H63.5V56.5H41.5V76.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.5 56.985V75.997" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.68 66.5H63.178" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.36 44.184L5.401 49.143" stroke="#3A427C" stroke-width="1.462" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.274 48.52L51.22 9.412L8.83701 44.184V36.273L51.22 1.5L79.295 24.535V32.261" fill="#3A427C"/>
<path d="M99.274 48.52L51.22 9.412L8.83701 44.184V36.273L51.22 1.5L79.295 24.535V32.261" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.516 7.143C6.432 7.143 1.5 62.694 1.5 68.778C1.5 74.862 6.432 79.794 12.516 79.794C18.6 79.794 23.532 74.862 23.532 68.778C23.532 62.694 18.6 7.143 12.516 7.143Z" fill="#E8EBF7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.532 68.778C23.532 62.694 18.6 7.143 12.516 7.143C6.432 7.143 1.5 62.694 1.5 68.778C1.5 74.862 6.432 79.794 12.516 79.794C18.6 79.794 23.532 74.862 23.532 68.778Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 79.794V33.322" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.516 67.427L6.64301 62.554" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
          title: "Store Delivery",
          detail: "Delivered in as little as <br/> 30 minutes.",
          svg1: ` <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.031 20H26.111L20.439 25.743C20.136 26.017 20.437 26.478 20.721 26.771C20.869 26.923 21.068 27 21.268 27C21.452 27 21.637 26.935 21.781 26.803L29.766 19.53C29.826 19.47 29.836 19.436 29.857 19.407C29.899 19.344 29.926 19.318 29.94 19.287C29.964 19.224 29.967 19.179 29.975 19.135C29.983 19.093 29.999 19.053 30 19.01C29.999 18.946 29.983 18.906 29.975 18.864C29.966 18.819 29.964 18.775 29.947 18.733C29.926 18.681 29.899 18.656 29.881 18.626C29.836 18.562 29.826 18.529 29.8 18.502C29.77 18.476 21.782 11.197 21.782 11.197C21.481 10.923 21.007 10.936 20.722 11.229C20.438 11.521 20.137 11.982 20.439 12.257L26.111 18H7.031C6.617 18 6 18.598 6 19C6 19.401 6.617 20 7.031 20Z"
                      fill="#283060"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="16"
                        fill="white"
                        transform="translate(6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>`,
        },
        {
          svg: `<svg width="118" height="86" viewBox="0 0 118 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.609 52.102L19.84 18.791L11.642 16.245C11.642 16.245 7.451 20.36 3.506 32.151C-0.439 43.943 1.528 48.821 1.528 48.821L9.609 52.102Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.943 20.769L10.67 50.834L18.49 53.566L23.688 59.792C23.688 59.792 22.4 61.96 22.512 62.989C22.624 64.018 24.366 66.518 24.366 66.518L28.309 67.193L30.994 71.504L36.412 72.18L38.307 77.074L42.921 77.764L45.627 81.466L49.43 82.156L52.524 78.619L59.006 83.616C59.006 83.616 63.879 86.14 67.335 80.5C67.335 80.5 76.685 82.963 76.712 75.525C76.712 75.525 81.166 78.573 84.617 75.525C88.068 72.477 87.102 70.05 87.102 70.05C87.102 70.05 91.485 71.713 93.458 68.342C95.432 64.971 92.316 61.136 92.316 61.136L99.649 53.566L107.429 50.347L98.428 21.523L87.785 24.046C87.785 24.046 79.981 25.077 74.112 22.934C68.243 20.79 59.05 22.934 59.05 22.934C59.05 22.934 52.5 19.86 43.732 20.113C34.965 20.365 29.878 23.644 24.91 22.206L19.943 20.769Z" fill="#E7EBF6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.005 61.137C23.005 61.137 21.205 64.712 24.366 66.519C27.527 68.326 29.238 67.194 29.238 67.194C29.238 67.194 28.706 69.889 30.994 71.505C33.282 73.122 36.952 71.505 36.952 71.505C36.952 71.505 36.218 75.992 38.307 77.075C40.396 78.158 43.354 77.075 43.354 77.075C43.354 77.075 43.184 79.74 45.627 81.467C48.07 83.193 51.267 80.795 51.267 80.795L56.749 72.181C56.749 72.181 57.262 69.205 54.784 67.446C52.306 65.688 49.429 67.194 49.429 67.194C49.429 67.194 49.429 64.649 47.43 63.21C45.432 61.771 41.275 63.45 41.275 63.45C41.275 63.45 41.116 60.558 38.718 59.206C36.319 57.854 34.637 59.206 34.637 59.206C34.637 59.206 34.721 55.696 32.003 54.257C29.285 52.819 26.408 56.096 26.408 56.096L23.005 61.137Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M98.428 21.523C98.428 21.523 87.521 26.033 80.198 24.987C72.876 23.941 67.714 19.442 59.05 22.934C50.385 26.425 48.816 28.125 47.247 31.132C45.678 34.14 42.539 39.893 42.539 39.893C42.539 39.893 40.294 42.937 42.921 45.338C45.547 47.739 51.725 46.101 53.932 43.39C56.138 40.678 57.446 37.278 57.446 37.278L65.03 36.755C65.03 36.755 68.822 42.378 72.483 46.039C76.145 49.7 92.316 61.137 92.316 61.137L99.649 53.567L107.132 51.361L98.428 21.523Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M108.193 52.834L116.262 49.901C116.262 49.901 117.328 45.333 114.098 32.212C110.867 19.09 106.16 16.977 106.16 16.977L98.428 19.378L108.193 52.834Z" fill="#AB651E"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M66.368 38.877C66.194 38.471 66.082 38.051 66.002 37.628C65.83 37.48 65.73 37.383 65.725 37.377C65.395 37.044 64.94 36.892 64.494 36.969L56.785 38.272C56.165 38.376 55.676 38.899 55.569 39.564C55.519 39.872 54.276 47.106 47.617 47.806C46.346 47.938 44.115 47.962 43.454 46.608C43.227 46.143 43.18 45.511 43.269 44.804C42.183 44.262 41.31 43.231 41.063 41.717C40.205 43.851 39.937 46.181 40.862 48.076C41.542 49.467 43.073 51.018 46.519 51.018C46.949 51.018 47.41 50.993 47.902 50.943C54.313 50.27 57.296 44.807 58.22 41.22L64.288 40.195C65.068 40.861 66.623 42.044 68.825 43.052C67.864 41.857 67.043 40.455 66.368 38.877Z" fill="#3A427C"/>
<path d="M98.428 21.544L88.431 24.321C88.431 24.321 81.499 26.106 74.784 23.568C67.717 20.898 62.04 20.918 54.428 24.821C45.101 29.604 47.182 33.38 44.098 37.043C41.014 40.705 39.857 47.066 47.76 46.295C55.663 45.524 57.012 37.428 57.012 37.428L64.722 36.218C64.722 36.218 68.79 40.044 75.489 40.57" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M64.722 36.218C74.185 50.41 91.322 61.137 91.322 61.137C91.322 61.137 96.193 64.103 93.458 68.343C90.722 72.583 85.756 69.848 85.756 69.848C85.756 69.848 88.124 73.13 84.158 75.866C80.191 78.601 75.635 75.182 75.635 75.182C75.635 75.182 77.593 78.191 74.447 80.242C71.301 82.294 66.335 80.242 66.335 80.242C66.335 80.242 67.745 82.841 63.779 84.209C59.812 85.576 56.53 81.61 56.53 81.61L53.931 79.011" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.534 63.028C45.595 61.754 42.989 62.293 41.715 64.233L37.102 71.256C35.828 73.196 36.367 75.801 38.307 77.075C40.246 78.349 42.851 77.809 44.125 75.87L48.739 68.846C50.013 66.907 49.473 64.302 47.534 63.028Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M54.854 67.42C52.915 66.146 50.31 66.685 49.036 68.625L44.422 75.648C43.148 77.588 43.687 80.193 45.627 81.467C47.566 82.741 50.171 82.201 51.445 80.262L56.059 73.238C57.333 71.299 56.793 68.694 54.854 67.42Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.076 59.251C37.179 58.005 34.63 58.532 33.384 60.43L29.815 65.813C28.569 67.71 29.096 70.259 30.994 71.505C32.891 72.751 35.439 72.223 36.685 70.326L40.255 64.943C41.501 63.046 40.973 60.497 39.076 59.251Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.251 54.242C30.354 52.996 27.805 53.523 26.559 55.421L23.187 60.827C21.941 62.724 22.468 65.272 24.366 66.518C26.263 67.765 28.811 67.237 30.057 65.34L33.43 59.934C34.676 58.037 34.148 55.488 32.251 54.242Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.688 59.792C23.688 59.792 21.523 54.78 17.994 53.334C12.318 51.008 10.037 50.709 10.037 50.709" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60.161 22.509C60.161 22.509 48.231 18.719 39.557 20.671C30.884 22.623 32.313 24.55 19.943 20.768" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M91.322 61.137C91.322 61.137 96.278 59.346 100.304 52.514" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M85.756 69.847C85.756 69.847 76.367 63.738 65.021 52.026" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76.635 75.181C76.635 75.181 65.35 66.996 58.395 59.206" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.335 80.242C67.335 80.242 61.499 75.836 56.745 70.809" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M99.115 54.299L106.157 51.361" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M108.193 52.834L97.962 19.523L106.16 16.977C106.16 16.977 117.039 28.466 116.262 49.901L108.193 52.834Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.609 52.102L19.84 18.791L11.642 16.245C11.642 16.245 0.763 27.735 1.54 49.169L9.609 52.102Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.686 7.233L56.013 13.623" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62.04 14.529L67.335 1.5" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
          title: "Store Delivery",
          detail: "Delivered in as little as <br/> 30 minutes.",
          svg1: ` <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.031 20H26.111L20.439 25.743C20.136 26.017 20.437 26.478 20.721 26.771C20.869 26.923 21.068 27 21.268 27C21.452 27 21.637 26.935 21.781 26.803L29.766 19.53C29.826 19.47 29.836 19.436 29.857 19.407C29.899 19.344 29.926 19.318 29.94 19.287C29.964 19.224 29.967 19.179 29.975 19.135C29.983 19.093 29.999 19.053 30 19.01C29.999 18.946 29.983 18.906 29.975 18.864C29.966 18.819 29.964 18.775 29.947 18.733C29.926 18.681 29.899 18.656 29.881 18.626C29.836 18.562 29.826 18.529 29.8 18.502C29.77 18.476 21.782 11.197 21.782 11.197C21.481 10.923 21.007 10.936 20.722 11.229C20.438 11.521 20.137 11.982 20.439 12.257L26.111 18H7.031C6.617 18 6 18.598 6 19C6 19.401 6.617 20 7.031 20Z"
                      fill="#283060"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="16"
                        fill="white"
                        transform="translate(6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>`,
        },
      ],
      deliveries2: [
        {
          svg: `<svg width="102" height="85" viewBox="0 0 102 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 84.051H94.449V8.66699H8.5V84.051Z" fill="#E8EBF7"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M94.854 10.167C94.82 11.098 94.791 12.024 94.785 12.938C94.782 13.37 94.81 13.775 94.852 14.167H8.32401V10.167H94.854Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 83.5H93.5V8.5H8.5V83.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 83.5H100" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.675 84.051H80.275V32.906H22.675V84.051Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 83.5H79.5V28.5H22.5V83.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.675 58.776H80.275V24.906H22.675V58.776Z" fill="#894D0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.675 46.776H80.275V23.906H22.675V46.776Z" fill="#E7EBF6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 59.5H79.5V23.5H22.5V59.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.674 31.5H79.274" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.674 39.5H79.274" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.674 47.5H79.274" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 53.5H54H48Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 8.666H98.449V1.5H4.5V8.666Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.5H97.5V1.5H4.5V9.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
          title: "Store Delivery",
          detail: "Delivered in as little as <br/> 30 minutes.",
          svg1: ` <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.031 20H26.111L20.439 25.743C20.136 26.017 20.437 26.478 20.721 26.771C20.869 26.923 21.068 27 21.268 27C21.452 27 21.637 26.935 21.781 26.803L29.766 19.53C29.826 19.47 29.836 19.436 29.857 19.407C29.899 19.344 29.926 19.318 29.94 19.287C29.964 19.224 29.967 19.179 29.975 19.135C29.983 19.093 29.999 19.053 30 19.01C29.999 18.946 29.983 18.906 29.975 18.864C29.966 18.819 29.964 18.775 29.947 18.733C29.926 18.681 29.899 18.656 29.881 18.626C29.836 18.562 29.826 18.529 29.8 18.502C29.77 18.476 21.782 11.197 21.782 11.197C21.481 10.923 21.007 10.936 20.722 11.229C20.438 11.521 20.137 11.982 20.439 12.257L26.111 18H7.031C6.617 18 6 18.598 6 19C6 19.401 6.617 20 7.031 20Z"
                      fill="#283060"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="16"
                        fill="white"
                        transform="translate(6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>`,
        },
        {
          svg: `<svg width="100" height="86" viewBox="0 0 100 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 84H59V32H7V84Z" fill="#E7EBF6"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M59.256 45H7.744C6.781 45 6 44.105 6 43C6 41.895 6.781 41 7.744 41H59.256C60.219 41 61 41.895 61 43C61 44.105 60.219 45 59.256 45Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 84.5H59.5V41.5H7.5V84.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 41.5H60.5V33.5H5.5V41.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.301 52.967C39.301 52.967 47.669 43.441 49.719 34.451C51.769 25.461 48.851 24.109 43.955 23.187C39.058 22.266 36.086 21.624 36.989 18.451C37.892 15.278 43.955 12.353 43.955 12.353C43.955 12.353 40.486 8.792 45.724 5.975C50.961 3.157 54.255 2.146 58.677 2.005C63.1 1.863 64.064 4.825 61.297 7.546C58.53 10.266 55.423 19.727 63.298 24.947C71.172 30.167 86.118 36.515 90.367 43.387C94.616 50.259 96.794 53.159 96.974 65.102C97.153 77.045 94.499 84.775 81.379 84.775H58.677C58.677 84.775 43.438 83.974 43.438 71.296" fill="#AB651E"/>
<path d="M43.955 76.225C43.955 76.225 46.737 84.5 60.594 84.5H83.591C83.591 84.5 97.006 84.707 97.006 69.523C97.006 54.339 96.564 44.167 77.989 33.996C59.415 23.824 59.415 22.35 59.415 15.274C59.415 8.198 63.1 5.25001 63.1 5.25001C63.1 5.25001 61.184 0.827005 53.961 2.30101C46.737 3.77501 40.988 8.935 43.347 11.736C45.705 14.537 56.909 19.552 56.024 32.523" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.809 12.71C42.809 12.71 36.27 16.543 36.418 19.933C36.565 23.324 48.8 20.818 50.275 27.304C51.749 33.79 40.897 52.463 40.897 52.463" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50.275 27.304C50.275 27.304 51.386 22.196 61.297 21.58" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 84.5H98" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 83H72V51H24V83Z" fill="white"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M70.75 64H25.25C24.559 64 24 63.328 24 62.499C24 61.672 24.559 61 25.25 61H70.75C71.441 61 72 61.672 72 62.499C72 63.328 71.441 64 70.75 64Z" fill="#3A427C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 84.5H70.5V60.5H25.5V84.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 60.5H73.5V52.5H23.5V60.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M54.298 67.679C52.808 66.189 50.393 66.189 48.904 67.679L48.435 68.148L47.966 67.679C46.476 66.189 44.061 66.189 42.572 67.679C41.082 69.169 41.082 71.584 42.572 73.073L43.041 73.542L47.376 77.877C47.961 78.462 48.909 78.462 49.494 77.877L53.829 73.542L54.298 73.073C55.788 71.584 55.788 69.169 54.298 67.679Z" fill="#AB651E"/>
</svg>
`,
          title: "Store Delivery",
          detail: "Delivered in as little as <br/> 30 minutes.",
          svg1: ` <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.031 20H26.111L20.439 25.743C20.136 26.017 20.437 26.478 20.721 26.771C20.869 26.923 21.068 27 21.268 27C21.452 27 21.637 26.935 21.781 26.803L29.766 19.53C29.826 19.47 29.836 19.436 29.857 19.407C29.899 19.344 29.926 19.318 29.94 19.287C29.964 19.224 29.967 19.179 29.975 19.135C29.983 19.093 29.999 19.053 30 19.01C29.999 18.946 29.983 18.906 29.975 18.864C29.966 18.819 29.964 18.775 29.947 18.733C29.926 18.681 29.899 18.656 29.881 18.626C29.836 18.562 29.826 18.529 29.8 18.502C29.77 18.476 21.782 11.197 21.782 11.197C21.481 10.923 21.007 10.936 20.722 11.229C20.438 11.521 20.137 11.982 20.439 12.257L26.111 18H7.031C6.617 18 6 18.598 6 19C6 19.401 6.617 20 7.031 20Z"
                      fill="#283060"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="16"
                        fill="white"
                        transform="translate(6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>`,
        },
        {
          svg: `<svg width="100" height="91" viewBox="0 0 100 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.378 18H8.498C6.014 18 4 20.014 4 22.498V79.378C4 81.862 6.014 83.876 8.498 83.876H93.378C95.862 83.876 97.876 81.862 97.876 79.378V22.498C97.876 20.014 95.862 18 93.378 18Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.07 26.849C72.916 43.288 72.916 59.727 70.07 76.165C51.092 78.632 32.112 78.632 13.134 76.165C10.289 59.727 10.289 43.288 13.134 26.849C32.112 24.384 51.092 24.384 70.07 26.849Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.07 26.849C51.092 24.384 32.112 24.384 13.134 26.849C10.289 43.288 10.289 59.727 13.134 76.165C32.112 78.632 51.092 78.632 70.07 76.165C72.916 59.727 72.916 43.288 70.07 26.849Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.378 18H8.498C6.014 18 4 20.014 4 22.498V79.378C4 81.862 6.014 83.876 8.498 83.876H93.378C95.862 83.876 97.876 81.862 97.876 79.378V22.498C97.876 20.014 95.862 18 93.378 18Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.596 89.252H9L8 84H17.596L16.596 89.252Z" fill="#D6D7E0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.596 89.252H9L8 84H17.596L16.596 89.252Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 89.5H98" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.596 89.252H86L85 84H94.596L93.596 89.252Z" fill="#D6D7E0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.596 89.252H86L85 84H94.596L93.596 89.252Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M80 76.286H89.688V60H80V76.286Z" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.688 46.844C89.688 44.169 87.519 42 84.844 42C82.169 42 80 44.169 80 46.844C80 49.519 82.169 51.688 84.844 51.688C87.519 51.688 89.688 49.519 89.688 46.844Z" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.688 31.844C89.688 29.169 87.519 27 84.844 27C82.169 27 80 29.169 80 31.844C80 34.519 82.169 36.688 84.844 36.688C87.519 36.688 89.688 34.519 89.688 31.844Z" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.81 26V31.919L44 37.855L45.905 42.045V47.804L51.017 51.733L54.161 42.045L60.358 40.045" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71.714 45L63.246 46.904L58.801 51.748H51L54.567 59.243L62.4 62.214L60.341 68.953L63.458 76.095" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M55.821 59.495L60.055 51L51 51.546L55.821 59.495Z" fill="#1C1F34"/>
<path d="M27.959 76.143L26.959 70.805L25 70" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60.504 27L59 29.43" stroke="#1C1F34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 13.843L64.819 2" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M66.617 2.309C66.617 1.034 65.583 0 64.308 0C63.033 0 62 1.034 62 2.309C62 3.584 63.033 4.618 64.308 4.618C65.583 4.618 66.617 3.584 66.617 2.309Z" fill="#1C1F34"/>
<path d="M48.819 13.843L38 2" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 2.309C36 1.034 37.034 0 38.309 0C39.584 0 40.617 1.034 40.617 2.309C40.617 3.584 39.584 4.618 38.309 4.618C37.034 4.618 36 3.584 36 2.309Z" fill="#1C1F34"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.814 16.407C56.814 14.525 54.393 13 51.407 13C48.421 13 46 14.525 46 16.407" fill="white"/>
<path d="M56.814 17.407C56.814 14.973 54.393 13 51.407 13C48.421 13 46 14.973 46 17.407" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
          title: "Store Delivery",
          detail: "Delivered in as little as <br/> 30 minutes.",
          svg1: ` <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.031 20H26.111L20.439 25.743C20.136 26.017 20.437 26.478 20.721 26.771C20.869 26.923 21.068 27 21.268 27C21.452 27 21.637 26.935 21.781 26.803L29.766 19.53C29.826 19.47 29.836 19.436 29.857 19.407C29.899 19.344 29.926 19.318 29.94 19.287C29.964 19.224 29.967 19.179 29.975 19.135C29.983 19.093 29.999 19.053 30 19.01C29.999 18.946 29.983 18.906 29.975 18.864C29.966 18.819 29.964 18.775 29.947 18.733C29.926 18.681 29.899 18.656 29.881 18.626C29.836 18.562 29.826 18.529 29.8 18.502C29.77 18.476 21.782 11.197 21.782 11.197C21.481 10.923 21.007 10.936 20.722 11.229C20.438 11.521 20.137 11.982 20.439 12.257L26.111 18H7.031C6.617 18 6 18.598 6 19C6 19.401 6.617 20 7.031 20Z"
                      fill="#283060"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="16"
                        fill="white"
                        transform="translate(6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.deliveries {
  padding: 80px 0;
  padding-bottom: 0;
  font-family: "Nunito", sans-serif;
  .deliveries_inner {
    max-width: 1100px;
    margin: auto;
    // margin-right: 0;
    margin-top: 0;
    background-color: #f27f0b;
    .container {
      padding: 0 !important;
    }
    .delivery_cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    // background-color: red;
    .single_card {
      //   background-color: blue;

      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 300px;
      width: 100%;
      padding-bottom: 30px;
      p {
        margin: 0;
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;

        color: #ffffff;
      }
      .d_icon {
        transform: translateY(-50px);
      }
      .d_arraow {
        cursor: pointer;
      }
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        line-height: 29px;
        color: #ffffff;
      }
    }
  }
}
</style>